
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useWallet } from '@/components/WalletConnectionProvider';
import { toast } from "@/components/ui/sonner";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Wallet, Plus, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const NftMint = () => {
  const { isConnected, connectWallet } = useWallet();
  const [mintingStatus, setMintingStatus] = useState<'idle' | 'processing' | 'success'>('idle');
  const [selectedAmount, setSelectedAmount] = useState(1);
  const [selectedNft, setSelectedNft] = useState(1);
  
  // Dummy NFTs for minting
  const nfts = [
    {
      id: 1,
      name: "Crypto Punk #3478",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=300&h=300",
      price: "0.45 ETH",
      remaining: 7,
      traits: ["Rare", "Headwear", "Glasses"]
    },
    {
      id: 2,
      name: "Galactic Ape #103",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=300&h=300",
      price: "0.32 ETH",
      remaining: 12,
      traits: ["Epic", "Suit", "Laser Eyes"]
    },
    {
      id: 3,
      name: "Neon Rider #58",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=300&h=300",
      price: "0.28 ETH",
      remaining: 22,
      traits: ["Legendary", "Helmet", "Neon Glow"]
    }
  ];
  
  const selectedNftData = nfts.find(nft => nft.id === selectedNft);
  
  const handleMint = async () => {
    if (!isConnected) {
      try {
        await connectWallet();
      } catch (error) {
        return;
      }
    }
    
    setMintingStatus('processing');
    
    // Simulate minting process
    toast.info(`Minting ${selectedAmount} NFT${selectedAmount > 1 ? 's' : ''}...`, {
      description: "Please confirm the transaction in your wallet",
    });
    
    setTimeout(() => {
      setMintingStatus('success');
      toast.success(`Successfully minted ${selectedAmount} NFT${selectedAmount > 1 ? 's' : ''}!`, {
        description: "Check your wallet to see your new NFTs"
      });
    }, 2000);
  };

  const MintSteps = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {[
        { title: 'Connect Wallet', icon: <Wallet />, complete: isConnected },
        { title: 'Select Amount', icon: <Plus />, complete: selectedAmount > 0 },
        { title: 'Confirm & Mint', icon: <Check />, complete: mintingStatus === 'success' }
      ].map((step, index) => (
        <div key={index} className={cn(
          "flex items-center p-4 rounded-lg border", 
          step.complete ? "border-crypto-accent bg-crypto-accent/10" : "border-muted bg-muted/20"
        )}>
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center mr-3",
            step.complete ? "bg-crypto-accent" : "bg-muted"
          )}>
            {step.icon}
          </div>
          <div>
            <h3 className="font-medium">{step.title}</h3>
            <p className="text-xs text-gray-400">
              {step.complete ? "Completed" : "Pending"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-crypto-dark text-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-20 px-4 py-10">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 crypto-gradient-text">
              Mint Your NFT
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Secure your exclusive digital assets from our limited NFT collections.
            </p>
          </div>
          
          <MintSteps />
          
          <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
            <div className="md:col-span-2">
              <Tabs defaultValue="1" onValueChange={(value) => setSelectedNft(parseInt(value))}>
                <TabsList className="grid grid-cols-3 mb-4">
                  {nfts.map(nft => (
                    <TabsTrigger key={nft.id} value={nft.id.toString()}>
                      #{nft.id}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {nfts.map(nft => (
                  <TabsContent key={nft.id} value={nft.id.toString()}>
                    <Card className="crypto-card overflow-hidden">
                      <img 
                        src={nft.image} 
                        alt={nft.name} 
                        className="w-full h-64 object-cover"
                      />
                      <CardContent className="p-4">
                        <h3 className="font-bold text-lg">{nft.name}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {nft.traits.map((trait, idx) => (
                            <span 
                              key={idx} 
                              className="px-2 py-1 text-xs rounded-full bg-muted/40 border border-muted/60"
                            >
                              {trait}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
            
            <div className="md:col-span-3">
              <Card className="crypto-card h-full">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Mint Details</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Selected NFT</label>
                      <div className="p-3 rounded bg-muted/30 flex justify-between items-center">
                        <div>
                          <span className="block font-bold">{selectedNftData?.name}</span>
                          <span className="text-sm text-gray-400">Remaining: {selectedNftData?.remaining}</span>
                        </div>
                        <span className="font-bold text-crypto-primary">{selectedNftData?.price}</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Mint Amount</label>
                      <div className="flex items-center space-x-4">
                        {[1, 2, 5].map(amount => (
                          <Button
                            key={amount}
                            variant={selectedAmount === amount ? "default" : "outline"}
                            onClick={() => setSelectedAmount(amount)}
                            className={selectedAmount === amount ? "bg-crypto-primary" : ""}
                          >
                            {amount}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-muted/30">
                      <div className="flex justify-between mb-2">
                        <span>Price per NFT</span>
                        <span>{selectedNftData?.price}</span>
                      </div>
                      <div className="flex justify-between mb-6">
                        <span>Total Cost</span>
                        <span className="font-bold text-xl">
                          {parseFloat(selectedNftData?.price?.replace(' ETH', '') || '0') * selectedAmount} ETH
                        </span>
                      </div>
                      
                      <Button 
                        className="w-full crypto-button"
                        onClick={handleMint}
                        disabled={mintingStatus === 'processing'}
                      >
                        {!isConnected ? 'Connect Wallet to Mint' : 
                          mintingStatus === 'processing' ? 'Processing...' : 
                          mintingStatus === 'success' ? 'Minted Successfully!' : 
                          `Mint Now for ${parseFloat(selectedNftData?.price?.replace(' ETH', '') || '0') * selectedAmount} ETH`}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NftMint;
