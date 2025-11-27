export function validarAluno(aluno) {
    const erros = {};

    if (!aluno.nome || aluno.nome.trim().length < 3)
        erros.nome = "Nome precisa ter ao menos 3 caracteres.";

    if (!aluno.email || !/^[\w.-]+@[\w-]+\.[a-z]{2,}$/i.test(aluno.email))
        erros.email = "Email inválido.";

    return erros;
}
