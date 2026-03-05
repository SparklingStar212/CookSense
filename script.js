const allFood = [];
const spicyFood = [];
const veganFood = [];
const mainCourseFood = [];
const desertFood = [];
const soupFood = [];


const imageMap = {
  '1': "https://eatwellabi.com/wp-content/uploads/2022/11/Jollof-rice-16.jpg",
  '2': "https://joyfulcook.com/wp-content/uploads/2024/12/WhatsApp-Image-2025-01-08-at-08.19.23_707dbada-843x1024.jpg",
  '3': "https://bustopbistro.ng/wp-content/uploads/2020/04/35-Pounded-yam.jpg",
  '4': "https://simshomekitchen.com/wp-content/uploads/2021/03/Beef-suya-on-kebab-sticks-with-red-onions-and-cucumber.jpg",
  '5': "https://kikifoodies.com/wp-content/uploads/2024/11/E685E539-B688-4131-BFFE-2288C9899A61-scaled.jpeg",
  '6': "https://www.mydiasporakitchen.com/wp-content/uploads/2019/06/savingpng-19.png",
  '7': "https://sisijemimah.com/wp-content/uploads/2015/06/20190728_121338.jpg",
  '8': "https://www.seriouseats.com/thmb/SIgX6c88ymaYgdVv0sILN2UBwmk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20220908-nigerian-fried-rice-maureen-celestine-Hero-896bf29d24dc4f349bbaf41c4df042e0.JPG",
  '9': "https://lowcarbafrica.com/wp-content/uploads/2021/07/Chicken-Pepper-Soup-IG-1.jpg",
  '10': "https://yummieliciouz.com/wp-content/uploads/2023/04/easy-amala-fele-fele-1024x683.jpg",
  '11': "https://eatwellabi.com/wp-content/uploads/2021/05/air-fryer-plantain-1-720x480.jpg",
  '12': "https://www.myactivekitchen.com/wp-content/uploads/2016/12/ofada-stew-recipe-image_jpg.jpg",
  '13': "https://shopafricausa.com/cdn/shop/articles/Efo-Riro-Nigerian-Spinach-Stew-homepage-1_770x500.jpg?v=1636142191",
  '14': "https://miro.medium.com/1*SNn5PRgsMJHse1dVUVmjLw.jpeg",
  '15': "https://simshomekitchen.com/wp-content/uploads/2020/03/puff-puff-pepper.jpg",
  '16': "https://img-global.cpcdn.com/recipes/c0629d753421686a/1200x630cq80/photo.jpg",
  '17': "https://cdn.shopify.com/s/files/1/0521/2415/6104/articles/Chin_Chin.jpg?v=1639595235",
  '18': "https://sisijemimah.com/wp-content/uploads/2016/04/Afang-soup-10-1024x683.jpg",
  '19': "https://cdn.guardian.ng/wp-content/uploads/2018/01/IMG_5277.jpg",
  '20': "https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/submissions/recipe/2001609397/Hlt9Ny7R1TKSV0ilhoQX_nigerian%20ewa%20agoyin.jpg",
  '21': "https://cookingwithclaudy.com/wp-content/uploads/2024/03/20240327105424_IMG_6961.jpg",
  '22': "https://worldlytreat.com/wp-content/uploads/2018/08/Nigerian-okro-soup-1-1.jpg",
  '23': "https://www.myactivekitchen.com/wp-content/uploads/2019/11/nigerian-banga-soup-my-active-kitchen-.jpg",
  '24': "https://rexclarkeadventures.com/wp-content/uploads/2024/09/Masa-Waina.jpg",
  '25': "https://nubiandelicacies.com/wp-content/uploads/2023/02/Abacha.-Photo-Agathas_cuisine.jpg",
  '26': "https://joyfulcook.com/wp-content/uploads/2025/01/PHOTO-2025-01-10-18-28-57-2-e1739135083724.jpg",
  '27': "https://simshomekitchen.com/wp-content/uploads/2021/09/sweet-fried-plantains-480x270-1.jpg",
  '28': "https://www.threecrowns.com.ng/wp-content/uploads/2021/07/miyan_kuka__0-968x565.jpg",
  '29': "https://i.pinimg.com/736x/61/52/f1/6152f161406f4a62e31ff1cf4611a385.jpg",
  '30': "https://cdn.guardian.ng/wp-content/uploads/2020/01/CookingsenseMag-Yamarita.jpg"
};

const featuredRecipesContainer = document.getElementById("featured-recipes");
const endpoint = "https://mongotest2026.vercel.app/api/foods";

const getInfo = async () => {
  try {
    const response = await fetch(endpoint);
    const newResponse = await response.json();
    console.log(newResponse);

    newResponse.data.forEach(food => {
      if (imageMap[food.id]) {
        food.image = imageMap[food.id];
      }
    });

    allFood.push(...newResponse.data);

    if (newResponse.data) {
      newResponse.data.map((food, i) => {
        featuredRecipesContainer.innerHTML += `
        <div class="recipe-card" onclick="showDetails(${i})";>
          <div class="recipe-image-container" style="background-image: url('${food.image}');"></div>
          <h3>${food.name}</h3>
          <p>${food.description}</p>
        </div>
      `;
      });
    } else {
      featuredRecipesContainer.innerHTML = `<p>No recipes found.</p>`;
    }



  } catch (error) {
    console.error("Error fetching food data:", error);
  }
}


getInfo();
const modalOverlay = document.getElementById('modalOverlay')

const showDetails = (i) => {
  modalOverlay.style.display = "flex";
  const food = allFood[i];
  modalOverlay.innerHTML = `
      <div class="modal-box">
        <div class="close-btn" onclick="modalOverlay.style.display = 'none';">
          <img src="/Icons/close-icon.svg" alt="Close" width="20">
        </div>
        <div class="recipe-image-container" style="background-image: url('${food.image}'); margin-bottom: 1dvh;"></div>
        <h3>${food.name}</h3>
        <p>${food.description}</p>
        <p><span class="label">Preparation Time</span> : ${food.preparationTime}</p>
        <p><span class="label">Cooking Difficulty</span> : ${food.difficulty}</p>
        <p><span class="label">Ingredients</span> : ${food.ingredients.map(ing => `<span class="ingredient">${ing}</span>`).join(', ')}</p>
        <p><span class="label">Category</span> : ${food.category}</p>
        <p><span class="label">Region</span> : ${food.region}</p>
        <p><span class="label">Price</span> : ₦${food.price}</p>
        <p><span class="label">Calories</span> : ${food.calories}</p>
      </div>
  `
}

const categories = document.getElementById('categories-btn');
const regions = document.getElementById('region-btn');
const vegetarian = document.getElementById('vegetarian-btn');
const spicy = document.getElementById('spicy-btn');


const mainCourse = document.getElementById('mainCourse-btn');
// const dessert = document.getElementById('dessert-btn')
// const appetizer = document.getElementById('appetizer-btn');
const soup = document.getElementById('soup-btn');
//const sideDish = document.getElementById('side-dish-btn')
// const breakFast = document.getElementById('breakfast-btn');
const swallow = document.getElementById('swallow-btn');
//const snack = document.getElementById('snack-btn');


categories.addEventListener('click', () => {
  const filterByCategories = document.querySelector('.filter-by-categories');
  filterByCategories.style.display = filterByCategories.style.display === 'flex' ? 'none' : 'flex';
});

mainCourse.addEventListener('click', () => {
  const mainCourseEndpoint = "https://mongotest2026.vercel.app/api/foods/category/main%20course";

  async function getMainCourseFoods() {
    try {
      const response = await fetch(mainCourseEndpoint);
      const newResponse = await response.json();
      console.log(newResponse);

      newResponse.data.forEach(food => {
        if (imageMap[food.id]) {
          food.image = imageMap[food.id];
        }
      });

      mainCourseFood.push(...newResponse.data);

      featuredRecipesContainer.innerHTML = '';

      newResponse.data.map((food, i) => {
        featuredRecipesContainer.innerHTML += `
        <div class="recipe-card" onclick="showDetails(${i})";>
          <div class="recipe-image-container" style="background-image: url('${food.image}');"></div>
          <h3>${food.name}</h3>
          <p>${food.description}</p>
        </div>
      `;
      });
    } catch (error) {
      console.error("Error fetching main course food data:", error);
    }
  }

  getMainCourseFoods();
});





//   const dessertEndpoint = "https://mongotest2026.vercel.app/api/foods/category/main%20course";

//   async function getDesertFoods() {
//     try {
//       const response = await fetch(dessertEndpoint);
//       const newResponse = await response.json();
//       console.log(newResponse);

//       newResponse.data.forEach(food => {
//         if (imageMap[food.id]) {
//           food.image = imageMap[food.id];
//         }
//       });

//       desertFood.push(...newResponse.data);

//       featuredRecipesContainer.innerHTML = '';

//       newResponse.data.map((food, i) => {
//         featuredRecipesContainer.innerHTML += `
//         <div class="recipe-card" onclick="showDetails(${i})";>
//           <div class="recipe-image-container" style="background-image: url('${food.image}');"></div>
//           <h3>${food.name}</h3>
//           <p>${food.description}</p>
//         </div>
//       `;
//       });
//     } catch (error) {
//       console.error("Error fetching main course food data:", error);
//     }
//   }

//   getDesertFoods();
// });

soup.addEventListener('click', () => {
  const soupEndpoint = "https://mongotest2026.vercel.app/api/foods/category/soup";


  async function getSoupFoods() {
    try {
      const response = await fetch(soupEndpoint);
      const newResponse = await response.json();
      console.log(newResponse);

      newResponse.data.forEach(food => {
        if (imageMap[food.id]) {
          food.image = imageMap[food.id];
        }
      });

      soupFood.push(...newResponse.data);
      featuredRecipesContainer.innerHTML = '';
      newResponse.data.map((food, i) => {
        featuredRecipesContainer.innerHTML += `
        <div class="recipe-card" onclick="showDetails(${i})";>
          <div class="recipe-image-container" style="background-image: url('${food.image}');"></div>
          <h3>${food.name}</h3>
          <p>${food.description}</p>
        </div>
      `;
      });
    } catch (error) {
      console.error("Error fetching soup food data:", error);
    }
  }

  getSoupFoods();
});

swallow.addEventListener('click', () => {
  const swallowEndpoint = "https://mongotest2026.vercel.app/api/foods/category/swallow";

  async function getSwallowFoods() {
    try {
      const response = await fetch(swallowEndpoint);
      const newResponse = await response.json();
      console.log(newResponse);

      newResponse.data.forEach(food => {
        if (imageMap[food.id]) {
          food.image = imageMap[food.id];
        }
      });

      featuredRecipesContainer.innerHTML = '';

      newResponse.data.map((food, i) => {
        featuredRecipesContainer.innerHTML += `
        <div class="recipe-card" onclick="showDetails(${i})";>
          <div class="recipe-image-container" style="background-image: url('${food.image}');"></div>
          <h3>${food.name}</h3>
          <p>${food.description}</p>
        </div>
      `;
      });
    } catch (error) {
      console.error("Error fetching swallow food data:", error);
    }
  }

  getSwallowFoods();
});




const allRegions = document.getElementById('all-region-btn')
const northern = document.getElementById('northern-nigeria-btn')



regions.addEventListener('click', () => {
  const filterByRegion = document.querySelector('.filter-by-region');
  filterByRegion.style.display = filterByRegion.style.display === 'flex' ? 'none' : 'flex';
});



vegetarian.addEventListener('click', () => {
  const veganEndpoint = "https://mongotest2026.vercel.app/api/foods/filter/vegetarian";

  async function getVegetarianFoods() {
    try {
      const response = await fetch(veganEndpoint);
      const newResponse = await response.json();
      console.log(newResponse);

      newResponse.data.forEach(food => {
        if (imageMap[food.id]) {
          food.image = imageMap[food.id];
        }
      });

      veganFood.push(...newResponse.data);

      featuredRecipesContainer.innerHTML = '';

      newResponse.data.map((food, i) => {
        featuredRecipesContainer.innerHTML += `
        <div class="recipe-card" onclick="showDetails(${i})";>
          <div class="recipe-image-container" style="background-image: url('${food.image}');"></div>
          <h3>${food.name}</h3>
          <p>${food.description}</p>
        </div>
      `;
      });
    } catch (error) {
      console.error("Error fetching vegetarian food data:", error);
    }
  }

  getVegetarianFoods();
});

spicy.addEventListener('click', () => {
  const spicyEndpoint = "https://mongotest2026.vercel.app/api/foods/filter/spicy";

  async function getSpicyFoods() {
    try {
      const response = await fetch(spicyEndpoint);
      const newResponse = await response.json();
      console.log(newResponse);

      newResponse.data.forEach(food => {
        if (imageMap[food.id]) {
          food.image = imageMap[food.id];
        }
      });

      spicyFood.push(...newResponse.data);

      featuredRecipesContainer.innerHTML = '';

      newResponse.data.map((food, i) => {
        featuredRecipesContainer.innerHTML += `
        <div class="recipe-card" onclick="showDetails(${i})";>
          <div class="recipe-image-container" style="background-image: url('${food.image}');"></div>
          <h3>${food.name}</h3>
          <p>${food.description}</p>
        </div>
      `;
      });
    } catch (error) {
      console.error("Error fetching spicy food data:", error);
    }
  }

  getSpicyFoods();
});

const phrases = [
  "Discover Delicious Recipes!",
  "Your Culinary Journey Starts Here.",
  "Cook with Clarity.",
  "Let’s Make Something Delicious."
];

const textElement = document.querySelector("#myText");

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    textElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentPhrase.length) {
      setTimeout(() => isDeleting = true, 1500);
    }
  } else {
    textElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


