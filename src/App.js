import {useState, useEffect} from 'react'
import {NavSidebar} from './components/Nav/NavSidebar'
import {
  Switch,
  Route
} from 'react-router-dom';

function App() {

  const [showNav, setShowNav] = useState(0);
  const [navData, setNavData] = useState([])

  useEffect(() => {
      fetch('http://localhost:3000/data.json')
          .then(response => response.json())
          .then(data => {
            const uniqIds = {}
            const newDataNav = data.menu
              .filter(obj => !uniqIds[obj.id] && (uniqIds[obj.id] = true))
              .map((item, index) => {
                return {
                  ...item,
                  link : `/${(item.menu_title).trim().toLowerCase().replace(/ /g, '_')}`,
                }
              });
            //console.log(newDataNav)
            setNavData(newDataNav)
            }
          );
  },[])

  const handleShowNav = () => {
    setShowNav(250);
  }

  const handleCloseMenu = (e) => {
    //e.preventDefault()
    setShowNav(0);
  }

  return (
    <div className="App">
      <header>
        <div><button className="openbtn" onClick={handleShowNav}>☰</button></div>
        <div className="devices_box">
                <div className="device"><i className="fa fa-mobile"></i></div>
                <div className="device"><i className="fa fa-tablet" aria-hidden="true"></i></div>
                <div className="device"><i className="fa fa-television" aria-hidden="true"></i></div>
        </div>
        <NavSidebar showNav={showNav} handleCloseMenu={handleCloseMenu} navData={navData}/>
      </header>
        <Switch>
          <Route exact path="/">
            <div className="title_page"><h1>Home page</h1></div>
          </Route>
        {
          navData.map(item =>{
            const { header, short_text, full_text, full_text_btn_title } = item.content;
            return (
              <Route path={item.link} key={item.id}>
                <div className="title_page"><h1>{ item.menu_title }</h1></div>
                <div id="content">
                  <h2>{ header }</h2>
                  <h3>{ short_text }</h3>
                  <div className="content_text">
                    {full_text}
                    { 
                      full_text_btn_title &&
                      <div className="mt-10"><a href="#" className="btn btn1">{ full_text_btn_title }</a></div>
                    }
                  </div>
                </div>
              </Route>
            )
          })
        }
        </Switch>
    </div>
  );
}

export default App;
