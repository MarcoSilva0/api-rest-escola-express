const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Teste',
        email: 'teste@teste.com',
        password_hash: await bcryptjs.hash('123456a', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Padrão',
        email: 'padrao@teste.com',
        password_hash: await bcryptjs.hash('123456a', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Administrador',
        email: 'admin@teste.com',
        password_hash: await bcryptjs.hash('123456a', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
