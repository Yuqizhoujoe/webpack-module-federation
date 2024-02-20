import Heading from "./components/heading/heading";
import AppleImage from "./components/apple-image/apple-image";

Heading("apple");
AppleImage();

import("ImageCaptionApp/ImageCaptionComponent").then((module) => {
  const ImageCaptionComponent = module.default;
  ImageCaptionComponent(
    "Image Caption Component is a nested federated module used in AppleApp",
  );
});

// dynamic import
// import("HelloWorldApp/HelloWorldButton").then((HelloWorldButtonModule) => {
//   const HelloWorldButton = HelloWorldButtonModule.default;
//   HelloWorldButton();
// });
