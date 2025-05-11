
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NftMintingSection = () => {
  // Dummy NFT data for the showcase
  const nfts = [
    {
      id: 1,
      name: "Crypto Punk #247",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=300&h=300",
      price: "0.45 ETH",
      rarity: "Legendary",
      remaining: 7
    },
    {
      id: 2,
      name: "Galactic Ape #103",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=300&h=300", 
      price: "0.32 ETH",
      rarity: "Epic",
      remaining: 12
    },
    {
      id: 3,
      name: "Neon Rider #58",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=300&h=300",
      price: "0.28 ETH",
      rarity: "Rare",
      remaining: 22
    }
  ];

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
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {nfts.map((nft) => (
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
                <Button className="w-full bg-gradient-to-r from-crypto-secondary to-crypto-primary hover:opacity-90 transition-opacity">
                  Mint Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-crypto-primary text-crypto-primary hover:bg-crypto-primary/10">
            Explore All NFTs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NftMintingSection;
