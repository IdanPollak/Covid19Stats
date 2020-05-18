import React, { useState, useEffect } from 'react'
import Context from "./Context";
import axios from 'axios'

const ContextProvider = (props) => {

    const [searchValue, setSearchValue] = useState('');
    const [countriesStats, setCountriesStats] = useState([]);
    const [searchMode, setIsSearchMode] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [isSortMode, setIsSortMode] = useState(false);
    const [sortBy, setSortBy] = useState("");

    const fetchData = async () => {

        const config = {
          headers: {
             "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
             "x-rapidapi-key":
                "95f38ad230msh4d3029f2fc876c7p185a74jsn6466d0af4891"
          }
       };
    
        const response = await axios.get(
          `https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php`,config
        );

        setCountriesStats(response.data.countries_stat);
      };

      useEffect(() => {
        fetchData();
      },[])

      const search = () => {
         const searchedData = countriesStats.filter(country =>
            country.country_name.toLowerCase().includes(searchValue.toLowerCase())
         );
         setSearchResult(searchedData);
      };
    return (
       <Context.Provider
         value={{
            searchValue,
            setSearchValue,
            countriesStats,
            setCountriesStats,
            searchResult,
            setSearchResult,
            searchMode,
            setIsSearchMode,
            isSortMode,
            setIsSortMode,
            sortBy,
            setSortBy,
            search
         }}
      >
         {props.children}
      </Context.Provider>
   );
}

export default ContextProvider
