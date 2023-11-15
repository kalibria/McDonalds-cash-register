import React from 'react'
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

const query = `query {
  productList {
    drinks {
      productName
      price
    }
  }
}
`

const DrinksPage = async () =>{
  const {data:{productList:{ drinks }}} = await getClient().query({query: gql(query)});


  const drinksList = drinks.map((product) => {
    return <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]" key={product.productName}>
      <li>{product.productName}</li>
      <li>{product.price}</li>
    </ul>
  })

  return <div>
    <p>Drinks</p>
    {drinksList}
  </div>
}

export default DrinksPage
