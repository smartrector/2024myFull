const faker = require("faker");
const User = require("./src/models/User");
const {hash} = require("bcryptjs");

const getFeker = async (userCount) => {
  const users = [];

  const password = await hash("111111", 10);

  for (let i = 0; i < userCount; i++) {
    users.push(
      new User({
        name: faker.internet.userName(),
        email: faker.internet.email(),
        password,
        role: 0,
        createdAt: Date.now(),
      })
    );
  }
  console.log("fake data start");
  await User.insertMany(users);
  console.log("complete");
};

// async function getFeker(){}

module.exports = {getFeker};
