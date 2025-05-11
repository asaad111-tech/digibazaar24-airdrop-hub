
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useWallet } from '@/components/WalletConnectionProvider';
import { toast } from "@/components/ui/sonner";
import { useIsMobile } from '@/hooks/use-mobile';
import { Image, Link } from 'lucide-react';

const NftCollection = () => {
  const { isConnected } = useWallet();
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("all");
  
  // Dummy NFT collections data
  const collections = [
    {
      id: 1,
      name: "Crypto Punks",
      description: "Iconic pixelated characters with unique attributes",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=300&h=300",
      items: 10000,
      floorPrice: "0.45 ETH",
      category: "avatars"
    },
    {
      id: 2,
      name: "Galactic Apes",
      description: "Space-themed primate collection with cosmic attributes",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=300&h=300",
      items: 8888,
      floorPrice: "0.32 ETH",
      category: "animals"
    },
    {
      id: 3,
      name: "Neon Riders",
      description: "Cyberpunk motorcycle enthusiasts from the future",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=300&h=300",
      items: 5000,
      floorPrice: "0.28 ETH",
      category: "cyberpunk"
    },
    {
      id: 4,
      name: "Digital Dreams",
      description: "Abstract art pieces representing digital consciousness",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=300&h=300",
      items: 3000,
      floorPrice: "0.15 ETH",
      category: "abstract"
    }
  ];

  // Filter collections based on active tab
  const filteredCollections = activeTab === "all" 
    ? collections 
    : collections.filter(col => col.category === activeTab);

  const handleMint = (collectionId: number) => {
    if (!isConnected) {
      toast.error("Wallet not connected", {
        description: "Please connect your wallet first to mint NFTs",
        action: {
          label: "Connect",
          onClick: () => window.location.href = "/mint",
        },
      });
      return;
    }
    
    toast.success("Preparing mint transaction", {
      description: "Please confirm in your wallet to complete the mint",
    });
  };

  return (
    <div className="min-h-screen bg-crypto-dark text-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-20 px-4">
        <div className="container mx-auto mt-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 crypto-gradient-text">
              NFT Collections
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Browse and mint from our exclusive NFT collections. Each piece is unique and offers special benefits.
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-5 mb-8 bg-muted/30">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="avatars">Avatars</TabsTrigger>
              <TabsTrigger value="animals">Animals</TabsTrigger>
              <TabsTrigger value="cyberpunk">Cyberpunk</TabsTrigger>
              <TabsTrigger value="abstract">Abstract</TabsTrigger>
            </TabsList>
            
            <TabsContent value={activeTab} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCollections.map((collection) => (
                  <Card key={collection.id} className="crypto-card overflow-hidden">
                    <div className="relative">
                      <img 
                        src={collection.image} 
                        alt={collection.name} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-sm font-medium">{collection.floorPrice}</span>
                      </div>
                    </div>
                    
                    <CardContent className="p-5">
                      <h3 className="font-bold text-xl mb-2">{collection.name}</h3>
                      <p className="text-sm text-gray-300 mb-4">{collection.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm">Items: {collection.items}</span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-crypto-primary text-crypto-primary hover:bg-crypto-primary/10"
                          onClick={() => window.location.href = `/collection/${collection.id}`}
                        >
                          <Link size={14} className="mr-1" />
                          View
                        </Button>
                      </div>
                      
                      <Button 
                        className="w-full bg-gradient-to-r from-crypto-secondary to-crypto-primary hover:opacity-90 transition-opacity"
                        onClick={() => handleMint(collection.id)}
                      >
                        Mint NFT
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NftCollection;
