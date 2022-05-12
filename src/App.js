import './styles/app.css';
import React from 'react';
import { Header } from './components/Header';
import { Main } from './routes/Main';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
