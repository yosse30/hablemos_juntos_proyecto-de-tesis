export function tarjeta(item, index, categoria) {

    const div = document.createElement('div');
    div.className = 'col-12 col-md-6 p-3 tarjeta';


    const cardDiv = document.createElement('div');
    cardDiv.className = 'card shadow';

    const cardHeaderDiv = document.createElement('div');
    cardHeaderDiv.className = 'card-header';

    const imgDiv = document.createElement('div');
    imgDiv.className = 'mx-auto centrar';

    const img = document.createElement('img');
    img.id = `audio-button-${categoria}-${index}`;
    img.src = item.imagen;
    img.alt = item.texto;
    img.className = 'audio-button';
    img.style.cursor = 'pointer';

    let audio = null;

    if (item.audio) {
        audio = document.createElement('audio');
        audio.id = `audio-${categoria}-${index}`;
        audio.src = item.audio;

        img.addEventListener('click', () => {
            document.querySelectorAll('audio').forEach(a => {
                a.pause();
                a.currentTime = 0;
            });
            audio.play();
        });

    }

    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.className = 'card-body texto-tarjeta';
    cardBodyDiv.textContent = item.texto;

    if (audio) {
        const btnRepetir = document.createElement('button');
        btnRepetir.textContent = '🔁 Repetir';
        btnRepetir.className = 'btn-repetir';

        btnRepetir.addEventListener('click', () => {
            document.querySelectorAll('audio').forEach(a => {
                a.pause();
                a.currentTime = 0;
            });
            audio.play();
        });

        cardBodyDiv.appendChild(btnRepetir);
    }

    imgDiv.appendChild(img);
    if (audio) imgDiv.appendChild(audio);

    cardHeaderDiv.appendChild(imgDiv);
    cardDiv.appendChild(cardHeaderDiv);
    cardDiv.appendChild(cardBodyDiv);
    div.appendChild(cardDiv);

    return div;
}