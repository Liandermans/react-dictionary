import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>

        <main className="App-main">
          <Dictionary />
        </main>

        <footer className="App-footer">
          <small>
            Open-source code by Lianne de Winter on{" "}
            <a
              href="https://github.com/Liandermans/react-dictionary"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            , hosted on{" "}
            <a
              href="https://liannes-react-dictionary.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
