
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ProjectAnnouncementSection = () => {
  return (
    <div className="py-20 px-4 bg-crypto-darker">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            💡 Coming Soon: NFTerra's DeFi Lending & Mining Platform
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-crypto-primary to-crypto-secondary rounded-full mx-auto"></div>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Experience the future of decentralized finance with our innovative platform
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="crypto-card">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-crypto-primary to-crypto-secondary flex items-center justify-center mb-4">
                <span className="text-2xl">🔐</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Secure DeFi Lending</h3>
              <p className="text-gray-300 mb-4">
                Borrow against your crypto assets with the most competitive rates in the market
              </p>
              <ul className="text-sm text-left space-y-2 self-stretch">
                <li className="flex items-center gap-2">
                  <span className="text-crypto-accent">✓</span>
                  <span>Up to 90% LTV ratio</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-crypto-accent">✓</span>
                  <span>No credit checks</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-crypto-accent">✓</span>
                  <span>Interest rates from 3% APR</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="crypto-card">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-crypto-primary to-crypto-secondary flex items-center justify-center mb-4">
                <span className="text-2xl">⛏️</span>
              </div>
              <h3 className="text-lg font-bold mb-2">High-GHz Mining</h3>
              <p className="text-gray-300 mb-4">
                Start mining with our high-performance cloud mining solution
              </p>
              <ul className="text-sm text-left space-y-2 self-stretch">
                <li className="flex items-center gap-2">
                  <span className="text-crypto-accent">✓</span>
                  <span>$500 new user bonus</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-crypto-accent">✓</span>
                  <span>No hardware setup required</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-crypto-accent">✓</span>
                  <span>Daily payouts in BTC & ETH</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="crypto-card sm:col-span-2 lg:col-span-1">
            <CardContent className="p-6 flex flex-col items-center text-center h-full justify-between">
              <div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-crypto-primary to-crypto-secondary flex items-center justify-center mb-4">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Early Adopter Perks</h3>
                <p className="text-gray-300 mb-4">
                  Join the waitlist now and receive exclusive benefits when we launch
                </p>
              </div>
              
              <div className="crypto-card w-full p-4 mb-4">
                <div className="text-xl font-bold crypto-gradient-text mb-1">50% OFF</div>
                <div className="text-sm text-gray-300">Platform fees for 6 months</div>
              </div>
              
              <Button className="w-full crypto-button">
                Join Waitlist
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectAnnouncementSection;
