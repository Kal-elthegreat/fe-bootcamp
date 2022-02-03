import { useList } from "../hooks/useList";
import { ToolHeader } from "./ToolHeader";
import { ColorList } from "./ColorList";
import { ColorForm } from "./ColorForm";

export const ColorTool = ({ colors: colorList }) => {

    const [colors, add] = useList([...colorList])

    return (
        <>
            <ToolHeader header="Color Tool" />
            <ColorList colors={colors} />
            <ColorForm buttonText="Add Color" onSubmitColor={add} />
        </>
    )
}