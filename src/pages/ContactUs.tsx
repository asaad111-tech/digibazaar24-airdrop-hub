
import React from 'react';
import { Mail, Phone, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ConnectWalletButton } from "@/components/WalletConnectionProvider";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-crypto-dark pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center crypto-gradient-text">Contact DigiBazaar24 by NFTerra</h1>
        <h2 className="text-xl md:text-2xl font-medium text-center mb-8">Get in Touch – We're Here to Help!</h2>
        <p className="text-gray-300 text-center mb-10 max-w-2xl mx-auto">
          Need support with your NFT airdrop claim? Questions about minting? Want to collaborate? Reach out below!
        </p>

        <div className="bg-crypto-darker rounded-xl p-6 md:p-8 mb-10 shadow-glow">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Mail className="mr-2 h-6 w-6 text-primary" /> How to Reach Us
          </h3>
          
          <div className="space-y-8">
            {/* General Inquiries */}
            <div className="bg-muted/10 p-5 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">1. General Inquiries & Support</h4>
              <div className="flex items-center mb-1">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span className="text-gray-300">Email: digibazaar24@gmail.com</span>
              </div>
              <p className="text-gray-400 text-sm ml-6">⏳ Response Time: Within 24 hours</p>
            </div>
            
            {/* Business & Partnerships */}
            <div className="bg-muted/10 p-5 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">2. Business & Partnerships</h4>
              <p className="text-gray-300 mb-1">🤝 For brands, artists, and DAOs:</p>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span className="text-gray-300">Email: nfterranft@gmail.com</span>
              </div>
            </div>
            
            {/* Technical Support */}
            <div className="bg-muted/10 p-5 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">3. Technical Support</h4>
              <p className="text-gray-300 mb-1">🔧 Contract/minting issues?</p>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span className="text-gray-300">Email: digibazaar24@gmail.com (Subject: "URGENT - Tech Support")</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="bg-crypto-darker rounded-xl p-6 md:p-8 mb-10 shadow-glow">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Twitter className="mr-2 h-6 w-6 text-primary" /> Social Media & Communities
          </h3>
          <p className="text-gray-300 mb-6">
            Join our communities for updates, giveaways, and alpha:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center p-3 bg-muted/10 rounded-lg">
              <Twitter className="h-5 w-5 mr-3 text-primary" />
              <div>
                <div className="text-sm text-gray-400">𝕏 Twitter (X)</div>
                <div>@NfterraNft</div>
              </div>
            </div>
            <div className="flex items-center p-3 bg-muted/10 rounded-lg">
              <div className="h-5 w-5 mr-3 text-primary flex items-center justify-center">
                <span className="text-primary font-bold">D</span>
              </div>
              <div>
                <div className="text-sm text-gray-400">Discord</div>
                <div>Nfterratech_76637</div>
              </div>
            </div>
            <div className="flex items-center p-3 bg-muted/10 rounded-lg">
              <div className="h-5 w-5 mr-3 text-primary flex items-center justify-center">
                <span className="text-primary font-bold">TG</span>
              </div>
              <div>
                <div className="text-sm text-gray-400">Telegram</div>
                <div>@Nfterratech</div>
              </div>
            </div>
            <div className="flex items-center p-3 bg-muted/10 rounded-lg">
              <Youtube className="h-5 w-5 mr-3 text-primary" />
              <div>
                <div className="text-sm text-gray-400">YouTube</div>
                <div>@NftNFTerra</div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Alert Section */}
        <div className="bg-crypto-darker rounded-xl p-6 md:p-8 mb-10 shadow-glow">
          <h3 className="text-2xl font-bold mb-6 text-red-500 flex items-center">
            🚨 Security Alert
          </h3>
          <p className="text-red-400 font-medium mb-4">⚠️ WE WILL NEVER:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-300">
            <li>DM you first asking for funds</li>
            <li>Request your private key or seed phrase</li>
            <li>Send "secret mint" links outside official channels</li>
          </ul>
          
          <p className="text-gray-300 mb-4">✅ Always verify links through our official domains:</p>
          <div className="space-y-4">
            <div>
              <h4 className="text-primary font-medium mb-2">🔗 DigiBazaar24 Official:</h4>
              <ul className="list-disc pl-6 space-y-1 text-gray-300">
                <li>www.digibazaar24.online</li>
                <li>www.digibazaar24.site</li>
                <li>www.digibazaar24.shop</li>
              </ul>
            </div>
            <div>
              <h4 className="text-primary font-medium mb-2">🔗 NFTerra Verified:</h4>
              <ul className="list-disc pl-6 space-y-1 text-gray-300">
                <li>www.nfterratech.store</li>
                <li>www.nfterratech.online</li>
                <li>www.nfterratech.site</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-crypto-darker rounded-xl p-6 md:p-8 mb-10 shadow-glow">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            📌 Before You Contact Us...
          </h3>
          
          <h4 className="text-lg font-medium mb-4">FAQ Quick Answers</h4>
          <div className="space-y-4 mb-8">
            <div>
              <p className="text-gray-300 font-medium">❓ How to claim the $500 airdrop?</p>
              <p className="text-gray-400 ml-6">➡️ Connect wallet → Click "Claim Airdrop" on homepage.</p>
            </div>
            <div>
              <p className="text-gray-300 font-medium">❓ Transaction failed?</p>
              <p className="text-gray-400 ml-6">➡️ Check gas fees + wallet balance. Still stuck? Email us with:</p>
              <ul className="list-disc pl-12 text-gray-400">
                <li>Wallet address</li>
                <li>Transaction hash (if any)</li>
              </ul>
            </div>
            <div>
              <p className="text-gray-300 font-medium">❓ Where to view my NFTs?</p>
              <p className="text-gray-400 ml-6">➡️ Check OpenSea: [Collection Link TBD]</p>
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="pt-6 border-t border-gray-700">
            <h4 className="text-lg font-medium mb-4">✨ Stay Updated</h4>
            <p className="text-gray-300 mb-4">Subscribe for exclusive drops:</p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md">
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="bg-muted/20 border-muted/30"
              />
              <Button variant="default">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-300 mb-6">
            Thanks for being part of the NFTerra & DigiBazaar24 revolution!<br />
            🚀 Where next-gen NFTs meet real rewards.
          </p>
          <ConnectWalletButton />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
