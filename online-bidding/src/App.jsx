import './App.css';
import CreateBid from './Auction/Create';
import CreateAuction from './Auction/Create';
import UpdateAuction from './Auction/Update';
import ViewTableComponent from './Auction/View';
import Login from './Users/Login/login';
import Registration from './Users/Registartion';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Login />}/>
        <Route path="/user-registration" element={<Registration />}/>

        <Route path="/login" element={<Login />}/>
        <Route path="/place-bid" element={<CreateBid />}/>
        <Route path="/update-auction" element={<UpdateAuction />}/>
        <Route path="/view-auction" element={<ViewTableComponent />}/> 
        {/* <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
