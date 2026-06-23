import Nav from "../components/Nav";
import StoryFull from "../components/StoryFull";
import Footer from "../components/Footer";
import { useHashScroll } from "../hooks/useHashScroll";

export default function StoryPage() {
  // Land on the right episode when arriving at /story.html#ep-N from a link.
  useHashScroll();

  return (
    <>
      <Nav />
      <main>
        <StoryFull />
      </main>
      <Footer />
    </>
  );
}
