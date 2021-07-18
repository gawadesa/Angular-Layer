'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('Tutorials', [{
                title: "Title 1",
                description: "Description 1",
                published: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Title 2",
                description: "Description 2",
                published: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Title 3",
                description: "Description 3",
                published: true,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ])
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};