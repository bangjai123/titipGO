import React from 'react';
import FeatureCard from './FeatureCard';

function SecondPage() {
  

  return (
    <section style={{
      background: '#FFFFFF',
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      overflow: 'hidden',
      overflowX: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 0
    }}>
      {/* Top Wave/Cloud Decorations - in document flow */}
      <div style={{
        width: '100%',
        lineHeight: 0,
        margin: 0,
        padding: 0
      }}>
        <img 
          alt="Clouds decoration top" 
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            transform: 'scale(-1.05, -1.05)'
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
        gap: 'clamp(15px, 3vh, 30px)',
        position: 'relative',
        maxWidth: '1400px',
        width: '100%',
        marginTop: 'clamp(20px, 4vh, 40px)',
        flex: 1,
        padding: '0 clamp(15px, 3vw, 40px) clamp(30px, 6vh, 60px)'
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
              fontSize: 'clamp(1.5rem, 5vw, 3rem)',
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
                height: 'clamp(35px, 7vw, 55px)',
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
          gap: 'clamp(15px, 3vw, 30px)',
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
