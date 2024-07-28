import { StyledButton, FancyButton,SubmitButton,AnimateLogo,DarkButton } from "./Components/Button";
import { ThemeProvider,createGlobalStyle } from "styled-components";
import "./App.css";
import logo from '/vite.svg'

const theme={
  dark:{
    primary:'000',
    text:'#fff',
  },
  light:{
    primary:'#fff',
    text:'#000',
  }
  ,
  fontFamily:'Segoe UI',
}

const GlobalStyles=createGlobalStyle`
  button{
    font-family: ${(props)=>props.theme.fontFamily};
  }
`

function App() {

	return (
    <ThemeProvider theme={theme} >
      <GlobalStyles/>
		<>
			<div className="App">
        <AnimateLogo src={logo}/>
				<StyledButton>Submit Button</StyledButton>
        <StyledButton type="submit">finish Task </StyledButton>
				<div>
					<br />
				</div>
				<StyledButton variant="outline">Outlined Styled Button</StyledButton>
				<FancyButton as={'a'}>Fancy Button</FancyButton>
        <div>
					<br />
				</div>
        <SubmitButton>Attibute Submit</SubmitButton>
        <DarkButton>Dark Theme</DarkButton>
			</div>
		</>
    </ThemeProvider>
	);
}

export default App;
