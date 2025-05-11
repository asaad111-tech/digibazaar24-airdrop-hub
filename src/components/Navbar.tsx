
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-crypto-darker/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="font-bold text-xl crypto-gradient-text">DigiBazaar24</a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#airdrop" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Airdrop</a>
            <a href="#defi" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">DeFi Platform</a>
            <a href="#nfts" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">NFT Collection</a>
            <Button className="crypto-button" size="sm">
              Connect Wallet
            </Button>
          </nav>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-crypto-darker/95 backdrop-blur-lg">
            <a
              href="#airdrop"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-muted/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Airdrop
            </a>
            <a
              href="#defi"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-muted/50"
              onClick={() => setIsMenuOpen(false)}
            >
              DeFi Platform
            </a>
            <a
              href="#nfts"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-muted/50"
              onClick={() => setIsMenuOpen(false)}
            >
              NFT Collection
            </a>
            <div className="pt-2 pb-1">
              <Button className="w-full crypto-button" size="sm" onClick={() => setIsMenuOpen(false)}>
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
