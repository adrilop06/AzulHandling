import {  useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import DateFormatter from '../utils/DateFormatter';

function TableData({ airport }) {
    const [departures, setDepartures] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
/*
    useEffect(() => {
        fetch('http://localhost:5000/departures')
          .then((response) => response.json())
          .then((departures) => {
            setDepartures(departures.response);
            console.log(departures)
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          });
    }, []);
*//*
    useEffect(() => {
        fetch('http://localhost:5000/departures')
        .then((response) => response.json())
        .then((departures) => {
            setDepartures(departures.abilities);
            console.log(departures.abilities)
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);
    if (loading) {
        return <p>Data is loading...</p>;
      }
      if (error || !Array.isArray(departures)) {
    return <p>There was an error loading your data!</p>;
  }*/
  return (
    <div class="row mx-auto mt-4">
        <div class="col-4 mx-auto">
            <div class="table">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Departure Time</th>
                            <th>Flight Number</th>
                    

                        </tr>
                    </thead>
                    <tbody>
                        {/*
                        {departures.map((values)  => {
                        
                        return (
                            
                            <tr key={values.flight_iata}>
                                
                                <td> <DateFormatter date={values.dep_time}/> <br></br>
                                    <strike> <DateFormatter date={values.dep_estimated}/> </strike> </td>
                                <td>{values.airline_iata}{values.flight_number}</td>
                                <td>{values.arr_iata}</td>
                                <td>{values.status}</td>
                                <td>{values.dep_terminal}</td>
                                <td>{values.dep_gate}</td>
                    
                            
                            </tr>
                            
                        );
                        })}
                    </tbody>
                    */}


                        
                    {departures.map(values  => {
                        return (
                            
                            <tr key={values.ability.slot} >
                                
                                <td>{values.ability.name}</td>
                                <td>{values.ability.url}</td>
                 
                        
                                
                            </tr>
                               );
                            })}  
                        
                    </tbody>
                </Table>
            </div>
            </div>
            <div class="col-4 mx-auto">
                <div class="table">
                <Table striped bordered hover>
                    <thead>
                        {/* 
                        <tr>
                            <th>Departure Time</th>
                            <th>Flight Number</th>
                            <th>Destination</th>
                            <th>Status</th>
                            <th>Terminal</th>
                            <th>Gate</th>

                        </tr>
                        */}

                        <tr>
                            <th>Departure Time</th>
                            <th>Flight Number</th>
                   

                        </tr>
                    </thead>
                    <tbody>
                        {/*
                        {departures.map((values)  => {
                        
                        return (
                            
                            <tr key={values.flight_iata}>
                                
                                <td> <DateFormatter date={values.dep_time}/> <br></br>
                                    <strike> <DateFormatter date={values.dep_estimated}/> </strike> </td>
                                <td>{values.airline_iata}{values.flight_number}</td>
                                <td>{values.arr_iata}</td>
                                <td>{values.status}</td>
                                <td>{values.dep_terminal}</td>
                                <td>{values.dep_gate}</td>
                    
                            
                            </tr>
                            
                        );
                        })}
                    </tbody>
                    */}


                        
                    
                    {departures.map((values)  => {
                        
                        return (
                            
                            <tr key={values.id}>
                                
                                <td>{values.name}</td>
                                <td>{values.order}</td>
                 
                        
                                
                            </tr>
                               );
                            })}  
                            
                        
                    </tbody>
                </Table>
            </div>
        </div>
        </div>

  );


}

export default TableData;


