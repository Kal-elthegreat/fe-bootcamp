import { ToolHeader } from "./ToolHeader";
import { ColorList } from "./ColorList";
import { ColorForm } from "./ColorForm";

import { useColorTool } from "../hooks/useColorTool";

export const ColorTool = () => {

    const [colors, add] = useColorTool()

    return (
        <>
            <ToolHeader header="Color Tool" />
            <ColorList colors={colors} />
            <ColorForm buttonText="Add Color" onSubmitColor={add} />
        </>
    )
}