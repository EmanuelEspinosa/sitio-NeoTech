import { SliderContainer } from "../../layout/Slider/SliderContainer/SliderContainer";

export const Home = () => {
    const slides = [
        (
            <div className="slider_content-item1">
                <p>Hola</p>
                {/* ...tu HTML del item 1... */}
            </div>
        ),
        (
            <div className="slider_content-item2">
                <p>Emanuel</p>
                {/* ...tu HTML del item 2... */}
            </div>
        ),
        (
            <div className="slider_content-item3">
                <p>Roberto</p>
                {/* ...tu HTML del item 3... */}
            </div>
        ),
    ];

    return (
        <>
            <SliderContainer slides={slides} />
            <h3>Holissss</h3>
        </>

    )
}