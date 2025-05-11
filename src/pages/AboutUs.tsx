
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Wallet } from 'lucide-react';
import { useWallet } from '@/components/WalletConnectionProvider';

const AboutUs = () => {
  const { isConnected, connectWallet } = useWallet();
  
  return (
    <div className="min-h-screen bg-crypto-dark text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16 mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 crypto-gradient-text">About DigiBazaar24</h1>
            <p className="text-xl md:text-2xl text-gray-300">Where Exclusive NFTs Meet Revolutionary Rewards</p>
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="mb-8 text-lg">
              Welcome to DigiBazaar24, the premier destination for high-value NFT airdrops, 
              limited-edition digital collectibles, and blockchain-powered rewards. We're on a 
              mission to bridge the gap between creators and collectors by offering free, 
              high-quality NFTs and crypto tokens while providing a seamless minting experience.
            </p>
            
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center">
                <span className="mr-2">🌟</span> Our Story
              </h2>
              <p className="mb-4">
                Founded in 2024, DigiBazaar24 emerged from a simple idea: Make NFTs accessible, 
                rewarding, and exciting for everyone. Frustrated by overpriced drops and exclusive 
                "whitelist-only" systems, we built a platform where:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Every user gets a fair chance at free airdrops.</li>
                <li>Minting NFTs is effortless (no technical skills needed).</li>
                <li>Real value is delivered—no empty promises.</li>
                <li>Our $500 NFT & token airdrop campaign is just the beginning.</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center">
                <span className="mr-2">🚀</span> What We Offer
              </h2>
              <ol className="list-decimal pl-6 mb-4 space-y-6">
                <li>
                  <h3 className="text-xl font-semibold">Exclusive NFT Airdrops</h3>
                  <p>Claim free digital assets with real utility—no strings attached.</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold">Curated NFT Drops</h3>
                  <p>Mint rare, high-potential NFTs from emerging artists and projects.</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold">Multi-Chain Accessibility</h3>
                  <p>Supporting Ethereum, Polygon, and more to ensure low fees and broad access.</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold">Secure & Transparent</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Smart contracts audited for safety.</li>
                    <li>Every transaction visible on-chain.</li>
                    <li>No hidden costs—ever.</li>
                  </ul>
                </li>
              </ol>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center">
                <span className="mr-2">💡</span> Why Choose Us?
              </h2>
              <ul className="pl-6 mb-4 space-y-4">
                <li className="flex">
                  <span className="mr-2 text-crypto-accent">✅</span>
                  <span><strong>Generous Rewards</strong> – Unlike other platforms, we give away real value ($500 in NFTs/tokens).</span>
                </li>
                <li className="flex">
                  <span className="mr-2 text-crypto-accent">✅</span>
                  <span><strong>User-First Approach</strong> – No complicated processes. Just connect your wallet and claim.</span>
                </li>
                <li className="flex">
                  <span className="mr-2 text-crypto-accent">✅</span>
                  <span><strong>Future-Proof Collectibles</strong> – Our NFTs are designed for long-term utility (gaming, Metaverse, DeFi).</span>
                </li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center">
                <span className="mr-2">🔮</span> The Future of DigiBazaar24
              </h2>
              <p className="mb-4">We're expanding into:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>NFT staking & passive rewards</li>
                <li>A metaverse marketplace</li>
                <li>Exclusive DAO perks for holders</li>
              </ul>
              <p>Join us in reshaping digital ownership—one NFT at a time.</p>
            </section>
            
            <div className="text-center mt-12 mb-8">
              <h3 className="text-2xl font-bold mb-6">Ready to claim your free airdrop?</h3>
              <Button 
                onClick={!isConnected ? connectWallet : undefined}
                className="crypto-button text-lg py-6 px-8"
              >
                <Wallet className="mr-2" size={20} />
                Connect Wallet Now
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
