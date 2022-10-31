import burgern from '../../assets/Nav/burgern.jpg'
import hot from '../../assets/Nav/hot.jpg'
import rice from '../../assets/Nav/rice.jpg'
import meat from '../../assets/Nav/meat.jpg'
import soup from '../../assets/Nav/soup.jpg'
import dessert from '../../assets/Nav/dessert.jpg'
import salad from '../../assets/Nav/salad.jpg'
const menuItem = [
    {
        path:"/hot-deals",
        name: "Hot Deals",
        img: <img src={hot} alt="aass" style={{width: "40px", height: "40px", border: "none", borderRadius: "50%"}} />
    },
    
    {
        path:"/meat",
        name: "Meat",
        img: <img src={meat} alt="aass"  style={{width: "40px", height: "40px", border: "none", borderRadius: "50%"}}/>
    },
    {
        path:"/rice",
        name: "Rice",
        img: <img src={rice} alt="aass"  style={{width: "40px", height: "40px", border: "none", borderRadius: "50%"}}/>
    },
    {
        path:"/soup",
        name: "Soup",
        img: <img src={soup} alt="aass"  style={{width: "40px", height: "40px", border: "none", borderRadius: "50%"}}/>
    },
    {
        path:"/salad",
        name: "Salad",
        img: <img src={salad} alt="aass"  style={{width: "40px", height: "40px", border: "none", borderRadius: "50%"}}/>
    },
    {
        path:"/",
        name: "Fast Food",
        img: <img src={burgern} alt="aass"  style={{width: "40px", height: "40px", border: "none", borderRadius: "50%"}}/>
    },
    {
        path:"/desserts",
        name: "Desserts",
        img: <img src={dessert} alt="aass"  style={{width: "40px", height: "40px", border: "none", borderRadius: "50%"}}/>
    },
];

export default menuItem;