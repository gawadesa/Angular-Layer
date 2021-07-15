'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */ await queryInterface.bulkInsert('Books', [{
      bookName: 'Two States',
      authoerName: 'Chetan Bhagat'
      },
      {
        bookName: 'Shyamchi Aai ',
      authoerName: 'Sane Guruji'
        },
        {
          bookName: 'Wings Of Fire ',
          authoerName: 'A. P. J. Abdul Kalam'
          }
    
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('book', null, {});
  }
};
