import React from "react";
import FeedBackForm from "../sections/MainPage/form";
import AdvantagesSection from "../sections/MainPage/advantages";
import CalculatorSection from "../sections/MainPage/calculator";
import HeroBlock from "../sections/MainPage/hero";

const Main = () => {
    return (
      <main>
        <HeroBlock />
        <AdvantagesSection />
        <CalculatorSection />
        <FeedBackForm />
      </main>
    );
};

export default Main;
