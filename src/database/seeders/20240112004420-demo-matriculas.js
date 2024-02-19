'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('matriculas', [{
      estudante_id: 1,
      curso_id: 1,
      status: 'matriculado',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      estudante_id: 2,
      curso_id: 2,
      status: 'matriculado',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      estudante_id: 3,
      curso_id: 3,
      status: 'matriculado',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      estudante_id: 4,
      curso_id: 4,
      status: 'matriculado',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
    await queryInterface.bulkDelete('matriculas', null, {});
  }
};
