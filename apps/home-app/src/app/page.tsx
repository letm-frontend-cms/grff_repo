import HomePage from "@/components/HomePage";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import "../app/globals.css";  

export default function Home() {
  return <>
    <Header />
    <HomePage />
    <Footer />
  </>;
}
