let char = new Knight('Keflon')
let monster = new BigMonster();

const stage = new Stage (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);

stage.start()