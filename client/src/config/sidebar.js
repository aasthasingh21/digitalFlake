import { AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { TbBoxSeam } from "react-icons/tb";

const SIDEBAR_DATA = [ // we create an array and later map it in sidebar 
    {
        name: 'home',
        title: 'Home',
        icon: AiOutlineHome,
        route: '/'
    },
    {
        name: 'category',
        title: 'Category',
        icon: AiOutlineAppstore,
        route: '/category'
    },
    {
        name: 'product',
        title: 'Products',
        icon: TbBoxSeam,
        route: '/product'
    },
]

export default SIDEBAR_DATA;