import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from "./ui/Button";
import Heading from './ui/Heading';

const StyledApp = styled.div`

`;


const App = () => {
  return (
    <>
    <GlobalStyles />
    <StyledApp>
      <Heading as="h1">Voice Lesson App For Abolo</Heading>
      <Button onClick={() => alert("Buy my course")}>Abolo</Button>
    </StyledApp>
    </>    
  )
}
export default App