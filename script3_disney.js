function checkPassword() {
    const passwordInput = document.getElementById('password-input');
    const errorElement = document.getElementById('error-message');
    const justificativaDiv = document.getElementById('justificativa');
    
    // SENHA 3: Rapunzel
    const correctPassword = "rapunzel"; 
    const justificativaText = "💖 CORRETO! Porque o brilho do cabelo dela, me remete ao SEU brilho que me ilumina quando a vejo. Você é a minha luz!";

    if (!passwordInput) return;
    
    const enteredPassword = passwordInput.value.toLowerCase().trim()
        .replace(/\s+/g, ' '); 

    // Possibilidades de erro e criatividade
    if (
        enteredPassword === correctPassword ||
        enteredPassword === "rapunzel" ||
        enteredPassword === "enrolados" || // Nome do filme
        enteredPassword === "flynn rider" || // Nome do par
        enteredPassword === "sol" // Relacionado ao brilho
    ) {
        // Esconde o input/botão e mostra a justificativa
        passwordInput.style.display = 'none';
        document.getElementById('enter-button').style.display = 'none';
        errorElement.style.display = 'none'; 

        justificativaDiv.innerHTML = '<h2>Parabéns!</h2>' + justificativaText + 
            '<br><br><a href="page4_pergunta.html" class="btn">Continue a Jornada</a>';
        justificativaDiv.style.display = 'block';
    } else {
        errorElement.innerText = "❌ A luz ainda não acendeu. Lembre-se: qual é o filme que eu amo e quem me apresentou?";
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