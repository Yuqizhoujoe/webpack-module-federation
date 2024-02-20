import "./image-caption.scss";

export default function ImageCaption(text) {
  const p = document.createElement("p");
  p.textContent = text;
  p.classList.add("image-caption");
  const body = document.querySelector("body");
  body.appendChild(p);
}
