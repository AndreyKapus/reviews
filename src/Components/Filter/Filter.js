import { useState } from "react";

const Filter = (reviews) => {
    const [seachInputValue, setSearchInputValue] = useState([]);

    const searchByCompanyName = (e) => {
        setSearchInputValue(e.target.value);
    }
    console.log(seachInputValue)
    
    return (
        <>
            <input type="text" onChange={searchByCompanyName}/>
        </>
    )
}

export default Filter;