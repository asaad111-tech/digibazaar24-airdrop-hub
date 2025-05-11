
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-4 right-4 md:hidden z-50">
      <Link to="/mint">
        <Button className="crypto-button animate-pulse-glow">
          Claim Airdrop
        </Button>
      </Link>
    </div>
  );
};

export default FloatingCTA;
