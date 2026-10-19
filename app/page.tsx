import Hero from "../components/Hero";
import { FloatingNav } from "../components/ui/floating-navbar";
import Grid from "../components/Grid";
import RecentProjects from "../components/RecentProjects";
import Experience from "../components/Experience";
// import Clients from "../components/Clients";

import { navItems } from "./data";
import Approach from "../components/Approach";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <main className="bg-black-100 flex min-h-screen w-full min-w-0 flex-col items-center overflow-x-clip px-5 sm:px-10">
      <div className="w-full min-w-0">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Clients /> */}
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};
export default Home;
