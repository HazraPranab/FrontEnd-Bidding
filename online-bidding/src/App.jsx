import './App.css';
import Login from './Users/Login/login';
import Registration from './Users/Registartion';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/user-registration" element={<Registration />}/>

        <Route path="/login" element={<Login />}/> 
        {/* <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
