import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Details = () => {
    const {id} = useParams();
    const appId = parseInt(id);
    const data = useLoaderData();
    const singleApp = data.find(app => app.id === appId);
    console.log(singleApp);

    return (
        <div>
            <p>DETAILS PAGE</p>
        </div>
    );
};

export default Details;