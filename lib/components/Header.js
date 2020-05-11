import html from "../html.js";

const Header = () => html`
  <nav class="bg-green-500 p-3 text-white">
    <a class="inline-block p-2 hover:bg-green-600" href="/">Home</a>
    <a class="inline-block p-2 hover:bg-green-600" href="/about">About</a>
  </nav>
`;

export default Header;
