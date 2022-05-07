
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddService from './Pages/AddService/AddService';
import Blog from './Pages/Blog/Blog';

import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login';
import Register from './Pages/Home/Login/Register/Register';
import RequireAuth from './Pages/Home/Login/RequireAuth/RequireAuth';
import Services from './Pages/Home/Services/Services';
import ManageServices from './Pages/ManageService/ManageService';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Header/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';


function App() {
  
  
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/"element={<Home></Home>}></Route>
        <Route path="/home"element={<Home></Home>}></Route>
        <Route path="/services"element={<Services></Services>}></Route>
        <Route path="/service/:serviceId"element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/about"element={<About></About>}></Route>
        <Route path="/blog"element={<Blog></Blog>}></Route>
        
        <Route path="/login"element={<Login></Login>}></Route>
        <Route path="/register"element={<Register></Register>}></Route>
        <Route path="/checkout"element={<RequireAuth><Checkout></Checkout></RequireAuth>}></Route>
        <Route path="/manageservice"element={<RequireAuth><ManageServices></ManageServices></RequireAuth>}></Route>
        <Route path="/addservice"element={<RequireAuth><AddService></AddService></RequireAuth>}></Route>

        <Route path="*"element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
