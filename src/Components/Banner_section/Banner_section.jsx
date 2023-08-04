import './Banner_section.css'

const Banner_section = () => {
    return (
        <section className="banner-section lg:pt-40 pt-16 lg:pb-[300px] pb-16 px-5">
            <div className="max-w-[1140px] mx-auto">
              <div className="lg:max-w-[600px] max-w-full"> 
                 <h1 className='font-bold lg:text-[56px] text-[36px] lg:leading-[70px] leading-[50px] mb-5 text-[#000] lg:text-left text-center'>Find A <span className='text-[#338573] font-extrabold'>Job</span> That <span className='text-[#338573] font-extrabold'>Matches</span> Your Passion </h1>
                 <p className='g:text-[18px] text-[16px] text-[#616161] lg:text-left text-center'>Hand-picked opportunities to work from home, remotely, freelance, full-time, part-time, contract and internships.</p>
              </div>
            </div>
        </section>
    );
};

export default Banner_section;