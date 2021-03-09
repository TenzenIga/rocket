import React, { Dispatch, SetStateAction } from 'react'
import { Input } from './Input.styles';


type  props = {
    searchValue: string,
    setSearchValue:Dispatch<SetStateAction<string>>
}

export default function SearchInput(props:props) {
    const {searchValue, setSearchValue} = props;


    return (
        <Input type="text" value={searchValue} placeholder="Search" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSearchValue(e.target.value)}  />
    )
}
