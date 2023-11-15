import React from 'react'
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

const query = `query {
  productList {
    fries {
      productName
      price
    }
  }
}
`

const FriesPage = async () =>{
  const {data:{productList:{ fries }}} = await getClient().query({query: gql(query)});


  const friesList = fries.map((product) => {
    return <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]" key={product.productName}>
      <li>{product.productName}</li>
      <li>{product.price}</li>
    </ul>
  })

  return <div>
    <p>Fries</p>
    {friesList}
  </div>
}

export default FriesPage
