import "./styles/global.scss";
import "./styles/variables.scss";
import Number from "./components/Number/Number";

function App() {
  const targetDate = new Date("June 17, 2023 23:59:59").getTime();

  return (
    <section className="section">
      <h1 className="title">MY BIRTHDAY</h1>

      <Number targetDate={targetDate} />

      <figure className="figureStars">
        <img className="imgStars" src="/images/bg-stars.svg" />
      </figure>

      <section className="sectionSocialMedia">
        <a href="https://www.linkedin.com/in/camila-cor%C3%A9/" target="_blank">
          <img src="/images/linkedin.png" />
        </a>
        <a href="https://github.com/Camisbeth" target="_blank">
          <img src="/images/github.png" />
        </a>
      </section>

      <figure className="figureHills">
        <img className="imgHills" src="/images/pattern-hills.svg" />
      </figure>
    </section>
  );
}

export default App;
