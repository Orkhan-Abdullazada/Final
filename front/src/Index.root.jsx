const { default: Add } = require("./Pages/Add");
const { default: Basket } = require("./Pages/Basket");
const { default: Detail } = require("./Pages/Detail");
const { default: Home } = require("./Pages/Home");
const { default: MainRoot } = require("./Pages/MainRoot");
const { default: Wishlist } = require("./Pages/Wishlist");

const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"Add",
                element:<Add/>
            },
            {
                path:"WishList",
                element:<Wishlist/>
            },
            {
                path:"Basket",
                element:<Basket/>
            },
            {
                path:"/:id",
                element:<Detail/>
            },
        ]
    }
]
export default ROUTES