import { validarAluno } from "./validators/validators.js";

document.getElementById("form-matricula")?.addEventListener("submit", (e) => {
    e.preventDefault();

    const aluno = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value
    };

    const erros = validarAluno(aluno);

    if (Object.keys(erros).length > 0) {
        alert("Erros:\n" + JSON.stringify(erros, null, 2));
        return;
    }

    alert("Matrícula enviada com sucesso!");
});

const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");

menuToggle.addEventListener("click", () => {
    sideMenu.style.left =
        sideMenu.style.left === "0px" ? "-260px" : "0px";
});
