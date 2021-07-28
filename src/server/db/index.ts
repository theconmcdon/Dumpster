import * as mysql from 'mysql';

import Chirps from './chirps';

export const Connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'chirprapp',
    password: 'BlahBlah123!',
    database: 'c14chirpr'
});

export const Query = (query: string, values?: Array<string | number>) => {
    console.log('yep')
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if(err) return reject(err);
            return resolve(results);
        })
    })

}

export default {
    Chirps
}