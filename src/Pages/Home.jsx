import React from 'react';
import AnimatedSlider from '../components/AnimatedSlider';
import NewPlantsSection from './NewPlantsSection';
import { Helmet } from 'react-helmet';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Botanico || Home</title>
            </Helmet>
            <div>
                <AnimatedSlider></AnimatedSlider>
            </div>
            <div>
                <NewPlantsSection></NewPlantsSection>
            </div>
        </div>
    );
};

export default Home;