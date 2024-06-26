const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  "/": "/pages/home/home.html",
  "/store": "/pages/store/store.html",
  "/about": "/pages/about/about.html",
  "/payment": "/pages/payment/payment.html",
};
const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;

  if (path === "/") {
    loadCarouselScript();
  }
};

const loadCarouselScript = () => {
  const script = document.createElement("script");
  script.src = "../pages/home/home.js";
  document.body.appendChild(script);
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
