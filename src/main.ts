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

const startButton = document.querySelector<HTMLButtonElement>("#start-button");

startButton?.addEventListener("click", () => {
  app.innerHTML = `
    <main class="auth-page">
      <div class="auth-card">
        <div class="brand-mark">🎓</div>

        <h1>Welcome to DRE2learn</h1>
        <p>Start your English learning journey.</p>

        <div class="auth-actions">
          <button class="primary-button" id="signup-button">
            Create Account
          </button>

          <button class="secondary-button" id="login-button">
            Log In
          </button>
        </div>
      </div>
    </main>
  `;

  document
    .querySelector("#signup-button")
    ?.addEventListener("click", () => {
      showMessage("Sign Up");
    });

  document
    .querySelector("#login-button")
    ?.addEventListener("click", () => {
      showMessage("Log In");
    });
});

function showMessage(page: string) {
  app.innerHTML = `
    <main class="auth-page">
      <div class="auth-card">
        <div class="brand-mark">🎓</div>

        <h1>${page}</h1>

        <p>This page will be built next.</p>

        <button class="secondary-button" id="back-button">
          Back
        </button>
      </div>
    </main>
  `;

  document
    .querySelector("#back-button")
    ?.addEventListener("click", () => {
      location.reload();
    });
}