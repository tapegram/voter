# Etherium Voting App

This boilerplate was made for this [blog post](https://medium.freecodecamp.org/developing-an-ethereum-decentralized-voting-application-a99de24992d9).
### Dependencies:
- Node version 12
- Yarn version 1.22
- truffle@nodeLTS

## Setup
```
npm i -g truffle@nodeLTS
git clone https://github.com/tapegram/voter.git
cd voter
yarn 
cd client && yarn
cd ..

# And then if you want to start the client
yarn client start
```

## Issues
Node12 is required for Yarn2 but not compatible with truffle
https://github.com/trufflesuite/truffle/issues/2070

The workaround is to install and run a particular version of truffle globally instead of allowing yarn to manage it
`npm un -g truffle && npm i -g truffle@nodeLTS`

and then `truffle develop`

## TODO
Currently working our way through https://www.trufflesuite.com/tutorials/getting-started-with-drizzle-and-react#write-a-component-to-write-to-the-smart-contract
- [x] Switch to a React/Typscript front end.
- [ ] Write some dang contracts.
- [ ] Create a backend API behind graphql.
- [ ] Deploy it on AWS!

