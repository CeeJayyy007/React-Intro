import Navbar from './navbar';
import Home from './home';

function App() {

// const title = "Welcome to the new blog";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Home />
        
      </div>
    </div>
  );
}

export default App;
