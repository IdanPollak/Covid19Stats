import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const CountryCard = ({ country }) => {
  const [flag, setFlag] = useState("");

  useEffect(() => {
    fetchCountryFlag();
  }, [country.country_name]);

  const fetchCountryFlag = async () => {
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/name/${country.country_name}`
    );

    setFlag(response.data[0].flag);
  };

  return (
    <Container>
      <div className="card">
        <h4>
          {country.country_name}
          <i></i>
          <img src={flag} />
        </h4>
        <div className="row">
          <p className="line">Active</p>
          <p className="data">{country.active_cases}</p>
        </div>
        <div className="row">
          <p className="line">Cases</p>
          <p className="data">{country.cases}</p>
        </div>
        <div className="row">
          <p className="line">Critical</p>
          <p className="data">{country.serious_critical}</p>
        </div>
        <div className="row">
          <p className="line">Deaths</p>
          <p className="data">{country.deaths}</p>
        </div>
        <div className="row">
          <p className="line">Recovered</p>
          <p className="data">{country.total_recovered}</p>
        </div>
        <div className="row">
          <p className="line">Today Cases</p>
          <p className="data">{country.new_cases}</p>
        </div>
        <div className="row">
          <p className="line">Today Deaths</p>
          <p className="data">{country.new_deaths}</p>
        </div>
        <div className="row">
          <p className="line">Total Cases Per 1M</p>
          <p className="data">{country.total_cases_per_1m_population}</p>
        </div>
      </div>
    </Container>
  );
};

export default CountryCard;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .card {
    width: 20em;
    height: 20em;
    background-color: #222831;
    padding: 1em 15em 15em 1em;
    margin: 1em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    line-height: 1em;
  }
  h4 {
    background-color: #393e46;
    width: 280px;
    height: 2em;
    margin-top: -14px;
    margin-left: -14px;
    line-height: 2em;
    padding-left: 1em;
  }
  .line {
    line-height: 15px;
  }
  .row {
    inline-size: max-content;
    display: flex;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
    flex-wrap: wrap;
  }
  .data {
    margin-left: 100px;
    line-height: 15px;
  }
  img {
    margin-left: 140px;
    margin-bottom: -4px;
    max-height: 1.2em;
    align-self: center;
    margin-left: 75px;
    right: 15px;
  }
`;
