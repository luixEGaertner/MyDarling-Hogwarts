function checkPassword() {
  const passwordInput = document.getElementById('password-input');
  const errorElement = document.getElementById('error-message');
  
  // Senha 1: Wingardium Leviosa
  const correctPassword = "wingardium leviosa"; 

  if (!passwordInput) return;
  
  const enteredPassword = passwordInput.value.toLowerCase().trim()
      .replace(/\s+/g, ' '); // Normaliza múltiplos espaços

  // Possibilidades de erro e criatividade
  if (
      enteredPassword === correctPassword ||
      enteredPassword === "wingardium leviosa" || 
      enteredPassword === "wingardium leviosar" || // Erro comum de pronúncia
      enteredPassword === "wingardium" ||
      enteredPassword === "leviosa"
  ) {
      // ALERTA DE SUCESSO FINALIZADO
      errorElement.innerText = "✨ FEITIÇO LANÇADO! A magia te leva ao próximo desafio!";
      // Redireciona para o próximo tema
      setTimeout(() => {
          window.location.href = "page2_jp.html"; 
      }, 1500);
      
  } else {
      errorElement.innerText = "🪄 Parece que você não pronunciou corretamente o feitiço. Tente novamente, é Wingardium Levi-O-sa!";
      passwordInput.value = '';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("password-input");
  const button = document.getElementById("enter-button");

  // Adiciona a lógica do 'Enter'
  if (input) {
      input.addEventListener("keypress", (event) => {
          if (event.key === "Enter") {
              event.preventDefault();
              checkPassword();
          }
      });
  }
  
  // Adiciona a lógica do clique no botão
  if (button) {
      button.addEventListener("click", checkPassword);
  }
});