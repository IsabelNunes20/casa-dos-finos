# Casa dos finos

> Como relata o livro de memórias Boémia Coimbrã, de A. Nicolau da Costa, o amigo Toninho pedia sempre “um copo de cerveja de vidro fino!”. O copo fino seria o pilsen e tanto a palavra se entoou que entranhou.

Web app created for beer enthusiasts by a tea lover.

This is a monorepo for currently two apps, a react one and a nextjs one with the same concept: A Beer Collection!

## Setup instructions

1. `npm install`

### For react project:

2. `cd apps/react`

3. `npm install`

4. `npm run start`

### For nextjs project:

2. `cd apps/react`

3. `npm install`

4. `npm run dev`


## What's inside

```
.
├── apps
│   ├── nextjs                    # Next.js app (https://nextjs.org)
│   └── react                     # React app (https://react.dev)
└── packages
    ├── @repo/typescript-config   # `tsconfig.json`s used throughout the monorepo
    ├── @repo/ui                  # UI's future components to be shared between apps
...
```

## API

This [remote API](https://6835d96bcd78db2058c36a1b.mockapi.io/beers) was used to get all the beers, get one especificaly and to add more. It was build with [mockapi.io](https://mockapi.io/).
