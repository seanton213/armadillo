import { useState, useEffect } from 'react';
import { getMarsRoverData } from './api';
import MarsPhoto from '../components/MarsPhoto';
import styled from 'styled-components';
import Search from './Search';

const MOST_RECENT_PHOTO_DATE = "2021-01-06";

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
      getMarsRoverData(MOST_RECENT_PHOTO_DATE, setError, setIsLoaded, setPhotos);
    }, [])

    return (
      <div>
        <Search setError={setError} setIsLoaded={setIsLoaded} setPhotos={setPhotos} />
        {error ? <h5>Error: {error.message}</h5> 
          : !isLoaded ? <h5>Loading Photos...</h5> 
          : (
            <StyledUl>
              {photos.map(photo => (
                  <StyledLi key={photo.id}>
                    <ListItemContainer>
                      <MarsPhoto date={photo.earth_date} img={photo.img_src} />
                    </ListItemContainer>
                  </StyledLi>
              ))}
            </StyledUl>
          )
        }
      </div>
    );
}

export default Content;
