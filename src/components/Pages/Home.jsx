import React from "react";


import Hero from "../Hero";
import CategorySection from "../CategorySection";
import FeaturedProducts from "../FeatureProducts";
import HotDealsBanner from "./HotDealer";
import ProductGridThreeColumn from "./ProductGrid";
import FeaturesSection from "./FeatureSec";

const Home = () => {
  return (
    <>
      <Hero/>
      <CategorySection/>
      <FeaturedProducts/>
      <HotDealsBanner/>
      <ProductGridThreeColumn/>
      <FeaturesSection/>
      
    </>
  );
};

export default Home;