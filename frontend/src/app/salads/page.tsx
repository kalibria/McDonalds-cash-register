import React from 'react'
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

const query = `query {
  productList {
    salads {
      productName
      price
    }
  }
}
`

const SaladsPage = async () =>{
  const {data:{productList:{ salads }}} = await getClient().query({query: gql(query)});


  const saladsList = salads.map((product) => {
    return <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]" key={product.productName}>
      <li>{product.productName}</li>
      <li>{product.price}</li>
    </ul>
  })

  return <div>
    <p>Salads</p>
    {saladsList}
  </div>
}

export default SaladsPage
