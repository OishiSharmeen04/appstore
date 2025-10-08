import React from 'react';
import Banner from '../../components/banner/Banner';
import Facts from '../../components/facts/Facts';
import Apps from '../Apps/Apps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Banner></Banner>
            <Facts></Facts>
            <Apps data={data}></Apps>
            
        </div>
    );
};

export default Home;