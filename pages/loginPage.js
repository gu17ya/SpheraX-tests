export class LoginPage {
  #page;
  #openLoginButton;
  #username;
  #password;
  #submit;

  constructor(page) {
    this.#page = page;
    this.#openLoginButton = page.getByRole("button", { name: "Log In" });

    this.#username = page.locator("#signInFormUsername");
    this.#password = page.locator("#signInFormPassword");
    this.#submit = page.locator('input[name="signInSubmitButton"]');
  }

  async open() {
    await this.#page.goto("/login");

    await this.#openLoginButton.waitFor({ state: "visible" });
    await this.#openLoginButton.click();
  }

  async login(username, password) {
    await this.#username.fill(username);
    await this.#password.fill(password);

    await this.#submit.click();
  }
}
