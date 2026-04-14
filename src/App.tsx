import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import BusinessAddress from "./pages/BusinessAddress.tsx";
import FullTimeOffices from "./pages/FullTimeOffices.tsx";
import ConferenceRooms from "./pages/ConferenceRooms.tsx";
import Payments from "./pages/Payments.tsx";
import SchedulerGuide from "./pages/SchedulerGuide.tsx";
import FAQs from "./pages/FAQs.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/business-address" element={<BusinessAddress />} />
          <Route path="/services/full-time-offices" element={<FullTimeOffices />} />
          <Route path="/services/conference-rooms" element={<ConferenceRooms />} />
          <Route path="/resources/payments" element={<Payments />} />
          <Route path="/resources/scheduler-guide" element={<SchedulerGuide />} />
          <Route path="/resources/faqs" element={<FAQs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
