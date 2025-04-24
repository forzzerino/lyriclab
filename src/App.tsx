import { ThemeProvider } from "@/components/theme-provider";
import { Footer2 } from "./components/footer2";
import { Navbar1 } from "./components/navbar1";
import LyricsForm from "./components/lyrics-form";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Toaster } from "@/components/ui/sonner";
import { Routes, Route } from "react-router-dom";
import Techs from "./pages/techs";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen flex flex-col">
        <Navbar1 />
        <Toaster position="top-right" richColors closeButton />
        <main className="flex-1 ">{children}</main>
        <Spotlight />
        <Footer2 />
      </div>
    </ThemeProvider>
  );
}
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <LyricsForm />
          </Layout>
        }
      />
      <Route
        path="/bilgi"
        element={
          <Layout>
            <Techs />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
