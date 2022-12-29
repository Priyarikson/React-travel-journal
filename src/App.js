import './App.css';
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";
function App() {
  const cards = data.map(item => {
    return (
        <Card
        imageUrl={item.imageUrl}
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        
        />
    )
  })
  return (
    <div className="App">
      <Navbar/>
      {cards}
    </div>
  );
}

export default App;
