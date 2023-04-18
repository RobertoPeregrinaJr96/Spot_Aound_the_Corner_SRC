'use strict';

/** @type {import('sequelize-cli').Migration} */


let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

const demoReviews = [
  {
    review: 'this was okay place to stay',
    stars: 3,
    userId: 1,
    spotId: 2,
  },
  {
    review: 'this is a other worldly place to stay',
    stars: 9,
    userId: 2,
    spotId: 3,
  },
  {
    review: 'this was okay place to stay',
    stars: 6,
    userId: 3,
    spotId: 4,
  },
]

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    options.tableName = 'Reviews';
    await queryInterface.bulkInsert(options, demoReviews, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Reviews';
    await queryInterface.bulkInsert(options, demoReviews, {});
  }
};