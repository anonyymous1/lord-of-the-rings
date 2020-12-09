import logo from './logo.svg';
import Movie from './Movie'
import './App.css';

function App() {
  const movieData = [
    {
      title: "The Fellowship of the Ring",
      hours:"2",
      minutes:"58"
    },
    {
      title: "The Two Towers",
      hours:"2",
      minutes:"59"
    },
    {
      title: "The Return of the King",
      hours:"3",
      minutes:"21"
    },
  ]

  const movieComponents = movieData.map((d, index)=>{
    return <Movie { ...d } key={'movie-'+ index}/>
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
                { movieComponents }
      </header>
    </div>
  );
}

export default App;
