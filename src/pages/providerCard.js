import React from 'react';
import { navigate } from "gatsby"


const ProviderCard = ({ imageUrl, provider, service }) => {

  const handleClick = () => {
    navigate('/services/',{ state: { provider, service } });
  };

  const cardStyle = {
    color: 'white',
    width: '200px',
    height: '200px',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', // regular box shadow
    transition: '0.3s', // smooth transition for the box shadow
  };

  const cardHoverStyle = {
    ...cardStyle,
    boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.4)', // intensified box shadow on hover
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    display: 'block',
  };

  const overlayStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingTop: '20px',
    paddingBottom: '20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', // center horizontally
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '0',
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      style={isHovered ? cardHoverStyle : cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <img src={imageUrl} alt="Card image" style={imageStyle} />
      <div style={overlayStyle}>
          <div style={titleStyle}>{provider}</div>
      </div>
    </div>
  );
};

export default ProviderCard;