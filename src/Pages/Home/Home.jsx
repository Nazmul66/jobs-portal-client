import Banner_section from "../../Components/Banner_section/Banner_section";
import Joblist_section from "../../Components/Joblist_section/Joblist_section";
import PopularJobSection from "../../Components/PopularJob_section/PopularJobSection";


const Home = () => {
    return (
        <>
          <Banner_section></Banner_section>
          <PopularJobSection></PopularJobSection>
          <Joblist_section></Joblist_section>
        </>
    );
};

export default Home;