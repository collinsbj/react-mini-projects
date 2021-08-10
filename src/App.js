import styles from "./App.module.scss";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import projects from "./projects";
import { useState } from "react";
import clsx from "clsx";

const convertToKebabCase = (string) => {
  return string
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");
};

function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className={clsx(styles.search, { [styles.open]: searchOpen })}>
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              onBlur={() => setSearchOpen(false)}
            ></input>
            <button onClick={() => setSearchOpen(!searchOpen)}>
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>
          <div className={styles.buttonWrapper}>
            {projects
              .sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
              })
              .filter((project) =>
                project.name.toLowerCase().includes(search.toLowerCase())
              )
              .map(({ name }, index) => {
                return (
                  <Link
                    key={`link${convertToKebabCase(name)}`}
                    to={convertToKebabCase(name)}
                    className={styles.button}
                    style={{ "--i": index + 1 }}
                  >
                    <h1>{name}</h1>
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
