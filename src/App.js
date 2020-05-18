import React from "react";
import styled from "styled-components";
import OriginStats from "./components/OriginStats/OriginStats";
import SearchBar from './components/SearchBar/SearchBar';
import AllCountries from './components/AllCountries/AllCountries' 
import Context from "./store/Context";
import { useContext } from "react";

const App = () => {
  const context = useContext(Context);

  return (
    <Container>
      <h1>Covid-19 Statistics</h1>
      <OriginStats />
      <SearchBar data={context.countriesStats}/>
      <AllCountries/>
    </Container>
  );
};

export default App;

const Container = styled.div`
  background-color: #222831;
  color: white;
  display: flex;
  flex-direction: column;

  h1 {
    display: flex;
    justify-content: center;
    margin-left: -26px;
    margin-top: 1em;
  }
`;
