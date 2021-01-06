import { useState, useEffect } from 'react';
import { getNasaMarsRoverUrl } from './api';
import { getCurrentDate } from '../utils/dateUtil';

function Content() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [photos, setPhotos] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch(getNasaMarsRoverUrl(getCurrentDate()))
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setPhotos(result.photos);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading Photos...</div>;
    } else {
      return (
        <ul>
        </ul>
      );
    }
}

export default Content;
