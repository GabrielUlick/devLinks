document.addEventListener("DOMContentLoaded", function () {
  const html = document.documentElement
  const modoSalvo = localStorage.getItem("modo")

  if (modoSalvo === "light") {
    html.classList.add("light") // Aplica a classe "light" se o modo claro estiver salvo

    const img = document.querySelector("#back-button")
    img.setAttribute("src", "./../assets/back-button-light.png")
    img.setAttribute("alt", "back-button modo claro")
  }
})
