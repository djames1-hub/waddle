import React, { useState } from "react";
import "./Searchbar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function Searchbar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">

     {/* start of input */}
      <div className="searchInputs">

        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />

        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>

      </div>  {/* end of input */}


      {filteredData.length !== 0 && (

        <div className="dataResult">

          {filteredData.slice(0, 15).map((value, key) => {

            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}

         {/* end of data result */}
        </div>
      )}

    </div>

  );

}

export default Searchbar;