import React, { useState } from "react";
import useStyles from "./sbar1.style";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export function SearchBarColour({placeholder, data}) {
  const classes = useStyles();

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord)
    const newFilter = data.filter((value) => {
      return value.colour.toUpperCase().includes(searchWord.toUpperCase());
    })
    if(searchWord === "") {
      setFilteredData([]);
    } else 
    setFilteredData(newFilter)
  }

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("")
  }

  return (
  <div className={classes.search}>
    <div className={classes.searchInputs}>
      <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
      <div className={classes.searchIcon}>
        {filteredData.length === 0 ? ( <SearchRoundedIcon /> 
        ) : ( 
        <CloseRoundedIcon onClick={clearInput}  /> )}
        
      </div>
    </div>
    { filteredData.length != 0 && (
    <div className={classes.dataResult}>
      {filteredData.map((value, key) => {
        return <a className={classes.dataItem} >
          <p>{value.colour}</p>
          </a>
      })}
    </div>
    )}

  </div>
  )
}

 export const CarColour=[
    { "colour": "Black" },
    { "colour": "White" },
    { "colour": "Blue" },
    { "colour": "Grey" },
    { "colour": "rgb(216, 0, 0)" },
    { "colour": "Brown" },
    { "colour": "Silver" },
    { "colour": "Yellow" },
    { "colour": "Green" },
  ];

  
