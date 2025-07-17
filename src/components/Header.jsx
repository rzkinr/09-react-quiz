import logo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={logo} alt='Quiz Logo' />
      <h1>Quiz App</h1>
    </header>
  );
}
