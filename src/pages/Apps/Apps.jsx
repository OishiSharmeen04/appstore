
import AllApp from '../AllApp/AllApp';

const Apps = ({data}) => {
    

    return (
        <div className='bg-gray-100 max-w-6xl mx-auto p-10 text-center'>
            <h1 className='text-4xl font-extrabold'>Trending Apps</h1>
            <p className='text-sm'>Explore All Trending Apps on the Market developed by us</p>

            {
                data.map((singleApp) => <AllApp key={singleApp.id} singleApp={singleApp}></AllApp>)
            }
        </div>
    );
};

export default Apps;