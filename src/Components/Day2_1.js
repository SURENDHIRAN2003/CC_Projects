import React from 'react';
import './Day2.css';

function Header() {
  return (
    <header>
    <h1 id='title'>TAJ HOTEL</h1>
      <img src="https://previews.123rf.com/images/msvetlana/msvetlana1508/msvetlana150800022/44198184-silhouette-office-building-with-an-entrance-and-reflection-on-a-white-background.jpg" alt="Company logo" id="logo"/>
      
      <nav class="topnav">
      
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        
      </nav>
    </header>
  );
}

export default Header;