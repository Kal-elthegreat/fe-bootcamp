import { useState } from "react";
import { ToolHeader } from "./ToolHeader"
import { useCalcTool } from "../hooks/useCalcTool";
import { EntryHistory } from "./EntryHistory";

export const CalcTool = () => {

    const [numInput, setNumInput] = useState(0);
    const { add, subtract,multiply,divide, result,history} = useCalcTool();

    //result <- state data
    //add, subtract <- actions
    return (
        <>
            <ToolHeader header="Calc Tool" />
            <div>
                Result: {result}
            </div>
            <form>
                <label>
                    <input type="number" onChange={(e) => {setNumInput(parseFloat(e.target.value))}}/>
                </label>
                <fieldset>
                    <button type="button" onClick={() => add(numInput)}>+</button>
                    <button type="button" onClick={() => subtract(numInput)}>-</button>
                    <button type="button" onClick={() => multiply(numInput)}>*</button>
                    <button type="button" onClick={() => divide(numInput)}>/</button>
                </fieldset>
                <EntryHistory history={history}/>
            </form>
        </>
    )
}