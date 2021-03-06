# vidom [![Build Status](https://secure.travis-ci.org/dfilatov/vidom.png)](http://travis-ci.org/dfilatov/vidom) [![npm version](https://badge.fury.io/js/vidom.svg)](http://badge.fury.io/js/vidom)
[![Sauce Test Status](https://saucelabs.com/browser-matrix/dfilatov81.svg)](https://saucelabs.com/u/dfilatov81)

Vidom is just a library to build UI. It's highly inspired and based on ideas from [React](https://facebook.github.io/react/). Its main goal is to provide as fast as possible lightweight implementation with API similar to React. According to the corresponding [benchmark](http://vdom-benchmark.github.io/vdom-benchmark/) Vidom is 15x faster in Chrome, 10x faster in Firefox and 2x faster in IE than React.

## Main features
  * Fast virtual DOM builder and patcher under the hood
  * Easy and clear way to subscribe to DOM Events
  * API to build your own high-level components
  * Server-side rendering with the ability to reuse existing DOM in the browsers also known as isomorphism.
  * Namespaces support (e.g., SVG, MathML)
  * No extra markup in the result HTML
  * JSX support via babel plugin
  * Small footprint, about 7KB after gzip

## Documentation
  * [Getting started](../../wiki/Getting-started)
  * [Tutorial](../../wiki/Tutorial)
  * [Top-level API](../../wiki/Top-Level-API)
  * [TagNode API](../../wiki/TagNode-API)
  * [ComponentNode API](../../wiki/ComponentNode-API)
  * [FunctionComponentNode API](../../wiki/FunctionComponentNode-API)
  * [DOM Events API](../../wiki/DOM-Events-API)
  * [Component lifecycle](../../wiki/Component-lifecycle)
  * [Component methods](../../wiki/Component-methods)
  * [JSX](../../wiki/JSX)
  * [Isomorphism](../../wiki/Isomorphism)
  * [FAQ](../../wiki/FAQ)
 
## Examples
  * [TodoMVC](http://dfilatov.github.io/vidom-todomvc/) ([source](https://github.com/dfilatov/vidom-todomvc))
