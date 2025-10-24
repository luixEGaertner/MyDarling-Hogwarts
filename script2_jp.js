function checkPassword() {
    const passwordInput = document.getElementById('password-input');
    const errorElement = document.getElementById('error-message');
    // SENHA 2: Espinossauro
    const correctPassword = "espinossauro"; 

    if (!passwordInput) return;
    
    const enteredPassword = passwordInput.value.toLowerCase().trim()
        .replace(/\s+/g, ' '); 

    // Possibilidades de erro e criatividade
    if (
        enteredPassword === correctPassword ||
        enteredPassword === "espinossauro" ||
        enteredPassword === "spinossauro" || // erro comum de s/ss
        enteredPassword === "espinossauros" || // Plural
        enteredPassword === "spinosaurus" // Inglês
    ) {
        // ALERTA DE SUCESSO FINALIZADO
        errorElement.innerText = "ROAR! 🦕 Correto! Você provou ser um verdadeiro paleontólogo e merece passar!";
        setTimeout(() => {
             window.location.href = "page3_disney.html"; // Redireciona para o próximo tema
        }, 1500);
       
    } else {
        errorElement.innerText = "❌ INGEN! Tente outra vez. Lembre-se, o vilão de JP3 merecia mais respeito e... não é o T-Rex!";
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