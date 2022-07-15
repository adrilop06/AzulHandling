import {  useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import DateFormatter from '../utils/DateFormatter';
import "./tableStyle.css"
import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";

function TableData({ a, d, oldDataDep, oldDataArr }) {

    
   

    return (

    <div class="mx-auto mt-4">
        <div class="container d-flex">
            <div class=" col-2">
                <div class=" rounded feature-icon d-inline-flex align-items-center justify-content-center bg-warning g-4 y-5 bg-gradient text-white fs-2 mb-3">
                <MdFlightTakeoff class="departure-icon " size={100}/>
                </div>
            </div>
  
        <div className="card-icon col-2 card card-body text-white font-weight-bold bg-transparent border-0">
            <h1>Departures</h1>
        </div>

        
            <div class=" col-2">
                <div class="rounded feature-icon d-inline-flex align-items-center justify-content-center bg-warning g-4 y-5 bg-gradient text-white fs-2 mb-3">
                    <MdFlightLand class="departure-icon" size={100}/>
                </div>
            </div>
    
        <div className="card-icon col-2 card card-body text-white font-weight-bold bg-transparent border-0 ">
            <h1>Arrivals</h1>
        </div>
        </div>
        <div class="container d-flex ">
        <div class="col-5 ">
            <Table striped bordered hover>
                <thead >
                    <tr >
                        <th className="orange-letter text-warning">Departure Time</th>
                        <th className="orange-letter text-warning">Flight Number</th>
                        <th className="orange-letter text-warning">Destination</th>
                        <th className="orange-letter text-warning">Status</th>
                        <th className="orange-letter text-warning">Terminal</th>
                        <th className="orange-letter text-warning">Gate</th>

                    </tr>
                </thead>
                <tbody>
                    {a.map((airport, i) => (
                        <tr key={i} >
                            <td className="text-white"> <DateFormatter date={airport.dep_time}/> <br></br>
                                <strike> <DateFormatter date={airport.dep_estimated}/> </strike> 
                            </td>
                            <td className="text-white">
                                {airport.airline_iata}{airport.flight_number}
                            </td>
                            <td className="text-white">{airport.arr_iata}</td>
                            <td className="text-white">{airport.status}</td>
                            <td className="text-white">{airport.dep_terminal}</td>
                            <td className="text-white">{airport.dep_gate}</td>
                        </tr>
                    ))}
                </tbody>
                </Table>
            </div>

            <div class="col-5 mx-auto">
            
            <Table striped bordered hover>
                
                <thead>
                    <tr>
                        <th className="orange-letter text-warning">Arrival Time</th>
                        <th className="orange-letter text-warning">Flight Number</th>
                        <th className="orange-letter text-warning">Origin</th>
                        <th className="orange-letter text-warning">Status</th>
                        <th className="orange-letter text-warning">Terminal</th>
                        <th className="orange-letter text-warning">Gate</th>
                    </tr>
                </thead>
                <tbody>
                    {d.map((airport, i) => (
                        <tr key={i}>
                        <td className="text-white"> <DateFormatter date={airport.dep_time}/> <br></br>
                            <strike> <DateFormatter date={airport.dep_estimated}/> </strike> 
                        </td>
                        <td className="text-white">
                            {airport.airline_iata}{airport.flight_number}
                        </td>
                        <td className="text-white">{airport.dep_iata}</td>
                        <td className="text-white">{airport.status}</td>
                        <td className="text-white">{airport.dep_terminal}</td>
                        <td className="text-white">{airport.dep_gate}</td>
                    </tr>
                    ))}
                </tbody>
                </Table>
            </div>
            </div>
            </div>


    
  );


}

export default TableData;


