import Header from "./components/Header";
import Section from "./components/Section";
function App() {
  return (
    <>
      <Header />
      <Section
        heading="Model 3"
        tagline="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        photo="model-3.jpg"
        downArrow="down-arrow.svg"
      />
      <Section
        heading="Model Y"
        tagline="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        photo="model-y.jpg"
      />
      <Section
        heading="Model S"
        tagline="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        photo="model-s.jpg"
      />
      <Section
        heading="Model X"
        tagline="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        photo="model-x.jpg"
      />
      <Section
        heading="Solar Panels"
        tagline="Lower Cost Solar Panels in India"
        leftBtn="Order Now"
        rightBtn="Learn More"
        photo="solar-panel.jpg"
      />
      <Section
        heading="Solar Roof"
        tagline="Produce Clean Energy from your roof"
        leftBtn="Order Now"
        rightBtn="Learn More"
        photo="solar-roof.jpg"
      />
      <Section
        heading="Accessories"
        leftBtn="Custom Order"
        photo="accessories.jpg"
      />
    </>
  );
}

export default App;
