import React, { useState } from "react";
import useStyles from "./sbar1.style";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export function SearchBarType({placeholder, data}) {
  const classes = useStyles();

  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState("")

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.label.toUpperCase().includes(searchWord.toUpperCase());
    });
    if(searchWord === "") {
      setFilteredData([]);
    } else 
    setFilteredData(newFilter);
  }

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("")
  };
  
  return (
  <div className={classes.search}>
    <div className={classes.searchInputs}>
      <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
      <div className={classes.searchIcon}>
      {filteredData.length === 0 ? <SearchRoundedIcon /> : <CloseRoundedIcon onClick={clearInput}/>}
      </div>
    </div>
    { filteredData.length != 0 && (
    <div className={classes.dataResult}>
      {filteredData.map((value, key) => {
        return <a className={classes.dataItem} >
          <p>{value.label}</p>
        </a>
      })}
    </div>
    )}

  </div>
  )
}

export const VehicleType = [
  { "label": 'Coupe'},
  { "label": 'Sedan' },
  { "label": 'Convertible' },
  { "label": '4X4' },
  { "label": 'SUV' },
  { "label": "Off roader" },
  { "label": 'Double-door' },
  { "label": 'Sports' },
  { "label": 'Racing' },
  { "label": 'Limousine' },
  { "label": 'Minivan' },
  { "label": 'HyperCar' },
];
