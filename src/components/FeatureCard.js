import React from 'react';

function FeatureCard({ image, title, description }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
      maxWidth: '360px',
      width: '100%',
      transform: 'scale(0.95)'
    }}>
      {/* iPhone Mockup Container */}
      <div style={{
        width: '100%',
        maxWidth: '220px',
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
        gap: '8px'
      }}>
        <h3 style={{
          color: '#5F56D9',
          textAlign: 'center',
          fontFamily: '"Bagel Fat One"',
          fontSize: '2rem',
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
          fontSize: '1.7rem',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '1.3',
          margin: 0,
          maxWidth: '100%'
        }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeatureCard;
