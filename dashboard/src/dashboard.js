import NavigationBar from "./components/navigation-bar";

import "./global.scss";

const url = window.location.pathname;

const navigationItems = [
  {
    url: "/hello-world-page",
    title: "Hello World Page",
  },
  {
    url: "/apple-page",
    title: "Apple Page",
  },
];

NavigationBar(navigationItems);

if (url === "/hello-world-page") {
  import("HelloWorldApp/HelloWorldPage").then((module) => {
    const HelloWorldPage = module.default;
    console.log(module);
    HelloWorldPage();
  });
} else if (url === "/apple-page") {
  import("AppleApp/ApplePage").then((module) => {
    const ApplePage = module.default;
    ApplePage();
  });
}
