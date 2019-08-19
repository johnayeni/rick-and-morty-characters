import React from "react";
import ReactDOM from "react-dom";
import RootComponent from "./components/RootComponent";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo-hooks";
import "./styles.css";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql"
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RootComponent />
    </ApolloProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
