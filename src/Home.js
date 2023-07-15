import Hero from "./components/Hero/Hero";
import Wrapper from "./components/Wrapper/Wrapper";
import "./scss/global.scss";

export default function Home() {
  return (
    <div className="App">
      <Wrapper >

        <Hero/>

      </Wrapper>
    </div>
  );
}
