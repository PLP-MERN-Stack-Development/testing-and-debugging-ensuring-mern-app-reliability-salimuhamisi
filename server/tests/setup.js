
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const mongoose = require('mongoose');

// Close DB after all tests
afterAll(async () => {
  await mongoose.connection.close();
});
