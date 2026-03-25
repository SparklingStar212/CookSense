const allFood = [];
const spicyFood = [];
const veganFood = [];
const mainCourseFood = [];
const desertFood = [];
const soupFood = [];
const northernFood = [];
const southWestFood = [];
const southEastFood = [];
const southSouthFood = [];


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
        <div class="recipe-card" onclick="showDetails(${food.id})";>
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

const showDetails = (foodId) => {
  const food = allFood.find(f => f.id === foodId);
  modalOverlay.style.display = "flex";
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
        <p class="p-with-icon"><img src="/Icons/money-icon-orange.svg" alt="Price" width="20"> ₦${food.price}</p>
        <p><span class="label">Calories</span> : ${food.calories}</p>
        <div class="below-buttons">
          <button>${food.region}</button>
          <button id="is-vegan">Vegan</button>
          <button id="is-spicy">Spicy</button>
        </div>
      </div>
  `

  const veganBtn = document.getElementById('is-vegan');
  const spicyBtn = document.getElementById('is-spicy');

  if (food.isVegetarian === true) {
    veganBtn.style.display = "block";
  } else {
    veganBtn.style.display = "none";
  }

  if (food.isSpicy === true) {
    spicyBtn.style.display = "block";
  } else {
    spicyBtn.style.display = "none";
  }
}

const categories = document.getElementById('categories-btn');
const regions = document.getElementById('region-btn');
const vegetarian = document.getElementById('vegetarian-btn');
const spicy = document.getElementById('spicy-btn');


const mainCourse = document.getElementById('mainCourse-btn');
const soup = document.getElementById('soup-btn');
const swallow = document.getElementById('swallow-btn');
const snack = document.getElementById('snack-btn');
const filterByCategories = document.querySelector('.filter-by-categories');
const filterByRegion = document.querySelector('.filter-by-region');


const setActiveFilterButton = (element) => {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('filter-buttons-active');
  });
  element.classList.add('filter-buttons-active');
}

categories.addEventListener('click', () => {
  setActiveFilterButton(categories);
  filterByCategories.style.display = filterByCategories.style.display === 'flex' ? 'none' : 'flex';
  document.querySelector('.filter-by-region').style.display = 'none';
});

mainCourse.addEventListener('click', () => {
  setActiveFilterButton(mainCourse);
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

      newResponse.data.map((food) => {
        featuredRecipesContainer.innerHTML += `
        <div class="recipe-card" onclick="showDetails(${food.id})";>
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

soup.addEventListener('click', () => {
  setActiveFilterButton(soup);
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
      newResponse.data.map((food) => {
        featuredRecipesContainer.innerHTML += `
        <div class="recipe-card" onclick="showDetails(${food.id})";>
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
  setActiveFilterButton(swallow);
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

      newResponse.data.map((food) => {
        featuredRecipesContainer.innerHTML += `
        <div class="recipe-card" onclick="showDetails(${food.id})";>
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

snack.addEventListener('click', () => {
  setActiveFilterButton(snack);
  let filteredFoods = allFood;
  filteredFoods = allFood.filter(food =>
    food.category.toLowerCase().includes('snack') ||
    food.category.toLowerCase().includes('breakfast')
  )
  console.log(filteredFoods);

  featuredRecipesContainer.innerHTML = '';
  filteredFoods.map((food) => {
    featuredRecipesContainer.innerHTML += `
    <div class="recipe-card" onclick="showDetails(${food.id})";>
      <div class="recipe-image-container" style="background-image: url('${food.image}');"></div>
      <h3>${food.name}</h3>
      <p>${food.description}</p>
    </div>
  `;
  });
})




const allRegions = document.getElementById('all-region-btn')
const northern = document.getElementById('northern-nigeria-btn')
const southWest = document.getElementById('south-west-nigeria-btn')
const southEast = document.getElementById('south-east-nigeria-btn')
const southSouth = document.getElementById('south-south-nigeria-btn')



regions.addEventListener('click', () => {
  setActiveFilterButton(regions);
  const filterByRegion = document.querySelector('.filter-by-region');
  filterByRegion.style.display = filterByRegion.style.display === 'flex' ? 'none' : 'flex';
  document.querySelector('.filter-by-categories').style.display = 'none';
});

allRegions.addEventListener('click', () => {
  setActiveFilterButton(allRegions);
  const allRegionsEndpoint = "https://mongotest2026.vercel.app/api/foods/region/all%20region";

  async function getAllRegionFoods() {
    try {
      const response = await fetch(allRegionsEndpoint);
      const newResponse = await response.json();
      console.log(newResponse);
      newResponse.data.forEach(food => {
        if (imageMap[food.id]) {
          food.image = imageMap[food.id];
        }
      });

      allFood.push(...newResponse.data);

      featuredRecipesContainer.innerHTML = '';

      newResponse.data.map((food) => {
        featuredRecipesContainer.innerHTML += `
        <div class="recipe-card" onclick="showDetails(${food.id})";>
          <div class="recipe-image-container" style="background-image: url('${food.image}');"></div>
          <h3>${food.name}</h3>
          <p>${food.description}</p>
        </div>
      `;
      });
    } catch (error) {
      console.error("Error fetching all region food data:", error);
    }
  }

  getAllRegionFoods();
});

northern.addEventListener('click', () => {
  setActiveFilterButton(northern);
  const northernEndpoint = "https://mongotest2026.vercel.app/api/foods/region/northern%20Nigeria";

  async function getNorthernFoods() {
    try {
      const response = await fetch(northernEndpoint);
      const newResponse = await response.json();
      console.log(newResponse);

      newResponse.data.forEach(food => {
        if (imageMap[food.id]) {
          food.image = imageMap[food.id];
        }
      });

      northernFood.push(...newResponse.data);

      featuredRecipesContainer.innerHTML = '';

      newResponse.data.map((food) => {
        featuredRecipesContainer.innerHTML += `
        <div class="recipe-card" onclick="showDetails(${food.id})";>
          <div class="recipe-image-container" style="background-image: url('${food.image}');"></div>
          <h3>${food.name}</h3>
          <p>${food.description}</p>
        </div>
      `;
      });
    } catch (error) {
      console.error("Error fetching northern food data:", error);
    }
  }

  getNorthernFoods();
});

southWest.addEventListener('click', () => {
  setActiveFilterButton(southWest);
  const southWestEndpoint = "https://mongotest2026.vercel.app/api/foods/region/south-west%20nigeria";

  async function getSouthWestFoods() {
    try {
      const response = await fetch(southWestEndpoint);
      const newResponse = await response.json();
      console.log(newResponse);
      newResponse.data.forEach(food => {
        if (imageMap[food.id]) {
          food.image = imageMap[food.id];
        }
      }
      );
      southWestFood.push(...newResponse.data);

      featuredRecipesContainer.innerHTML = '';
      newResponse.data.map((food) => {
        featuredRecipesContainer.innerHTML += `
        <div class="recipe-card" onclick="showDetails(${food.id})";>
          <div class="recipe-image-container" style="background-image: url('${food.image}');"></div>
          <h3>${food.name}</h3>
          <p>${food.description}</p>
        </div>
      `;
      });
    } catch (error) {
      console.error("Error fetching south west food data:", error);
    }
  }

  getSouthWestFoods();
});

southEast.addEventListener('click', () => {
  setActiveFilterButton(southEast);
  const southEastEndpoint = "https://mongotest2026.vercel.app/api/foods/region/south-east%20nigeria";

  async function getSouthEastFoods() {
    try {
      const response = await fetch(southEastEndpoint);
      const newResponse = await response.json();
      console.log(newResponse);
      newResponse.data.forEach(food => {
        if (imageMap[food.id]) {
          food.image = imageMap[food.id];
        }
      });
      southEastFood.push(...newResponse.data);

      featuredRecipesContainer.innerHTML = '';
      newResponse.data.map((food) => {
        featuredRecipesContainer.innerHTML += `
        <div class="recipe-card" onclick="showDetails(${food.id})";>
          <div class="recipe-image-container" style="background-image: url('${food.image}');"></div>
          <h3>${food.name}</h3>
          <p>${food.description}</p>
        </div>
      `;
      });
    } catch (error) {
      console.error("Error fetching south east food data:", error);
    }
  }

  getSouthEastFoods();
});

southSouth.addEventListener('click', () => {
  setActiveFilterButton(southSouth);
  const southSouthEndpoint = "https://mongotest2026.vercel.app/api/foods/region/south-south%20nigeria";

  async function getSouthSouthFoods() {
    try {
      const response = await fetch(southSouthEndpoint);
      const newResponse = await response.json();
      console.log(newResponse);
      newResponse.data.forEach(food => {
        if (imageMap[food.id]) {
          food.image = imageMap[food.id];
        }
      });
      featuredRecipesContainer.innerHTML = '';
      newResponse.data.map((food) => {
        featuredRecipesContainer.innerHTML += `
        <div class="recipe-card" onclick="showDetails(${food.id})";>
          <div class="recipe-image-container" style="background-image: url('${food.image}');"></div>
          <h3>${food.name}</h3>
          <p>${food.description}</p>
        </div>
      `;
      });
    } catch (error) {
      console.error("Error fetching south south food data:", error);
    }
  }

  getSouthSouthFoods();
});




vegetarian.addEventListener('click', () => {
  filterByCategories.style.display = 'none';
  filterByRegion.style.display = 'none';
  setActiveFilterButton(vegetarian);
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

      newResponse.data.map((food) => {
        featuredRecipesContainer.innerHTML += `
        <div class="recipe-card" onclick="showDetails(${food.id})";>
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
  setActiveFilterButton(spicy);
  filterByCategories.style.display = 'none';
  filterByRegion.style.display = 'none';
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

      newResponse.data.map((food) => {
        featuredRecipesContainer.innerHTML += `
        <div class="recipe-card" onclick="showDetails(${food.id})";>
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

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
  const query = searchInput.value.toLowerCase();
  const filteredFoods = allFood.filter(food =>
    food.name.toLowerCase().includes(query) ||
    food.description.toLowerCase().includes(query) ||
    food.ingredients.some(ing => ing.toLowerCase().includes(query)) ||
    food.category.toLowerCase().includes(query) ||
    food.region.toLowerCase().includes(query)
  );
  console.log(filteredFoods);
  featuredRecipesContainer.innerHTML = '';
  if (filteredFoods.length > 0) {
    filteredFoods.map((food) => {
      featuredRecipesContainer.innerHTML += `
      <div class="recipe-card" onclick="showDetails(${food.id})";>
        <div class="recipe-image-container" style="background-image: url('${food.image}');"></div>
        <h3>${food.name}</h3>
        <p>${food.description}</p>
      </div>
    `;
    });
  } else {
    featuredRecipesContainer.innerHTML = `<p>No recipes found for "${query}".</p>`;
  }
  searchInput.value = '';
});
