'use client'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  NavigationMenuItem,
  NavigationMenuLink
} from '@radix-ui/react-navigation-menu';
import Link from 'next/link';

interface IProduct {
  productName: string,
  price: number
}

interface IProducts {
  data: {
    productList: {
      burgers: IProduct[],
      drinks: IProduct[],
      fries: IProduct[],
      desserts: IProduct[],
      salads: IProduct[]
    }
  }
}



const WrapperNavigationMenu = () =>{


  return <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <Link href="/burgers" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Burgers
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <Link href="/fries" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Fries
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <Link href="/salads" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Salads
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <Link href="/drinks" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Drinks
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <Link href="/deserts" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Deserts
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>


    </NavigationMenuList>
  </NavigationMenu>


}

export default WrapperNavigationMenu
