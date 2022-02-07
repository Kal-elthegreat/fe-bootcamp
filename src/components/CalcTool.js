import { useState } from "react";
import { ToolHeader } from "./ToolHeader"
import { useCalcTool } from "../hooks/useCalcTool";
import { EntryHistory } from "./EntryHistory";

export const CalcTool = () => {

    const [numInput, setNumInput] = useState(0);
    const { add, subtract, multiply, clearHist, deleteHist, result, history, error, safeDivide,} = useCalcTool();

    
    const clearAll = () => {
        clearHist();
        setNumInput(0);
    }
    //result <- state data
    //add, subtract <- actions
    return (
        <>
            <ToolHeader header="Calc Tool" />
            <div>
                Result: {result}
            </div>
             {error &&
                    <span>{error}</span>
                }
            <form>
                <label>
                    <input type="number" value={numInput} onChange={(e) => {setNumInput(parseFloat(e.target.value))}}/>
                </label>
                <fieldset>
                    <button type="button" onClick={() => add(numInput)}>+</button>
                    <button type="button" onClick={() => subtract(numInput)}>-</button>
                    <button type="button" onClick={() => multiply(numInput)}>*</button>
                    <button type="button" onClick={() => safeDivide(numInput)}>/</button>
                    <button type="button" onClick={clearAll}>Clear</button>
                </fieldset>
                <EntryHistory history={history} deleteHist={deleteHist}/>
            </form>
        </>
    )
}