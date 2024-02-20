import Apple from "../../assets/apple.jpg";
import "./apple-image.scss";

export default function AppleImage() {
  const img = document.createElement("img");
  img.src = Apple;
  img.alt = "Apple";
  img.classList.add("apple-image");

  const body = document.querySelector("body");
  body.appendChild(img);
}
