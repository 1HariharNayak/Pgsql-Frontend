import React from 'react';

const BackgroundImagePage = ({ imageUrl, children }) => {
  const styles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
  };

  return (
    <div style={styles}>
      {children}
    </div>
  );
};

export default BackgroundImagePage;
