import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const OriginStats = () => {
  const [stats, setStats] = useState([]);

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

    setStats(response.data.countries_stat);
    filterStat(response.data.countries_stat);
  };

  const filterStat = (arr) => {
    const israel = arr.filter(item => item.country_name === 'Israel');
    setStats(...israel);
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <h1>Israel's Statistics</h1>
      <table className="israel-stat">
        <tr>
          <td className="stat">Active: {stats.active_cases} </td>
          <td className="stat">Critical: {stats.serious_critical} </td>
        </tr>
        <tr>
          <td className="stat">Deaths: {stats.deaths}</td>
          <td className="stat">Recovered: {stats.total_recovered}</td>
        </tr>
      </table>
    </Container>
  );
};

export default OriginStats;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  h1 {
    background-color: #20293d;
    color: #da9021;
    width: 8em;
    height: 1.8em;
    text-align: center;
    line-height: 1.6em;
    font-size: 1.6em;
    align-self: center;
  }
  .israel-stat {
    align-self: center;
  }
  .stat {
    height: 2em;
    width: 120vh;
    background-color: #20293d;
    border: gray 2px solid;
    border-style: groove;
    text-align: center;
    color: #da9021;
    font-size: 1.5em;
  }
`;
