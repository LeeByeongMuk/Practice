export default function Select({value, setSelected}) {
    return (
        <select value={value}
                onChange={setSelected}>

            { options.map(({id, value}) => (
                <option key={id}
                        value={value}>{value}</option>
            ))}
        </select>
    )
}

const options = [
    {
        id: 1,
        value: 1
    },
    {
        id: 2,
        value: 2
    },
    {
        id: 3,
        value: 3
    }
]