import React from 'react'
import homeLogo from '../../assets/blue_re-pict-house-base.png_32.png'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <nav>
        <Link to={'/'}>
          <img className="imagem"src={homeLogo} alt="home-logo" />
        </Link>
      </nav>
    </div>
  );
}

export default NavBar