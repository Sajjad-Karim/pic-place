import React from "react";
import HeroSection from "../../components/hero-section/HeroSection";
import PhotoGallery from "../../components/photo-gallery/PhotoGallery";
import Wrapper from "../../components/wrapper/Wrapper";
const Home = () => {
  return (
    <>
      <Wrapper>
        <HeroSection />
      </Wrapper>
      <PhotoGallery />
    </>
  );
};

export default Home;
