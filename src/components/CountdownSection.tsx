
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";

const CountdownSection = () => {
  // Set the countdown date to 3 days from now
  const [countdown, setCountdown] = useState({
    days: 3,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    // Set countdown end date to 3 days from now
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 3);
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setCountdown({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="py-16 px-4 bg-crypto-darker">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              ⏳ Airdrop ends in:
            </h3>
            
            <div className="flex justify-between max-w-md">
              {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
                <div key={unit} className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-gradient-to-br from-crypto-primary/20 to-crypto-secondary/20 backdrop-blur-sm border border-muted/50 flex items-center justify-center mb-2">
                    <span className="text-2xl md:text-3xl font-bold crypto-gradient-text">
                      {String(countdown[unit as keyof typeof countdown]).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400 capitalize">{unit}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-crypto-primary to-crypto-secondary flex items-center justify-center">
                  <span className="text-white text-sm">📢</span>
                </div>
                <p className="font-medium">Join 50,000+ crypto enthusiasts in our community!</p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 py-2 px-4 rounded-full bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 border border-[#1DA1F2]/30 transition-all">
                  <span>Twitter</span>
                </button>
                <button className="flex items-center gap-2 py-2 px-4 rounded-full bg-[#0088cc]/10 hover:bg-[#0088cc]/20 border border-[#0088cc]/30 transition-all">
                  <span>Telegram</span>
                </button>
                <button className="flex items-center gap-2 py-2 px-4 rounded-full bg-[#5865F2]/10 hover:bg-[#5865F2]/20 border border-[#5865F2]/30 transition-all">
                  <span>Discord</span>
                </button>
              </div>
            </div>
          </div>
          
          <Card className="crypto-card p-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Community Reviews</h3>
              
              {Array.from({ length: 3 }).map((_, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-muted/40 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-crypto-primary to-crypto-secondary"></div>
                    <div>
                      <div className="font-medium">Crypto{['Whale', 'Master', 'Trader'][idx]}_{Math.floor(Math.random() * 1000)}</div>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, starIdx) => (
                          <span key={starIdx} className="text-crypto-highlight text-xs">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">
                    {[
                      "Received my airdrop within hours of signing up. Easiest $500 I've ever made!",
                      "The NFTs I got from this drop are already trading at 2x the mint price. Amazing!",
                      "Their staking rewards are the best in the market right now. Highly recommended!"
                    ][idx]}
                  </p>
                </div>
              ))}
              
              <div className="flex items-center justify-between p-3 rounded-lg border border-crypto-accent/30">
                <div className="flex items-center gap-2">
                  <span className="text-crypto-accent">📊</span>
                  <span>Trust Score:</span>
                </div>
                <div className="text-crypto-accent font-bold">9.8/10</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CountdownSection;
