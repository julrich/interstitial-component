import React, { FunctionComponent, HTMLAttributes } from "react";

import { Storytelling } from "@kickstartds/content";

import { InterstitialProps } from "./InterstitialProps";

export const Interstitial: FunctionComponent<
  InterstitialProps & HTMLAttributes<HTMLDivElement>
> = ({ title, body, link, ...props }) => (
  <Storytelling
    backgroundColor="#06566A"
    backgroundImage="https://www.kickstartDS.com/img/recipes/graphics--bg.svg"
    ks-inverted="true"
    box={{
      hAlign: "left",
      headline: {
        content: title,
        level: "h2",
        styleAs: "h1",
        subheadline: body
      },
      link: link
        ? {
            href: link.target,
            label: link.text,
            variant: "solid"
          }
        : {}
    }}
    {...props}
  />
);
