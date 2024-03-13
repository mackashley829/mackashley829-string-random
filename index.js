// stringRandomUtils.js
const faker = require('faker');
const Chance = require('chance');

/**
 * Generates a random username.
 * @returns {string} The generated username.
 */
const generateUsername = () => {
  return faker.internet.userName();
};

/**
 * Generates a random email address.
 * @returns {string} The generated email address.
 */
const generateEmail = () => {
  return faker.internet.email();
};

/**
 * Generates a random password.
 * @returns {string} The generated password.
 */
const generatePassword = () => {
  return faker.internet.password();
};

/**
 * Generates a random phone number.
 * @returns {string} The generated phone number.
 */
const generatePhoneNumber = () => {
  const chance = new Chance();
  return chance.phone();
};

module.exports = {
  generateUsername,
  generateEmail,
  generatePassword,
  generatePhoneNumber,
};
