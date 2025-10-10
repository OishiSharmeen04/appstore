import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet, useRouteError} from 'react-router';
import Footer from '../../components/Footer/Footer';
import ErrorPage from './Error/ErrorPage';


const Root = () => {

    const error = useRouteError();

    return (
        <div>
            <Navbar></Navbar>
            <main className="flex-grow">
                {error ? <ErrorPage error={error} /> : <Outlet />}
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;
