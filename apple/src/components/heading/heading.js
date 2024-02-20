import "./heading.scss";

export default function Heading(pageName) {
  const h1 = document.createElement("h1");
  const body = document.querySelector("body");
  h1.textContent = `Webpack is awesome. This is ${pageName} page.`;
  body.appendChild(h1);
}
