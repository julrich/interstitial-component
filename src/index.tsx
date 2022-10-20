import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "@kickstartds/design-system/dist/index.css";

import { Interstitial } from "./InterstitialComponent";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div className="container">
      <Interstitial
        title="Dont know where to start?"
        body="Autem voluptas quis facere et qui voluptate earum. Dolorum totam animi perferendis."
        link={{
          target: "#",
          text: "Get in touch"
        }}
      />
    </div>
  </StrictMode>,
  rootElement
);
