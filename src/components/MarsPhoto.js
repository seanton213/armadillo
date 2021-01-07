import styled from 'styled-components';

const StyledImg = styled.img`
    max-width: 500px;
`;

function MarsPhoto(props) {
    return (
        <div>
            <h3>{props.date}</h3>
            <StyledImg src={props.img} alt={props.date}/>
        </div>
    );
}

export default MarsPhoto;
