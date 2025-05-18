
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const NftMintingSection = () => {
  // Updated NFT data with the new images
  const nfts = [
    {
      id: 1,
      name: "Dragon Eye #247",
      image: "/lovable-uploads/87c68563-7a1d-4c73-99d1-613a69d2275f.png",
      price: "0.45 ETH",
      rarity: "Legendary",
      remaining: 7
    },
    {
      id: 2,
      name: "Classic Lion #103",
      image: "/lovable-uploads/95240f0b-f18d-4f35-8fe6-9883a08c0cef.png", 
      price: "0.32 ETH",
      rarity: "Epic",
      remaining: 12
    },
    {
      id: 3,
      name: "Splash Lion #58",
      image: "/lovable-uploads/44e8b55d-838c-40fe-a033-3c09b73019c8.png",
      price: "0.28 ETH",
      rarity: "Rare",
      remaining: 22
    },
    {
      id: 4,
      name: "Dragon Fury #129",
      image: "/lovable-uploads/224eef78-2e6c-40fd-ac59-369f7e698ec5.png",
      price: "0.52 ETH",
      rarity: "Legendary",
      remaining: 5
    },
    {
      id: 5,
      name: "Silver Dragon #76",
      image: "/lovable-uploads/e6aa26b6-a4bb-4d91-b70c-7452aee6d525.png",
      price: "0.47 ETH",
      rarity: "Legendary",
      remaining: 6
    },
    {
      id: 6,
      name: "Mystic Castle #33",
      image: "/lovable-uploads/83ca4947-311f-4d99-bf84-7d48cd8c688d.png",
      price: "0.35 ETH",
      rarity: "Epic",
      remaining: 9
    },
    {
      id: 7,
      name: "Ice Unicorn #42",
      image: "/lovable-uploads/9e38d765-bdd9-4269-8864-2cbc59685bd1.png",
      price: "0.38 ETH",
      rarity: "Epic",
      remaining: 11
    },
    {
      id: 8,
      name: "Paint Splash #27",
      image: "/lovable-uploads/928fd561-364b-4284-95ec-d0e5323f38b8.png",
      price: "0.25 ETH",
      rarity: "Rare",
      remaining: 15
    },
    {
      id: 9,
      name: "Cyber Portrait #94",
      image: "/lovable-uploads/2b4ae3dc-9048-4700-9ab9-b22fbec14ae3.png",
      price: "0.41 ETH",
      rarity: "Epic",
      remaining: 8
    },
    {
      id: 10,
      name: "Color Drip #15",
      image: "/lovable-uploads/5180964d-a3e5-4fa8-9df3-a3c6eacba0ea.png",
      price: "0.29 ETH",
      rarity: "Rare",
      remaining: 18
    }
  ];

  // Display first 3 NFTs in the featured section
  const featuredNfts = nfts.slice(0, 3);
  
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🖼️ Exclusive NFT Drops – Mint Before Sold Out!
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-crypto-primary to-crypto-secondary rounded-full mx-auto"></div>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Limited-edition trading collections with high ROI potential
          </p>
        </div>
        
        {/* Featured NFTs */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {featuredNfts.map((nft) => (
            <Card key={nft.id} className="crypto-card overflow-hidden">
              <div className="relative">
                <img 
                  src={nft.image}
                  alt={nft.name}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium">{nft.price}</span>
                </div>
                <div className="absolute top-2 left-2 bg-gradient-to-r from-crypto-primary to-crypto-secondary px-3 py-1 rounded-full">
                  <span className="text-sm font-medium">{nft.rarity}</span>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">{nft.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-300">Remaining: {nft.remaining}</span>
                  <div className="flex items-center">
                    <span className="text-sm text-crypto-accent font-medium">Trending</span>
                    <span className="ml-1 text-crypto-accent">🔥</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-crypto-secondary to-crypto-primary hover:opacity-90 transition-opacity" 
                        asChild>
                  <Link to="/mint">Mint Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Full NFT Collection Carousel */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Explore Our Full Collection</h3>
          
          <Carousel className="max-w-6xl mx-auto">
            <CarouselContent>
              {nfts.map((nft) => (
                <CarouselItem key={nft.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card className="crypto-card h-full overflow-hidden">
                    <div className="relative">
                      <img 
                        src={nft.image}
                        alt={nft.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded-full text-xs">
                        {nft.price}
                      </div>
                    </div>
                    
                    <CardContent className="p-3">
                      <h4 className="font-bold text-sm mb-1">{nft.name}</h4>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-crypto-accent">{nft.rarity}</span>
                        <span className="text-xs">Left: {nft.remaining}</span>
                      </div>
                      <Button className="w-full text-sm py-1 h-auto bg-gradient-to-r from-crypto-secondary to-crypto-primary hover:opacity-90 transition-opacity" 
                              size="sm"
                              asChild>
                        <Link to="/mint">Mint</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </div>
          </Carousel>
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-crypto-primary text-crypto-primary hover:bg-crypto-primary/10" asChild>
            <Link to="/collection">View All NFTs</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NftMintingSection;
