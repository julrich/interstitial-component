/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn run schema` to regenerate this file.
 */

/**
 * Title for interstitial
 */
export type Title = string;
/**
 * Text content to display inside the interstitial
 */
export type Body = string;
/**
 * URL / href for the link to point to
 */
export type TargetHref = string;
/**
 * Label to use for the link
 */
export type Label = string;

/**
 * Component used to interject prominent call-to-action into content
 */
export interface InterstitialProps {
  title: Title;
  body: Body;
  link?: Link;
  [k: string]: unknown;
}
/**
 * Link added to the interstitial
 */
export interface Link {
  target?: TargetHref;
  text?: Label;
  [k: string]: unknown;
}