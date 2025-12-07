import React from 'react';

function SecondPage() {
  // ===== ADJUST CLOUD POSITION HERE =====
  // X: negative = move left, positive = move right (in vw units)
  // Y: negative = move up, positive = move down (in vh units)
  // Cloud is scaled to 1.2x to prevent gaps when repositioning
  const CLOUD_SHIFT_X = -4;  // <-- Edit this value
  const CLOUD_SHIFT_Y = 1.5;  // <-- Edit this value (negative moves up for top clouds)
  const CLOUD_SCALE = 1.1;  // <-- Edit to scale cloud (1.2 = 120%)
  // ======================================

  return (
    <section style={{
      background: '#F5EDEB', // White background
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      overflowX: 'hidden',  // Prevent horizontal scroll
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px 15px'
    }}>
      {/* Top Wave/Cloud Decorations - flipped and crops at page boundary */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        lineHeight: 0,
        zIndex: 0,
        overflow: 'hidden',  // Prevents horizontal overflow
        margin: 0,
        padding: 0
      }}>
        <img 
          alt="Clouds decoration top" 
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            transform: `scale(-${CLOUD_SCALE}, -${CLOUD_SCALE}) translate(${CLOUD_SHIFT_X}vw, ${CLOUD_SHIFT_Y}vh)` // <-- Cloud position controlled here (flipped horizontally and vertically, then scaled)
          }} 
          src="/cloudsbelow.png" 
        />
      </div>

      {/* Content Container */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        zIndex: 1,
        position: 'relative',
        maxWidth: '1200px',
        width: '100%'
      }}>
        <h2 style={{
          fontFamily: 'Afacad, sans-serif',
          fontWeight: 'bold',
          fontSize: 'clamp(28px, 4vw, 48px)',
          color: '#121212',
          margin: 0,
          textAlign: 'center'
        }}>
          Tentang titipGO
        </h2>
        
        <p style={{
          fontFamily: 'Afacad, sans-serif',
          fontWeight: 'normal',
          fontSize: 'clamp(16px, 2vw, 24px)',
          color: '#121212',
          margin: 0,
          textAlign: 'center',
          maxWidth: '800px',
          lineHeight: '1.6'
        }}>
          Kemudahan titip belanja dengan kurasi dan transparansi biaya.
        </p>
      </div>
    </section>
  );
}

export default SecondPage;
