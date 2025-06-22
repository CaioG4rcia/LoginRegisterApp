import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const connect = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

export const base = (sql, val = '') => {
    return new Promise((resolve, reject) => {
        connect.query(sql, val, (error, result) => {
            if (error) {
                console.error("Erro na consulta SQL:", error);
                return reject(error);
            } else {
                return resolve(result);
            }
        });
    });
};

export default connect;
