import {
  Navbar,
  Hero,
  UpcomingExams,
  ExamCards,
  Stats,
  FAQ,
  Subscribe,
  Footer,
} from "./components/index";
function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <UpcomingExams />
        <ExamCards />
        <Stats />
        <FAQ />
        <Subscribe />
        <Footer />
      </main>
    </>
  );
}

export default App;
