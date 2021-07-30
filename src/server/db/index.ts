import * as mysql from "mysql";
import Chirps from "./chirps";
import Users from './users';

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'guest',
    password: 'guest',
    database: 'c14chirpr2',
    port: 3306
});

export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

export default {
    Chirps,
    Users
}