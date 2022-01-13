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


function newBg(){
    const bgHeader = document.querySelector('.nav-background') 
    const onlyHeader = bgHeader.cloneNode(true);
    console.log(onlyHeader)
    
    console.log(bgHeader.attributes.length)

    if(bgHeader.attributes.length >= 2) {
        bgHeader.removeAttribute('src')
        const tagImg = bgHeader.outerHTML.split('img').join('div')
        bgHeader.outerHTML = tagImg
        console.log(bgHeader)
    } else {
        bgHeader.setAttribute('src', 'galery/ArtJP1500x200.svg')
        const tagImg = bgHeader.outerHTML.split('div').join('img')
        bgHeader.outerHTML = tagImg
        console.log('b')
    }

    console.log(bgHeader)
    console.log(onlyHeader, ' 1')

 
    // bgHeader.setAttribute('src', '')
    // console.log(bgHeader.outerHTML)
    
    // if(!!bgHeader.attributes.item(1).value) {
    //     console.log('true')
    // } else {
    //     bgHeader.setAttribute('src', 'galery/ArtJP2000x200.svg')
    //     bgHeader = bgHeader.outerHTML.split('div').join('img')
    //     console.log(bgHeader)
    //     return bgHeader
    // }
       
    // header.removeChild(newBG)      

    // newBG.setAttribute('src', 'galery/ArtJP2000x200.svg')
    // newBG.classList.add('nav-background')
    // header.appendChild(header)

}

const backgroundNav = document.querySelector('.new-bg');

backgroundNav.addEventListener('click', () => {
    newBg()
})





darkMode();




// function clickNoLink(event) {
//     event.preventDefault();
//     console.log(event.currentTarget.href)
// }

// function imagem(event) {
//     console.log(this)
//     console.log(this.getAttribute('href'))
// }





