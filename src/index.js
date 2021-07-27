import { StrictMode } from "react";
import {BrowserRouter as Router} from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { PersistGate } from 'redux-persist/integration/react';
import { store,persistor } from "./redux/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
        <Router>
            <PersistGate persistor={persistor}>
              <App />
            </PersistGate>
          </Router>
    </Provider>
  </StrictMode>,
  rootElement
);
