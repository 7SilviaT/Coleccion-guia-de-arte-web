async function loadComponent(url, elementId) {
  try {
    const element = document.getElementById(elementId);
    // Check if the element's content is already loaded
    if (!element.innerHTML.trim()) {
      const response = await fetch(url);
      const text = await response.text();
      element.innerHTML = text;
    }
  } catch (error) {
    console.error(`Error loading component from ${url}:`, error);
  }
}

// Load header and footer
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header.html", "header");
  loadComponent("footer.html", "footer");
});
