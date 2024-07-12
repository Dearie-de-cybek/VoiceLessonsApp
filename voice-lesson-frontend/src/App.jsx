import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from "./ui/Button";

const StyledApp = styled.div`

`;


const App = () => {
  return (
    <>
    <GlobalStyles />
    <StyledApp>
      <h1>Voice Lesson App For Abolo</h1>
      <Button onClick={() => alert("Buy my course")}>Abolo</Button>
    </StyledApp>
    </>    
  )
}
export default App