import Heading from "../heading/heading";
import AppleImage from "../apple-image/apple-image";

export default function ApplePage() {
  Heading("apple");
  AppleImage();

  import("ImageCaptionApp/ImageCaptionComponent").then((module) => {
    const ImageCaptionComponent = module.default;
    ImageCaptionComponent(
        "Image Caption Component is a nested federated module used in AppleApp",
    );
  });
}
