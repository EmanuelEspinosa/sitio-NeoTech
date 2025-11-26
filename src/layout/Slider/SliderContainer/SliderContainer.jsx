import { useEffect, useRef, useState } from "react";
import { SliderView } from "../SliderView/SliderView";

export const SliderContainer = ({ slides }) => {
    // Índice activo del slide
    const [active, setActive] = useState(0);

    // Refs para medir offsetLeft (fiel a tu JS)
    const itemRefs = useRef([]);

    // Estilo del carril (equivale a slider.style.left)
    const [trackStyle, setTrackStyle] = useState({ left: "0px" });

    // Ref para guardar el id del intervalo (autoplay)
    const intervalRef = useRef(null);

    // --- Autoplay: funciones de control ---
    // Inicia el autoplay
    const startAutoplay = () => {
        // Limpia cualquier intervalo previo antes de crear uno nuevo
        stopAutoplay();
        intervalRef.current = setInterval(() => {
            setActive(prev => (prev + 1) % slides.length);
        }, 7000);
    };

    // Detiene el autoplay
    const stopAutoplay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    // Reinicia el autoplay (útil al interactuar)
    const restartAutoplay = () => {
        startAutoplay();
    };

    // Inicia el autoplay al montar y lo limpia al desmontar
    useEffect(() => {
        startAutoplay();
        return () => stopAutoplay();
        // Solo depende de slides.length para reiniciar si cambia la cantidad de slides
    }, [slides.length]);

    // Recalcula la posición del carril cuando cambia el activo
    useEffect(() => {
        const currentItem = itemRefs.current[active];
        if (!currentItem) return;
        const checkLeft = currentItem.offsetLeft; // igual que en tu JS
        setTrackStyle({ left: `-${checkLeft}px` });
    }, [active]);

    // --- Callbacks de navegación (usuario) ---
    const onNext = () => {
        setActive(prev => (prev + 1 > slides.length - 1 ? 0 : prev + 1));
        restartAutoplay(); // evita doble avance (click + intervalo)
    };

    const onPrev = () => {
        setActive(prev => (prev - 1 < 0 ? slides.length - 1 : prev - 1));
        restartAutoplay();
    };

    const onDotClick = (index) => {
        setActive(index);
        restartAutoplay();
    };

    return (
        <SliderView
            slides={slides.map((slide, i) => (
                <div
                    // ref para medir offsetLeft de cada item (fiel a tu HTML/JS)
                    ref={el => (itemRefs.current[i] = el)}
                    className="item"
                    key={i}
                >
                    {slide}
                </div>
            ))}
            active={active}
            onPrev={onPrev}
            onNext={onNext}
            onDotClick={onDotClick}
            trackStyle={trackStyle}
        />
    );
};