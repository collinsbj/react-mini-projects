import styles from "./App.module.scss";
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
          <div className={styles.buttonWrapper}>
            {projects
              .sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
              })
              .map(({ name }, index) => {
                return (
                  <Link
                    key={`link${convertToKebabCase(name)}`}
                    to={convertToKebabCase(name)}
                    className={styles.button}
                    style={{ "--i": index + 1 }}
                  >
                    <div>{name}</div>
                  </Link>
                );
              })}
          </div>
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
