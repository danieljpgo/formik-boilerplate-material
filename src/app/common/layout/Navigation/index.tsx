import React from 'react';

// import { Container } from './styles';

const Navigation: React.FC = (props) => {
  const { children } = props;

  return (
    <div>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Navigation;
