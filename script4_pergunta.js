function checkPassword() {
    const passwordInput = document.getElementById('password-input');
    const errorElement = document.getElementById('error-message');
    // SENHA 4: os meus olhos (se refere aos olhos dela)
    const correctPassword = "os meus olhos"; 

    if (!passwordInput) return;
    
    const enteredPassword = passwordInput.value.toLowerCase().trim()
        .replace(/\s+/g, ' '); 

    // Possibilidades de erro: meus/seus, meus olhos/seu olhar
    if (
        enteredPassword === correctPassword ||
        enteredPassword === "os meus olhos" ||
        enteredPassword === "meus olhos" ||
        enteredPassword === "os seus olhos" ||
        enteredPassword === "seus olhos" ||
        enteredPassword === "o seu olhar" ||
        enteredPassword === "olhos" ||
        enteredPassword === "seus" // Possibilidade se ela apenas escrever "seus"
    ) {
        // ALERTA DE SUCESSO FINALIZADO
        errorElement.innerText = "💘 É exatamente isso! Você sabe o que mais amo! A ÚLTIMA página espera por você!";
        setTimeout(() => {
             window.location.href = "final_message.html"; // Redireciona para o final
        }, 1500);
       
    } else {
        errorElement.innerText = "💔 Não é isso, mas eu gosto de TUDO em você! Tente novamente, é algo que reflete o meu amor.";
        passwordInput.value = '';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("password-input");
    const button = document.getElementById("enter-button");

    if (input) {
        input.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                checkPassword();
            }
        });
    }
    
    if (button) {
        button.addEventListener("click", checkPassword);
    }
});