import React from 'react';
//import NavBar from './Components/NavBar';
//import Home from './Components/Home';
//import Singers from './Components/Singers';
//import Albums from './Components/Albums';
//import Home from './Components/Day10_1';
//import Contact from './Components/Day10_4';
//import RegistrationForm from './Components/Day10_5';
//import About from './Components/Day10_3';
//import Destination from './Components/Day10_2';
import Day7 from './Components/Day7';
import Day8 from './Components/Day8';
import withProducts from './Components/Day6_2';
import './App.css';
function App() {

  const products = [
    { id: 1, name: 'Laptop', price: '100000', image: 'https://i5.walmartimages.com/asr/b677a59c-4638-4d96-acc3-1fbb373d7438_1.c06d5bc6a43294de2264a502a7529f71.jpeg' },
    { id: 2, name: 'Mobile', price: '20000', image: 'https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODEtZk5tUXFsTEwuX0FDX1NMMTUwMF8uanBn.jpg' },
    { id: 3, name: 'Tab', price: '50000', image: 'https://th.bing.com/th/id/OIP.S6-ao3iVGaK8eN0FfSuiEAHaHa?pid=ImgDet&rs=1' },
  ];

  const ProductListWithProducts = withProducts(products);
  return (
      <div className="App">
        <ProductListWithProducts/>
        <Day7/>
        <Day8/>
      </div>
  );
}

export default App;