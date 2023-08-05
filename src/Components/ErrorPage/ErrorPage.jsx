import './ErrorPage.css';
import { Link, useRouteError } from 'react-router-dom';
import { FaSadCry } from 'react-icons/fa';

const ErrorPage = () => {
    const pageError = useRouteError();

    return (
        <div className='error-page'>
            <div className='max-w-[800px] mx-auto'>
                <div className='flex justify-center'>
                   <FaSadCry className="text-[yellow] text-[200px]" />
                </div>
                <h2 className="text-[yellow] lg:text-[100px] text-[80px] font-extrabold text-center"> {pageError?.status || 404}</h2>
                <p className="text-[yellow] lg:text-[40px] text-[24px] font-extrabold text-center">{pageError?.data}</p>
                <div className='text-center mt-8'>
                    <Link to="/" className='py-4 px-12 rounded-[4px] font-bold bg-cyan-800 text-white'>Go to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;