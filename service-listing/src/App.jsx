import "./App.css";
import ServiceCard from "./components/ServiceCard";

function App() {
  return (
    <>
      <ServiceCard
        title={"Web Developement"}
        description={"Learn MERN Stack web developement in 3 months"}
      />
      <ServiceCard
        title={"CyberSecurity"}
        description={"Learn Cybersecurity in 6 months"}
      />
      <ServiceCard
        title={"Python"}
        description={"Learn Intermediate Python in 6 months"}
      />
      <ServiceCard
        title={"UI UX Design"}
        description={"Learn UI UX design in 4 months"}
      />
      <ServiceCard
        title={"Data Structure and Algorithm"}
        description={"Learn Data Structures and Algorithm in 6 months"}
      />
    </>
  );
}

export default App;
