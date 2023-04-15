export const LargeProductListItem = ({ product }) => {
    const { name, price, description, rating } = product;

    return (
        <>
            <h4> {name} - {price} </h4>
            <p>Description: {description}</p>
            <p>Avarage Rating: {rating}</p>
        </>
    
    )
}