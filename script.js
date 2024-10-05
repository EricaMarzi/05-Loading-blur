const loadText = document.getElementById('loading');
const blurImg = document.querySelector('.bg');

/* Funzione di mappatura lineare*/
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};


let increment = 0;
function blurring() {
    increment++

    if (increment > 99) {
        clearInterval(loadIncrement)
    }

    loadText.innerText = increment + '%'
    /** Permette di far "scomparire" la scritta in sincro con la %, il value di opacity va da 1 (visibile) a 0 (invisibile) per questo è necessario la funzione di scale per permettere la transizione lineare (in breve permette di avere accesso ai numeri tra 1 e 0 nell'arco di 30ms)*/
    loadText.style.opacity = scale(increment, 0, 100, 1, 0)

    /** Stesso concetto dell'opacity, la differenza sostanziale è il tipo di value, essendo px è necessaria un'intepolazione e NON ESISTENDO il .blur in js bisogna passare da .filter */
    blurImg.style.filter = `blur(${scale(increment, 0, 100, 30, 0)}px)`
}
const loadIncrement = setInterval(blurring, 50);


