import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HotProducts } from "./components/HotProducts";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProductsPage } from "./components/ProductsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateToProducts = () => {
    setCurrentPage("products");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (currentPage === "products") {
    return (
      <div className="min-h-screen">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        <main>
          <ProductsPage />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        <Hero onNavigateToProducts={handleNavigateToProducts} />
        <HotProducts onNavigateToProducts={handleNavigateToProducts} />
        <About />
        <Products />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}