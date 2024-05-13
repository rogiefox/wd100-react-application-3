import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/navigationBar";
import Banner from "./img/team.jpg";
import Logo from "./img/logo.png"
import Bodycontent from "./components/bodyContent";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <NavigationBar img={Banner} logo={Logo}></NavigationBar>
      <Bodycontent></Bodycontent>
      <Footer></Footer>
    </div>
  );
}

export default App;
