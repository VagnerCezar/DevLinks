function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag da imagem
  const img = document.querySelector("#profile img")

  // Substituir a imagem
if(html.classList.contains("light")){

  // Se tiver light mode, adiciona a imagem light
  img.setAttribute("src", "./assets/avatar-ligh-mode.png")
  img.setAttribute("alt", "Vagner ligh-mode")
} else{
  // Se tiver dark light mode, manter a imagem normal
  img.setAttribute("src", "./assets/avatar-dark-mode.png")
  img.setAttribute("alt", "Vagner dark-mode")
}
}