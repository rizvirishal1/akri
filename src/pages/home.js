import '../App.css';
import NavBar from '../components/navBar'
import Hero from '../components/hero'
import About from "../components/about_us"
import Features from "../components/features"
import green from "../images/green.png"
import bottles from "../images/bottles_trans.png"

function Home() {
  return (
    <div className="App">
          <NavBar></NavBar>
          <Hero></Hero>
          <About></About>
          <Features title="Brings together the Waste collectors and the users" 
                    description="Akri brings Waste Collectors and users together .Street waste collectors do not need to go door to door ,visiting each and every household. They can now login to Akri and see where they want to go. Users no longer need to wait for the occasional visits made by their waste collector. They can now update their waste type and approximate quantity, waste collectors near them will be notified."
                    image={green}
                    />
          <Features title="User Statistics" 
                    description="Akri gives useful insights into user Statistics.Waste collectors can now plan their day ahead .They can choose which area to focus on based on the waste type and total waste generation in a particular area. Users can keep track of their history , upload their precise location and much more."
                    image={bottles}
                    />
    </div>
  );
}

export default Home;