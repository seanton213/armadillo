import styled from 'styled-components';

const HeaderComponent = styled.header`
  background: #ffffff;
  margin-bottom: 1.45rem;
  border-bottom-color: #949494;
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;

const Title = styled.h1`
    font-size: 40;
`;

function Header() {
    return(
        <HeaderComponent>
            <Title>
                Mars Rover Photos
            </Title>
        </HeaderComponent>
    );
}

export default Header;
