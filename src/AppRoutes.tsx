import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Header from 'components/Header';
import Footer from 'components/Footer';
import 'styles/globalstyles.css';


function AppRoutes() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRoutes
