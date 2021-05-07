import "./styles.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import MyServices from "./components/MyServices";
export default function App() {
  return (
    <div>
      <Nav />
      <Main />
      <MyServices />
      {/* TODO: project seciton footer contact form */}
    </div>
  );
}
