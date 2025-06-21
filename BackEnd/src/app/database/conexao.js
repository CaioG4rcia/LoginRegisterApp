import mysql from 'mysql'

const connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    port:'3306',
    password:'',
    database:'users'
})

export const base = (sql, val = '', errorMessage) =>{
    return new Promise((resolve, reject) => {
        connect.query(sql, val, (error, result)=>{
            if(!resolve){
                return reject(error, errorMessage)
            }
            else{
                return resolve(result)
            }
        })
    })
}

export default connect