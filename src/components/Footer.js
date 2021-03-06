import styled from 'styled-components';

const FooterDiv = styled.div`
  background-color: #eeeeee;
  display: flex;
  width: 100%;
  justify-content: center;
  position: relative;
  bottom: 0;
`;

function Footer() {
    return (
        <footer>
            <FooterDiv>
                Source: NASA's Mars Rover Open API
            </FooterDiv>
        </footer>
    );
}

export default Footer;
