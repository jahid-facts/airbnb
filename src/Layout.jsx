import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import BottomBar from './components/bottom_bar/BottomBar';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <header>
        <Navbar />
      </header>

      {/* Main content */}
      <main style={{ marginTop:'215px', }}>
        {children} 
      </main>

      <BottomBar />
      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
