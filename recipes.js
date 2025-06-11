const recipes = [
    // --- Original & Expanded Recipes with mainCategory ---
    {
        name: "Spaghetti Aglio e Olio",
        cuisine: "Italian",
        tags: ["vegetarian", "quick", "pasta", "comfort food", "vegan option"],
        mainCategory: "Pasta",
        keyIngredients: ["pasta", "garlic", "olive oil", "chili flakes"],
        description: "A simple yet delicious classic Italian pasta dish.",
        recipeLink: "https://www.bonappetit.com/recipe/aglio-e-olio"
    },
    {
        name: "Chicken Stir-fry",
        cuisine: "Asian",
        tags: ["chicken", "quick", "vegetables"],
        mainCategory: "Chicken",
        keyIngredients: ["chicken", "soy sauce", "broccoli", "carrot", "rice"],
        description: "Versatile and quick, load it up with your favorite veggies.",
        recipeLink: "https://www.allrecipes.com/recipe/228822/quick-chicken-stir-fry/"
    },
    {
        name: "Lentil Soup",
        cuisine: "Global",
        tags: ["vegan", "soup", "hearty", "lentils", "vegetarian", "quick"],
        mainCategory: "Soup", // Could also be Vegetarian/Vegan
        keyIngredients: ["lentils", "onion", "carrot", "celery", "vegetable broth"],
        description: "A hearty and nutritious soup, perfect for a cold day.",
        recipeLink: "https://cookieandkate.com/best-lentil-soup-recipe/"
    },
    {
        name: "Caprese Salad",
        cuisine: "Italian",
        tags: ["vegetarian", "salad", "fresh", "no-cook", "quick"],
        mainCategory: "Vegetarian", // Or "Salad" if you add that category
        keyIngredients: ["tomatoes", "mozzarella", "basil", "balsamic glaze"],
        description: "Fresh, simple, and bursting with Italian flavors.",
        recipeLink: "https://www.foodnetwork.com/recipes/ina-garten/caprese-salad-recipe-1948509"
    },
    {
        name: "Sheet Pan Lemon Herb Roasted Chicken and Veggies",
        cuisine: "American",
        tags: ["chicken", "one-pan", "easy-cleanup"],
        mainCategory: "Chicken",
        keyIngredients: ["chicken thighs", "potatoes", "broccoli", "lemon", "herbs"],
        description: "An easy one-pan meal with minimal cleanup.",
        recipeLink: "https://www.cookingclassy.com/sheet-pan-lemon-herb-roasted-chicken-vegetables/"
    },
    {
        name: "Quick Veggie Curry",
        cuisine: "Indian",
        tags: ["vegan", "curry", "vegetables", "quick", "vegetarian"],
        mainCategory: "Vegetarian", // Or "Vegan"
        keyIngredients: ["coconut milk", "curry powder", "mixed vegetables", "chickpeas", "rice"],
        description: "A flavorful and adaptable vegetable curry.",
        recipeLink: "https://minimalistbaker.com/easy-1-pot-massaman-curry/"
    },
    {
        name: "Black Bean Burgers",
        cuisine: "American",
        tags: ["vegetarian", "burgers", "beans", "quick"],
        mainCategory: "Vegetarian",
        keyIngredients: ["black beans", "breadcrumbs", "onion", "spices", "buns"],
        description: "A satisfying and flavorful vegetarian burger option.",
        recipeLink: "https://sallysbakingaddiction.com/best-black-bean-burgers/"
    },

    // --- MEXICAN HOME-STYLE MEALS with mainCategory ---
    {
        name: "Huevos Rancheros",
        cuisine: "Mexican",
        tags: ["breakfast", "eggs", "vegetarian option", "classic"],
        mainCategory: "Breakfast",
        keyIngredients: ["eggs", "tortillas", "salsa roja", "beans", "avocado"],
        description: "Fried eggs served on tortillas with salsa, a breakfast champion!",
        recipeLink: "https://www.isabeleats.com/huevos-rancheros-recipe/"
    },
    {
        name: "Huevos a la Mexicana",
        cuisine: "Mexican",
        tags: ["breakfast", "eggs", "vegetarian", "quick", "scrambled"],
        mainCategory: "Breakfast",
        keyIngredients: ["eggs", "tomato", "onion", "jalapeño", "cilantro"],
        description: "Scrambled eggs with diced tomato, onion, and chili. Simple and delicious.",
        recipeLink: "https://mexicanfoodjournal.com/huevos-a-la-mexicana/"
    },
    {
        name: "Huevos con Jamón",
        cuisine: "Mexican",
        tags: ["breakfast", "eggs", "quick", "scrambled"],
        mainCategory: "Breakfast", // Could be "Pork" if ham is main focus
        keyIngredients: ["eggs", "ham", "onion"],
        description: "Classic scrambled eggs with diced ham. A quick go-to.",
        recipeLink: "https://www.mexicoinmykitchen.com/scrambled-eggs-with-ham/"
    },
    {
        name: "Huevos con Chorizo",
        cuisine: "Mexican",
        tags: ["breakfast", "eggs", "chorizo", "hearty", "scrambled"],
        mainCategory: "Pork", // Chorizo is pork
        keyIngredients: ["eggs", "chorizo", "onion", "potato (optional)"],
        description: "Flavorful scrambled eggs with spicy Mexican chorizo.",
        recipeLink: "https://www.muydelish.com/chorizo-and-eggs/"
    },
    {
        name: "Chilaquiles (Verdes or Rojos)",
        cuisine: "Mexican",
        tags: ["breakfast", "brunch", "tortilla chips", "comfort food", "vegetarian option", "quick"],
        mainCategory: "Breakfast", // Can add chicken/egg
        keyIngredients: ["tortilla chips", "salsa verde", "salsa roja", "queso fresco", "crema", "onion", "chicken (optional)", "egg (optional)"],
        description: "Tortilla chips simmered in salsa, topped with cheese, cream, and onion. Add chicken or an egg!",
        recipeLink: "https://www.simplyrecipes.com/recipes/chilaquiles/"
    },
    {
        name: "Molletes",
        cuisine: "Mexican",
        tags: ["breakfast", "lunch", "quick", "vegetarian", "beans", "cheese"],
        mainCategory: "Vegetarian", // Or "Breakfast"
        keyIngredients: ["bolillo bread", "refried beans", "cheese (Oaxaca or Monterey Jack)", "pico de gallo"],
        description: "Open-faced sandwiches with refried beans and melted cheese on bolillo bread, often topped with pico de gallo.",
        recipeLink: "https://www.isabeleats.com/molletes/"
    },
    {
        name: "Tacos de Bistec (Steak Tacos)",
        cuisine: "Mexican",
        tags: ["tacos", "beef", "street food", "quick"],
        mainCategory: "Beef",
        keyIngredients: ["beef steak (sirloin, skirt)", "corn tortillas", "onion", "cilantro", "salsa"],
        description: "Simple, classic grilled or pan-fried steak tacos.",
        recipeLink: "https://www.mexicoinmykitchen.com/steak-tacos-recipe/"
    },
    {
        name: "Tacos de Pollo Deshebrado (Shredded Chicken Tacos)",
        cuisine: "Mexican",
        tags: ["tacos", "chicken", "easy", "versatile", "quick"],
        mainCategory: "Chicken",
        keyIngredients: ["chicken breast", "corn tortillas", "lettuce", "tomato", "crema", "salsa"],
        description: "Soft tacos with tender shredded chicken, easily customizable.",
        recipeLink: "https://www.laylita.com/recipes/basic-shredded-chicken-tacos/"
    },
    {
        name: "Tacos Dorados (Crispy Fried Tacos)",
        cuisine: "Mexican",
        tags: ["tacos", "fried", "crispy", "chicken", "potato", "beef"],
        mainCategory: "Other", // Can be various fillings
        keyIngredients: ["corn tortillas", "potato", "chicken", "beef", "lettuce", "salsa", "crema"],
        description: "Rolled and fried crispy tacos, usually filled with potato, chicken, or beef.",
        recipeLink: "https://www.muydelish.com/tacos-dorados/"
    },
    {
        name: "Tacos de Papa (Potato Tacos)",
        cuisine: "Mexican",
        tags: ["tacos", "vegetarian", "potato", "economical", "quick"],
        mainCategory: "Vegetarian",
        keyIngredients: ["potatoes", "corn tortillas", "lettuce", "salsa", "queso cotija"],
        description: "Hearty and delicious vegetarian tacos filled with seasoned mashed potatoes.",
        recipeLink: "https://patijinich.com/potato-tacos/"
    },
    {
        name: "Tacos de Frijol (Bean Tacos)",
        cuisine: "Mexican",
        tags: ["tacos", "vegetarian", "beans", "quick", "simple"],
        mainCategory: "Vegetarian",
        keyIngredients: ["refried beans", "corn tortillas", "queso fresco", "salsa", "avocado"],
        description: "The simplest taco: warm tortillas with refried beans and your favorite toppings.",
        recipeLink: "https://muybuenocookbook.com/bean-tacos/"
    },
    {
        name: "Tacos de Chorizo con Papas",
        cuisine: "Mexican",
        tags: ["tacos", "chorizo", "potato", "hearty"],
        mainCategory: "Pork",
        keyIngredients: ["chorizo", "potatoes", "corn tortillas", "onion", "cilantro", "salsa"],
        description: "A classic combination of spicy chorizo and potatoes in a taco.",
        recipeLink: "https://www.isabeleats.com/chorizo-and-potato-tacos/"
    },
    {
        name: "Tacos de Nopales (Cactus Tacos)",
        cuisine: "Mexican",
        tags: ["tacos", "vegetarian", "nopales", "cactus", "healthy", "quick"],
        mainCategory: "Vegetarian",
        keyIngredients: ["nopales (cactus paddles)", "onion", "tomato", "cilantro", "corn tortillas", "queso fresco"],
        description: "Tender cooked cactus paddles, often grilled or sautéed, served in tortillas.",
        recipeLink: "https://www.simplyrecipes.com/recipes/tacos_de_nopales_cactus_tacos/"
    },
    {
        name: "Quesadillas (Cheese, Chicken, or Mushroom)",
        cuisine: "Mexican",
        tags: ["quesadillas", "cheese", "quick", "easy", "vegetarian option", "chicken", "mushroom"],
        mainCategory: "Other", // Varies
        keyIngredients: ["flour tortillas", "corn tortillas", "Oaxaca cheese", "Monterey Jack cheese", "chicken", "mushrooms", "salsa", "guacamole"],
        description: "Folded tortillas with melted cheese and optional fillings like chicken or mushrooms.",
        recipeLink: "https://www.simplyrecipes.com/recipes/how_to_make_quesadillas/"
    },
    {
        name: "Sincronizadas",
        cuisine: "Mexican",
        tags: ["quesadillas", "ham", "cheese", "quick", "lunch"],
        mainCategory: "Pork", // Ham
        keyIngredients: ["flour tortillas", "ham", "cheese (Manchego or Monterey Jack)", "avocado", "jalapeño (optional)"],
        description: "Like a grilled ham and cheese sandwich but made with flour tortillas.",
        recipeLink: "https://www.mexicoinmykitchen.com/sincronizadas-recipe/"
    },
    {
        name: "Quesadillas con Flor de Calabaza",
        cuisine: "Mexican",
        tags: ["quesadillas", "vegetarian", "squash blossom", "seasonal", "quick"],
        mainCategory: "Vegetarian",
        keyIngredients: ["flor de calabaza (squash blossoms)", "Oaxaca cheese", "corn tortillas", "epazote"],
        description: "A delicacy: quesadillas filled with delicate squash blossoms and cheese.",
        recipeLink: "https://patijinich.com/squash-blossom-quesadillas/"
    },
    {
        name: "Picadillo",
        cuisine: "Mexican",
        tags: ["ground beef", "stew", "comfort food", "versatile"],
        mainCategory: "Beef",
        keyIngredients: ["ground beef", "potatoes", "carrots", "peas", "tomatoes", "onion", "garlic"],
        description: "A savory ground beef hash with potatoes and vegetables, great as a filling or main.",
        recipeLink: "https://www.simplyrecipes.com/recipes/picadillo/"
    },
    {
        name: "Tinga de Pollo (Chipotle Shredded Chicken)",
        cuisine: "Mexican",
        tags: ["chicken", "shredded", "chipotle", "stew", "tostadas", "tacos"],
        mainCategory: "Chicken",
        keyIngredients: ["chicken breast", "tomatoes", "onion", "chipotle peppers in adobo", "oregano"],
        description: "Shredded chicken simmered in a smoky chipotle tomato sauce. Perfect for tostadas or tacos.",
        recipeLink: "https://www.isabeleats.com/chicken-tinga/"
    },
    {
        name: "Pollo en Salsa Verde (Chicken in Green Salsa)",
        cuisine: "Mexican",
        tags: ["chicken", "stew", "salsa verde", "tomatillos"],
        mainCategory: "Chicken",
        keyIngredients: ["chicken pieces", "tomatillos", "jalapeños", "cilantro", "onion", "garlic"],
        description: "Tender chicken cooked in a vibrant green tomatillo salsa.",
        recipeLink: "https://www.muydelish.com/pollo-en-salsa-verde/"
    },
    {
        name: "Chicharrón en Salsa Verde",
        cuisine: "Mexican",
        tags: ["pork rinds", "stew", "salsa verde", "comfort food"],
        mainCategory: "Pork",
        keyIngredients: ["chicharrón (pork rinds)", "tomatillos", "jalapeños", "cilantro", "onion"],
        description: "Crispy pork rinds simmered until tender in a spicy green salsa.",
        recipeLink: "https://www.mexicoinmykitchen.com/pork-rinds-in-green-salsa/"
    },
    {
        name: "Nopales con Huevo en Salsa Roja",
        cuisine: "Mexican",
        tags: ["nopales", "cactus", "eggs", "stew", "vegetarian", "salsa roja"],
        mainCategory: "Vegetarian", // Or "Breakfast"
        keyIngredients: ["nopales", "eggs", "tomatoes", "chile serrano", "onion"],
        description: "Cactus paddles and scrambled or fried eggs simmered in a red salsa.",
        recipeLink: "https://www.mamalatinatips.com/2012/03/nopales-con-huevo-en-salsa-roja-cactus-with-egg-in-red-salsa.html"
    },
    {
        name: "Caldo de Pollo (Mexican Chicken Soup)",
        cuisine: "Mexican",
        tags: ["soup", "chicken", "comfort food", "healthy"],
        mainCategory: "Soup", // Or "Chicken"
        keyIngredients: ["chicken pieces", "carrots", "potatoes", "celery", "onion", "garlic", "cilantro", "rice (optional)", "lime"],
        description: "A soul-warming chicken soup with vegetables, often served with rice and lime.",
        recipeLink: "https://www.simplyrecipes.com/recipes/caldo_de_pollo_mexican_chicken_soup/"
    },
    {
        name: "Sopa de Fideo (Mexican Noodle Soup)",
        cuisine: "Mexican",
        tags: ["soup", "noodles", "quick", "comfort food", "kid-friendly", "vegetarian option"],
        mainCategory: "Soup",
        keyIngredients: ["fideo noodles (vermicelli)", "tomato broth", "onion", "garlic"],
        description: "A simple and beloved noodle soup with a light tomato broth.",
        recipeLink: "https://www.isabeleats.com/sopa-de-fideo-recipe/"
    },
    {
        name: "Sopa de Tortilla (Tortilla Soup)",
        cuisine: "Mexican",
        tags: ["soup", "tortilla", "chicken", "vegetarian option", "comfort food"],
        mainCategory: "Soup", // Can be "Chicken" or "Vegetarian" depending on prep
        keyIngredients: ["chicken broth", "tomatoes", "pasilla chiles", "tortilla strips", "avocado", "queso fresco", "crema"],
        description: "A rich tomato and chile-based broth with crispy tortilla strips and various garnishes.",
        recipeLink: "https://www.gimmesomeoven.com/authentic-mexican-tortilla-soup/"
    },
    {
        name: "Milanesa de Pollo/Res (Breaded Cutlet)",
        cuisine: "Mexican",
        tags: ["chicken", "beef", "breaded", "fried", "comfort food"],
        mainCategory: "Other", // Can be Chicken or Beef
        keyIngredients: ["thin chicken cutlets", "thin beef cutlets", "breadcrumbs", "eggs", "oil"],
        description: "Thinly pounded chicken or beef, breaded and fried. Often served with rice and beans.",
        recipeLink: "https://www.mexicoinmykitchen.com/mexican-beef-milanesa-recipe/"
    },
    {
        name: "Tostadas (Chicken, Bean, or Tinga)",
        cuisine: "Mexican",
        tags: ["tostadas", "crispy", "chicken", "beans", "tinga", "quick", "customizable"],
        mainCategory: "Other", // Varies based on topping
        keyIngredients: ["crispy corn tostadas", "refried beans", "shredded chicken", "tinga de pollo", "lettuce", "salsa", "crema", "queso"],
        description: "Crispy flat tortillas topped with beans, meat, lettuce, salsa, and cream.",
        recipeLink: "https://www.simplyrecipes.com/recipes/how_to_make_tostadas/"
    },
    {
        name: "Enchiladas Rojas (Red Sauce Enchiladas)",
        cuisine: "Mexican",
        tags: ["enchiladas", "salsa roja", "cheese", "chicken", "comfort food"],
        mainCategory: "Other", // Can be "Chicken" or "Vegetarian"
        keyIngredients: ["corn tortillas", "red enchilada sauce", "cheese (queso fresco, añejo)", "onion", "chicken (optional)"],
        description: "Tortillas dipped in red chili sauce, filled (often with cheese or chicken), and baked or pan-fried.",
        recipeLink: "https://www.isabeleats.com/red-enchiladas-recipe/"
    },
    {
        name: "Enchiladas Verdes (Green Sauce Enchiladas)",
        cuisine: "Mexican",
        tags: ["enchiladas", "salsa verde", "cheese", "chicken", "tomatillos"],
        mainCategory: "Other", // Can be "Chicken" or "Vegetarian"
        keyIngredients: ["corn tortillas", "green enchilada sauce (tomatillo)", "cheese (Monterey Jack, queso fresco)", "chicken (optional)", "crema"],
        description: "Similar to red enchiladas but made with a tangy green tomatillo sauce.",
        recipeLink: "https://www.muydelish.com/easy-chicken-enchiladas-verdes/"
    },
    {
        name: "Alambre (Mexican Skewers/Stir-fry)",
        cuisine: "Mexican",
        tags: ["beef", "bacon", "peppers", "onion", "cheese", "tacos", "stir-fry"],
        mainCategory: "Beef", // Or "Pork" due to bacon
        keyIngredients: ["beef sirloin", "bacon", "bell peppers", "onion", "Oaxaca cheese", "tortillas"],
        description: "A delicious mix of grilled beef, bacon, bell peppers, and onion, topped with melted cheese. Often served with tortillas.",
        recipeLink: "https://www.mexicoinmykitchen.com/alambre-recipe/"
    },
    {
        name: "Arroz a la Mexicana (Mexican Red Rice)",
        cuisine: "Mexican",
        tags: ["rice", "side dish", "vegetarian", "quick"],
        mainCategory: "Side Dish",
        keyIngredients: ["long-grain white rice", "tomatoes", "onion", "garlic", "chicken broth (or vegetable)"],
        description: "Fluffy red rice cooked with tomatoes and broth, a staple side.",
        recipeLink: "https://www.simplyrecipes.com/recipes/mexican_rice/"
    },
    {
        name: "Frijoles de la Olla (Pot Beans)",
        cuisine: "Mexican",
        tags: ["beans", "side dish", "vegetarian", "vegan", "staple", "quick"],
        mainCategory: "Side Dish", // Or "Vegetarian"
        keyIngredients: ["pinto beans", "onion", "garlic", "epazote (optional)"],
        description: "Simple, flavorful pinto beans simmered in a pot with aromatics.",
        recipeLink: "https://www.isabeleats.com/frijoles-de-la-olla/"
    },
    {
        name: "Homemade Pizza",
        cuisine: "Italian-American",
        tags: ["pizza", "customizable", "fun", "family meal"],
        mainCategory: "Other", // General category
        keyIngredients: ["pizza dough", "tomato sauce", "mozzarella cheese", "pepperoni", "mushrooms", "onions", "bell peppers"],
        description: "Classic homemade pizza with your favorite toppings!",
        recipeLink: "https://sallysbakingaddiction.com/homemade-pizza-crust-recipe/"
    },
    {
        name: "Spaghetti con Crema y Jamón",
        cuisine: "Mexican (adapted)",
        tags: ["pasta", "kid-friendly", "quick", "creamy"],
        mainCategory: "Pasta", // Could be "Pork" due to ham
        keyIngredients: ["spaghetti", "ham", "Mexican crema (or sour cream/heavy cream)", "onion", "garlic"],
        description: "A simple and creamy spaghetti dish with ham, popular with kids in Mexico.",
        recipeLink: "https://www.mamalatinatips.com/2013/05/espagueti-blanco-mexican-white-spaghetti.html"
    },
    {
        name: "Ceviche de Pescado (Fish Ceviche)",
        cuisine: "Mexican",
        tags: ["seafood", "fish", "lime", "fresh", "no-cook", "quick", "healthy"],
        mainCategory: "Seafood",
        keyIngredients: ["white fish (tilapia, snapper)", "lime juice", "tomato", "onion", "cilantro", "jalapeño", "avocado"],
        description: "Fresh raw fish cured in lime juice, mixed with diced vegetables. Served with tostadas or crackers.",
        recipeLink: "https://www.simplyrecipes.com/recipes/fish_ceviche/"
    },
    {
        name: "Pozole Rojo (Red Pozole)",
        cuisine: "Mexican",
        tags: ["soup", "pork", "hominy", "hearty", "comfort food", "stew"],
        mainCategory: "Pork", // Or "Soup"
        keyIngredients: ["pork shoulder", "hominy", "guajillo chiles", "ancho chiles", "onion", "garlic", "oregano"],
        description: "A traditional Mexican stew made with pork and hominy, in a rich red chile broth. Garnished with lettuce, radish, onion, lime, and oregano.",
        recipeLink: "https://www.isabeleats.com/pozole-rojo/"
    },
    {
        name: "Pozole Verde (Green Pozole)",
        cuisine: "Mexican",
        tags: ["soup", "pork", "chicken", "hominy", "hearty", "comfort food", "stew"],
        mainCategory: "Pork", // Or "Chicken", or "Soup"
        keyIngredients: ["pork shoulder", "chicken", "hominy", "tomatillos", "poblano peppers", "jalapeños", "cilantro", "pumpkin seeds"],
        description: "A flavorful green version of pozole, often made with pork or chicken, hominy, and a green chile and tomatillo base.",
        recipeLink: "https://www.muydelish.com/pozole-verde/"
    },
    {
        name: "Sopa de Lentejas (Mexican Lentil Soup)",
        cuisine: "Mexican",
        tags: ["soup", "lentils", "vegetarian", "vegan option", "hearty", "healthy"],
        mainCategory: "Soup", // Or "Vegetarian"
        keyIngredients: ["lentils", "carrots", "celery", "onion", "tomato", "garlic", "cilantro", "bacon (optional)"],
        description: "A comforting and nutritious lentil soup, Mexican style, often with a hint of bacon or chorizo for flavor (can be omitted).",
        recipeLink: "https://www.mexicoinmykitchen.com/lentil-soup-recipe/"
    }
];

// Function to get unique cuisines for filter options
function getUniqueCuisines(recipeList) {
    const cuisines = new Set();
    recipeList.forEach(recipe => {
        if (recipe.cuisine) { // Check if cuisine exists
            cuisines.add(recipe.cuisine.trim());
        }
    });
    return Array.from(cuisines).sort();
}

// Function to get unique tags
function getUniqueTags(recipeList) {
    const tags = new Set();
    recipeList.forEach(recipe => {
        if (recipe.tags && Array.isArray(recipe.tags)) {
            recipe.tags.forEach(tag => tags.add(tag.trim().toLowerCase()));
        }
    });
    return Array.from(tags).sort();
}

// Function to get unique main categories
function getUniqueMainCategories(recipeList) {
    const categories = new Set();
    recipeList.forEach(recipe => {
        if (recipe.mainCategory) { // Check if mainCategory exists
            categories.add(recipe.mainCategory.trim());
        }
    });
    return Array.from(categories).sort();
}