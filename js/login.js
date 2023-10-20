import { sha256 } from "https://cdn.skypack.dev/js-sha256";

document.addEventListener("DOMContentLoaded", () => {
    const loginLicense = document.querySelector("#login-license");
    const loginPassword = document.querySelector("#login-password");

    const loginButton = document.querySelector("#login-button");

    loginButton.addEventListener("click", () => {
        const licenseHash = sha256(loginLicense.value);
        const passwordHash = sha256(loginPassword.value + licenseHash);
    });
});
