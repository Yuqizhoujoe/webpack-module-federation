import "./hello-world-button.scss";
export default function HelloWorldButton() {
  const button = document.createElement("button");
  const body = document.querySelector("body");
  button.innerHTML = "Hello World!";
  button.onclick = function () {
    const p = document.createElement("p");
    p.textContent = "Hello World";
    p.classList.add("hello-world-text");
    body.appendChild(p);
  };
  button.classList.add("hello-world-button");
  body.appendChild(button);
}
