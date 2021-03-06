import React, { FC } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInfoCircle,
  faTimesCircle,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

import Alerts from "components/layout/Alerts";
import HelloWorld from "components/HelloWorld";
import Web3Connect from "components/layout/Web3Connect";

import AlertState from "context/alert/AlertState";
import Web3State from "context/web3/Web3State";

import "./App.css";

library.add(faInfoCircle, faTimesCircle, faExclamationTriangle, faEthereum);

const App: FC = () => (
  <AlertState>
    <Web3State>
      <Alerts />
      <HelloWorld />
      <Web3Connect />
    </Web3State>
  </AlertState>
);

export default App;
