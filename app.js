const { render } = window.preact;
const { Router } = window.preactRouter;

import html from "./lib/html.js";
import Header from "./lib/components/Header.js";

import Home from "./lib/pages/Homepage.js";
import About from "./lib/pages/Aboutpage.js";

const app = html`
  <div>
    <${Header} />

    <div class="p-5">
      <${Router}>
        <${Home} path="/" />
        <${About} path="/about" />
      <//>
    </div>
  </div>
`;

render(app, document.body);
