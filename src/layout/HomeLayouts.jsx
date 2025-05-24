import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import WhyChoose from '../components/WhyChoose';
import FeaturedPlants from '../components/PlantTips';
import PlantTips from '../components/PlantTips';
import Loader from '../components/Loader';


const HomeLayouts = () => {
    const {state} = useNavigation();
    return (
        <div>
            <header>
                <Navbar></Navbar>
                
            </header>
            <main>

                <section>
                    {state == "loding" ? <Loader></Loader> : <Outlet></Outlet>}
                </section>
                <section>
                    <WhyChoose></WhyChoose>
                </section>
                <section>
                    <PlantTips></PlantTips>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayouts;