import { CirclesWithBar } from  'react-loader-spinner'

const Loader = () => {
    return (
        <div className='flex justify-center items-center fixed bg-white z-30 top-0 left-0 right-0 w-full h-[100vh]'>
            <CirclesWithBar
                height="200"
                width="200"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                outerCircleColor=""
                innerCircleColor=""
                barColor=""
                ariaLabel='circles-with-bar-loading'
                />
        </div>
    );
};

export default Loader;