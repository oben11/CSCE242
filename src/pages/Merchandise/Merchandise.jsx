import { Link } from "react-router-dom";
import Hero from "../../componets/Hero";
import ProductGrid from "./componets/ProductGrid";
import WhyShop from "./componets/WhyShop";


export default function Merchandise() {
  return (
    <>
    <title>Official Merchandise - Ollie's Coffee Company</title>
    <meta charset="UTF-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lora:wght@400;500;600&display=swap" rel="stylesheet"></link>
    <script src="../scripts/merchandiseLoader.js" defer></script>

      <Hero title="Official Merchandise" description="Show your love for Ollie's with our exclusive branded products" />
    <ProductGrid></ProductGrid>
    <WhyShop></WhyShop>
    </>
  );
}