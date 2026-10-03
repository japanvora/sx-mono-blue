// components/bundle.js reads window.React when it loads, so React is put on the
// window first, in a module of its own (imports are hoisted).
import * as React from "react";
import * as ReactDOM from "react-dom";
window.React = React;
window.ReactDOM = ReactDOM;
