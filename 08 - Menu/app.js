const menu = [
    {
      id: 1,
      title: "Buttermilk Pancakes",
      category: "Breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "Diner Double",
      category: "Lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "Godzilla Milkshake",
      category: "Shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "Country Delight",
      category: "Breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "Egg Attack",
      category: "Lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "Oreo Dream",
      category: "Shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "Bacon Overflow",
      category: "Breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "American Classic",
      category: "Lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "Quarantine Buddy",
      category: "Shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

const menuItems = document.querySelector('.menu') 
const buttonsContainer = document.querySelector('.btn-container') 

window.addEventListener('DOMContentLoaded', function(){
    addItems(menu);
    categoryFilter();
})

const addItems = (category) => {
  const insertItemsMenu = category.map((item) => {
    return `<article class="item-container">
                <div class="img-container">
                  <img src="${item.img}" class="item-img" alt="${item.title}">
                </div>
                <div class="content-container">
                    <div class="item-data">
                        <h3 class="item-title">${item.title}</h3>
                        <p class="item-price">${item.price}</p>
                    </div>
                    <div class="desc-container">
                        <p class="item-description">${item.desc}</p>
                    </div>
                </div>
            </article>`
}).join('')

menuItems.innerHTML = insertItemsMenu
}

const categoryFilter = () => {
  const allButtons = addCategoriesButtons()

  allButtons.forEach((button) =>{
    button.addEventListener('click', function(){
      const category = button.id

      allButtons.forEach((item)=> {
        item.classList.remove('active')
      })
      
      button.classList.add('active')
      const categoryItems = menu.filter((item) => item.category === category)
    
      if(category === 'All'){
        addItems(menu)
      }else{
        addItems(categoryItems)
      }
    })
  })


}

const addCategoriesButtons = () => {
  //aplicando reduce para gerar um array com todas as categorias distintas
  const allCategories = menu.reduce((categories, item) => {
    if(!categories.includes(item.category)){
      categories.push(item.category)
    }
    return categories
  }, ['All'])

  const insertButtonsMenu = allCategories.map((item) => {
    return `<button class="btn" id="${item}" type=button>${item}</button>`
  }).join('')

  buttonsContainer.innerHTML = insertButtonsMenu
  const allButtons = document.querySelectorAll('.btn')

  return allButtons
}