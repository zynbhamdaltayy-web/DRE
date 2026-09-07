import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App container not found");
}

function renderWelcome() {
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

  document
    .querySelector("#start-button")
    ?.addEventListener("click", renderAuthChoice);
}

function renderAuthChoice() {
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

          <button class="back-button" id="back-button">
            Back
          </button>
        </div>
      </div>
    </main>
  `;

  document
    .querySelector("#signup-button")
    ?.addEventListener("click", renderSignup);

  document
    .querySelector("#login-button")
    ?.addEventListener("click", renderLogin);

  document
    .querySelector("#back-button")
    ?.addEventListener("click", renderWelcome);
}

function renderSignup() {
  app.innerHTML = `
    <main class="auth-page">
      <div class="auth-card">
        <div class="brand-mark">🎓</div>

        <h1>Create Account</h1>

        <p>Join DRE2learn and start learning.</p>

        <form class="auth-form" id="signup-form">
          <label>
            Full Name
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              required
            />
          </label>

          <label>
            Confirm Password
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              required
            />
          </label>

          <p class="form-error" id="signup-error"></p>

          <button class="primary-button" type="submit">
            Create Account
          </button>
        </form>

        <p class="auth-switch">
          Already have an account?
          <button id="go-login">Log in</button>
        </p>

        <button class="back-button" id="back-button">
          Back
        </button>
      </div>
    </main>
  `;

  document
    .querySelector("#signup-form")
    ?.addEventListener("submit", handleSignup);

  document
    .querySelector("#go-login")
    ?.addEventListener("click", renderLogin);

  document
    .querySelector("#back-button")
    ?.addEventListener("click", renderAuthChoice);
}

function handleSignup(event: Event) {
  event.preventDefault();

  const password = (
    document.querySelector("#password") as HTMLInputElement
  ).value;

  const confirmPassword = (
    document.querySelector("#confirm-password") as HTMLInputElement
  ).value;

  const error = document.querySelector("#signup-error");

  if (password !== confirmPassword) {
    if (error) {
      error.textContent = "Passwords do not match.";
    }

    return;
  }

  renderHome();
}

function renderLogin() {
  app.innerHTML = `
    <main class="auth-page">
      <div class="auth-card">
        <div class="brand-mark">🎓</div>

        <h1>Welcome Back</h1>

        <p>Log in to continue learning.</p>

        <form class="auth-form" id="login-form">
          <label>
            Email
            <input
              type="email"
              id="login-email"
              placeholder="Enter your email"
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              id="login-password"
              placeholder="Enter your password"
              required
            />
          </label>

          <button class="primary-button" type="submit">
            Log In
          </button>
        </form>

        <p class="auth-switch">
          Don't have an account?
          <button id="go-signup">Create account</button>
        </p>

        <button class="back-button" id="back-button">
          Back
        </button>
      </div>
    </main>
  `;

  document
    .querySelector("#login-form")
    ?.addEventListener("submit", handleLogin);

  document
    .querySelector("#go-signup")
    ?.addEventListener("click", renderSignup);

  document
    .querySelector("#back-button")
    ?.addEventListener("click", renderAuthChoice);
}

function handleLogin(event: Event) {
  event.preventDefault();
  renderHome();
}

function renderHome() {
  app.innerHTML = `
    <main class="home-page">
      <header class="home-header">
        <div>
          <span class="home-greeting">Welcome to</span>
          <h1>DRE2learn</h1>
        </div>

        <div class="profile-icon">👤</div>
      </header>

      <section class="hero-card">
        <span class="hero-label">YOUR LEARNING JOURNEY</span>

        <h2>Learn. Speak. Grow.</h2>

        <p>
          Improve your English through reading,
          vocabulary and practice.
        </p>

        <button class="primary-button" id="library-button">
          Explore Articles
        </button>
      </section>

      <section class="home-section">
        <h2>What do you want to learn?</h2>

        <div class="home-grid">
          <button class="feature-card">
            📚
            <span>Articles</span>
          </button>

          <button class="feature-card">
            🧠
            <span>Vocabulary</span>
          </button>

          <button class="feature-card">
            ✍️
            <span>Practice</span>
          </button>
        </div>
      </section>
    </main>
  `;

  document
    .querySelector("#library-button")
    ?.addEventListener("click", renderLibrary);
}

function renderLibrary() {
  app.innerHTML = `
    <main class="library-page">
      <header class="page-header">
        <button class="back-button" id="home-button">
          ← Home
        </button>

        <h1>Article Library</h1>

        <p>
          Choose an article based on your English level.
        </p>
      </header>

      <section class="level-section">
        <h2>Choose your level</h2>

        <div class="level-grid">
          <button class="level-card">A1</button>
          <button class="level-card">A2</button>
          <button class="level-card">B1</button>
          <button class="level-card">B2</button>
          <button class="level-card">C1</button>
          <button class="level-card">C2</button>
        </div>
      </section>

      <section class="topics-section">
        <h2>Topics</h2>

        <div class="topic-list">
          <button class="topic-card">
            🌍
            <span>Culture</span>
          </button>

          <button class="topic-card">
            🔬
            <span>Science</span>
          </button>

          <button class="topic-card">
            💻
            <span>Technology</span>
          </button>

          <button class="topic-card">
            🌱
            <span>Environment</span>
          </button>
        </div>
      </section>
    </main>
  `;

  document
    .querySelector("#home-button")
    ?.addEventListener("click", renderHome);
}

renderWelcome();