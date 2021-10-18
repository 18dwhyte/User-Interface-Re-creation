import Card from './Card.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Bar-color">
        <img className='eyefind' alt='Eyefind logo' src='./logo.png'/>
         <img  className='top-favicon' alt='Envelope' src="./envelope.png"/>Inbox | <img className="top-favicon" alt='pen'src='./pen.png'/>Compose New
         <img className='weather' alt='weather img'src='./weather.png'/>
      </div>

      <div className="search-random">
        <input className="searchbar" type="text" placeholder="Search Eyefind"></input>
        <button className="random-button">RANDOM</button>
      </div>

      <div className="thin-bar"></div>
      <div>
        <button className="navbar"> <img className='favicon' alt='phone'src='./icon-iphone-blue-big.png'/> <span> MEDIA AND ENTERTAINMENT</span></button>
        <button className="navbar"> <img className='favicon' alt='food' src='./foodndrink.png'/><span>FOOD AND DRINK</span> </button>
        <button className="navbar"> <img className='favicon' alt='money'src='./money.png'/>MONEY AND SERVICES</button>
        <button className="navbar"> <img className='favicon' alt='plane'src='./plane.png'/>TRAVEL AND TRANSPORT</button>
        <button className="navbar"> <img className='favicon' alt='purse'src='./purse.png'/>FASHION AND HEALTH</button>
      </div>
      <Card/>
      <div className="outer">
        <div className="featured">
            EYEFIND FEATURED WEBSITES
        </div>
        <div className="inner">
        <img className="widget-size" alt='logo'src="./maze.png"></img>
        <img className="widget-size" alt='logo'src="./warcc.png"></img>
        <img className="widget-size" alt='logo'src="./arenawar.png"></img>
        <img className="widget-size" alt='logo'src="./elitas.png"></img>
        <img className="widget-size" alt='logo'src="./dynasty.png"></img>
        </div>
        <div className="inner">
        <img className="widget-size" alt='logo'src="./pandm.png"></img>
        <img className="widget-size" alt='logo'src="./lazerforce.png"></img>
        <img className="widget-size" alt='logo'src="./temps.png"></img>
        <img className="widget-size" alt='logo'src="./epsilon.png"></img>
        <img className="widget-size" alt='logo'src="./preserve.png"></img>
        </div>

      </div>
      
    </div>
  );
}

export default App;
