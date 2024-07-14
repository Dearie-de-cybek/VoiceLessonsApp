import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GlobalStyles from './styles/GlobalStyles';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";



const App = () => {
  return (
    <>
    <GlobalStyles />
    <BrowserRouter>
    <Routes>
    <Route index element={<Navigate replace to="dashboard" />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="login" element={<Login />} />
    </Routes>
    </BrowserRouter>
    </>    
  )
}
export default App