
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApplicationProvider } from "@/lib/applicationContext";
import { FormProvider } from "@/lib/formContext";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Application from "./pages/Application";
import ThankYou from "./pages/ThankYou";
import DocumentCollection from "./pages/DocumentCollection";
import PreQualification from "./pages/PreQualification";
import TrackingScripts from "./components/common/TrackingScripts";
import AdminButton from "./components/admin/AdminButton";
import AdminLogin from "./pages/AdminLogin";
import AdminConsole from "./pages/AdminConsole";
import CrmApplication from "./pages/CrmApplication";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ApplicationProvider>
      <FormProvider>
        <HelmetProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <TrackingScripts />
              <AdminButton />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/pre-qualification" element={<PreQualification />} />
                <Route path="/application" element={<Application />} />
                <Route path="/crm-application" element={<CrmApplication />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/documents" element={<DocumentCollection />} />
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/admin/console" element={<AdminConsole />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </HelmetProvider>
      </FormProvider>
    </ApplicationProvider>
  </QueryClientProvider>
);

export default App;
