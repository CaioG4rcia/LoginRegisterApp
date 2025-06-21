import {base} from "../database/conexao.js"


class userRepositories{
    criar(line){
        const sql = 'INSERT INTO accounts (nome, gmail, senha) VALUES (?,?,?)';
        return base(sql, line, 'Failed Create!')
    }
    ler(){
        const sql = 'SELECT * FROM accounts'
        return base(sql, 'Failed Read!')
    }
    atualizar(line, id){
        const sql = 'UPDATE TABLE accounts SET ? WHERE ID = ?'
        return base(sql, [line, id], 'Failed Upadate!')
    }
    deletar(id){
        const sql = 'DELETE FROM accounts WHERE ID = ?'
        return base(sql, id, 'Failed Delete!')
    }
    acharPorEmail(email){
        const sql = 'SELECT * FROM accounts WHERE gmail = ?'
        return base(sql, email, 'Failed Find By Gmail!')
    }
}

export default new userRepositories