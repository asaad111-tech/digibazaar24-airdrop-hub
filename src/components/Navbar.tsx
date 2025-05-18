
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link as RouterLink } from 'react-router-dom';
import { ConnectWalletButton } from './WalletConnectionProvider';

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
            <RouterLink to="/" className="font-bold text-xl crypto-gradient-text">DigiBazaar24</RouterLink>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <RouterLink to="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About Us</RouterLink>
            <RouterLink to="/contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Contact Us</RouterLink>
            <RouterLink to="/#airdrop" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Airdrop</RouterLink>
            <RouterLink to="/#defi" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">DeFi Platform</RouterLink>
            <RouterLink to="/collection" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">NFT Collection</RouterLink>
            <RouterLink to="/mint" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Mint NFT</RouterLink>
            <ConnectWalletButton />
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
            <RouterLink
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-muted/50"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </RouterLink>
            <RouterLink
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-muted/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </RouterLink>
            <RouterLink
              to="/#airdrop"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-muted/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Airdrop
            </RouterLink>
            <RouterLink
              to="/#defi"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-muted/50"
              onClick={() => setIsMenuOpen(false)}
            >
              DeFi Platform
            </RouterLink>
            <RouterLink
              to="/collection"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-muted/50"
              onClick={() => setIsMenuOpen(false)}
            >
              NFT Collection
            </RouterLink>
            <RouterLink
              to="/mint"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-muted/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Mint NFT
            </RouterLink>
            <div className="pt-2 pb-1">
              <div className="px-3">
                <ConnectWalletButton />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
