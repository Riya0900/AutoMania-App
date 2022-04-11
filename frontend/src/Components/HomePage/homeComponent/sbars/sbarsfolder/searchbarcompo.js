import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import * as React from 'react';
import { useState } from 'react';
// import './App.css'
import useStyles from './sbar1.style';

export function SearchBarBrand({placeHolder, data}) {
      const classes = useStyles();

      const [filteredData, setFilteredData] = useState([]);
      const [wordEntered, setWordEntered] = useState("");

      
      const handleFilter = (event) => {
        const searchWord = event.target.value
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
          // console.log("filtered",value.title);
          return value.title.toUpperCase().includes(searchWord.toUpperCase());

        });

        if(searchWord === "") {
          setFilteredData([])
        } else {
          setFilteredData(newFilter);
        }
        
      }
      const clearInput = () => {
        setFilteredData([]);
        setWordEntered("")
      }
      // const wordOnBar = () => {
      //     setWordEntered(wordEntered.value.title)
      // }
    return (
     <div className={classes.search}>
         <div className={classes.searchInputs}>
             <input type="text" placeholder={placeHolder} value={wordEntered} onChange={handleFilter}/>         
         <div className={classes.searchIcon}>
           {filteredData.length === 0 ? ( <SearchRoundedIcon /> 
           ) : (
              <CloseRoundedIcon id="clearbtn" onClick={clearInput}/> ) }
           </div>
           </div>
         {filteredData.length != 0 && (
          <div className={classes.dataResult}>
             {filteredData.map((value, key) => {
                 return <a className={classes.dataItem} href="/" >
                    <p>{value.title}</p>
                    </a>
             })}
          </div>
         )}
         
     </div>
     
    );
  }
  export const BrandData=[
    { "title": "Rolls Royce" },
    { "title": "Mercedes" },
    { "title": "BMW"},
    { "title": "Maruti suzuki" },
    { "title": "Hyundai" },
    { "title": "Kia" },
    { "title": "Ford"},
    {
      "title": "Mahindra"
    },
     { "title": "TATA"},
    { "title": "Toyota" }
]
  
 