import gheePongal from "../assets/recipes/ghee-pongal.jpg";
import alooParatha from "../assets/recipes/alooparatha.jpg";
import puttu from "../assets/recipes/puttu.jpg";
import onionUthappam from "../assets/recipes/onion-uthappam.jpg";
import chickenFriedRice from "../assets/recipes/chicken-fried-rice.jpg";
import mpr from "../assets/recipes/mushroom.jpg";
import briyani  from "../assets/recipes/briyani.jpg";
import muttoncurry from "../assets/recipes/mutton.jpg";
import naan from "../assets/recipes/naan.jpg";
import roll from "../assets/recipes/roll.jpg";
import idli from "../assets/recipes/idly.jpg";
import ep from "../assets/recipes/parota-egg.jpg";
import gj from "../assets/recipes/gulab-jamun.jpg";
import rasamalai from "../assets/recipes/rasamalai.jpg"
import icedcoffee from "../assets/recipes/iced-coffee.jpg";
import masala from "../assets/recipes/buttermilk.jpg";
import oreo from "../assets/recipes/oreo.jpg";
import mojito from "../assets/recipes/mojito.jpg";
import bh from "../assets/recipes/hlwa.jpg";
import mp from "../assets/recipes/mango.jpg";
import pbm from "../assets/recipes/paneer-masala.jpg";
import mer from "../assets/recipes/masala-egg.jpg";
import eggbhurji from "../assets/recipes/egg-bh.jpg";
import bcm from "../assets/recipes/bcm.jpg";



const recipes = [
  // 🥞 BREAKFAST
{
  id: 1,
  name: "Ghee Pongal",
  category: "Breakfast",
  image: gheePongal,
  video: "https://youtu.be/0SZQEGoSiSU?si=_3XYShsNL3beozCz",
  time: "30 min", 
  ingredients: [
    "raw rice",
    "moong dal",
    "ghee",
    "black pepper",
    "cumin",
    "ginger",
    "curry leaves",
    "cashew nuts",
    "asafoetida",
    "salt",
    "water"
  ],
  instructions: [
    "Dry roast the moong dal in a pan until aromatic.",
    "Wash the rice and roasted moong dal together, drain and keep aside.",
    "Heat ghee in a pan, add peppercorns and allow them to splutter.",
    "Add asafoetida, curry leaves and cashew nuts; fry until cashews turn golden brown.",
    "Add cumin seeds, switch off the heat and keep this tempering aside.",
    "In a pressure cooker, heat ghee and sauté ginger with asafoetida.",
    "Add water and bring it to a boil. Add salt to taste.",
    "Add the drained rice and moong dal to the cooker.",
    "Pressure cook for 4 whistles.",
    "Once pressure releases, open the cooker and add the prepared tempering and remaining ghee.",
    "Mix well, mashing the rice and dal until a soft, creamy consistency is achieved."
  ]
},
  {
  id: 2,
  name: "Aloo Paratha",
  category: "Breakfast",
  image: alooParatha,
  video:"https://youtu.be/jLmYDZ2zjSg?si=BH0VxMy5rd1syIwt",
  time: "70 min",
  ingredients: [
    "wheat flour",
    "potato",
    "green chilli",
    "red chilli powder",
    "garam masala",
    "dry mango powder",
    "coriander leaves",
    "salt",
    "sunflower oil",
    "ghee",
    "water"
  ],
  instructions: [
    "Take wheat flour in a bowl, add salt and water, and knead into a soft, smooth dough.",
    "Add oil to the dough and knead again for a few minutes. Cover and rest the dough for 20–30 minutes.",
    "Pressure cook the potatoes with water for about 5 whistles.",
    "Allow the potatoes to cool, then peel and mash them until smooth with no lumps.",
    "Add garam masala, red chilli powder, salt, dry mango powder, chopped green chillies, and coriander leaves to the mashed potatoes. Mix well to prepare the stuffing.",
    "Method 1: Roll a small portion of dough into a 3-inch circle, place aloo stuffing in the center, seal the edges, flatten gently, and roll into a paratha.",
    "Method 2: Roll two small portions of dough into thin circles, place stuffing on one, cover with the other, seal the edges, and roll gently.",
    "Cook the paratha on a hot tawa, applying ghee on both sides until golden brown.",
    "Serve hot with curd and pickle."
  ]
},
  {
  id: 3,
  name: "Puttu",
  category: "Breakfast",
  video:"https://youtu.be/XeUA3niRw8A?si=gTjJjj7PSROlZQWn",
  image: puttu,
  time: "40 min",
  ingredients: [
    "rice",
    "puttu flour",
    "grated coconut",
    "salt",
    "water"
  ],
  instructions: [
    "Wash and soak the rice in water for about 4 hours.",
    "Strain the rice, spread it on a cloth, and allow it to dry for 30 minutes.",
    "Grind the dried rice into a fine powder. Sieve it and grind any coarse grains again, then mix it back.",
    "Add salt and grated coconut to the rice flour and mix well.",
    "Take the puttu flour in a wide bowl, add salt and half a cup of grated coconut.",
    "Sprinkle water little by little and mix gently with fingers until the moisture is evenly distributed.",
    "In a puttu cylinder, add a tablespoon of grated coconut, then add the puttu mixture halfway. Add another layer of coconut and repeat until filled.",
    "Add water to the bottom vessel of the puttu steamer and bring it to a boil.",
    "Place the filled puttu cylinder on the steamer, cover with a lid, and steam for 10 minutes.",
    "If a puttu steamer is not available, pack the puttu mixture and coconut tightly in a bowl, demould onto an oiled plate, and steam in a makeshift steamer for 10 minutes.",
    "Remove from the steamer and serve hot with sugar or vegetable stew."
  ]
},
  {
  id: 4,
  name: "Onion Uthappam",
  category: "Breakfast",
  image: onionUthappam,
  video:"https://youtu.be/49v6CdDfQAQ?si=ZiGowf9VzDiUhesw",
  time: "10 min",
  ingredients: [
    "dosa batter",
    "onion",
    "green chilli",
    "coriander leaves",
    "curry leaves",
    "gingelly oil"
  ],
  instructions: [
    "Combine chopped onion, green chilli, coriander leaves, curry leaves and a little oil in a bowl to prepare the topping mixture.",
    "Heat a tawa on high flame and pour a ladle of dosa batter. Small holes will begin to appear on the surface.",
    "Sprinkle the prepared onion mixture evenly over the uthappam and gently press the toppings.",
    "Drizzle gingelly oil around the edges, reduce the flame to medium, and cook for about 1 minute.",
    "Flip the uthappam carefully and cook for another 2 minutes until done.",
    "Remove from the pan and serve hot with chutney or sambar."
  ]
},

  // 🍛 LUNCH
 {
  id: 5,
  name: "Chicken Fried Rice",
  category: "Lunch",
  image: chickenFriedRice,
  video:"https://youtu.be/AxJi_rR887g?si=z4k5fpTtBS25vQ6G",
  time: "40 min",
  ingredients: [
    "basmati rice",
    "chicken boneless",
    "egg",
    "garlic",
    "ginger",
    "spring onion",
    "carrot",
    "beans",
    "cabbage",
    "soy sauce",
    "chilli sauce",
    "black pepper powder",
    "white pepper powder",
    "corn flour",
    "sunflower oil",
    "salt",
    "sugar"
  ],
  instructions: [
    "Wash the basmati rice and soak it in water for about 20 minutes.",
    "Bring a pot of water to a boil, add salt, then add the soaked basmati rice and cook for 5 minutes until partially cooked.",
    "Strain the rice and spread it on a plate or tray to cool completely. This helps prevent the rice grains from sticking together.",
    "In a bowl, combine the chicken pieces with soy sauce, black pepper powder, corn flour, and a pinch of salt. Mix well and keep aside.",
    "Heat a wok with 1 tablespoon of oil, add eggs with a pinch of salt, scramble them, and remove from the pan.",
    "Add 3 tablespoons of oil to the same wok, add the marinated chicken pieces, leaving space between them, and cook for about 3 minutes. Remove and keep aside.",
    "In the same wok, add garlic, ginger, and spring onion whites. Sauté briefly, then add cabbage, carrot, and beans. Add sugar and sauté on high heat for 1 minute.",
    "Add white pepper powder, soy sauce, and chilli sauce. Mix well to coat the vegetables evenly.",
    "Add the cooked rice, scrambled eggs, and cooked chicken to the wok. Toss everything together gently.",
    "Add salt if required and cook for another 2 minutes, tossing occasionally.",
    "Finally, add spring onion greens, toss once more, and remove from heat. Serve hot."
  ]
},
  {
    id: 6,
    name: "Mushroom Pepper Rice",
    image: mpr,
    video:"https://youtu.be/OYkaztnVsi0?si=SSh-t9gPPF1sDvdq",
    category: "Lunch",
    ingredients: ["rice", "mushroom", "pepper", "onion", "oil"],
    time: "25 min",
    instructions:
      "Sauté mushrooms with pepper and onion. Mix with cooked rice and serve hot.",
  },
  {
    id: 7,
    name: "Chicken Biryani",
    image: briyani,
    video:"https://youtu.be/Mve7xXFwrgY?si=UKgm4-S6sV9EkIQN",
    category: "Lunch",
    ingredients: ["rice", "chicken", "biryani masala", "onion", "curd"],
    time: "45 min",
    instructions:
      "Marinate chicken. Cook rice separately. Layer and dum cook with spices.",
  },
  {
    id: 8,
    name: "Mutton Curry",
    image: muttoncurry,
    video:"https://youtu.be/_AT1xzYSeNw?si=CsP42oSeVmqaSqzi",
    category: "Lunch",
    ingredients: ["mutton", "onion", "tomato", "spices", "oil"],
    time: "50 min",
    instructions:
      "Cook mutton with spices, onion and tomato until tender and thick gravy forms.",
  },

  // 🌙 DINNER
  {
  id: 9,
  video:"https://youtu.be/K-4TrsOxQUI?si=QvEaE3p_n8vO9-Zy",
  name: "Butter Naan",
  image: naan,
  category: "Dinner",
  time: "30 min",
  ingredients: [
    "maida",
    "baking powder",
    "baking soda",
    "curd",
    "sugar",
    "salt",
    "sunflower oil",
    "butter",
    "garlic",
    "water"
  ],
  instructions: [
    "In a kneading bowl, add maida, salt, sugar, baking soda, baking powder, curd, and water. Knead everything together into a soft dough.",
    "Add oil and continue kneading the dough for about 3 minutes. Cover and rest the dough for 60 minutes.",
    "Divide the rested dough into equal-sized balls and roll each ball into a roti-shaped circle.",
    "Hold the rolled dough between both palms and gently stretch one side by flipping your palms to elongate the dough slightly.",
    "Place the dough on a rolling board, apply oil or butter on one side, and apply a little water on the other side.",
    "Heat an iron or stainless-steel tawa and place the water-applied side of the dough onto the hot tawa.",
    "Cook for a few seconds, then lift the tawa and expose the other side of the naan directly to the flame to get a charred, tandoor-style finish.",
    "For garlic naan, sprinkle finely chopped garlic on the butter-applied side and cook the garlic side directly over the flame.",
    "Remove the naan from the tawa and apply butter on the charred side.",
    "Serve hot with curries or gravies."
  ]
}
,
  {
    id: 10,
    name: "Paneer Paratha Roll",
    video:"https://youtu.be/7_2BRFIms04?si=y1vOSlqcQu-r200j",
    image: roll,
    category: "Dinner",
    ingredients: ["paneer", "wheat flour", "onion", "spices"],
    time: "25 min",
    instructions:
      "Prepare paneer stuffing, cook paratha and roll with filling.",
  },
  {
    id: 11,
    name: "Chilli Idly",
    video:"https://youtu.be/SVoWF6X5Mzs?si=EIpOFJ9tuioDrAV3",
    image: idli,
    category: "Dinner",
    ingredients: ["idly", "capsicum", "onion", "soy sauce"],
    time: "20 min",
    instructions:
      "Fry idly pieces. Toss with vegetables, soy sauce and spices.",
  },
  {
    id: 12,
    name: "Egg Parotta",
    image: ep,
    video:"https://youtu.be/3JIJG1VUpXg?si=0Q3RyHGTFKjw8tnv",
    category: "Dinner",
    ingredients: ["parotta", "egg", "onion", "chilli"],
    time: "15 min",
    instructions:
      "Scramble eggs with onion and chilli. Mix chopped parotta and cook well.",
  },

  // 🍲 SIDE DISH
  {
  id: 13,
  name: "Butter Chicken Masala",
  video:"https://youtu.be/a03U45jFxOI?si=R-BAkRTd1MjX-QIA",
  image: bcm,
  category: "Side Dish",
  time: "45 min",
  ingredients: [
    "chicken boneless",
    "hung curd",
    "ginger garlic paste",
    "red chilli powder",
    "coriander powder",
    "cumin powder",
    "garam masala powder",
    "lemon juice",
    "tomato",
    "butter",
    "fresh cream",
    "kasuri methi",
    "sunflower oil",
    "salt"
  ],
  instructions: [
    "Add hung curd, ginger garlic paste, red chilli powder, coriander powder, cumin powder, garam masala powder, lemon juice, and salt to the cleaned chicken pieces. Mix well and marinate for at least 60 minutes.",
    "Score a cross on the tomatoes, boil them in water for about 45 seconds, remove the skin, and blend them into a smooth tomato puree.",
    "Heat sunflower oil in a pan and cook the marinated chicken pieces until they are fully cooked. Remove and keep aside.",
    "In another pan, add the tomato puree and cook for about 5 minutes until most of the moisture evaporates.",
    "Add butter and red chilli powder to the gravy and cook for 1 minute.",
    "Add kasuri methi, salt, and garam masala powder. After 30 seconds, add fresh cream and mix well.",
    "Add the cooked chicken pieces to the gravy and simmer briefly.",
    "Serve hot immediately with naan or rice."
  ]
},
  {
    id: 14,
    name: "Masala Egg Roast",
    video:"https://youtu.be/vZ8ZBtu6q9U?si=qpdzE_xCh_9cjCOj",
    image:mer,
    category: "Side Dish",
    ingredients: ["egg", "onion", "spices", "oil"],
    time: "20 min",
    instructions:
      "Roast boiled eggs with onion masala until coated well.",
  },
  {
    id: 15,
    name: "Egg Bhurji",
    image:eggbhurji,
    video:"https://youtu.be/glUEnS8J84Q?si=qKPbBZxOdyHQQSFb",
    category: "Side Dish",
    ingredients: ["egg", "onion", "tomato", "chilli"],
    time: "15 min",
    instructions:
      "Scramble eggs with onion, tomato and spices until cooked.",
  },
  {
    id: 16,
    name: "Paneer Butter Masala",
    image:pbm,
    category: "Side Dish",
    video:"https://youtu.be/oYZ--rdHL6I?si=PCfZHgMGO7NwON-L",
    ingredients: ["paneer", "butter", "tomato", "cream"],
    time: "30 min",
    instructions:
      "Cook paneer in rich tomato butter gravy and simmer.",
  },

  // 🍰 DESSERT
  {
  id: 17,
  name: "Gulab Jamun",
  image: gj,
  video:"https://youtu.be/QFvd7u_YjVk?si=XMWfW5M4QNfHLHx8",
  category: "Dessert",
  time: "60 min",
  ingredients: [
    "milk powder",
    "maida",
    "baking soda",
    "milk",
    "ghee",
    "sugar",
    "water",
    "cardamom"
  ],
  instructions: [
    "In a bowl, combine milk powder, maida, and a pinch of baking soda.",
    "Add milk little by little and gently mix to form a soft, smooth dough. Do not knead hard.",
    "Cover the dough and let it rest for 10 minutes.",
    "Divide the dough into small portions and roll them into smooth balls without cracks.",
    "Heat ghee or oil on low flame and fry the balls slowly until they turn golden brown.",
    "Remove the fried jamuns and keep them aside.",
    "In another pan, prepare sugar syrup by boiling sugar and water until it becomes slightly sticky.",
    "Add crushed cardamom to the sugar syrup and switch off the flame.",
    "Add the warm fried jamuns into the warm sugar syrup.",
    "Let the jamuns soak for at least 30 minutes before serving.",
    "Serve warm or chilled as desired."
  ]
},
  {
    id: 18,
    name: "Rasamalai",
    image: rasamalai,
    video:"https://youtu.be/Ap9DEjM8nGg?si=HS8X83Adwo57iNfY",
    category: "Dessert",
    ingredients: ["paneer", "milk", "sugar", "cardamom"],
    time: "40 min",
    instructions:
      "Cook paneer discs in sugar syrup and soak in flavored milk.",
  },
  {
    id: 19,
    name: "Bread Halwa",
    image: bh,
    video:"https://youtu.be/1U5l_Pipq8g?si=MVxiWToECsw8i9f6",
    category: "Dessert",
    ingredients: ["bread", "ghee", "sugar", "milk"],
    time: "20 min",
    instructions:
      "Cook bread with milk, sugar and ghee until thick.",
  },
  {
    id: 20,
    name: "Mango Pudding",
    image: mp,
    category: "Dessert",
    video:"https://youtu.be/dOjtVrfWw70?si=1pjkxBlZNYyRPqpP",
    ingredients: ["mango", "milk", "sugar"],
    time: "15 min",
    instructions:
      "Blend mango with milk and chill until set.",
  },

  // 🥤 BEVERAGES
 {
  id: 21,
  name: "Oreo Milkshake",
  image: oreo,
  category: "Drinks",
  video:"https://youtu.be/2zUsNerFy7w?si=XAvQ4LDcU98ORWzo",
  time: "10 min",
  ingredients: [
    "oreo biscuit",
    "vanilla ice cream",
    "milk",
    "instant coffee powder",
    "ice cubes",
    "chocolate syrup",
    "whipped cream"
  ],
  instructions: [
    "Add Oreo biscuits, vanilla ice cream, milk, instant coffee powder, and ice cubes to a blender.",
    "Blend until just combined and smooth. Do not overblend.",
    "Decorate the inside of a serving glass with chocolate syrup.",
    "Pour the milkshake into the glass.",
    "Top with whipped cream, crushed Oreo biscuits, and a drizzle of chocolate syrup.",
    "Serve immediately while chilled."
  ]
},
  {
    id: 22,
    name: "Masala Buttermilk",
    image: masala,
    category: "Drinks",
    video:"https://youtu.be/p3eg2G26RdE?si=dJ6iRZl2C2q6nqsM",
    ingredients: ["curd", "water", "salt", "curry leaves"],
    time: "5 min",
    instructions:
      "Blend curd with water, salt and spices.",
  },
  {
    id: 23,
    name: "Strawberry Mojito",
    image: mojito,
    video:"https://youtu.be/YcPrCdT5-pQ?si=ZqSicm7e74khBp_c",
    category: "Drinks",
    ingredients: ["strawberry", "mint", "lemon", "soda"],
    time: "10 min",
    instructions:
      "Muddle litchi and mint, add lemon juice and soda.",
  },
  {
    id: 24,
    name: "Iced Coffee",
    image: icedcoffee,
    video:"https://youtu.be/BtJob9f2Zvc?si=gW1KytYnGm2lAcs2",
    category: "Drinks",
    ingredients: ["coffee", "milk", "ice", "sugar"],
    time: "5 min",
    instructions:
      "Blend coffee with milk, sugar and ice.",
  },
];

export default recipes;
