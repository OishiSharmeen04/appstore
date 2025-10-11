
import AllApp from '../AllApp/AllApp';
import { Link } from 'react-router-dom';

const Apps = ({data}) => {
    

    return (
        <div className='bg-gray-100 p-10 text-center'>
            <h1 className='text-4xl font-extrabold'>Trending Apps</h1>
            <p className='text-sm'>Explore All Trending Apps on the Market developed by us</p>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10 mt-10'>
                {
                data.map((singleApp) => <AllApp key={singleApp.id} singleApp={singleApp}></AllApp>)
            }
            </div>
            <div>
                <Link to = '/apps'>
                    <button className="btn btn-primary mt-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:shadow-lg transform transition-transform duration-300 hover:-translate-y-2 active:scale-95">
                        Show All
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Apps;