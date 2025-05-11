
import React, { createContext, useContext, useState } from 'react';
import { toast } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

interface WalletContextType {
  isConnected: boolean;
  walletAddress: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletConnectionProvider');
  }
  return context;
};

export const WalletConnectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    // In a real implementation, this would use Web3 libraries like ethers.js or web3.js
    // For now, we'll simulate a connection
    try {
      // Simulate connection delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Generate a mock wallet address
      const mockAddress = '0x' + Array(40).fill(0).map(() => 
        Math.floor(Math.random() * 16).toString(16)).join('');
      
      setWalletAddress(mockAddress);
      setIsConnected(true);
      
      toast.success("Wallet connected successfully!", {
        description: `Address: ${mockAddress.slice(0, 6)}...${mockAddress.slice(-4)}`,
      });
      
      return mockAddress;
    } catch (error) {
      toast.error("Failed to connect wallet", {
        description: "Please try again later",
      });
      throw error;
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress(null);
    toast.info("Wallet disconnected");
  };

  return (
    <WalletContext.Provider value={{ 
      isConnected, 
      walletAddress, 
      connectWallet, 
      disconnectWallet 
    }}>
      {children}
    </WalletContext.Provider>
  );
};

export const ConnectWalletButton = () => {
  const { isConnected, walletAddress, connectWallet, disconnectWallet } = useWallet();

  const handleClick = async () => {
    if (isConnected) {
      disconnectWallet();
    } else {
      await connectWallet();
    }
  };

  return (
    <Button 
      onClick={handleClick} 
      className={isConnected ? "bg-crypto-accent hover:bg-crypto-accent/90" : "crypto-button"}
      size="sm"
    >
      <Wallet size={16} />
      {isConnected 
        ? `${walletAddress?.slice(0, 6)}...${walletAddress?.slice(-4)}` 
        : "Connect Wallet"}
    </Button>
  );
};

export default WalletConnectionProvider;
