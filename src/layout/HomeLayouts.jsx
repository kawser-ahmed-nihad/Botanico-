import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';


const HomeLayouts = () => {
    const {state} = useNavigation();
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>

                <section>
                    {state == "loding" ? <Loading></Loading> : <Outlet></Outlet>}
                </section>
            </main>
            <footer>
                
            </footer>
        </div>
    );
};

export default HomeLayouts;