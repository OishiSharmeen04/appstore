import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet, useRouteError, useNavigation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import ErrorPage from './Error/ErrorPage';
import Loader from '../../../src/loader/Loader';


const Root = () => {
    const error = useRouteError();
    const navigation = useNavigation();

    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar />
            
            {navigation.state === "loading" && <Loader />}

            <main className="flex-grow relative">
                {error ? <ErrorPage error={error} /> : <Outlet />}
            </main>

            <Footer />
        </div>
    );
};

export default Root;
