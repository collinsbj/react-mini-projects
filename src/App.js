import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import projects from "./projects";

const convertToKebabCase = (string) => {
  return string
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");
};

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {projects.map(({ name }) => {
            return (
              <Link
                key={`link${convertToKebabCase(name)}`}
                to={convertToKebabCase(name)}
              >
                <button>{name}</button>
              </Link>
            );
          })}
        </Route>
        {projects.map(({ Component, name }) => {
          return (
            <Route
              key={`route${convertToKebabCase(name)}`}
              exact
              path={`/${convertToKebabCase(name)}`}
            >
              {Component}
            </Route>
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
