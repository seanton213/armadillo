import { useState, useEffect } from 'react';
import { getNasaMarsRoverUrl } from './api';
import { getCurrentDate } from '../utils/dateUtil';
import MarsPhoto from '../components/MarsPhoto';
import styled from 'styled-components';

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItemContainer = styled.div`
  border: black;
  border-style: solid;
  margin: 20px;
`;

const StyledLi = styled.li`
  padding: 20px;
`;

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

            if (result.photos && result.photos.length > 0) {
              setPhotos(result.photos);
            } else {
              setError({ message: "No photos were loaded for the given date" });
            }
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <h5>Error: {error.message}</h5>;
    } else if (!isLoaded) {
      return <h5>Loading Photos...</h5>;
    } else {
      return (
        <StyledUl>
          {photos.map(photo => (
            <ListItemContainer>
              <StyledLi key={photo.id}>
                <MarsPhoto date={photo.earth_date} img={photo.img_src} />
              </StyledLi>
            </ListItemContainer>
          ))}
        </StyledUl>
      );
    }
}

export default Content;
