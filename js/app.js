const $ = document
const btnStart = $.querySelector('#btn-start button')
const userInfo = $.querySelector('#user-info')
btnStart.addEventListener('click', () => {
    // window.scrollTo(0, 750)
    $.querySelector('#navbar').scrollIntoView({
        behavior: "smooth"
    })

})
const btnUserInfo = $.querySelector('.icon img')
const list = $.querySelector('.list')
let flag = false
btnUserInfo.addEventListener('click', () => {
    if (flag) {
        flag = false
        window.innerWidth <= 785 ? userInfo.style.backdropFilter = 'blur(0)' : []
        list.style.display = 'none'
    } else {
        flag = true
        list.style.display = 'block'
        window.innerWidth <= 785 ? userInfo.style.backdropFilter = 'blur(5px)' : []
    }
})
let scrollPage = $.querySelector('.scroll')

function scroll() {
    let scrollPageWidth = computingScroll()
    scrollPage.style.width = Math.round(scrollPageWidth)  + '%'
    scrollPage.style.background = 'firebrick'
}

function computingScroll() {
    let scrollTop = $.documentElement.scrollTop
    let height = $.documentElement.scrollHeight - $.documentElement.clientHeight
    return (scrollTop / height) * 100
}

window.onscroll = scroll
//                   loader            //
const loader = document.querySelector('.loader-div');
window.addEventListener('load', () => {
    loader.classList.add('hidden')
})


