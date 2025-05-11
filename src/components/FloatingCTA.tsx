
import React from 'react';
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-4 right-4 md:hidden z-50">
      <Button className="crypto-button animate-pulse-glow">
        Claim Airdrop
      </Button>
    </div>
  );
};

export default FloatingCTA;
