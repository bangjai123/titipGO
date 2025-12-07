import './App.css';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';

function App() {
  return (
    <div style={{
      width: '100%',
      height: '100vh',
      overflow: 'auto',
      overflowX: 'hidden',
      scrollBehavior: 'smooth'
    }}>
      <FirstPage />
      <SecondPage />
    </div>
  );
}

export default App;
