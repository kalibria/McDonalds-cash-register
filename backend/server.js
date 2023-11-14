const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Mock data
let users = [
  { id: 1, username: 'admin', isAdmin: true },
  { id: 2, username: 'user1', isAdmin: false },
  { id: 3, username: 'user2', isAdmin: false },
];

let productList = {
  "burgers": [
    {"productName": "Big Mac", "price": 4.99},
    {"productName": "Quarter Pounder with Cheese", "price": 5.49}
      ],
  "drinks": [
    {"productName": "Coca-Cola", "price": 1.99},
    {"productName": "Sprite", "price": 1.79}
      ],
  "fries": [
    {"productName": "Medium Fries", "price": 2.29},
    {"productName": "Large Fries", "price": 2.79}
      ],
  "desserts": [
    {"productName": "Apple Pie", "price": 1.29},
    {"productName": "McFlurry", "price": 2.49}
      ],
  "salads": [
    {"productName": "Caesar Salad", "price": 4.99},
    {"productName": "Side Salad", "price": 1.99}
      ]
  }


let orderHistory = [];

// GraphQL schema
const schema = buildSchema(`
  type User {
    id: ID!
    username: String!
    isAdmin: Boolean!
  }

  type Product {
    productName: String!
    price: Float!
  }
  
  type ProductGroups {
    burgers: [Product]!
    drinks: [Product]!
    fries: [Product]!
    desserts: [Product]!
    salads: [Product]!
  }

  type Order {
    date: String!
    products: [Product]
  }

  type Query {
    users: [User]!
    productList: ProductGroups
    orderHistory: [Order]!
  }

  
`);

// Resolvers
const root = {
  users: () => users,
  productList: () => productList,
  orderHistory: () => orderHistory,

  createOrder: ({ userId, products }) => {
    const user = users.find((u) => u.id == userId && !u.isAdmin);

    if (user) {
      const order = {
        date: new Date().toISOString(),
        products,
      };
      orderHistory.push(order);
      return order;
    } else {
      throw new Error('Invalid user or user is an admin.');
    }
  },

  changePrice: ({ productName, newPrice }) => {
    for (const group in productList) {
      const productIndex = productList[group].findIndex(
        (p) => p.productName === productName
      );

      if (productIndex !== -1) {
        productList[group][productIndex].price = newPrice;
        return true;
      }
    }

    return false;
  },

  addProduct: ({ group, product }) => {
    if (productList[group]) {
      productList[group].push(product);
      return true;
    } else {
      return false;
    }
  },

  removeProduct: ({ group, productName }) => {
    if (productList[group]) {
      productList[group] = productList[group].filter(
        (product) => product.productName !== productName
      );
      return true;
    } else {
      return false;
    }
  },
};

// Create an Express server
const app = express();

// Define the GraphQL endpoint
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // Enable GraphiQL for easy testing
  })
);

// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/graphql`);
});
