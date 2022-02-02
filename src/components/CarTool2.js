import { useState } from "react"
const sortCars = (cars, carsSort) => {
    return [...cars].sort((a, b) => {
        if (a[carsSort.column] < b[carsSort.column]) {
            return 1
        } else if (a[carsSort.column] > b[carsSort.column]) {
            return -1
        } else {
            return 0
        }
    })
}

export const CarTool = (props) => { 

    const [carsSort, setCarsSort] = useState({
        column: 'id',
        direction:'asc'
    })
}
