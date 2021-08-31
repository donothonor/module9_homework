const page = document.querySelector('.page');
const limit = document.querySelector('.limit')
const submit = document.querySelector('button')
const content = document.querySelector('.content')


submit.addEventListener('click', (event) => {
    event.preventDefault();
    if ((page.value < 1 || page.value > 10 || isNaN(page.value)) && (limit.value < 1 || limit.value > 10 || isNaN(limit.value))) {
        content.innerHTML = 'Номер страницы и лимит вне диапозона от 1 до 10!'
    } else if (page.value < 1 || page.value > 10 || isNaN(page.value)) {
        content.innerHTML = 'Номер страницы вне диапозона от 1 до 10!'
    } else if (limit.value < 1 || limit.value > 10 || isNaN(limit.value)) {
        content.innerHTML = 'Лимит вне диапозона от 1 до 10!'
    } else {
        fetch(`https://picsum.photos/v2/list?page=${page.value}&limit=${limit.value}`)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('items', JSON.stringify(data))
                let card = ''
                let cardBlock = ''
                data.forEach(item => {
                    card = `<div class="card">
                    <img class="card-img" src=${item.download_url}>
                    </div>`
                    cardBlock += card
                })
        
                content.innerHTML = cardBlock
            })
    }
})
const state = localStorage.getItem('item')
const myState = JSON.parse(state)
window.onload = function () {
    if (state) {
        console.log(state)
        let cards = ''
        myState.forEach(item => {
            let cardBlock = `<div class = "card">
            <img src=${item.download_url}
            </div>`
            cards = cards + cardBlock
        })
        content.innerHTML = cards
    }
}

