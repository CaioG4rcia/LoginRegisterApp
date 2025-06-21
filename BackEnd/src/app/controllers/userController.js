import userRepositories from "../repository/userRepositories.js"

class userController{

    async create  (req, res){
        const nome = req.body.nome
        const email = req.body.gmail
        const password = req.body.senha
        const line = [nome, email, password]
        const resAwaiting = await userRepositories.criar(line)
        res.json(resAwaiting)
    }
    async read    (req, res){
        const resAwaiting = await userRepositories.ler()
        res.json(resAwaiting)
    }
    async update  (req, res){
        const id = req.params.id
        const line = req.body
        const resAwaiting = await userRepositories.atualizar(line,id)
        res.json(resAwaiting)
    }
    async delete  (req, res){
        const id = req.params.id
        const resAwaiting = await userRepositories.deletar(id)
        res.json(resAwaiting)
    }
    async login   (req, res){
        const email = req.body.gmail
        const senha = req.body.senha

        try {
            const resAwaiting = await userRepositories.acharPorEmail(email)
                if(resAwaiting.length <= 0){
                    return res.status(404).json({message: 'Usuário não Encontrado!'})
                }
                const senhaAtual = resAwaiting[0].senha;

                if(senha !== senhaAtual){
                    return res.status(500).json({message: 'Senha Incorreta!'})
                }
                if(senha === senhaAtual){
                    return res.status(201).json({message: 'Senha Correta!'})
                }

        } catch (error) {
            console.log(error)
        }

    }

}

export default new userController