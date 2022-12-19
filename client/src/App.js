import { Container, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import theme from "./theme";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login"; 
import Students from "./components/students/Students";
import Student from "./components/students/Student";
import AddStudent from "./components/students/AddStudent";
import EditStudent from "./components/students/EditStudent";
import "react-toastify/dist/ReactToastify.css"; 

function App() {
  
  return (
    <Router>
      <ThemeProvider theme={theme}>   
        <CssBaseline />
        <Container>
          <Routes>
            <Route exact path="/" element={<Students/>} />
            <Route exact path="/students/create" element={<AddStudent/>} />
            <Route exact path="/students/:id" element={<Student/>} />
            <Route exact path="/students/:id/edit" element={<EditStudent/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/login" element={<Login/>} />
          </Routes>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
