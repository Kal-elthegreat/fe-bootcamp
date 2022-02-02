import { useState } from 'react';
import { ToolHeader } from "./ToolHeader";
import { ColorList } from "./ColorList";
import { ColorForm } from "./ColorForm";

export const ColorTool = (props) => {
    
    const [colors, setColors] = useState([...props.colors])

    //look at this convention
    const addColor = color => {
        setColors([...colors,
            {
            ...color,
            id: Math.max(...colors.map(c=>c.id),0) +1,
            }
        ])
    }

    return (
        <>
            <ToolHeader header="Color Tool" />
            <ColorList colors={colors} />
            <ColorForm buttonText="Add Color" onSubmitColor={addColor}/>
        </>
    )
}