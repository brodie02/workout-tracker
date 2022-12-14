const sequelize = require('../config/connection');
const { User, Exercise, Set } = require('../models');

const userData = require('./userData.json');
const exerciseData = require('./exerciseData.json');
const setData = require('./setData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Exercise.bulkCreate(exerciseData, {
    individualHooks: true,
    returning: true,
  });

  await Set.bulkCreate(setData, {
    individualHooks: true,
    returning: true,
  });


  process.exit(0);
};

seedDatabase();