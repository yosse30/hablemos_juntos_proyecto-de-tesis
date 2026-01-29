console.log("✅ principal.js SI se está ejecutando");

import { data } from './data.js';
import { tarjeta } from './tarjeta.js';

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll('.tabcontent').forEach(tab => {

        const categoria = tab.dataset.category;

        // Ignorar inicio u otros divs
        if (!categoria || !data[categoria]) return;

        const cardContainer = tab.querySelector('.card-container');
        if (!cardContainer) return;

        data[categoria].forEach((item, index) => {
            const card = tarjeta(item, index, categoria);
            cardContainer.appendChild(card);
        });

    });

});