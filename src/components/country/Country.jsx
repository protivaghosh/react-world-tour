import { useState } from 'react';
import './Country.css';
const Country = ({country, handleVisitedCountry}) => {
const {name, flags, population, area, cca3} = country;

const [visited, setVisited] = useState(false);


const handleVisited=()=>{
    setVisited(!visited);
}

const passWithParams=()=>handleVisitedCountry(country);


console.log(handleVisitedCountry);
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited? 'purple':'tomato'}}>Name: {name.common}</h3>
            <img src={flags.png}></img>
            <p>population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code:{cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark visited</button><br></br><br></br>
            <button onClick={handleVisited}>{visited?'visited':'going'}</button>
            {visited ? 'I have visited this country':'I Have not visited'}
        </div>
    );
};

export default Country;