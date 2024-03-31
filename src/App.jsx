import { Fragment } from "react";
import Hero from "./Componets/Hero";
import { ScrollBar } from "./Componets/ScrollBar";
import GridLayout from "./Componets/GridLayout";
import { CompanyStatus } from "./Componets/CompanyStatus";
import { Services } from "./Componets/Services";

import Platform from "./Componets/Platform";
import Footer from "./Componets/Footer";
import AccordionAlwaysOpen from "./Componets/AccordionAlwaysOpen";

// import "./App.css";

function App() {
  return (
    <Fragment>
      <div className="overflow-x-hidden">
        <Hero />
        <ScrollBar />
        <GridLayout />
        <CompanyStatus />
        <Services />
        <AccordionAlwaysOpen />
        <Platform />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
