import "./styles.css";
import Form from "./Form";
import Fetch from "./Fetch";

export default function App() {
  return (
    <div className="App">
      <div>
        <h3>Input Hook</h3>
        <Form />
      </div>
      <div>
        <h3>Fetch Hook</h3>
        <Fetch username="ramirezjacobc" />
      </div>
    </div>
  );
}
