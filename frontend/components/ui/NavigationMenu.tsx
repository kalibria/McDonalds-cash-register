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
  burgers: IProduct[],
  drinks: IProduct[],
  fries: IProduct[],
  desserts: IProduct[],
  salads: IProduct[]
}



const WrapperNavigationMenu = ({burgers,drinks,fries,desserts,salads}:IProducts) =>{


  return <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Link</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Link</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <Link href="/docs" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Documentation
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>


}

export default WrapperNavigationMenu
