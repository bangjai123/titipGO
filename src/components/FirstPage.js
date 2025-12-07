import React from 'react';

function FirstPage() {
  // ===== ADJUST CLOUD POSITION HERE =====
  // X: negative = move left, positive = move right (in vw units)
  // Y: negative = move up, positive = move down (in vh units)
  // Cloud is scaled to 1.2x to prevent gaps when repositioning
  const CLOUD_SHIFT_X = -4;  // <-- Edit this value
  const CLOUD_SHIFT_Y = 2;  // <-- Edit this value
  const CLOUD_SCALE = 1.1;  // <-- Edit to scale cloud (1.2 = 120%)
  // ======================================

  return (
    <section style={{
      background: '#272424',
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      overflowX: 'hidden',  // Prevent horizontal scroll
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0px 0px 80px 5px'  // Minimal top/horizontal, more bottom to avoid clouds
    }}>
      {/* Main Content Container */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        maxWidth: '1400px',
        width: '100%',
        gap: '50px',
        flexWrap: 'wrap',
        zIndex: 1,
        position: 'relative',
        marginTop: '-50px'
      }}>
        {/* iPhone Mockup */}
        <div style={{
          height: 'auto',
          position: 'relative',
          flexShrink: 0,
          width: '100%',
          maxWidth: '650px',
          minWidth: '500px',
          marginLeft: '-50px'
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

        {/* Right Content Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '25px',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          flex: '1',
          minWidth: '350px',
          maxWidth: '800px'
        }}>
          {/* Logo and Description Container */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: '30px',
            paddingTop: 0,
            paddingLeft: 0,
            paddingRight: 0,
            position: 'relative',
            width: '100%'
          }}>
            {/* Logo titipgo */}
            <div style={{
              marginBottom: '15px',
              width: '100%',
              maxWidth: '220px'
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
              fontSize: 'clamp(14px, 2vw, 24px)',
              textAlign: 'center',
              margin: 0,
              width: '100%'
            }}>
              TitipGO (stylized: titipGO) adalah platform digital untuk pembelian merchandise K-Pop yang transparan dan tersentralisasi. Dengan fitur pelacakan status pesanan yang real-time, katalog merchandise yang terorganisasi, dan sistem pembayaran yang aman, TitipGO dapat memberikan pengalaman berbelanja yang efisien, terpercaya, dan terjangkau bagi penggemar K-Pop di Indonesia.
            </p>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => window.open('https://www.figma.com/proto/zDl5EB8pvPLEPoCPM8syL6/prototype?node-id=4-2&t=HjdL5ODOXfDeIBxh-1', '_blank')}
            style={{
              background: '#1E7DF2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px 24px',
              position: 'relative',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              fontFamily: 'Afacad, sans-serif',
              fontWeight: 'bold',
              lineHeight: 'normal',
              color: '#F5EDEB',
              fontSize: 'clamp(16px, 2vw, 24px)',
              transition: 'background 0.3s ease, color 0.3s ease'
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
      </div>

      {/* Bottom Wave/Cloud Decorations - crops at page boundary */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        lineHeight: 0,
        zIndex: 0,
        overflow: 'hidden',  // Prevents horizontal overflow
        margin: 0,
        padding: 0
      }}>
        <img 
          alt="Clouds decoration bottom" 
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            transform: `scale(${CLOUD_SCALE}) translate(${CLOUD_SHIFT_X}vw, ${CLOUD_SHIFT_Y}vh)` // <-- Cloud position controlled here
          }} 
          src="/cloudsbelow.png" 
        />
      </div>
    </section>
  );
}

export default FirstPage;
