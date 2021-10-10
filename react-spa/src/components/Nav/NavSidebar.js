import { Link } from "react-router-dom"

export const NavSidebar = ({showNav, handleCloseMenu, navData}) => {

    return (
        <div>
            <div id="mySidebar" className="sidebar" style={{width: `${showNav}px`}}>
                <div className="closebtn" onClick={handleCloseMenu}>×</div>
                <Link to="/" onClick={handleCloseMenu}>Home</Link>
                {
                    navData.map(item => {
                        return (
                            <Link to={item.link} key={item.id} onClick={handleCloseMenu}>
                                {item.menu_title}<br/>
                                <small>{item.menu_subtitle}</small>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}