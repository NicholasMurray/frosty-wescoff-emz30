import { useEffect, useState } from "react";
import Button from "./components/Button";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [posts, setPosts] = useState([]);

  const incrementCount = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <div className="outer">
        <div className="inner"> </div>
      </div>

      <h2>Start editing to see some magic happen!</h2>
      <div>Counter: {counter}</div>
      <Button incrementCount={incrementCount} />
      {posts ? (
        <ul>
          {posts.map((post) => (
            <li>{post.title}</li>
          ))}
        </ul>
      ) : (
        <div />
      )}
    </div>
  );
}

// https://jsonplaceholder.typicode.com/posts
