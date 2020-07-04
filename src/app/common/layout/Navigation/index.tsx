import React from 'react';
import Header from '../Header';
import './styles.css';

const Navigation: React.FC = (props) => {
  const { children } = props;

  return (
    <div className="container">
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
};
export default Navigation;
