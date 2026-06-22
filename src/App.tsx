import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ContractBar from "./components/ContractBar";
import Story from "./components/Story";
import Tokenomics from "./components/Tokenomics";
import HowToBuy from "./components/HowToBuy";
import Gallery from "./components/Gallery";
import Community from "./components/Community";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ContractBar />
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
