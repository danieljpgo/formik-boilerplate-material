import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
// import { Container } from './styles';

const Header: React.FC = () => (
  <header>
    <NavLink to="/Material">Material</NavLink>
    <NavLink to="/chakra">Chakra</NavLink>
    <NavLink to="/default">Default</NavLink>
  </header>
);

export default Header;
