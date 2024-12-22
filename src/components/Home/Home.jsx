import BannerPage from "../Banner/BannerPage";
import Category from "../Category/Category";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const Home = () => {
    return (
        <div >
           <BannerPage/>
           <Category/>
           <FeaturedJob/>
        </div>
    );
};

export default Home;