import { IconBusinessplan, IconShoppingBagCheck, IconShoppingBagExclamation, IconShoppingCart } from "@tabler/icons-react";

type SmallTile = {
  icon: any;
  count: number | string; 
  titleText: string;
  progrees: number;
  isPositive: boolean;
  color:string
};
type SmallTiles = SmallTile[];

export const smallTiles: SmallTiles = [
    {
        icon:IconShoppingCart,
        count:75,
        titleText:"Total Orders",
        isPositive:true,
        progrees:3,
        color:"blue"
    },
    {
        icon:IconShoppingBagCheck,
        count:70,
        titleText:"Total Dilivered",
        isPositive:false,
        progrees:4,
        color:"green"
    },
      {
        icon:IconShoppingBagExclamation,
        count:70,
        titleText:"Total Cancelled",
        isPositive:true,
        progrees:5,
        color:"red"
    },
      {
        icon:IconBusinessplan,
        count:"$12K",
        titleText:"Total Revenue",
        isPositive:false,
        progrees:4,
        color:"green"
    }
];

// export default { smallTiles };
