const buttonDark = document.querySelector('.header li')

const header = document.querySelector('.header')
const sidenavDark = document.querySelector('.sidenav')
const contentDark = document.querySelector('.content')
const anunciosDark = document.querySelector('.anuncios')
const footerDark = document.querySelector('.footer')

const p = document.querySelectorAll('.content p')

console.log(p)
console.log(sidenavDark, contentDark, anunciosDark, footerDark)
console.log(header.classList.contains('header dark'))

function modeDark(color){
    console.log('dark')
    color.preventDefault(); 
  
    if (header.classList.contains('dark-color') === true) {
        header.classList.remove('dark-color')
        contentDark.classList.remove('content-dark')
        sidenavDark.classList.remove('aside-dark')
        anunciosDark.classList.remove('aside-dark')
       
        p.forEach((itens) => {
            itens.classList.remove('p-dark')
        })
        
        console.log('true')
    }  else {
        header.classList.add('dark-color')
        contentDark.classList.add('content-dark')
        sidenavDark.classList.add('aside-dark')
        anunciosDark.classList.add('aside-dark')
        
        p.forEach((itens) => {
            itens.classList.add('p-dark')
        })
        
  
        console.log('false')
    }

    console.log(buttonDark) 
};

buttonDark.addEventListener('click', modeDark)
