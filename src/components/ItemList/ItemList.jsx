import { Item } from "../Item/Item"

export const ItemList = ({list}) => {
    return <>
    {
        list.length ? list.map((p) => (<Item key={p.id} {...p}></Item>))
        : <p>no hay productos</p>
    }
    </>
}