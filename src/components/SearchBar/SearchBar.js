import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../../store/Context";

const SearchBar = (arr) => {
  const context = useContext(Context);

  const onChangeHandler = (e) => {
    context.setSearchValue(e.target.value);
    context.search();
    e.target.value.length > 0
      ? context.setIsSearchMode(true)
      : context.setIsSearchMode(false);
  };

  const onSortByClick = (e) => {
    if (e.detail === 0) {   
      context.setIsSortMode(true);
      context.setSortBy(e.target.value);
      sortArr(e.target.value);
    }
  };

  const sortArr = (by) => {
    if(by === "sort"){
      return 0;
    }

    let sortedArr = arr.data;
    sortedArr.sort(function (a, b) {
      let first = a[by];
      let second = b[by];

      let commaIndex = first.indexOf(",");
      while (commaIndex !== -1) {
        first = first.replace(",", "");
        commaIndex = first.indexOf(",");
      }
      

      commaIndex = second.indexOf(",");
      while (commaIndex !== -1) {
        second = second.replace(",", "");
        commaIndex = second.indexOf(",");
      }
      
      if (parseInt(first) > parseInt(second)) return -1;
      else if (parseInt(first) < parseInt(second)) return 1;
      return 0;
    });
  };

  return (
    <Container>
      <div className="ui search">
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            style={{
              backgroundColor: "#222831",
              color: "white",
              border: "1px solid white",
            }}
            onChange={onChangeHandler}
            value={context.searchValue}
            placeholder="Search countries..."
          />
          <i className="search icon" style={{ color: "white" }}></i>
        </div>
      </div>

      <div className="custom-select">
        <select className="select" onClick={onSortByClick}>
          <option className="Sort By" value="sort">Sort By:</option>
          <option value="active_cases">Active</option>
          <option value="cases">Cases</option>
          <option value="serious_critical">Critical</option>
          <option value="deaths">Deaths</option>
          <option value="total_recovered">Recovered</option>
          <option value="new_cases">TodayCases</option>
          <option value="new_deaths">TodayDeaths</option>
        </select>
      </div>
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: -85px;
  .search {
    padding-right: 5em;
    margin-top: 1em;
  }
  .select {
    height: 2.5em;
    width: 10em;
    margin-top: 1em;
  }
`;
