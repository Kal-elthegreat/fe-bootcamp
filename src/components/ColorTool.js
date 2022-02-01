


export const ColorTool = () => {

    const colors = [{id: 1, name: 'red', hexcode: 'ff0000'},{id: 2, name: 'green', hexcode: '00ff00'},{id: 3, name: 'blue', hexcode: '0000ff'}];

    return (
        <>
            <header>
                <h2> ColorTool</h2>
            </header>
            <ul>
                {colors.map(c => <li key={c.id}>{c.name} {c.hexcode}</li>)}
                {/* <li>red</li>
                <li>green</li>
                <li>blue</li> */}
            </ul>
        </>
    )
}