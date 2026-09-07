import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App container not found");
}

app.innerHTML = `
  <main class="welcome">
    <div class="brand">
      <div class="brand-mark">🎓</div>

      <h1>DRE2learn</h1>

      <p>Learn. Speak. Grow.</p>
    </div>

    <button class="start-button" id="start-button">
      Get Started
    </button>
  </main>
`;