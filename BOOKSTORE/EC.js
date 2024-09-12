class ProdutoCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.style.width = '10rem';

        const img = document.createElement('img');
        img.setAttribute('class', 'card-img-top');
        img.src = this.getAttribute('src');
        img.alt = this.getAttribute('alt');

        const cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body');

        const title = document.createElement('h5');
        title.setAttribute('class', 'card-title');
        title.textContent = this.getAttribute('title');

        const price = document.createElement('p');
        price.setAttribute('class', 'card-text');
        price.textContent = this.getAttribute('price');

        cardBody.appendChild(title);
        cardBody.appendChild(price);
        card.appendChild(img);
        card.appendChild(cardBody);
        shadow.appendChild(card);

        const style = document.createElement('style');
        style.textContent = `
            .card {
                border: 1px solid #ddd;
                border-radius: 4px;
                margin: 10px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }
            .card-img-top {
                width: 100%;
                height: auto;
            }
            .card-body {
                padding: 15px;
            }
            .card-title {
                font-size: 1.25rem;
                margin-bottom: 10px;
            }
            .card-text {
                font-size: 1rem;
                color: #333;
            }
        `;
        shadow.appendChild(style);
    }
}

customElements.define('produto-card', ProdutoCard);
