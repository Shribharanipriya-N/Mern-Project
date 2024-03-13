import React from 'react';
// import coingallexyLogo from '../assets/coingallexy_logo.png';
import '../index.css';

const About = () => {
  return (
    <div className="about-container">
      <div className='about-content'>
      <h1>About CoinGalaxy</h1>
      <p>
        At CoinGalaxy, we are passionate about connecting collectors and enthusiasts with rare and ancient coins from around the world. Our mission is to provide a platform where individuals can discover, buy unique coins that hold historical significance and cultural value.
      </p>
      <h2>Our Vision</h2>
      <p>
        We envision a world where the rich history and artistry of coins are celebrated and accessible to all. Through CoinGalaxy, we aim to foster a vibrant community of numismatists who share a passion for preserving and appreciating the beauty of ancient currencies.
      </p>
      <h2>Our Collection</h2>
      <p>
        Explore our extensive collection of old and ancient coins, meticulously curated to offer a diverse range of numismatic treasures. From Roman denarii to Byzantine solidi, each coin in our collection tells a story of its own, bearing witness to the civilizations and empires that once shaped our world.
      </p>
      </div>
      <div>
      <img src='../images/logo.jpeg' alt="CoinGallexy Logo" className="logo" />
      </div>
      
    </div>
  );
};

export default About;