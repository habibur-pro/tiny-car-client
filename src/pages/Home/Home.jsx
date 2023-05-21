import Banner from "../../components/Baner";
import Galary from "../../components/Galary";
import Reviews from "../../components/Reviews";
import ShopByCategory from "../../components/ShopByCategory";
import TopRated from "../../components/TopRated";
import useTitle from "../../hooks/useTitle";




const Home = () => {
    useTitle('Home')
    return (
        <>
            <Banner></Banner>
            <Galary></Galary>
            <TopRated></TopRated>
            <ShopByCategory></ShopByCategory>
            <Reviews></Reviews>

        </>
    );
};

export default Home;