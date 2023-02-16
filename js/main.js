const books = document.querySelector('.books')
const card = document.querySelector('.card')

const url = 'https://63ee4e115e9f1583bdc060d9.mockapi.io/books/book'

async function getBooks() {
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)

        
        data.forEach(({title, description, author, price, imageUrl}) => {
            const card = document.createElement('div')

            card.innerHTML = `
            <div class="wrapper">
                <div class="product-img">
                    <img src="${imageUrl}" height="420" width="327">
                </div>
                <div class="product-info">
                    <div class="product-text">
                        <h1>${title}</h1>
                        <h2>Автор: ${author}</h2>
                        <p>${description}</p>
                    </div>
                    <div class="product-price-btn">
                        <p style="margin-bottom: 0">${price} р.</p>
                        <button type="button">В корзину</button>
                    </div>
                </div>
            </div>
            `
            books.appendChild(card)

        //    books.title = obj.title
        //    books.desc = obj.description
        //    books.img = obj.imageUrl
        //    console.log(books)
        })

    } catch(e) {
        console.log('Error!')
    }
}
getBooks()




