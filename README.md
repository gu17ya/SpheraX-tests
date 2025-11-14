The framework for tests are built with **Playwright** + **JavaScript**

---

# 📦 1. Requirements

Make sure the following tools are installed on your machine:

### ✔ Node.js (v18+ recommended)

Check:

```bash
node -v
npm -v
```

### ✔ Git

```bash
git --version
```

📥 2. Clone the repository

```bash
git clone https://github.com/gu17ya/SpheraX-tests.git
cd SpheraX-tests
```

🧱 3. Install dependencies

```bash
npm install
```

🎭 4. Install Playwright browsers

```bash
npx playwright install
```

⚙️ 5. Environment configuration

```bash
cp .env.example .env
```

📂 6. Project structure

SpheraX-tests/
│
├── decorators/ # Method decorators (@step, @retry, @measure)
├── fixtures/ # Playwright fixtures + custom test runner
├── helpers/ # Utility functions, test data, API helpers
│ └── test-data/ # Static test data files
├── pages/ # Page Object Models (POM)
├── tests/ # Test specs
│
├── .env # Local environment values
├── .env.example # Template for .env
├── playwright.config.js
├── package.json
└── README.md

▶️ 7. Running the tests

# Run the entire test suite:

```bash
npx playwright test
```

# Run tests with visible browser:

```bash
npx playwright test --headed
```

# Run a specific test file:

```bash
npx playwright test tests/auth/login.js
```

📊 8. Test reports

```bash
npx playwright show-report
```
