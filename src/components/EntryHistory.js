

export const EntryHistory = ({ history,deleteHist }) => {

    return (
        <ul>
            {history.map(entry => {
                return <li key={entry.id}>{entry.operation} {entry.value}  <button type="button" onClick={() => deleteHist(entry.id)}>Delete</button></li>
            })}
        </ul>
    )

}