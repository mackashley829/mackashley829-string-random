# String Random Utils

This module provides utilities for generating random strings.

## Installation

You can install this module via npm: `npm install string-random-utils`

## Usage

### Generate Username
```
const { generateUsername } = require('string-random-utils');

const username = generateUsername();
console.log('Username:', username);
```

### Generate Email
```
const { generateEmail } = require('string-random-utils');

const email = generateEmail();
console.log('Email:', email);

```

### Generate Password
```
const { generatePassword } = require('string-random-utils');

const password = generatePassword();
console.log('Password:', password);

```
### Generate Phone Number

```
const { generatePhoneNumber } = require('string-random-utils');

const phoneNumber = generatePhoneNumber();
console.log('Phone Number:', phoneNumber);

```