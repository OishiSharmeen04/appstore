
import AllApp from '../AllApp/AllApp';

const Apps = ({data}) => {
    

    return (
        <div className='bg-gray-100 max-w-6xl mx-auto p-10 text-center'>
            <h1 className='text-4xl font-extrabold'>Trending Apps</h1>
            <p className='text-sm'>Explore All Trending Apps on the Market developed by us</p>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10'>
                {
                data.map((singleApp) => <AllApp key={singleApp.id} singleApp={singleApp}></AllApp>)
            }
            </div>
        </div>
    );
};

export default Apps;