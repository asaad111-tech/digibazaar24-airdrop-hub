
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ConnectWalletButton } from "@/components/WalletConnectionProvider";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const AirdropPage = () => {
  // State for countdown timer
  const [countdown, setCountdown] = useState({
    hours: 71,
    minutes: 59,
    seconds: 59
  });
  
  // State for claims processed
  const [claimsProcessed, setClaimsProcessed] = useState(487);
  const [remainingClaims, setRemainingClaims] = useState(13);
  const [remainingNfts, setRemainingNfts] = useState(372);
  
  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        clearInterval(timer);
        return prev;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Handle claim button clicks
  const handleClaimClick = (portal: number) => {
    // Show toast notification
    toast.success(`Connecting to Claim Portal ${portal}...`, {
      description: "Please wait while we process your claim"
    });
    
    // Simulate claim processing
    setTimeout(() => {
      // Update claims and remaining NFTs
      if (remainingClaims > 1) {
        setClaimsProcessed(prev => prev + 1);
        setRemainingClaims(prev => prev - 1);
        setRemainingNfts(prev => prev - 1);
      }
      
      // Redirect to mint page
      window.location.href = "/mint";
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-crypto-dark text-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container max-w-5xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4 py-1 px-3 rounded-full bg-crypto-primary/20 backdrop-blur-sm border border-crypto-primary/50">
              <span className="text-sm font-medium text-crypto-accent">Limited Time Offer</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              🚀 NFTerra Tech <span className="crypto-gradient-text">MEGA AIRDROP EVENT</span> 🚀
            </h1>
            
            <p className="text-xl font-semibold text-crypto-accent mb-8">
              *(First 500 Participants Only - 72 Hour Limit!)*
            </p>
            
            <div className="flex justify-center">
              <ConnectWalletButton />
            </div>
          </div>
          
          {/* SECTION 1: MASSIVE TOKEN GIVEAWAY */}
          <Card className="crypto-card mb-10">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-crypto-primary/30 w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">SECTION 1: MASSIVE TOKEN GIVEAWAY</h2>
              </div>
              
              <div className="space-y-4 mb-8 pl-4 border-l-2 border-crypto-primary/30">
                <div className="text-xl">Claim FREE NFTerra Tokens (Value: <span className="font-bold text-crypto-accent">$100 - $50,000</span> each!)</div>
                
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-crypto-accent">✓</span>
                    <span>First 500 users get guaranteed airdrop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-crypto-accent">✓</span>
                    <span>Minimum $100 worth of tokens for everyone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-crypto-accent">✓</span>
                    <span>Top 50 participants get up to $50,000 in tokens!</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold">🔥 MULTIPLE CLAIM OPTIONS 🔥</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((portal) => (
                    <Button 
                      key={portal}
                      className="crypto-button glow-effect"
                      onClick={() => handleClaimClick(portal)}
                    >
                      🔗 CLICK HERE TO CLAIM NOW (LINK {portal})
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* SECTION 2: FREE NFT MINTING */}
          <Card className="crypto-card mb-10">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-crypto-primary/30 w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">SECTION 2: FREE NFT MINTING</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4 pl-4 border-l-2 border-crypto-primary/30">
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-crypto-accent">✓</span>
                      <span>Instant Free NFT (Worth 0.7 ETH!)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-crypto-accent">✓</span>
                      <span>No gas fees - we cover everything</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-crypto-accent">✓</span>
                      <span>Exclusive NFTerra Tech collection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-crypto-accent">✓</span>
                      <span>Automatically sent to your wallet</span>
                    </li>
                  </ul>
                  
                  <div className="py-2 px-4 bg-crypto-primary/20 backdrop-blur-sm rounded-md">
                    <span className="font-semibold text-crypto-accent">⏳ Only {remainingNfts} NFTs remaining!</span>
                  </div>
                </div>
                
                <div className="aspect-square relative rounded-xl overflow-hidden border border-crypto-primary/30">
                  <img 
                    src="/lovable-uploads/3277bb77-f81e-43ac-a307-9c4fcee7eec0.png" 
                    alt="NFT Sample" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Button 
                      className="crypto-button glow-effect"
                      onClick={() => handleClaimClick(1)}
                    >
                      Claim Free NFT Now
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* SECTION 3: COUNTDOWN TIMER */}
          <Card className="crypto-card mb-10">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-crypto-primary/30 w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⏰</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">SECTION 3: COUNTDOWN TIMER</h2>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">72-HOUR FLASH SALE:</h3>
                
                <div className="flex justify-center gap-4">
                  {['hours', 'minutes', 'seconds'].map((unit) => (
                    <div key={unit} className="text-center">
                      <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-crypto-primary/20 to-crypto-secondary/20 backdrop-blur-sm border border-muted/50 flex items-center justify-center mb-2">
                        <span className="text-3xl font-bold crypto-gradient-text">
                          {String(countdown[unit as keyof typeof countdown]).padStart(2, '0')}
                        </span>
                      </div>
                      <span className="text-sm text-gray-400 capitalize">{unit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 max-w-md mx-auto">
                  <div className="w-full h-4 bg-crypto-darker rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-crypto-primary to-crypto-secondary" style={{ width: `${(claimsProcessed / 500) * 100}%` }}></div>
                  </div>
                  <div className="mt-2 text-sm font-medium text-center">
                    <span className="text-crypto-accent">{claimsProcessed}/500</span> Claims Processed - <span className="text-crypto-accent">Only {remainingClaims} spots left!</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* SECTION 4: HOW TO CLAIM */}
          <Card className="crypto-card mb-10">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-crypto-primary/30 w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✅</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">SECTION 4: HOW TO CLAIM</h2>
              </div>
              
              <div className="text-center mb-8">
                <div className="inline-block mb-4 py-2 px-4 rounded-md bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/50">
                  <span className="font-bold text-yellow-400">⚠️ FOLLOW THESE STEPS CAREFULLY ⚠️</span>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-muted/40 backdrop-blur-sm p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-crypto-primary/40 flex items-center justify-center text-crypto-accent font-bold">1️⃣</div>
                    <h4 className="font-bold">CLICK YOUR PREFERRED CLAIM LINK BELOW</h4>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[1, 2, 3, 4].map((portal) => (
                      <Button 
                        key={portal}
                        className="bg-crypto-primary hover:bg-crypto-primary/80 text-sm h-auto py-2"
                        onClick={() => handleClaimClick(portal)}
                      >
                        🔗 CLAIM PORTAL {portal}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="bg-muted/40 backdrop-blur-sm p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-crypto-primary/40 flex items-center justify-center text-crypto-accent font-bold">2️⃣</div>
                    <h4 className="font-bold">IF TOKEN DOESN'T SHOW IMMEDIATELY:</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 justify-center">
                    <div className="flex items-center gap-2">
                      <span className="text-crypto-accent">⏳</span>
                      <span>Wait 10 seconds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-crypto-accent">🔄</span>
                      <span>Scroll down</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-crypto-accent">👆</span>
                      <span>Click "CONTINUE" button</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/40 backdrop-blur-sm p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-crypto-primary/40 flex items-center justify-center text-crypto-accent font-bold">3️⃣</div>
                    <h4 className="font-bold">INSTANT RECEIPT:</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-crypto-accent">💨</span>
                      <span>Tokens/NFT auto-withdraw to your connected wallet</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-crypto-accent">🎯</span>
                      <span>0.7 ETH NFT + $100−$50,000 tokens</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator className="my-8" />
              
              <div>
                <h4 className="font-bold mb-4">🛠 TROUBLESHOOTING:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-crypto-accent">•</span>
                    <span>Refresh if "Continue" missing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-crypto-accent">•</span>
                    <span>Ensure wallet is ERC-20 compatible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-crypto-accent">•</span>
                    <span>Increase gas limit to 100,000 for smooth processing</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold">🔥 IMMEDIATE CLAIM BUTTONS 🔥</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button 
                    className="crypto-button glow-effect"
                    onClick={() => handleClaimClick(1)}
                  >
                    🚀 DIRECT MINTING PORTAL
                  </Button>
                  <Button 
                    className="crypto-button glow-effect"
                    onClick={() => handleClaimClick(2)}
                  >
                    💎 PRIORITY ACCESS LINK
                  </Button>
                  <Button 
                    className="crypto-button glow-effect"
                    onClick={() => handleClaimClick(3)}
                  >
                    ⚡ FAST-TRACK CLAIM
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* SECTION 5: TOKENOMICS */}
          <Card className="crypto-card mb-10">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-crypto-primary/30 w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">SECTION 5: TOKENOMICS</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-muted/40 backdrop-blur-sm p-4 rounded-xl text-center">
                  <div className="font-medium text-gray-400 mb-2">Total Supply:</div>
                  <div className="font-bold text-xl">500,000 NFTerra Tokens</div>
                </div>
                
                <div className="bg-muted/40 backdrop-blur-sm p-4 rounded-xl text-center">
                  <div className="font-medium text-gray-400 mb-2">Airdrop Allocation:</div>
                  <div className="font-bold text-xl">50,000 Tokens</div>
                </div>
                
                <div className="bg-muted/40 backdrop-blur-sm p-4 rounded-xl text-center">
                  <div className="font-medium text-gray-400 mb-2">Contract:</div>
                  <div className="font-bold text-base">
                    <span className="crypto-gradient-text">0x892...3f7</span>
                    <span className="text-xs ml-2 text-crypto-accent">(verified)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* SECTION 6: LIMITED AVAILABILITY */}
          <Card className="crypto-card mb-10">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-crypto-primary/30 w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">SECTION 6: LIMITED AVAILABILITY</h2>
              </div>
              
              <div className="text-center space-y-6">
                <div className="text-2xl font-bold text-crypto-accent">
                  🚨 {claimsProcessed}/500 Claims Processed 🚨
                </div>
                
                <div className="text-xl">
                  ⏳ Less than {remainingClaims} spots remaining!
                </div>
                
                <Button 
                  className="crypto-button glow-effect px-8 py-4 text-lg"
                  onClick={() => handleClaimClick(1)}
                >
                  💎 FINAL CHANCE TO CLAIM 💎
                </Button>
                
                <div className="text-sm text-gray-400 max-w-xl mx-auto">
                  Terms Apply | Maximum 1 claim per wallet | Ends when timer hits zero
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* SECURITY NOTE */}
          <div className="bg-yellow-900/20 border border-yellow-900/30 rounded-xl p-6 max-w-3xl mx-auto mb-10">
            <h3 className="text-center text-xl font-bold mb-4">🔒 SECURITY NOTE:</h3>
            
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">•</span>
                <span>Never share your private key</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">•</span>
                <span>Official links only - beware of scams</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">•</span>
                <span>Transactions require 0 ETH gas fee</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AirdropPage;
