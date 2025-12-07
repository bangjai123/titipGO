import './App.css';

function App() {
  return (
<div style={{width: '100%', minHeight: '100vh', position: 'relative', background: '#272424', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px'}}>
    <div style={{maxWidth: '1400px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 60, flexWrap: 'wrap'}}>
        <img style={{width: '100%', maxWidth: 500, height: 'auto'}} src="/mockup.png" alt="Mockup" />
        <div style={{flex: 1, minWidth: 300, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 40, display: 'flex'}}>
            <div style={{width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <div style={{width: '100%', maxWidth: 400, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex', marginBottom: 20}}>
                    <img style={{width: '67.5%', height: 'auto'}} src="/logotitipgo.png" alt="TitipGO Logo" />
                </div>
                <div style={{width: '100%', textAlign: 'center', color: '#FFFFFF', fontSize: '1.5rem', fontFamily: 'Afacad', fontWeight: '400', wordWrap: 'break-word', lineHeight: 1.6}}>TitipGO (stylized: titipGO) adalah platform digital untuk pembelian merchandise K-Pop yang transparan dan tersentralisasi. Dengan fitur pelacakan status pesanan yang real-time, katalog merchandise yang terorganisasi, dan sistem pembayaran yang aman, TitipGO dapat memberikan pengalaman berbelanja yang efisien, terpercaya, dan terjangkau bagi penggemar K-Pop di Indonesia.</div>
            </div>
            <button 
                onClick={() => window.open('https://www.figma.com/proto/zDl5EB8pvPLEPoCPM8syL6/prototype?node-id=4-2&t=HjdL5ODOXfDeIBxh-1', '_blank')}
                style={{
                    paddingLeft: 30, 
                    paddingRight: 30, 
                    paddingTop: 10, 
                    paddingBottom: 10, 
                    background: '#1E7DF2', 
                    borderRadius: 10, 
                    border: 'none',
                    cursor: 'pointer',
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    gap: 10, 
                    display: 'inline-flex'
                }}
                onMouseEnter={(e) => e.target.style.background = '#5CB6FF'}
                onMouseLeave={(e) => e.target.style.background = '#1E7DF2'}
            >
                <div style={{color: '#FFFFFF', fontSize: 40, fontFamily: 'Afacad', fontWeight: '700', wordWrap: 'break-word'}}>Try Our Demo Now!</div>
            </button>
        </div>
    </div>
</div>  );
}

export default App;
