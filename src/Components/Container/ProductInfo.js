import { useResource } from "../CustomHooks/useResource";

export const ProductInfo = ({ productId }) => {
    const product = useResource(`/products/${productId}`)

    const {name, price, description, rating} = product || {};

    return(
        <>
        <h4> {name} - {price} </h4>
        <p>Description: {description}</p>
        <p>Avarage Rating: {rating}</p>
        </>
    )
}