

export const EntryHistory = ({ history }) => {

    return (
        <ul>
            {history.map(entry => {
                return <li key={entry.id}>{entry.operation} {entry.value}</li>
            })}
        </ul>
    )

}