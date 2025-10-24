function initializeAudio(musicFileName) {
  const btn = document.getElementById("musicToggle");

  // Cria um novo objeto Audio com o nome do arquivo da página
  const music = new Audio(musicFileName);

  music.loop = true;
  music.volume = 0.0; // Começa mudo

  let playing = false;
  let fadeInterval;

  function fadeVolume(target, step) {
    clearInterval(fadeInterval);
    fadeInterval = setInterval(() => {
      const diff = target - music.volume;
      if (Math.abs(diff) < 0.01) {
        music.volume = target;
        clearInterval(fadeInterval);
      } else {
        music.volume += diff * step;
      }
    }, 100);
  }

  function toggleMusic() {
    if (!playing) {
      // Tenta dar play
      music.play().catch(e => console.error("Erro ao tocar música:", e)); 
      fadeVolume(0.4, 0.15);
      if (btn) btn.textContent = "🔇";
      playing = true;
    } else {
      fadeVolume(0.0, 0.15);
      // Pausa após o fade out
      setTimeout(() => music.pause(), 1000); 
      if (btn) btn.textContent = "🎵";
      playing = false;
    }
  }
  
  // Se houver um botão, adiciona o listener (controlador de volume)
  if (btn) {
      btn.addEventListener("click", toggleMusic);
  }
  
  // Tenta iniciar a música automaticamente (mutada)
  music.play().catch(e => console.log("Auto-play blocked, waiting for user interaction."));
}