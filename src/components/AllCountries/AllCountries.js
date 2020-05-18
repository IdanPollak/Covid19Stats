import React, { useContext } from "react";
import Context from "../../store/Context";
import CountryCard from "../CountryCard/CountryCard";
import styled from 'styled-components'

const AllCountries = () => {
  const context = useContext(Context);

  return (
    <Container>
      {context.searchValue
        ? context.searchResult.map((item) => <CountryCard country={item} />)
        : context.countriesStats.map((item) => <CountryCard country={item} />)}
    </Container>
  );
};

export default AllCountries;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;`
