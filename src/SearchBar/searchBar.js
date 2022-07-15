import React from 'react';
import {  useState, useEffect } from 'react';
import "./searcherStyle.css"
import ClipLoader from "react-spinners/ClipLoader";
import TableData from "../Table/tableData"
import env from "react-dotenv";

function SearchBar() {
  const [airportDepartures, setInputAirportDepartures] = useState("");
  const [airportArrivals, setInputAirportArrivals] = useState("");
  const [airportInfoDep, setAirportInfoDep] = useState([]);
  const [airportInfoArr, setAirportInfoArr] = useState([]);
  const [airports, setAirports] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAirportsData = async () => {
      setLoading(true);
      fetch("https://airlabs.co/api/v9/airports?api_key=cdcf6cc2-1486-4897-a547-ab589e4d46e3")
        .then((response) => response.json())
        .then((data) => {
          const airports = data.response.map((airport) => ({
            name: airport.name,
            iata: airport.iata_code,
          }));
          setAirports(airports);

        }) .catch((err) => {
          console.log(err);
      })
      .finally(() => {
          setLoading(false);
      });
    };

    getAirportsData();

  }, []);

  if (loading) {
    return <ClipLoader  loading={loading} color={"#ff8200"} size={150} className="spin"/>;
  }
 
  const onAirportChange = async (e) => {
    const airportCode = e.target.value;

    
    setLoading(true);
    const urlDep = `https://airlabs.co/api/v9/schedules?dep_iata=${airportCode}&api_key=cdcf6cc2-1486-4897-a547-ab589e4d46e3`;
    await fetch(urlDep)
      .then((response) => response.json())
      .then((data) => {
        setInputAirportDepartures(airportCode);
        setAirportInfoDep(data.response);
        
      });
      


 
    const urlArr = `https://airlabs.co/api/v9/schedules?arr_iata=${airportCode}&api_key=cca99757-4c5e-472f-a6a4-2f07c00e8813`;
    await fetch(urlArr)
      .then((response) => response.json())
      .then((data) => {
        setInputAirportArrivals(airportCode);
        setAirportInfoArr(data.response);
      }).finally(() => {
        setLoading(false)
      });


      
  };


  return (
    <div className="menu">
      <div className="container d-flex">
        <div >
          <h1 className="letter">Airports Dashboards</h1>
          <select 
              value={airportDepartures}
              onChange={onAirportChange}>
            <option selected className="letter">Select One</option>
            {airports.slice(0,20).map((airport,i) => (
                <option key={i} value={airport.iata}>{airport.name}</option>
            ))}
            
          </select>
        
        </div>
        
      </div>
      <div className="container d-flex">
        <div>
          <div >
            <h3 className="letter">Flights for today in {airportDepartures}</h3>
            <TableData a={airportInfoDep} d={airportInfoArr} />
            
          </div>
        </div>
      </div>
    </div>

  );

}

export default SearchBar;