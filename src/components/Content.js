import { useState, useEffect } from 'react';
import { getNasaMarsRoverUrl } from './api';
import { getCurrentDate } from '../utils/dateUtil';
import MarsPhoto from '../components/MarsPhoto';

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
          {photos.map(photo => (
            <li key={photo.id}>
              <MarsPhoto date={photo.earth_date} img={photo.img_src} />
            </li>
          ))}
        </ul>
      );
    }
}

export default Content;
