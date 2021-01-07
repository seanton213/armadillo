import { useState } from 'react';
import { getCurrentDate } from '../utils/dateUtil';
import { getMarsRoverData } from './api';

function Search({ setError, setIsLoaded, setPhotos }) {
    const [inputValue, setInputValue] = useState(getCurrentDate());

    return (
        <div>
            <input onChange={e => setInputValue(e.target.value)} type="date" max={getCurrentDate()} defaultValue={getCurrentDate()}/>
            <button onClick={() => { getMarsRoverData(inputValue, setError, setIsLoaded, setPhotos) }}>Search Photos by Date</button>
        </div>
    );
}

export default Search;
