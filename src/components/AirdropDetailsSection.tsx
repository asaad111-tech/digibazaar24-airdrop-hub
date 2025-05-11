
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AirdropDetailsSection = () => {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🎁 How to Claim Your Free Crypto & NFTs
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-crypto-primary to-crypto-secondary rounded-full mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="crypto-card p-6">
            <CardContent className="p-0 space-y-4">
              <div className="rounded-lg bg-gradient-to-r from-crypto-primary/20 to-crypto-secondary/20 p-4">
                <h3 className="text-xl font-bold mb-4 crypto-gradient-text">Exclusive Airdrop Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-crypto-accent mr-2">✅</span>
                    <span>Instant $500 in ETH & MATIC for eligible users</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-crypto-accent mr-2">🚀</span>
                    <span>Free high-value NFTs from trending collections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-crypto-accent mr-2">🔎</span>
                    <span>Early access to premium trading tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-crypto-accent mr-2">💰</span>
                    <span>Exclusive discount on trading fees</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-destructive/10 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-destructive">⏳</span>
                  <span className="font-medium">Only 250 slots remaining</span>
                </div>
                <span className="text-destructive font-medium">Act fast!</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="crypto-card p-6">
            <CardContent className="p-0 space-y-4">
              <div className="rounded-lg bg-gradient-to-r from-crypto-primary/20 to-crypto-secondary/20 p-4">
                <h3 className="text-xl font-bold mb-4 crypto-gradient-text">How to Participate</h3>
                <ol className="space-y-3 list-decimal list-inside">
                  <li className="pl-2">Register your crypto wallet address</li>
                  <li className="pl-2">Complete simple social media tasks</li>
                  <li className="pl-2">Invite friends for bonus rewards</li>
                  <li className="pl-2">Receive tokens directly to your wallet</li>
                </ol>
              </div>
              
              <div className="flex justify-center">
                <Button className="w-full md:w-auto crypto-button">
                  Register Wallet Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AirdropDetailsSection;
