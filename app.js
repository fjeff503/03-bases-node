//requires
const { argv } = require("./config/yargs");
const { crearArchivo } = require("./helpers/multiplicar");
const color = require('colors');


// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base);

crearArchivo(argv.b, argv.l, argv.h)
    .then((nombreArchivo) => {
        console.log(`${nombreArchivo} creada correctamente!`.rainbow);
    })
    .catch((err) => {
        console.log(err);
    });
