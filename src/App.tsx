import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import HumanCentredAI from "./pages/HumanCentredAI";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Sitemap from "./pages/Sitemap";
import Telecommunications from "./pages/Telecommunications";
import Education from "./pages/Education";
import AiSalesLeadGenerator from "./pages/AiSalesLeadGenerator";
import Enterprise from "./pages/Enterprise";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/human-centred-ai" element={<HumanCentredAI />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/telecommunications" element={<Telecommunications />} />
            <Route path="/education" element={<Education />} />
            <Route path="/ai-sales-lead-generator" element={<AiSalesLeadGenerator />} />
            <Route path="/enterprise" element={<Enterprise />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
