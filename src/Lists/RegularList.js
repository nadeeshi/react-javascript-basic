export const RegularList = ({
    items,
    resourceName,
    itemComponent: Itemcomponent
}) => {
    return (
        <>
            {items.map((item, i) => (
                <Itemcomponent key={i} {...{ [resourceName]: item }}/>
            ))}
        </>
    )
}