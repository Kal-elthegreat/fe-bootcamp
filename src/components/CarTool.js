import "./Layout.css"
export const CarTool = () => {
    const cars = [
        { id: 12, make: 'Tesla', model: 'Y', year: 2022, color: 'Grey', price: `$${62000}` },
        { id: 204, make: 'Ford', model: 'Mustang', year: 2012, color: 'Red', price: `$${12000}` },
    ]
    return (
        <>
            <header>
                <h2> CarTool</h2>
            </header>
            <table>
                <thead>
                    <tr>
                        <td colSpan={6}>Cars Available</td>
                    </tr>
                    <tr>
                        <td>Id</td>
                        <td>Make</td>
                        <td>Model</td>
                        <td>Year</td>
                        <td>Color</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        cars.map(car => {
                        return <tr key={car.id}>
                            <td>{car.id}</td>
                            <td>{car.make}</td>
                            <td>{car.model}</td>
                            <td>{car.year}</td>
                            <td>{car.color}</td>
                            <td>{car.price}</td>
                        </tr>
                        })
                    }
                </tbody>          
            </table>
        </>
    )
}