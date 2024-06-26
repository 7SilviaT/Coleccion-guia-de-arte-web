async function loadComponent(url, elementId) {
  try {
    const response = await fetch(url);
    const text = await response.text();
    document.getElementById(elementId).innerHTML = text;
  } catch (error) {
    console.error(`Error loading component from ${url}:`, error);
  }
}

// Load header and footer
document.addEventListener("DOMContentLoaded", () => {
  loadComponent('header.html', 'header');
  loadComponent('footer.html', 'footer');
});
