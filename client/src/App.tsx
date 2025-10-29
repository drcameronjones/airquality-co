import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Team from "./pages/Team";
import WhyCleanAir from "./pages/WhyCleanAir";
import GetInvolved from "./pages/GetInvolved";
import AdminLeads from "./pages/AdminLeads";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/research"} component={Research} />
      <Route path="/team" component={Team} />
      <Route path="/why-clean-air" component={WhyCleanAir} />
      <Route path="/get-involved" component={GetInvolved} />
      <Route path={"/admin/leads"} component={AdminLeads} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
