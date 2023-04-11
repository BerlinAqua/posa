const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('GRACIAS POR CONFIAR EN MI. TE VOY A HACER  MUY FELIZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ, ADEMAS ESTAS ACEPTANDO MUCHAS AVENTURAS JUNTITOS POR MUCHO TIEMPECITOOOOO. TE QUIERO MUCHOOOOOOOOOO Y TE ADORO MI ANITA PRECIOSA')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
