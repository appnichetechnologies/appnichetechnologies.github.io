import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full h-dvh">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
