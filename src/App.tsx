
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NftCollection from "./pages/NftCollection";
import NftMint from "./pages/NftMint";
import AboutUs from "./pages/AboutUs";
import WalletConnectionProvider from "./components/WalletConnectionProvider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <WalletConnectionProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/collection" element={<NftCollection />} />
            <Route path="/mint" element={<NftMint />} />
            <Route path="/about" element={<AboutUs />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </WalletConnectionProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
