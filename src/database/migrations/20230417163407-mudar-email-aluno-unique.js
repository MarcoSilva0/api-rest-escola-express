module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.changeColumn(
    'alunos',
    'email',
    {
      type: Sequelize.STRING,
      allownNull: false,
      unique: true,
    },
  ),

  down: async (queryInterface) => queryInterface.dropTable('alunos'),
};
