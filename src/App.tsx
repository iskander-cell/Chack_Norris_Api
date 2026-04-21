import { Container, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router";
import { JokePage } from "./pages/JokePage/JokePage";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar/>
      <CssBaseline/>
      <Container maxWidth='md' style={{paddingLeft: 300}}>
        <Routes>
          <Route path=':category' element={<JokePage/>}/>
        </Routes>
      </Container>
    </div>
  )
}

export default App