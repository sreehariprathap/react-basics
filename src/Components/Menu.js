import React from "react"
import Card from "./Card"

const Menu = () => {
  const drinks = [
    {
      id: 1,
      name: "Virgin mojito",
      isAvailable: true,
      image:
        "https://www.sustainablecooks.com/wp-content/uploads/2018/06/Classic-Virgin-Mojito-Recipe-2.jpg",
      price: "₹ 60",
    },
    {
      id: 2,
      name: "Passion fruit mojito",
      isAvailable: true,
      image:
        "https://cookienameddesire.com/wp-content/uploads/2016/05/passion-fruit-mojito-recipe-photo-1.jpg",
      price: "₹ 70",
    },
    {
      id: 3,
      name: "Water melon mojito",
      isAvailable: true,
      image:
        "https://www.watermelon.org/wp-content/uploads/2019/10/WatermelonMojito.jpg",
      price: "₹ 70",
    },
    {
      id: 4,
      name: "Alphonso mango smoothie",
      isAvailable: true,
      image:
        "https://downshiftology.com/wp-content/uploads/2018/08/Mango-Smoothie-3-2-500x500.jpg",
      price: "₹ 110",
    },
  ]
  const food = [
    {
      id: 1,
      name: "Crispy chicken burger",
      isAvailable: true,
      image:
        "https://thescranline.com/wp-content/uploads/2022/02/crispy-chicken-burger-WEB-01.jpg",
      price: "₹ 110",
    },
    {
      id: 2,
      name: "Cheesy chicken burger",
      isAvailable: true,
      image:
        "https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4-500x375.jpg",
      price: "₹ 130",
    },
    {
      id: 3,
      name: "American beef burger",
      isAvailable: true,
      image:
        "https://www.foodrepublic.com/wp-content/uploads/2012/03/033_FR11785.jpg",
      price: "₹ 150",
    },
    {
      id: 4,
      name: "Thin crust chicken pizza",
      isAvailable: true,
      image:
        "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg",
      price: "₹ 330",
    },
    {
      id: 5,
      name: "Mushroom pizza",
      isAvailable: true,
      image:
        "https://www.simplyrecipes.com/thmb/1KOEQ0SPZNXwU0pUXUDdAm6Z7xo=/2001x2001/smart/filters:no_upscale()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg",
      price: "₹ 330",
    },
    {
      id: 6,
      name: "Mexican chicken wrap",
      isAvailable: true,
      image:
        "https://www.simplejoy.com/wp-content/uploads/2020/07/Chicken-wrap.jpg",
      price: "₹ 130",
    },
  ]
  return (
    <div className="bg-slate-800 p-10">
      <h1 className="text-white text-2xl">Menu</h1>
      <h2>Food Items</h2>
      <h2 className="text-2xl text-white mt-3">Food</h2>
      <ul className="flex gap-3 pt-5 flex-wrap justify-center">
        {food.map((item) => (
          <Card
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.id}
          />
        ))}
      </ul>
      <h2 className="text-2xl text-white mt-3">Drinks</h2>
      <ul className="flex gap-3 pt-5 flex-wrap justify-center">
        {drinks.map((item) => (
          <Card
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  )
}

export default Menu
