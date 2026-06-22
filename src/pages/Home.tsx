import Nav from "../components/Nav";
import Hero from "../components/Hero";
import ContractBar from "../components/ContractBar";
import MarketStats from "../components/MarketStats";
import Story from "../components/Story";
import Tokenomics from "../components/Tokenomics";
import HowToBuy from "../components/HowToBuy";
import Gallery from "../components/Gallery";
import Community from "../components/Community";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ContractBar />
        {/* Live market data — auto-appears once the contract address is set. */}
        <MarketStats />
        <Story />
        <Tokenomics />
        <HowToBuy />
        <Gallery />
        <Community />
      </main>
      <Footer />
    </>
  );
}
