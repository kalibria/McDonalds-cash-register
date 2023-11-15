import WrapperNavigationMenu from 'components/ui/NavigationMenu';
import { getClient } from "../../src/lib/client";
import { gql } from "@apollo/client";

const query = `query {
    productList {
        burgers {
            productName
            price
        }
        drinks {
            productName
            price
        }
      fries{
              productName
              price
          }
      desserts{
              productName
              price
          }
      salads{
              productName
              price
          }
      }
}`;

export default async function Home() {
  const { data } = await getClient().query({ query : gql(query) });
  console.log("data", data)

  return (
    <main >
     <p>Menu</p>
      <WrapperNavigationMenu data={data}/>
    </main>
  )
}
