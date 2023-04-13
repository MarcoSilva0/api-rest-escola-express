import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Marco Antonio',
      sobrenome: 'Rodrigues da Silva',
      email: 'teste@teste.com',
      idade: 21,
      peso: 85.2,
      altura: 1.76,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
