
import React from 'react';
import Navbar from './navbar';
import BackgroundImagePage from './background';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <BackgroundImagePage imageUrl="https://images.pexels.com/photos/18358498/pexels-photo-18358498/free-photo-of-trees-under-starry-night-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
        <h1>Welcome to my Portfolio</h1>
        <p>This is the homepage content.</p>
      </BackgroundImagePage>
    </div>
  );
};

export default HomePage;
