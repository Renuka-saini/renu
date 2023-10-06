import {Link} from 'react-router-dom';
import "./Nav.css";
function Nav() {
  return(
    <>
    <nav>
    <ul>
      <Link to = '/'><li>Home</li></Link>
      <Link to = '/about'><li>About</li></Link>
      <Link to  = '/contact'><li>Contact</li></Link>
    </ul>
</nav>
  </>
  );
}

export default Nav;
