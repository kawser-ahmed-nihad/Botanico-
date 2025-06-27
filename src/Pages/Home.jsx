import React from 'react';
import AnimatedSlider from '../components/AnimatedSlider';
import NewPlantsSection from './NewPlantsSection';
import { Helmet } from 'react-helmet';
import WhyChoose from '../components/WhyChoose';
import PlantTips from '../components/PlantTips';
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
                <WhyChoose></WhyChoose>
                <PlantTips></PlantTips>
            </div>
        </div>
    );
};

export default Home;