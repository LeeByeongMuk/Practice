import {useState} from "react";

function SelectFruit({selectedFruit, onChange}) {
    return (
        <div>
            <Select
                options={FRUITS}
                selected={selectedFruit}
                onChange={onChange}
            />
        </div>
    )
}

const FRUITS = [
    {name: 'apple', price: 500}
];