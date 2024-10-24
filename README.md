# Affiliate TON JavaScript Library

This library enables advertisers on the TON blockchain to seamlessly track user actions (like registrations or purchases) through custom operation codes in their applications. It securely signs transactions with a wallet (using mnemonics) and sends them to the campaign smart contracts.

## Features

- Automatically loads mnemonics from a `.env` file for wallet authentication.
- Send user action transactions to the TON blockchain with custom operation codes.
- Tracks affiliate-specific actions via operation codes.
- Easily integrates with buttons or other events on the advertiser’s website.

## Installation

You can install this library via NPM or clone it directly from the repository.

```bash
npm install affiliate-ton-library
```

```bash
git clone https://github.com/your-repo/affiliate-ton-library.git
cd affiliate-ton-library
npm install
```

Then, import it locally:
```javascript
import { trackUserAction } from './path-to-library/src/actions';
```

## Setup

To use the library, you must set up your environment file to securely load your mnemonic seed phrase.

  1. Copy .env.example to .env and replace it with your seed phrase:
  ```bash
  cp .env.example .env
```

  2. Edit .env to add your seed phrase:
  ```bash
  MNEMONICS="your seed phrase here"
  ```



