const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

// Variável para guardar a classe anterior do body
let previousBodyClass = body.className;
toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click", () => {
    if (!body.classList.contains("dark")) {
        // Salva a classe anterior antes de ativar o dark mode
        previousBodyClass = body.className;
        body.className = "dark";
        modeText.innerText = "Light mode";
    } else {
        // Restaura a classe anterior ao desativar o dark mode
        body.className = previousBodyClass;
        modeText.innerText = "Dark mode";
    }
})

// Seleciona todos os links do menu
const menuLinks = document.querySelectorAll('.menu-links .nav-link a');

// Adiciona evento de clique para cada link
menuLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // impede recarregamento da página

        // Obtém o texto do link e transforma em ID correspondente
        const nome = link.querySelector('.nav-text').textContent.trim().toLowerCase();
        const id = nome.replace(' ', ''); // Exemplo: "Relatórios" -> "relatorios"

        // Oculta todas as seções de conteúdo
        document.querySelectorAll('.conteudo').forEach(sec => sec.classList.remove('ativo'));

        // Exibe a seção correspondente, se existir
        const alvo = document.getElementById(id);
        if (alvo) alvo.classList.add('ativo');
    });
});
