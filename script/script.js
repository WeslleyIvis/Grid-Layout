function darkMode() {

    const buttonDark = document.querySelector('.header li')

    const header = document.querySelector('.header')
    const sidenavDark = document.querySelector('.sidenav')
    const contentDark = document.querySelectorAll('.js-section section')
    const anunciosDark = document.querySelector('.anuncios')
    const footerDark = document.querySelector('.footer')
    const bodyDark = document.querySelector('body')

    const p = document.querySelectorAll('.content p')


    console.log(contentDark)
    // console.log(p)
    // console.log(sidenavDark, contentDark, anunciosDark, footerDark)
    // console.log(header.classList.contains('header dark'))

    function modeDark(color){
        console.log('dark')
        color.preventDefault(); 
    
        if (header.classList.contains('dark-color') === true) {
            header.classList.remove('dark-color')
            sidenavDark.classList.remove('aside-dark')
            anunciosDark.classList.remove('aside-dark')
            bodyDark.classList.remove('content-dark')

            contentDark.forEach((content) => {
                content.classList.remove('content-dark')
            })
        
            p.forEach((itens) => {
                itens.classList.remove('p-dark')
            })
            
            console.log('true')
        }  else {
            header.classList.add('dark-color')
            sidenavDark.classList.add('aside-dark')
            anunciosDark.classList.add('aside-dark')
            bodyDark.classList.add('content-dark')
            
            contentDark.forEach((content) => {
                content.classList.add('content-dark')
            })

            p.forEach((itens) => {
                itens.classList.add('p-dark')
            })
            
    
            console.log('false')
        }

        console.log(buttonDark) 
    };

    buttonDark.addEventListener('click', modeDark)
}

darkMode();

function newPages() {
    const sections = document.querySelectorAll('.js-section section')
    const marcas = document.querySelectorAll('.sidenav li')
    console.log(marcas)
    console.log(sections)
    
        if(sections.length && marcas.length){
        sections[0].classList.add('ativo')

        function newContent(index) {            
            sections.forEach((conteudo) => {
                conteudo.classList.remove('ativo');
            })
            sections[index].classList.add('ativo');
        }

        marcas.forEach((pages, index) => {
            pages.addEventListener('click', () => {
                newContent(index)
                console.log(pages, index);
            })
        });
    }
}

newPages();