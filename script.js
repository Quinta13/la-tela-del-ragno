(() => {
  const defaultPassword = "spiderman";
  const accessKey = "telaDelRagnoAccess";

  function getConfiguredPassword() {
    const configuredPassword = window.SITE_CONFIG?.SITE_PASSWORD;
    if (typeof configuredPassword === "string" && configuredPassword.trim()) {
      return configuredPassword.trim();
    }

    return defaultPassword;
  }

  function unlockSite() {
    document.body.classList.add("is-unlocked");
    sessionStorage.setItem(accessKey, "1");
  }

  document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const passwordInput = document.getElementById("passwordInput");
    const loginMessage = document.getElementById("loginMessage");

    if (!loginForm || !passwordInput || !loginMessage) {
      return;
    }

    if (sessionStorage.getItem(accessKey) === "1") {
      unlockSite();
      return;
    }

    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const enteredPassword = passwordInput.value.trim();
      const expectedPassword = getConfiguredPassword();

      if (enteredPassword === expectedPassword) {
        loginMessage.textContent = "Lorem ipsum dolor sit amet.";
        loginMessage.style.color = "#86efac";
        unlockSite();
        passwordInput.value = "";
        return;
      }

      loginMessage.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
      loginMessage.style.color = "#ffd86e";
      passwordInput.value = "";
      passwordInput.focus();
    });
  });
})();
