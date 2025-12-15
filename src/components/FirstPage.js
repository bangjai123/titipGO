import React, { useState, useEffect } from 'react';

function FirstPage() {
  
  // Track window width for responsive layout
  const [isPortrait, setIsPortrait] = useState(
    typeof window !== 'undefined' && window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section style={{
      background: '#272424',
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      overflow: 'hidden',
      overflowX: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: isPortrait ? 'space-between' : 'flex-end',
      padding: 0
    }}>
      {/* Main Content Container */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1400px',
        width: '100%',
        gap: 'clamp(10px, 1vw, 20px)',
        flexDirection: isPortrait ? 'column' : 'row',
        flexWrap: 'wrap',
        zIndex: 1,
        position: 'relative',
        padding: isPortrait ? 'clamp(20px, 4vh, 50px) clamp(15px, 3vw, 40px)' : 'clamp(20px, 3vh, 40px) clamp(15px, 2vw, 40px) clamp(15px, 2vh, 30px)',
      }}>
        {/* iPhone Mockup */}
        <div style={{
          height: 'auto',
          position: 'relative',
          flexShrink: 0,
          width: '100%',
          maxWidth: isPortrait ? '320px' : 'min(420px, 35vw)',
          minWidth: '100px',
          order: isPortrait ? 3 : 1
        }}>
          <img 
            alt="iPhone Mockup" 
            style={{
              width: '100%',
              height: 'auto',
              display: 'block'
            }} 
            src="/mockup.png" 
          />
        </div>

        {/* Content Section - Logo and Description */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(15px, 3vh, 25px)',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          flex: isPortrait ? '1 1 100%' : '1 1 300px',
          minWidth: '280px',
          maxWidth: isPortrait ? '100%' : '800px',
          order: isPortrait ? 1 : 2,
          width: isPortrait ? '100%' : 'auto'
        }}>
          {/* Logo and Description Container */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: isPortrait ? '0' : '30px',
            paddingTop: 0,
            paddingLeft: 0,
            paddingRight: 0,
            position: 'relative',
            width: '100%'
          }}>
            {/* Logo titipgo */}
            <div style={{
              marginBottom: 'clamp(10px, 2vh, 15px)',
              width: '100%',
              maxWidth: 'clamp(180px, 30vw, 220px)'
            }}>
              <img 
                src="/logotitipgo.png" 
                alt="TitipGO Logo" 
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>

            {/* Description Text */}
            <p style={{
              fontFamily: 'Afacad, sans-serif',
              fontWeight: 'normal',
              lineHeight: '1.5',
              position: 'relative',
              color: '#F5EDEB',
              fontSize: 'clamp(8px, 2vw, 20px)',
              textAlign: 'center',
              margin: 0,
              width: '100%'
            }}>
              Titipgo (stylized as titipGO) is a transparent and centralized digital platform for purchasing K-Pop merchandise. With real-time order tracking, an organized merchandise catalog, and a secure payment system, TitipGO provides an efficient, reliable, and affordable shopping experience for K-Pop fans in Indonesia.
            </p>
          </div>

          {/* CTA Button - Show on Desktop only */}
          {!isPortrait && (
            <button 
              onClick={() => window.open('https://www.figma.com/proto/zDl5EB8pvPLEPoCPM8syL6/prototype?node-id=439-631&t=oZsz4yUhxZQsWsks-1', '_blank')}
              style={{
                background: '#1E7DF2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(8px, 1.5vh, 12px) clamp(20px, 4vw, 30px)',
                position: 'relative',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                fontFamily: 'Afacad, sans-serif',
                fontWeight: 'bold',
                lineHeight: 'normal',
                color: '#F5EDEB',
                fontSize: 'clamp(14px, 2.5vw, 24px)',
                transition: 'background 0.3s ease, color 0.3s ease',
                width: 'auto',
                maxWidth: '100%'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#5CB6FF';
                e.target.style.color = '#121212';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#1E7DF2';
                e.target.style.color = '#F5EDEB';
              }}
            >
              Try Our Demo Now!
            </button>
          )}
        </div>

        {/* CTA Button - Show on Mobile only (after mockup) */}
        {isPortrait && (
          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            order: 4
          }}>
            <button 
              onClick={() => window.open('https://www.figma.com/proto/zDl5EB8pvPLEPoCPM8syL6/prototype?node-id=4-2&t=HjdL5ODOXfDeIBxh-1', '_blank')}
              style={{
                background: '#1E7DF2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(8px, 1.5vh, 12px) clamp(20px, 4vw, 30px)',
                position: 'relative',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                fontFamily: 'Afacad, sans-serif',
                fontWeight: 'bold',
                lineHeight: 'normal',
                color: '#F5EDEB',
                fontSize: 'clamp(14px, 2.5vw, 24px)',
                transition: 'background 0.3s ease, color 0.3s ease',
                width: 'auto',
                maxWidth: '100%'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#5CB6FF';
                e.target.style.color = '#121212';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#1E7DF2';
                e.target.style.color = '#F5EDEB';
              }}
            >
              Try Our Demo Now!
            </button>
          </div>
        )}
      </div>

      {/* Bottom Wave/Cloud Decorations - in document flow */}
      <div style={{
        width: '100%',
        lineHeight: 0,
        margin: 0,
        padding: 0
      }}>
        <img 
          alt="Clouds decoration bottom" 
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            transform: 'scale(1.05)'
          }} 
          src="/cloudsbelow.png" 
        />
      </div>
    </section>
  );
}

export default FirstPage;
