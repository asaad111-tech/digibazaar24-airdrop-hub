
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-crypto-darker py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 crypto-gradient-text">DigiBazaar24</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              NFTerra NFT Studio's premier platform for crypto airdrops, NFT minting, and DeFi services.
              Join our community and be part of the future of digital assets.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted/40 flex items-center justify-center hover:bg-muted/60 transition-colors">
                <span>T</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted/40 flex items-center justify-center hover:bg-muted/60 transition-colors">
                <span>TG</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted/40 flex items-center justify-center hover:bg-muted/60 transition-colors">
                <span>D</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tokenomics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">NFT Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">DeFi Tutorials</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <RouterLink to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </RouterLink>
              </li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 NFTerra NFT Studio. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=50&h=20" 
              alt="Verified by Binance" 
              className="h-6 rounded"
            />
            <img 
              src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=50&h=20" 
              alt="Listed on CoinMarketCap" 
              className="h-6 rounded"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
