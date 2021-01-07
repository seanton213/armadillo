import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import styled from 'styled-components';

const OuterLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
`;

const InnerLayoutContainer = styled.div`
  margin: 0 auto;
  padding: 0 1.0875rem 1.45rem;
  max-width: 1000px;
  height: 100%;
  flex: 1 0 auto;
`;


function App() {
  return (
    <OuterLayoutContainer>
      <Header />
      <InnerLayoutContainer>
        <Content />
      </InnerLayoutContainer>
      <Footer />
    </OuterLayoutContainer>
  );
}

export default App;
