import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navBar">
            <NavLink to='/' className="navButton" >Home</NavLink> 
            <NavLink to='/rules' className="navButton" >Rules</NavLink>
            <NavLink to='/about' className="navButton" >About</NavLink>
        </div>
    );
}

export default Navbar;

