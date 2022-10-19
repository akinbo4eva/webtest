import CoreProduct from "../components/CoreProduct";
import FinanceSection from "../components/FinanceSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import NewHome from "../components/NewHome";
import Overlay0ne from "../components/Overlay0ne";

function HomeView({ isLabel, setIsLabel }) {
  return (
    <div className="w-full max-w-[1728px] m-auto scrollbar-hide relative">
      <div className="bg-[#F4FDF8] scrollbar-hide">
        <Navbar isLabel={isLabel} setIsLabel={setIsLabel} />
        
      </div>
      <NewHome/>
      <Footer />
      {isLabel !== "" ? (
        <div
          onClick={() => setIsLabel("")}
          className="absolute top-[72px] left-0 bg-green-600/30 backdrop-blur-sm w-full h-[100%] z-[1000]"
        >
          <Overlay0ne />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default HomeView;
