const playVideo = document.querySelector('.play')
const pauseVideo = document.querySelector('.pause')
const btnCover = document.querySelector('.btn-cover')
const video = document.querySelector('.video')
const preLoader = document.querySelector('.pre-loader')

pauseVideo.addEventListener('click', function(){
    btnCover.classList.add('hidden')
    video.pause()
})

playVideo.addEventListener('click', function(){
    btnCover.classList.remove('hidden')
    video.play()
})

window.addEventListener('load', function(){
    preLoader.classList.add('hide')
})