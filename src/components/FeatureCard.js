import React from 'react';

function FeatureCard({ image, title, description }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'clamp(8px, 1.5vh, 12px)',
      maxWidth: '360px',
      width: '100%',
      transform: 'scale(1)',
      padding: '0 10px'
    }}>
      {/* iPhone Mockup Container */}
      <div style={{
        width: '100%',
        maxWidth: 'clamp(180px, 35vw, 220px)',
        height: 'auto',
        position: 'relative'
      }}>
        <img 
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block'
          }}
        />
      </div>

      {/* Feature Text */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'clamp(4px, 1vh, 8px)'
      }}>
        <h3 style={{
          color: '#5F56D9',
          textAlign: 'center',
          fontFamily: '"Bagel Fat One"',
          fontSize: 'clamp(1.2rem, 3.5vw, 2rem)',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
          margin: 0
        }}>
          {title}
        </h3>
        
        <p style={{
          color: '#000',
          textAlign: 'center',
          fontFamily: 'Afacad',
          fontSize: 'clamp(0.9rem, 2.5vw, 1.7rem)',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '1.3',
          margin: 0,
          maxWidth: '100%',
          paddingLeft: '5px',
          paddingRight: '5px'
        }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeatureCard;
