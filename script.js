// Função para alternar o modo
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de perfil Gabriel Ulick modo claro")
    localStorage.setItem("modo", "light") // Salva o modo claro no localStorage
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de perfil Gabriel Ulick modo escuro")
    localStorage.setItem("modo", "dark") // Salva o modo escuro no localStorage
  }
}

// Função para verificar o modo armazenado no localStorage e aplicar a classe "light" se necessário
function verificarModo() {
  const html = document.documentElement
  const modoSalvo = localStorage.getItem("modo")

  if (modoSalvo === "light") {
    html.classList.add("light") // Aplica a classe "light" se o modo claro estiver salvo
  }
}

// Verificar o modo ao carregar a página principal
document.addEventListener("DOMContentLoaded", function () {
  verificarModo()
})
