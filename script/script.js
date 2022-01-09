function darkMode() {

    const buttonDark = document.querySelector('.header li')
    const buttonTema = document.querySelector('.moon-sol')


    const header = document.querySelector('.nav-background')
    const sidenavDark = document.querySelector('.sidenav')
    const contentDark = document.querySelectorAll('.js-section section')
    const anunciosDark = document.querySelector('.anuncios')
    const footerDark = document.querySelector('.footer')
    const bodyDark = document.querySelector('body')

    const p = document.querySelectorAll('.content p')

    // console.log(p)
    // console.log(sidenavDark, contentDark, anunciosDark, footerDark)
    // console.log(header.classList.contains('header dark'))

    function modeDark(color){
        color.preventDefault(); 
    
        if (header.classList.contains('dark-color') === true) {
            header.classList.remove('dark-color')
            sidenavDark.classList.remove('aside-dark')
            anunciosDark.classList.remove('aside-dark')
            bodyDark.classList.remove('content-dark')
            buttonTema.classList.remove('moon-button')

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
            buttonTema.classList.add('moon-button')
            
            contentDark.forEach((content) => {
                content.classList.add('content-dark')
            })

            p.forEach((itens) => {
                itens.classList.add('p-dark')
            })
            
        }

    };
    buttonDark.addEventListener('click', modeDark)
}

darkMode();

function newPages() {
    const sections = document.querySelectorAll('.js-section section')
    const marcas = document.querySelectorAll('.sidenav li')
    const navHeight = document.querySelector('.header')
    const navScroll = navHeight.clientHeight
    
    console.log(window.scrollY)
    
    //console.log(navHeight.getBoundingClientRect());
    //console.log(navHeight.clientHeight + window.innerHeight)
    
        if(sections.length && marcas.length){
            const defaultA = document.querySelectorAll('a[href^="#"]')
            sections[0].classList.add('ativo')

            defaultA.forEach((link) => {
                link.addEventListener('click', function (event){
                    event.preventDefault();
                    console.log(event.currentTarget.href)
                })
            });

            function newContent(index) {      
                sections.forEach((conteudo) => {
                    conteudo.classList.remove('ativo');
                })
            sections[index].classList.add('ativo'); 

            if(window.scrollY > navScroll){
                window.scrollBy({
                    top: -window.scrollY + navScroll,
                    left: 0,
                    behavior: 'smooth',
                });  
                console.log('a')
            } else {
                window.scrollBy({
                    top: navScroll - window.scrollY,
                    left: 0,
                    behavior: 'smooth',
                });  
            }   
        }
        marcas.forEach((pages, index) => {
            console.log(pages, index)
            pages.addEventListener('click', () => {       
                newContent(index)
            })
        });
    }
}

newPages();



function clickNoLink(event) {
    event.preventDefault();
    console.log(event.currentTarget.href)
}

function imagem(event) {
    console.log(this)
    console.log(this.getAttribute('href'))
}





