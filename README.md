# GraphQL + Express.js Star Wars API

## SWAPI REST API

Star Wars REST API at http://swapi.co/ to demonstrate a GraphQL Server running on Express.

## Installation

#### NPM Modules

The following NPM modules are required in package.json:

- express
- express-graphql
- graphql
- axios
- nodemon

Install with:

```js
npm install
```

#### Run the project

##### Running in Production

```js
npm start
```

## Running GraphQL Queries

You can run these queries within GraphiQL, alternatively you can run them within a tool such as Postman. To do so ensure you POST the query / mutation in the body and set the content-type to GraphQL.

#### Find a film by Id

```js
query {
  film (id:"1") {
    title,
    director
  }
}
```

#### Find a vehicle by Id

```js
query {
  vehicle(id: "8") {
    name
  }
}
```

#### Find a starship by Id

```js
query {
  starship(id:"5") {
    name
  }
}
```

#### Find species by Id

```js
query {
  species(id:"1") {
    name
  }
}
```

#### Find planet by Id

```js
query {
	planet(id: "1") {
    name
  }
}
```

#### Find character by Id

```js
query {
  character (id: "1") {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld {
      name
      rotation_period
      orbital_period
      diameter
      climate
      gravity
      terrain
      surface_water
      population
      residents {
        name
        birth_year
        gender
      }
      created
      edited
    },
    films {
      title
      director
    },
    species {
      name,
      classification,
      designation,
      language,
      people {
        name
        birth_year
        gender
      },
      films {
        title
        director
      }
    }
    vehicles{
      name,
      model,
      cost_in_credits,
      length,
      crew,
      passengers,
      vehicle_class,
      pilots {
        name
      },
      films {
        title
      }
    }
    starships{
      name,
      model,
      cost_in_credits,
      length,
      crew,
      passengers,
      hyperdrive_rating,
      starship_class,
      pilots {
        name
      },
      films {
        title
      }
    }
    created,
    edited
  }
}
```
