import {useState} from "react";

function SelectFruit({selectedFruit, onChange}) {
    return (
        <div>
            <Select
                options={[
                    {name: 'apple', price: 500}
                ]}
                selected={selectedFruit}
                onChange={onChange}
            />
        </div>
    )
}