import React from 'react';
import FeatureCard from './FeatureCard';

function SecondPage() {
  // ===== ADJUST CLOUD POSITION HERE =====
  // X: negative = move left, positive = move right (in vw units)
  // Y: negative = move up, positive = move down (in vh units)
  // Cloud is scaled to 1.1x to prevent gaps when repositioning
  const CLOUD_SHIFT_X = -4;  // <-- Edit this value
  const CLOUD_SHIFT_Y = 1.5;  // <-- Edit this value (negative moves up for top clouds)
  const CLOUD_SCALE = 1.1;  // <-- Edit to scale cloud (1.1 = 110%)
  // ======================================

  return (
    <section style={{
      background: '#FFFFFF', // White background
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      overflow: 'hidden',
      overflowX: 'hidden',  // Prevent horizontal scroll
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 20px 60px 20px'
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
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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
        gap: '10px',
        zIndex: 1,
        position: 'relative',
        maxWidth: '1400px',
        width: '100%',
        marginTop: '160px'
      }}>
        {/* Header Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px'
        }}>
          {/* Title with Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px',
            flexWrap: 'wrap'
          }}>
            <h2 style={{
              color: '#000',
              fontFamily: 'Afacad',
              fontSize: '3rem',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              margin: 0,
              textAlign: 'center'
            }}>
              Ada apa di
            </h2>
            <img 
              src="/logotitipgo.png"
              alt="titipGO"
              style={{
                height: '55px',
                width: 'auto'
              }}
            />
          </div>
        </div>

        {/* Feature Showcase - Three iPhone Mockups */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(5px, 2vw, 10px)',
          flexWrap: 'wrap',
          width: '100%'
        }}>
          {/* Catalog Feature */}
          <FeatureCard 
            image="/catalog.png"
            title="Catalog"
            description="Jelajahi semua pilihan merchandise di aplikasi ini"
          />

          {/* Payment Feature */}
          <FeatureCard 
            image="/payment.png"
            title="Payment"
            description="Bayar dengan mudah dan aman melalui aplikasi"
          />

          {/* History Feature */}
          <FeatureCard 
            image="/history.png"
            title="Order Status"
            description="Lihat riwayat dan status pesananmu secara langsung"
          />
        </div>
      </div>
    </section>
  );
}

export default SecondPage;
