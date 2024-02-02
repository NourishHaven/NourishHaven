import React from 'react'
import Trending from "../Components/Trending";
import Organic from '../Components/Organic';
import Hero from '../Components/Hero';
import ChooseUs from '../Components/ChooseUs';
import Testimonials from '../Components/Testimonials';

const Home = () => {
  return (
    <div>
        <Hero/>
        <ChooseUs/>
        <Trending/>
        <Organic/>
        <Testimonials/>
    </div>
  )
}

export default Home