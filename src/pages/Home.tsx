import Container from "../components/layout/Container";
import Hero from "../modules/home/Hero";

function Home() {
  return (
    <Container>
      <div className="mt-6">
        <Hero />
      </div>
    </Container>
  );
}

export default Home;
