import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Dashboard } from "./pages/Dashboard";
import Navbar from "./components/Navbar";
// import { SendMoney } from "./pages/SendMoney";
function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        {/* <Route path="/send" element={<SendMoney></SendMoney>}></Route> */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
