
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
  
  // Updated collections data with the new images
  const collections = [
    {
      id: 1,
      name: "Dragon Series",
      description: "Exclusive dragon-themed NFTs with elemental powers",
      image: "/lovable-uploads/87c68563-7a1d-4c73-99d1-613a69d2275f.png",
      items: 765,
      floorPrice: "0.45 ETH",
      category: "dragons"
    },
    {
      id: 2,
      name: "Lion Collection",
      description: "Majestic lions in various artistic styles",
      image: "/lovable-uploads/95240f0b-f18d-4f35-8fe6-9883a08c0cef.png",
      items: 342,
      floorPrice: "0.32 ETH",
      category: "animals"
    },
    {
      id: 3,
      name: "Splash Art",
      description: "Vibrant NFTs featuring splash art techniques",
      image: "/lovable-uploads/44e8b55d-838c-40fe-a033-3c09b73019c8.png",
      items: 521,
      floorPrice: "0.28 ETH",
      category: "abstract"
    },
    {
      id: 4,
      name: "Dragon Fury",
      description: "Ferocious dragons with unique abilities and traits",
      image: "/lovable-uploads/224eef78-2e6c-40fd-ac59-369f7e698ec5.png",
      items: 254,
      floorPrice: "0.52 ETH",
      category: "dragons"
    },
    {
      id: 5,
      name: "Silver Dragons",
      description: "Rare silver-scaled dragons with mythical powers",
      image: "/lovable-uploads/e6aa26b6-a4bb-4d91-b70c-7452aee6d525.png",
      items: 125,
      floorPrice: "0.47 ETH",
      category: "dragons"
    },
    {
      id: 6,
      name: "Mystic Realms",
      description: "Fantasy landscapes and mystical castles",
      image: "/lovable-uploads/83ca4947-311f-4d99-bf84-7d48cd8c688d.png",
      items: 389,
      floorPrice: "0.35 ETH",
      category: "landscapes"
    },
    {
      id: 7,
      name: "Mythical Creatures",
      description: "Unicorns and other legendary creatures from folklore",
      image: "/lovable-uploads/9e38d765-bdd9-4269-8864-2cbc59685bd1.png",
      items: 275,
      floorPrice: "0.38 ETH",
      category: "animals"
    },
    {
      id: 8,
      name: "Abstract Splashes",
      description: "Colorful abstract art with dynamic paint splashes",
      image: "/lovable-uploads/928fd561-364b-4284-95ec-d0e5323f38b8.png",
      items: 452,
      floorPrice: "0.25 ETH",
      category: "abstract"
    },
    {
      id: 9,
      name: "Cyber Portraits",
      description: "Futuristic digital portraits with cyberpunk aesthetics",
      image: "/lovable-uploads/2b4ae3dc-9048-4700-9ab9-b22fbec14ae3.png",
      items: 314,
      floorPrice: "0.41 ETH",
      category: "cyberpunk"
    },
    {
      id: 10,
      name: "Color Drip Series",
      description: "Artistic NFTs featuring unique drip painting techniques",
      image: "/lovable-uploads/5180964d-a3e5-4fa8-9df3-a3c6eacba0ea.png",
      items: 287,
      floorPrice: "0.29 ETH",
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
            <TabsList className="grid grid-cols-6 mb-8 bg-muted/30">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="dragons">Dragons</TabsTrigger>
              <TabsTrigger value="animals">Animals</TabsTrigger>
              <TabsTrigger value="abstract">Abstract</TabsTrigger>
              <TabsTrigger value="cyberpunk">Cyberpunk</TabsTrigger>
              <TabsTrigger value="landscapes">Landscapes</TabsTrigger>
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
