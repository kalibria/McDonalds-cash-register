import React from 'react'
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

const query = `query {
  productList {
    burgers {
      productName
      price
    }
  }
}
`

const BurgersPage = async () =>{
  const {data:{productList:{ burgers }}} = await getClient().query({query: gql(query)});


  const burgersList = burgers.map((product) => {
    return <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]" key={product.productName}>
      <li>{product.productName}</li>
      <li>{product.price}</li>
    </ul>
  })

  return <div>
    <p>Burgers</p>
    {burgersList}
  </div>
}

export default BurgersPage
