import "./Home.css";
//import Map from 'app/components/Map';
import HomeStart from "./HomeStart";
import HomeWorks from "./HomeWorks";
import HomeStats from "./HomeStats";
import HomeBanner from "./HomeBanner";
import Map from "app/components/Map";

function Home() {
  return (
    <div className="home">
      <Map />
      <HomeStart />
      <HomeWorks />
      <HomeBanner />
      <HomeStats />
    </div>
  );
}

export default Home;
