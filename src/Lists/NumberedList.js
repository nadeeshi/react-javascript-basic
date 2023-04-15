export const NumberedList = ({
    items,
    resourceName,
    itemComponent: Itemcomponent
}) => {
    return (
        <>
            {items.map((item, i) => (
                <>
                <h3>{i + 1}</h3>
                <Itemcomponent key={i} {...{ [resourceName]: item }}/>
                </>
            ))}
        </>
    )
}