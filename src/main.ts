import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App container not found");
}

type Page = "welcome" | "auth" | "signup" | "login" | "avatar" | "home" | "library";

const state = {
  page: "welcome" as Page,
  name: "",
  email: "",
  level: "B1",
  avatar: {
    skin: "#F2C7A5",
    eyes: "#4A3025",
    hair: "#3A2418",
    shirt: "#F6A27A",
  },
};

function avatarSvg(size = 180): string {
  return `
    <svg
      width="${size}"
      height="${size}"
      viewBox="0 0 200 240"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="DRE2learn avatar"
    >
      <!-- body -->
      <rect x="55" y="165" width="90" height="65" rx="28"
        fill="${state.avatar.shirt}" />

      <!-- neck -->
      <rect x="88" y="145" width="24" height="30" rx="10"
        fill="${state.avatar.skin}" />

      <!-- hair back -->
      <path
        d="M48 88C48 42 75 20 102 20C139 20 157 48 153 91L145 132C139 157 123 169 101 169C75 169 57 151 52 128Z"
        fill="${state.avatar.hair}"
      />

      <!-- face -->
      <ellipse
        cx="101"
        cy="103"
        rx="48"
        ry="58"
        fill="${state.avatar.skin}"
      />

      <!-- hair front -->
      <path
        d="M53 88C53 48 76 27 105 27C130 27 148 44 151 72
        C137 62 127 61 117 67
        C103 48 83 51 72 66
        C68 76 62 83 53 88Z"
        fill="${state.avatar.hair}"
      />

      <!-- eyes -->
      <ellipse cx="82" cy="104" rx="6" ry="8" fill="${state.avatar.eyes}" />
      <ellipse cx="121" cy="104" rx="6" ry="8" fill="${state.avatar.eyes}" />

      <!-- nose -->
      <path
        d="M99 108C96 120 96 124 103 125"
        fill="none"
        stroke="#B77D63"
        stroke-width="3"
        stroke-linecap="round"
      />

      <!-- smile -->
      <path
        d="M88 137C96 144 107 144 115 137"
        fill="none"
        stroke="#8F514D"
        stroke-width="3"
        stroke-linecap="round"
      />

      <!-- shirt detail -->
      <path
        d="M85 178L101 193L117 178"
        fill="none"
        stroke="#ffffff"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `;
}

function renderWelcome() {
  state.page = "welcome";

  app.innerHTML = `
    <main class="page welcome-page">
      <div class="brand">
        <div class="logo-mark">🎓</div>
        <h1>DRE2learn</h1>
        <p>Learn English. Speak. Grow.</p>
      </div>

      <div class="welcome-card">
        <div class="welcome-avatar">
          ${avatarSvg(190)}
        </div>

        <h2>Welcome to DRE2learn</h2>
        <p>
          Your space to learn English, practice your skills,
          and grow with confidence.
        </p>

        <button class="primary-btn" id="getStarted">
          Get Started
        </button>

        <button class="text-btn" id="loginBtn">
          I already have an account
        </button>
      </div>
    </main>
  `;

  document
    .querySelector("#getStarted")
    ?.addEventListener("click", renderAuth);

  document
    .querySelector("#loginBtn")
    ?.addEventListener("click", renderLogin);
}

function renderAuth() {
  state.page = "auth";

  app.innerHTML = `
    <main class="page centered-page">
      <button class="back-btn" id="backBtn">← Back</button>

      <section class="auth-card">
        <div class="brand-small">
          <div class="logo-mark small">🎓</div>
          <strong>DRE2learn</strong>
        </div>

        <h1>Let's get started</h1>
        <p>Choose how you want to continue.</p>

        <button class="primary-btn" id="signupBtn">
          Create an account
        </button>

        <button class="secondary-btn" id="loginBtn">
          Log in
        </button>
      </section>
    </main>
  `;

  document
    .querySelector("#backBtn")
    ?.addEventListener("click", renderWelcome);

  document
    .querySelector("#signupBtn")
    ?.addEventListener("click", renderSignup);

  document
    .querySelector("#loginBtn")
    ?.addEventListener("click", renderLogin);
}

function renderSignup() {
  state.page = "signup";

  app.innerHTML = `
    <main class="page centered-page">
      <button class="back-btn" id="backBtn">← Back</button>

      <section class="form-card">
        <div class="brand-small">
          <div class="logo-mark small">🎓</div>
          <strong>DRE2learn</strong>
        </div>

        <h1>Create your account</h1>
        <p>Tell us a little about yourself.</p>

        <form id="signupForm">
          <label>
            Your name
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </label>

          <label>
            Email
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            English level
            <select id="level">
              <option value="A1">A1 — Beginner</option>
              <option value="A2">A2 — Elementary</option>
              <option value="B1" selected>B1 — Intermediate</option>
              <option value="B2">B2 — Upper Intermediate</option>
              <option value="C1">C1 — Advanced</option>
              <option value="C2">C2 — Proficient</option>
            </select>
          </label>

          <button class="primary-btn" type="submit">
            Continue
          </button>
        </form>
      </section>
    </main>
  `;

  document
    .querySelector("#backBtn")
    ?.addEventListener("click", renderAuth);

  document
    .querySelector("#signupForm")
    ?.addEventListener("submit", (event) => {
      event.preventDefault();

      const nameInput = document.querySelector<HTMLInputElement>("#name");
      const emailInput = document.querySelector<HTMLInputElement>("#email");
      const levelInput = document.querySelector<HTMLSelectElement>("#level");

      state.name = nameInput?.value.trim() || "Learner";
      state.email = emailInput?.value.trim() || "";
      state.level = levelInput?.value || "B1";

      renderAvatar();
    });
}

function renderLogin() {
  state.page = "login";

  app.innerHTML = `
    <main class="page centered-page">
      <button class="back-btn" id="backBtn">← Back</button>

      <section class="form-card">
        <div class="brand-small">
          <div class="logo-mark small">🎓</div>
          <strong>DRE2learn</strong>
        </div>

        <h1>Welcome back</h1>
        <p>Log in to continue learning.</p>

        <form id="loginForm">
          <label>
            Email
            <input
              type="email"
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="••••••••"
              required
            />
          </label>

          <button class="primary-btn" type="submit">
            Log in
          </button>
        </form>
      </section>
    </main>
  `;

  document
    .querySelector("#backBtn")
    ?.addEventListener("click", renderWelcome);

  document
    .querySelector("#loginForm")
    ?.addEventListener("submit", (event) => {
      event.preventDefault();

      state.name = "Learner";
      state.level = "B1";

      renderHome();
    });
}

function renderAvatar() {
  state.page = "avatar";

  app.innerHTML = `
    <main class="page centered-page">
      <section class="avatar-card">
        <div class="brand-small">
          <div class="logo-mark small">🎓</div>
          <strong>DRE2learn</strong>
        </div>

        <h1>Create your avatar</h1>
        <p>Make it yours.</p>

        <div class="avatar-preview">
          ${avatarSvg(220)}
        </div>

        <div class="customizer">
          <label>
            Skin
            <input
              id="skinColor"
              type="color"
              value="${state.avatar.skin}"
            />
          </label>

          <label>
            Eyes
            <input
              id="eyeColor"
              type="color"
              value="${state.avatar.eyes}"
            />
          </label>

          <label>
            Hair
            <input
              id="hairColor"
              type="color"
              value="${state.avatar.hair}"
            />
          </label>

          <label>
            Top
            <input
              id="shirtColor"
              type="color"
              value="${state.avatar.shirt}"
            />
          </label>
        </div>

        <button class="primary-btn" id="continueBtn">
          Continue to DRE2learn
        </button>
      </section>
    </main>
  `;

  const updateAvatar = () => {
    const skin = document.querySelector<HTMLInputElement>("#skinColor");
    const eyes = document.querySelector<HTMLInputElement>("#eyeColor");
    const hair = document.querySelector<HTMLInputElement>("#hairColor");
    const shirt = document.querySelector<HTMLInputElement>("#shirtColor");

    state.avatar.skin = skin?.value || state.avatar.skin;
    state.avatar.eyes = eyes?.value || state.avatar.eyes;
    state.avatar.hair = hair?.value || state.avatar.hair;
    state.avatar.shirt = shirt?.value || state.avatar.shirt;

    renderAvatar();
  };

  document
    .querySelector("#skinColor")
    ?.addEventListener("input", updateAvatar);

  document
    .querySelector("#eyeColor")
    ?.addEventListener("input", updateAvatar);

  document
    .querySelector("#hairColor")
    ?.addEventListener("input", updateAvatar);

  document
    .querySelector("#shirtColor")
    ?.addEventListener("input", updateAvatar);

  document
    .querySelector("#continueBtn")
    ?.addEventListener("click", renderHome);
}

function renderHome() {
  state.page = "home";

  app.innerHTML = `
    <main class="app-page">

      <header class="topbar">
        <div class="brand-small">
          <div class="logo-mark small">🎓</div>
          <strong>DRE2learn</strong>
        </div>

        <div class="header-avatar">
          ${avatarSvg(55)}
        </div>
      </header>

      <section class="hero">
        <div>
          <span class="eyebrow">WELCOME BACK</span>
          <h1>Hello, ${state.name || "Learner"} 👋</h1>
          <p>
            Keep learning, keep speaking, and keep growing.
          </p>
        </div>

        <div class="hero-avatar">
          ${avatarSvg(180)}
        </div>
      </section>

      <section class="level-card">
        <div>
          <span>Your English level</span>
          <strong>${state.level}</strong>
        </div>

        <div class="level-progress">
          <span></span>
        </div>
      </section>

      <section class="section">
        <div class="section-heading">
          <h2>What do you want to learn?</h2>
          <p>Choose a place to start.</p>
        </div>

        <div class="feature-grid">

          <button class="feature-card" id="libraryBtn">
            <div class="feature-icon">📚</div>
            <h3>Library</h3>
            <p>
              Generate English articles based on your level
              and interests.
            </p>
          </button>

          <button class="feature-card">
            <div class="feature-icon">🗣️</div>
            <h3>Practice</h3>
            <p>
              Improve your speaking, vocabulary and grammar.
            </p>
          </button>

          <button class="feature-card">
            <div class="feature-icon">📈</div>
            <h3>Progress</h3>
            <p>
              Follow your learning journey and achievements.
            </p>
          </button>

          <button class="feature-card">
            <div class="feature-icon">👤</div>
            <h3>Profile</h3>
            <p>
              Manage your profile and avatar.
            </p>
          </button>

        </div>
      </section>

      <nav class="bottom-nav">
        <button class="active">⌂<span>Home</span></button>
        <button id="navLibrary">▣<span>Library</span></button>
        <button>◉<span>Practice</span></button>
        <button>◎<span>Profile</span></button>
      </nav>

    </main>
  `;

  document
    .querySelector("#libraryBtn")
    ?.addEventListener("click", renderLibrary);

  document
    .querySelector("#navLibrary")
    ?.addEventListener("click", renderLibrary);
}

function renderLibrary() {
  state.page = "library";

  app.innerHTML = `
    <main class="app-page">

      <header class="topbar">
        <button class="back-btn" id="homeBtn">← Home</button>

        <div class="brand-small">
          <div class="logo-mark small">🎓</div>
          <strong>DRE2learn</strong>
        </div>

        <div class="header-avatar">
          ${avatarSvg(55)}
        </div>
      </header>

      <section class="library-hero">
        <span class="eyebrow">DRE2LEARN LIBRARY</span>
        <h1>Learn through articles.</h1>
        <p>
          Choose your English level and a topic.
          Your learning article will be generated for you.
        </p>
      </section>

      <section class="generator-card">

        <h2>Generate an article</h2>

        <label>
          English level
          <select id="articleLevel">
            <option>A1</option>
            <option>A2</option>
            <option>B1</option>
            <option>B2</option>
            <option>C1</option>
            <option>C2</option>
          </select>
        </label>

        <label>
          Topic
          <select id="articleTopic">
            <option>Science</option>
            <option>Technology</option>
            <option>Travel</option>
            <option>Culture</option>
            <option>History</option>
            <option>Environment</option>
            <option>Education</option>
            <option>Health</option>
            <option>Space</option>
            <option>Animals</option>
          </select>
        </label>

        <button class="primary-btn" id="generateBtn">
          Generate Article
        </button>

        <div id="articleResult" class="article-result hidden">
        </div>

      </section>

      <nav class="bottom-nav">
        <button id="navHome">⌂<span>Home</span></button>
        <button class="active">▣<span>Library</span></button>
        <button>◉<span>Practice</span></button>
        <button>◎<span>Profile</span></button>
      </nav>

    </main>
  `;

  document
    .querySelector("#homeBtn")
    ?.addEventListener("click", renderHome);

  document
    .querySelector("#navHome")
    ?.addEventListener("click", renderHome);

  document
    .querySelector("#generateBtn")
    ?.addEventListener("click", () => {
      const level =
        document.querySelector<HTMLSelectElement>("#articleLevel")?.value ||
        "B1";

      const topic =
        document.querySelector<HTMLSelectElement>("#articleTopic")?.value ||
        "Science";

      const result =
        document.querySelector<HTMLDivElement>("#articleResult");

      if (!result) return;

      result.classList.remove("hidden");

      result.innerHTML = `
        <div class="article-placeholder">
          <span>✨</span>
          <h3>Article Generator Ready</h3>
          <p>
            Your ${level}-level article about
            <strong>${topic}</strong>
            will be generated here.
          </p>
          <small>
            AI generation will be connected in the next stage.
          </small>
        </div>
      `;
    });
}

renderWelcome();