import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App container not found");
}

// =========================
// Welcome
// =========================

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

// =========================
// Authentication Choice
// =========================

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

// =========================
// Sign Up
// =========================

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

  renderAvatar();
}

// =========================
// Login
// =========================

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

          <p class="form-error" id="login-error"></p>

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

// =========================
// Avatar
// =========================

function renderAvatar() {
  let skin = "#F6C7A8";
  let eye = "#5B3828";
  let hair = "#3A241B";
  let top = "#F6A27A";

  let character: "girl" | "boy" = "girl";
  let hijab = false;

  const avatarPreview = () => {
    const hairStyle =
      character === "girl"
        ? `
          ${
            hijab
              ? `
                <!-- Hijab -->
                <path
                  d="
                    M82 130
                    C72 65 108 25 160 25
                    C212 25 248 65 238 130
                    L232 198
                    Q224 230 200 248
                    L120 248
                    Q96 230 88 198
                    Z
                  "
                  fill="${hair}"
                />

                <!-- Hijab opening -->
                <path
                  d="
                    M105 132
                    Q110 82 160 82
                    Q210 82 215 132
                    L208 202
                    Q195 245 160 252
                    Q125 245 112 202
                    Z
                  "
                  fill="${skin}"
                />
              `
              : `
                <!-- Girl Hair -->
                <path
                  d="
                    M82 112
                    C72 58 105 25 160 25
                    C215 25 248 62 238 116
                    C226 91 207 78 160 78
                    C113 78 94 92 82 112Z
                  "
                  fill="${hair}"
                />

                <path
                  d="
                    M88 91
                    C65 125 78 181 96 194
                  "
                  fill="none"
                  stroke="${hair}"
                  stroke-width="18"
                  stroke-linecap="round"
                />

                <path
                  d="
                    M232 91
                    C255 125 242 181 224 194
                  "
                  fill="none"
                  stroke="${hair}"
                  stroke-width="18"
                  stroke-linecap="round"
                />
              `
          }
        `
        : `
          <!-- Boy Hair -->
          <path
            d="
              M80 105
              C70 55 110 25 160 25
              C212 25 246 59 238 108
              C218 82 196 75 165 76
              C128 78 105 91 80 105Z
            "
            fill="${hair}"
          />
        `;

    return `
      <svg
        viewBox="0 0 320 360"
        class="avatar-svg"
        aria-label="DRE2learn avatar preview"
      >

        <!-- Top -->
        <path
          d="
            M55 360
            C58 294 85 270 112 258
            L208 258
            C235 270 262 294 265 360Z
          "
          fill="${top}"
        />

        <!-- Neck -->
        <path
          d="
            M137 245
            L137 275
            Q160 292 183 275
            L183 245Z
          "
          fill="${skin}"
        />

        <!-- Face -->
        <path
          d="
            M92 125
            Q92 73 160 73
            Q228 73 228 125
            L222 202
            Q215 253 160 265
            Q105 253 98 202Z
          "
          fill="${skin}"
        />

        <!-- Hair / Hijab -->
        ${hairStyle}

        <!-- Eyes -->
        <ellipse
          cx="128"
          cy="155"
          rx="13"
          ry="17"
          fill="white"
        />

        <ellipse
          cx="192"
          cy="155"
          rx="13"
          ry="17"
          fill="white"
        />

        <ellipse
          cx="128"
          cy="157"
          rx="7"
          ry="10"
          fill="${eye}"
        />

        <ellipse
          cx="192"
          cy="157"
          rx="7"
          ry="10"
          fill="${eye}"
        />

        <circle
          cx="130"
          cy="153"
          r="2.5"
          fill="white"
        />

        <circle
          cx="194"
          cy="153"
          r="2.5"
          fill="white"
        />

        <!-- Nose -->
        <path
          d="
            M160 162
            Q154 185 160 188
          "
          fill="none"
          stroke="#C98F73"
          stroke-width="3"
          stroke-linecap="round"
        />

        <!-- Smile -->
        <path
          d="
            M145 207
            Q160 218 175 207
          "
          fill="none"
          stroke="#9E5D55"
          stroke-width="4"
          stroke-linecap="round"
        />

      </svg>
    `;
  };

  const updateAvatar = () => {
    const preview = document.querySelector("#avatar-preview");

    if (preview) {
      preview.innerHTML = avatarPreview();
    }
  };

  app.innerHTML = `
    <main class="avatar-page">

      <section class="avatar-card">

        <button class="avatar-back" id="avatar-back">
          ← Back
        </button>

        <div class="avatar-title">
          <span>✨</span>
          <h1>Create your avatar</h1>
          <p>Make it yours.</p>
        </div>

        <div
          class="avatar-preview"
          id="avatar-preview"
        >
          ${avatarPreview()}
        </div>

        <!-- Character -->
        <div class="character-choice">

          <button
            class="character-button selected"
            data-character="girl"
          >
            Girl
          </button>

          <button
            class="character-button"
            data-character="boy"
          >
            Boy
          </button>

        </div>

        <!-- Hijab -->
        <div
          class="avatar-option"
          id="hijab-section"
        >
          <h2>Hijab</h2>

          <div class="character-choice">

            <button
              class="hijab-button selected"
              data-hijab="false"
            >
              Without Hijab
            </button>

            <button
              class="hijab-button"
              data-hijab="true"
            >
              With Hijab
            </button>

          </div>
        </div>

        <!-- Skin -->
        <div class="avatar-option">

          <h2>Skin</h2>

          <div class="option-row">

            <button
              class="color-option selected"
              data-type="skin"
              data-value="#F6C7A8"
              style="background:#F6C7A8"
            ></button>

            <button
              class="color-option"
              data-type="skin"
              data-value="#E8AD87"
              style="background:#E8AD87"
            ></button>

            <button
              class="color-option"
              data-type="skin"
              data-value="#D8956D"
              style="background:#D8956D"
            ></button>

            <button
              class="color-option"
              data-type="skin"
              data-value="#B97855"
              style="background:#B97855"
            ></button>

            <button
              class="color-option"
              data-type="skin"
              data-value="#8D583F"
              style="background:#8D583F"
            ></button>

            <button
              class="color-option"
              data-type="skin"
              data-value="#633C2D"
              style="background:#633C2D"
            ></button>

          </div>
        </div>

        <!-- Eyes -->
        <div class="avatar-option">

          <h2>Eyes</h2>

          <div class="option-row">

            <button
              class="eye-option selected"
              data-type="eye"
              data-value="#5B3828"
            >
              🤎
            </button>

            <button
              class="eye-option"
              data-type="eye"
              data-value="#477EA8"
            >
              💙
            </button>

            <button
              class="eye-option"
              data-type="eye"
              data-value="#4D7651"
            >
              💚
            </button>

            <button
              class="eye-option"
              data-type="eye"
              data-value="#66518D"
            >
              💜
            </button>

          </div>
        </div>

        <!-- Hair -->
        <div class="avatar-option" id="hair-section">

          <h2>Hair</h2>

          <div class="hair-grid">

            <button
              class="hair-option selected"
              data-value="#3A241B"
            >
              🧑🏻‍🦱
            </button>

            <button
              class="hair-option"
              data-value="#6B422B"
            >
              🧑🏼‍🦰
            </button>

            <button
              class="hair-option"
              data-value="#B97942"
            >
              👱🏻
            </button>

            <button
              class="hair-option"
              data-value="#8B3F2F"
            >
              🧑🏻‍🦰
            </button>

            <button
              class="hair-option"
              data-value="#191919"
            >
              🖤
            </button>

          </div>
        </div>

        <!-- Top -->
        <div class="avatar-option">

          <h2>Top</h2>

          <div class="option-row">

            <button
              class="top-option selected"
              data-value="#F6A27A"
              style="background:#F6A27A"
            ></button>

            <button
              class="top-option"
              data-value="#7898C2"
              style="background:#7898C2"
            ></button>

            <button
              class="top-option"
              data-value="#8BA477"
              style="background:#8BA477"
            ></button>

            <button
              class="top-option"
              data-value="#A58BC4"
              style="background:#A58BC4"
            ></button>

            <button
              class="top-option"
              data-value="#303033"
              style="background:#303033"
            ></button>

          </div>
        </div>

        <button
          class="avatar-continue"
          id="avatar-continue"
        >
          Continue
        </button>

      </section>
    </main>
  `;

  // =========================
  // Character selection
  // =========================

  document
    .querySelectorAll(".character-button")
    .forEach((button) => {
      button.addEventListener("click", () => {
        character =
          (button as HTMLElement).dataset.character === "boy"
            ? "boy"
            : "girl";

        document
          .querySelectorAll(".character-button")
          .forEach((item) => {
            item.classList.remove("selected");
          });

        button.classList.add("selected");

        const hijabSection =
          document.querySelector("#hijab-section");

        const hairSection =
          document.querySelector("#hair-section");

        if (character === "boy") {
          hijab = false;

          if (hijabSection) {
            hijabSection.style.display = "none";
          }

          if (hairSection) {
            hairSection.style.display = "block";
          }
        } else {
          if (hijabSection) {
            hijabSection.style.display = "block";
          }

          if (hairSection) {
            hairSection.style.display = hijab
              ? "none"
              : "block";
          }
        }

        updateAvatar();
      });
    });

  // =========================
  // Hijab selection
  // =========================

  document
    .querySelectorAll(".hijab-button")
    .forEach((button) => {
      button.addEventListener("click", () => {
        hijab =
          (button as HTMLElement).dataset.hijab === "true";

        document
          .querySelectorAll(".hijab-button")
          .forEach((item) => {
            item.classList.remove("selected");
          });

        button.classList.add("selected");

        const hairSection =
          document.querySelector("#hair-section");

        if (hairSection) {
          hairSection.style.display = hijab
            ? "none"
            : "block";
        }

        updateAvatar();
      });
    });

  // =========================
  // Skin selection
  // =========================

  document
    .querySelectorAll(".color-option")
    .forEach((button) => {
      button.addEventListener("click", () => {
        skin =
          (button as HTMLElement).dataset.value || skin;

        document
          .querySelectorAll('[data-type="skin"]')
          .forEach((item) => {
            item.classList.remove("selected");
          });

        button.classList.add("selected");

        updateAvatar();
      });
    });

  // =========================
  // Eye selection
  // =========================

  document
    .querySelectorAll(".eye-option")
    .forEach((button) => {
      button.addEventListener("click", () => {
        eye =
          (button as HTMLElement).dataset.value || eye;

        document
          .querySelectorAll(".eye-option")
          .forEach((item) => {
            item.classList.remove("selected");
          });

        button.classList.add("selected");

        updateAvatar();
      });
    });

  // =========================
  // Hair selection
  // =========================

  document
    .querySelectorAll(".hair-option")
    .forEach((button) => {
      button.addEventListener("click", () => {
        hair =
          (button as HTMLElement).dataset.value || hair;

        document
          .querySelectorAll(".hair-option")
          .forEach((item) => {
            item.classList.remove("selected");
          });

        button.classList.add("selected");

        updateAvatar();
      });
    });

  // =========================
  // Top selection
  // =========================

  document
    .querySelectorAll(".top-option")
    .forEach((button) => {
      button.addEventListener("click", () => {
        top =
          (button as HTMLElement).dataset.value || top;

        document
          .querySelectorAll(".top-option")
          .forEach((item) => {
            item.classList.remove("selected");
          });

        button.classList.add("selected");

        updateAvatar();
      });
    });

  document
    .querySelector("#avatar-back")
    ?.addEventListener("click", renderSignup);

  document
    .querySelector("#avatar-continue")
    ?.addEventListener("click", renderHome);
}

// =========================
// Home
// =========================

function renderHome() {
  app.innerHTML = `
    <main class="home-page">

      <header class="home-header">

        <div>
          <span class="home-greeting">
            Welcome to
          </span>

          <h1>DRE2learn</h1>
        </div>

        <div class="profile-icon">
          👤
        </div>

      </header>

      <section class="hero-card">

        <span class="hero-label">
          YOUR LEARNING JOURNEY
        </span>

        <h2>
          Learn. Speak. Grow.
        </h2>

        <p>
          Improve your English through reading,
          vocabulary and practice.
        </p>

        <button
          class="primary-button"
          id="library-button"
        >
          Explore Articles
        </button>

      </section>

      <section class="home-section">

        <h2>
          What do you want to learn?
        </h2>

        <div class="home-grid">

          <button
            class="feature-card"
            id="articles-card"
          >
            📚
            <span>Articles</span>
          </button>

          <button
            class="feature-card"
            id="vocabulary-card"
          >
            🧠
            <span>Vocabulary</span>
          </button>

          <button
            class="feature-card"
            id="practice-card"
          >
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

  document
    .querySelector("#articles-card")
    ?.addEventListener("click", renderLibrary);
}

// =========================
// Article Library
// =========================

function renderLibrary() {
  app.innerHTML = `
    <main class="library-page">

      <header class="page-header">

        <button
          class="back-button"
          id="home-button"
        >
          ← Home
        </button>

        <h1>
          Article Library
        </h1>

        <p>
          Choose an article based on your English level.
        </p>

      </header>

      <section class="level-section">

        <h2>
          Choose your level
        </h2>

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

        <h2>
          Topics
        </h2>

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

// =========================
// Start
// =========================

renderWelcome();

