const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar, hasta) => {
    console.clear();

    try {
        let mensaje = '';

        mensaje += `TABLA DEL ${base}\n`
        for (let i = 0; i <= hasta; i++) {
            mensaje += `${base} x ${i} = ${base * i} \n`
        }

        await fs.writeFileSync(`tablas/TABLA DEL ${base}.txt`, mensaje);

        if (listar === true) {
            console.log('\n' + mensaje.random);
        }
        return `TABLA DEL ${base}`;

    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}