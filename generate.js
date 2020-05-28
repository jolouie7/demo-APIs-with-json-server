// Generate random data

module.exports = () => {
  const faker = require("faker");
  const _ = require("lodash");
  return {
    people: _.times(100, function(i) {
      return {
        id: i,
        name: faker.name.findName(),
        avatar: faker.internet.avatar()
      }
    })
  }
}
