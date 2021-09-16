import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to='/' className="nav-button" >Home</NavLink> 
            <NavLink to='/rules' className="nav-button" >Rules</NavLink>
            <NavLink to='/about' className="nav-button" >About</NavLink>
        </div>
    );
}

export default Navbar;

