import { createGlobalStyle } from 'styled-components'

import { fonts } from './fonts.styles'

const GlobalStyle = createGlobalStyle`
  ${fonts}

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  :root {
    -moz-tab-size: 4;
    tab-size: 4;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif; 
  }

  hr {
    height: 0;
    color: inherit;
  }

  abbr[title] {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder
  }

  code,
  kbd,
  samp,
  pre {
    font-family: ui-monospace,SFMono-Regular,Consolas,'Liberation Mono',Menlo,monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: -.25em
  }
  
  sup {
    top: -.5em
  }

  table {
    text-indent: 0;
    border-color: inherit
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    margin:0;
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type=button],
  [type=reset],
  [type=submit] {
    -webkit-appearance: button;
  }

  ::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  :-moz-ui-invalid {
    box-shadow: none;
  }

  legend {
    padding: 0;
  }

  progress {
    vertical-align: baseline;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  [type=search] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  summary {
    display: list-item;
  }

  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  button {
    background-color: transparent;
    background-image: none;
  }

  button:focus {
    outline: none;
  }

  fieldset {
    margin: 0;
    padding: 0;
  }
  
  ol,
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  html{
    font-family: 'Montserrat', sans-serif;
    line-height: 1.5;
  }

  body{
    font-family: inherit;
    line-height: inherit;
  }

  html,
  body,
  #reactor {
    height: 100%;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
  }

  hr {
    border-top-width: 1px;
  }

  img {
    border-style: solid;
  }

  textarea {
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    opacity: 1;
    color: #9ca3af;
  }

  button,
  [role=button] {
    cursor: pointer;
  }

  table {
    border-collapse: collapse;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    padding: 0;
    line-height: inherit;
    color: inherit;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block; 
    vertical-align: middle;
  }

  img,
  video {
    max-width: 100%;
    height: auto;
  }
`
export default GlobalStyle
