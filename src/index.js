import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.jpg" alt="Wendy" />;
}

function Intro() {
  return (
    <div>
      <h1>Wendy Wang</h1>
      <p>
        Student in UWA persuing her master's degree in IT. When not coding or
        studying, I like to watch movies, to play computer games, or to just
        take a walk at the city.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="🥺" color="blue" />
      <Skill skill="HTML+CSS" emoji="👍" color="orange" />
      <Skill skill="Python" emoji="😏" color="green" />
      <Skill skill="Javascript" emoji="😢" color="yellow" />
      <Skill skill="SQL" emoji="😏" color="pink" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
