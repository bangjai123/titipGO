import './App.css';

function App() {
  return (
    <div style={{
      background: '#272424',
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      overflow: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px 15px'
    }} data-name="proto cta slide 1" data-node-id="57:130">
      {/* Main Content Container */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1200px',
        width: '100%',
        gap: '30px',
        flexWrap: 'wrap',
        zIndex: 1,
        position: 'relative'
      }} data-node-id="57:140">
        {/* iPhone Mockup */}
        <div style={{
          height: 'auto',
          position: 'relative',
          flexShrink: 0,
          width: '100%',
          maxWidth: '350px',
          minWidth: '250px'
        }} data-name="iPhone 16 Pro" data-node-id="139:253">
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
          minWidth: '280px',
          maxWidth: '650px'
        }} data-node-id="57:142">
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
          }} data-node-id="57:143">
            {/* Logo titipgo */}
            <div style={{
              marginBottom: '15px',
              width: '100%',
              maxWidth: '300px'
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
            }} data-node-id="57:145">
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
              padding: '10px 30px',
              position: 'relative',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => e.target.style.background = '#5CB6FF'}
            onMouseLeave={(e) => e.target.style.background = '#1E7DF2'}
            data-node-id="57:146"
          >
            <p style={{
              fontFamily: 'Afacad, sans-serif',
              fontWeight: 'bold',
              lineHeight: 'normal',
              position: 'relative',
              color: '#F5EDEB',
              fontSize: 'clamp(18px, 2.5vw, 32px)',
              margin: 0
            }} data-node-id="57:147">
              Try Our Demo Now!
            </p>
          </button>
        </div>
      </div>

      {/* Bottom Wave/Cloud Decorations */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',
        zIndex: 0
      }}>
        <img 
          alt="Clouds decoration" 
          style={{
            display: 'block',
            width: '100%',
            height: 'auto'
          }} 
          src="/cloudsbelow.png" 
        />
      </div>
    </div>
  );
}

export default App;
