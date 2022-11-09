import {createConnection, getConnectionOptions} from 'typeorm';

async function CriarConexao(){
    const defaultOptions = await getConnectionOptions();
    return createConnection(Object.assign(defaultOptions));
}

export {CriarConexao}