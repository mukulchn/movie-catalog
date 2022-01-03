# movie-catalog
movie catalog

mkdir sequelize-project
cd sequelize-project
npm init -y
npm install sequelize pg
npm install --save-dev sequelize-cli

npx sequelize-cli init
code .

npx sequelize-cli db:create

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string,password:string

npx sequelize-cli db:migrate

npx sequelize-cli seed:generate --name user

sequelize-project/seeders/20190904165805-user.js
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        firstName: 'John',
        lastName: 'Doe',
        email: 'demo@demo.com',
        password: '$321!pass!123$',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },
down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

npx sequelize-cli db:seed:all

psql sequelize_project_development
SELECT * FROM "Users";