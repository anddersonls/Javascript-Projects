const title = document.querySelectorAll('.content-title')

title.forEach((item) => {
    item.addEventListener('click', function(){
        title.forEach((e) =>{
            e.classList.remove('active')
            console.log('a')
        })
        item.classList.add('active')
        
        const article = document.querySelectorAll('.article-container')
        article.forEach((e) => {
            if (e.id == item.id.toLowerCase()){
                article.forEach((e) =>{
                    e.classList.remove('active')
                    console.log('a')
                })
                e.classList.add('active')
                
            }
        })
    })
})
