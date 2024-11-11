import {
  AppRating,
  Brands,
  Story,
  ExperienceSection,
  FeelSpecial,
  Footer,
  Header,
  HeroSection,
  MobileScroll,
  ProductShowcase,
  SecuritySection,
  WindowPeek,
} from "../components";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <Brands />
      <ExperienceSection />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeek />
      </div>
      <SecuritySection />
      <Story />
      <AppRating />
      <Footer />
    </>
  );
};

export default HomePage;
