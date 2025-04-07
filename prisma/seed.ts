import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

function getCategories() {
  return [
    {
      name: "Beef",
      thumb: "beef.png",
      description:
        "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]",
    },
    {
      name: "Chicken",
      thumb: "chicken.png",
      description:
        "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.",
    },
    {
      name: "Dessert",
      thumb: "dessert.png",
      description:
        "Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.\r\n\r\nThe term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts.",
    },
    {
      name: "Lamb",
      thumb: "lamb.png",
      description:
        "Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages.\r\n\r\nA sheep in its first year is called a lamb, and its meat is also called lamb. The meat of a juvenile sheep older than one year is hogget; outside the USA this is also a term for the living animal. The meat of an adult sheep is mutton, a term only used for the meat, not the living animals. The term mutton is almost always used to refer to goat meat in the Indian subcontinent.\r\n\r\n",
    },
    {
      name: "Miscellaneous",
      thumb: "miscellaneous.png",
      description: "General foods that don't fit into another category",
    },
    {
      name: "Pasta",
      thumb: "pasta.png",
      description:
        "Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily.\r\n\r\nAlso commonly used to refer to the variety of pasta dishes, pasta is typically a noodle made from an unleavened dough of a durum wheat flour mixed with water or eggs and formed into sheets or various shapes, then cooked by boiling or baking. As an alternative for those wanting a different taste, or who need to avoid products containing gluten, some pastas can be made using rice flour in place of wheat.[3][4] Pastas may be divided into two broad categories, dried (pasta secca) and fresh (pasta fresca).",
    },
    {
      name: "Pork",
      thumb: "pork.png",
      description:
        "Pork is the culinary name for meat from a domestic pig (Sus scrofa domesticus). It is the most commonly consumed meat worldwide,[1] with evidence of pig husbandry dating back to 5000 BC. Pork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products. Ham, smoked pork, gammon, bacon and sausage are examples of preserved pork. Charcuterie is the branch of cooking devoted to prepared meat products, many from pork.\r\n\r\nPork is the most popular meat in Eastern and Southeastern Asia, and is also very common in the Western world, especially in Central Europe. It is highly prized in Asian cuisines for its fat content and pleasant texture. Consumption of pork is forbidden by Jewish and Muslim dietary law, a taboo that is deeply rooted in tradition, with several suggested possible causes. The sale of pork is limited in Israel and illegal in certain Muslim countries.",
    },
    {
      name: "Seafood",
      thumb: "seafood.png",
      description:
        'Seafood is any form of sea life regarded as food by humans. Seafood prominently includes fish and shellfish. Shellfish include various species of molluscs, crustaceans, and echinoderms. Historically, sea mammals such as whales and dolphins have been consumed as food, though that happens to a lesser extent in modern times. Edible sea plants, such as some seaweeds and microalgae, are widely eaten as seafood around the world, especially in Asia (see the category of sea vegetables). In North America, although not generally in the United Kingdom, the term "seafood" is extended to fresh water organisms eaten by humans, so all edible aquatic life may be referred to as seafood. For the sake of completeness, this article includes all edible aquatic life.',
    },
    {
      name: "Side",
      thumb: "side.png",
      description:
        "A side dish, sometimes referred to as a side order, side item, or simply a side, is a food item that accompanies the entrée or main course at a meal. Side dishes such as salad, potatoes and bread are commonly used with main courses throughout many countries of the western world. New side orders introduced within the past decade[citation needed], such as rice and couscous, have grown to be quite popular throughout Europe, especially at formal occasions (with couscous appearing more commonly at dinner parties with Middle Eastern dishes).",
    },
    {
      name: "Starter",
      thumb: "starter.png",
      description:
        "An entrée in modern French table service and that of much of the English-speaking world (apart from the United States and parts of Canada) is a dish served before the main course of a meal; it may be the first dish served, or it may follow a soup or other small dish or dishes. In the United States and parts of Canada, an entrée is the main dish or the only dish of a meal.\r\n\r\nHistorically, the entrée was one of the stages of the “Classical Order” of formal French table service of the 18th and 19th centuries. It formed a part of the “first service” of the meal, which consisted of potage, hors d’œuvre, and entrée (including the bouilli and relevé). The “second service” consisted of roast (rôti), salad, and entremets (the entremets sometimes being separated into a “third service” of their own). The final service consisted only of dessert.[3]:3–11 :13–25",
    },
    {
      name: "Vegan",
      thumb: "vegan.png",
      description:
        "Veganism is both the practice of abstaining from the use of animal products, particularly in diet, and an associated philosophy that rejects the commodity status of animals.[b] A follower of either the diet or the philosophy is known as a vegan (pronounced /ˈviːɡən/ VEE-gən). Distinctions are sometimes made between several categories of veganism. Dietary vegans (or strict vegetarians) refrain from consuming animal products, not only meat but also eggs, dairy products and other animal-derived substances.[c] The term ethical vegan is often applied to those who not only follow a vegan diet but extend the philosophy into other areas of their lives, and oppose the use of animals for any purpose.[d] Another term is environmental veganism, which refers to the avoidance of animal products on the premise that the harvesting or industrial farming of animals is environmentally damaging and unsustainable.",
    },
    {
      name: "Vegetarian",
      thumb: "vegetarian.png",
      description:
        "Vegetarianism is the practice of abstaining from the consumption of meat (red meat, poultry, seafood, and the flesh of any other animal), and may also include abstention from by-products of animal slaughter.\r\n\r\nVegetarianism may be adopted for various reasons. Many people object to eating meat out of respect for sentient life. Such ethical motivations have been codified under various religious beliefs, as well as animal rights advocacy. Other motivations for vegetarianism are health-related, political, environmental, cultural, aesthetic, economic, or personal preference. There are variations of the diet as well: an ovo-lacto vegetarian diet includes both eggs and dairy products, an ovo-vegetarian diet includes eggs but not dairy products, and a lacto-vegetarian diet includes dairy products but not eggs. A vegan diet excludes all animal products, including eggs and dairy. Some vegans also avoid other animal products such as beeswax, leather or silk clothing, and goose-fat shoe polish.",
    },
    {
      name: "Breakfast",
      thumb: "breakfast.png",
      description:
        'Breakfast is the first meal of a day. The word in English refers to breaking the fasting period of the previous night. There is a strong likelihood for one or more "typical", or "traditional", breakfast menus to exist in most places, but their composition varies widely from place to place, and has varied over time, so that globally a very wide range of preparations and ingredients are now associated with breakfast.',
    },
    {
      name: "Goat",
      thumb: "goat.png",
      description:
        "The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of C. aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and the subfamily Caprinae, meaning it is closely related to the sheep. There are over 300 distinct breeds of goat. Goats are one of the oldest domesticated species of animal, and have been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese.",
    },
  ];
}

function createRoles() {
  return [
    db.role.create({
      data: {
        name: "user",
      },
    }),
    db.role.create({
      data: {
        name: "root",
      },
    }),
  ];
}

function createUser(name: string, roleId: string) {
  return db.user.create({
    data: {
      email: `${name}@test.com`,
      firstName: "Alice",
      lastName: "Johnson",
      roleId,
    },
  });
}

function getShelves(userId: string) {
  return [
    {
      userId,
      name: "Dairy",
      items: {
        create: [
          { userId, name: "Milk" },
          { userId, name: "Eggs" },
          { userId, name: "Cheese" },
        ],
      },
    },
    {
      userId,
      name: "Fruits",
      items: {
        create: [
          { userId, name: "Apples" },
          { userId, name: "Oranges" },
          { userId, name: "Grapes" },
        ],
      },
    },
  ];
}

function getRecipes(userId: string) {
  return [
    {
      userId,
      name: "Beef and Mustard Pie",
      totalTime: "1hr 30mins",
      imageUrl: "sytuqu1511553755.jpg",
      categories: ["Beef"],
    },
    {
      userId,
      name: "Beef and Oyster pie",
      totalTime: "1hr 30mins",
      imageUrl: "wrssvt1511556563.jpg",
      categories: ["Beef"],
    },
    {
      userId,
      name: "Beef Asado",
      totalTime: "1hr 30mins",
      imageUrl: "pkopc31683207947.jpg",
      categories: ["Beef"],
    },
    {
      userId,
      name: "15-minute chicken & halloumi burgers",
      totalTime: "1hr 30mins",
      imageUrl: "vdwloy1713225718.jpg",
      categories: ["Chicken"],
    },
    {
      userId,
      name: "Ayam Percik",
      totalTime: "1hr 30mins",
      imageUrl: "020z181619788503.jpg",
      categories: ["Chicken"],
    },
    {
      userId,
      name: "Brown Stew Chicken",
      totalTime: "1hr 30mins",
      imageUrl: "sypxpx1515365095.jpg",
      categories: ["Chicken"],
    },
    {
      userId,
      name: "Apam balik",
      totalTime: "1hr 30mins",
      imageUrl: "adxcbq1619787919.jpg",
      categories: ["Dessert"],
    },
    {
      userId,
      name: "Apple & Blackberry Crumble",
      totalTime: "1hr 30mins",
      imageUrl: "xvsurr1511719182.jpg",
      categories: ["Dessert"],
    },
    {
      userId,
      name: "Apple Frangipan Tart",
      totalTime: "1hr 30mins",
      imageUrl: "wxywrq1468235067.jpg",
      categories: ["Dessert"],
    },
    {
      userId,
      name: "Kapsalon",
      totalTime: "1hr 30mins",
      imageUrl: "sxysrt1468240488.jpg",
      categories: ["Lamb"],
    },
    {
      userId,
      name: "Keleya Zaara",
      totalTime: "1hr 30mins",
      imageUrl: "8x09hy1560460923.jpg",
      categories: ["Lamb"],
    },
    {
      userId,
      name: "Lamb and Lemon Souvlaki",
      totalTime: "1hr 30mins",
      imageUrl: "rjhf741585564676.jpg",
      categories: ["Lamb"],
    },
    {
      userId,
      name: "Bean & Sausage Hotpot",
      totalTime: "1hr 30mins",
      imageUrl: "vxuyrx1511302687.jpg",
      categories: ["Miscellaneous"],
    },
    {
      userId,
      name: "Callaloo Jamaican Style",
      totalTime: "1hr 30mins",
      imageUrl: "ussyxw1515364536.jpg",
      categories: ["Miscellaneous"],
    },
    {
      userId,
      name: "Chakchouka ",
      totalTime: "1hr 30mins",
      imageUrl: "gpz67p1560458984.jpg",
      categories: ["Miscellaneous"],
    },
    {
      userId,
      name: "Chilli prawn linguine",
      totalTime: "1hr 30mins",
      imageUrl: "usywpp1511189717.jpg",
      categories: ["Pasta"],
    },
    {
      userId,
      name: "Fettuccine Alfredo",
      totalTime: "1hr 30mins",
      imageUrl: "0jv5gx1661040802.jpg",
      categories: ["Pasta"],
    },
    {
      userId,
      name: "Bubble & Squeak",
      totalTime: "1hr 30mins",
      imageUrl: "xusqvw1511638311.jpg",
      categories: ["Pork"],
    },
    {
      userId,
      name: "BBQ Pork Sloppy Joes",
      totalTime: "1hr 30mins",
      imageUrl: "atd5sh1583188467.jpg",
      categories: ["Pork"],
    },
    {
      userId,
      name: "Bigos (Hunters Stew)",
      totalTime: "1hr 30mins",
      imageUrl: "md8w601593348504.jpg",
      categories: ["Pork"],
    },
    {
      userId,
      name: "Baked salmon with fennel & tomatoes",
      totalTime: "1hr 30mins",
      imageUrl: "1548772327.jpg",
      categories: ["Seafood"],
    },
    {
      userId,
      name: "Cajun spiced fish tacos",
      totalTime: "1hr 30mins",
      imageUrl: "uvuyxu1503067369.jpg",
      categories: ["Seafood"],
    },
    {
      userId,
      name: "Escovitch Fish",
      totalTime: "1hr 30mins",
      imageUrl: "1520084413.jpg",
      categories: ["Seafood"],
    },
    {
      userId,
      name: "Blini Pancakes",
      totalTime: "1hr 30mins",
      imageUrl: "0206h11699013358.jpg",
      categories: ["Side"],
    },
    {
      userId,
      name: "Boulangère Potatoes",
      totalTime: "1hr 30mins",
      imageUrl: "qywups1511796761.jpg",
      categories: ["Side"],
    },
    {
      userId,
      name: "Brie wrapped in prosciutto & brioche",
      totalTime: "1hr 30mins",
      imageUrl: "qqpwsy1511796276.jpg",
      categories: ["Side"],
    },
    {
      userId,
      name: "Broccoli & Stilton soup",
      totalTime: "1hr 30mins",
      imageUrl: "tvvxpv1511191952.jpg",
      categories: ["Starter"],
    },
    {
      userId,
      name: "Clam chowder",
      totalTime: "1hr 30mins",
      imageUrl: "rvtvuw1511190488.jpg",
      categories: ["Starter"],
    },
    {
      userId,
      name: "Cream Cheese Tart",
      totalTime: "1hr 30mins",
      imageUrl: "wurrux1468416624.jpg",
      categories: ["Starter"],
    },
    {
      userId,
      name: "Roast fennel and aubergine paella",
      totalTime: "1hr 30mins",
      imageUrl: "1520081754.jpg",
      categories: ["Vegan"],
    },
    {
      userId,
      name: "Vegan Chocolate Cake",
      totalTime: "1hr 30mins",
      imageUrl: "qxutws1486978099.jpg",
      categories: ["Vegan"],
    },
    {
      userId,
      name: "Vegan Lasagna",
      totalTime: "1hr 30mins",
      imageUrl: "rvxxuy1468312893.jpg",
      categories: ["Vegan"],
    },
    {
      userId,
      name: "Baingan Bharta",
      totalTime: "1hr 30mins",
      imageUrl: "urtpqw1487341253.jpg",
      categories: ["Vegetarian"],
    },
    {
      userId,
      name: "Beetroot Soup (Borscht)",
      totalTime: "1hr 30mins",
      imageUrl: "zadvgb1699012544.jpg",
      categories: ["Vegetarian"],
    },
    {
      userId,
      name: "Cabbage Soup (Shchi)",
      totalTime: "1hr 30mins",
      imageUrl: "60oc3k1699009846.jpg",
      categories: ["Vegetarian"],
    },
    {
      userId,
      name: "Bread omelette",
      totalTime: "1hr 30mins",
      imageUrl: "hqaejl1695738653.jpg",
      categories: ["Breakfast"],
    },
    {
      userId,
      name: "Breakfast Potatoes",
      totalTime: "1hr 30mins",
      imageUrl: "1550441882.jpg",
      categories: ["Breakfast"],
    },
    {
      userId,
      name: "English Breakfast",
      totalTime: "1hr 30mins",
      imageUrl: "utxryw1511721587.jpg",
      categories: ["Breakfast"],
    },
    {
      userId,
      name: "Mbuzi Choma (Roasted Goat)",
      totalTime: "1hr 30mins",
      imageUrl: "cuio7s1555492979.jpg",
      categories: ["Goat"],
    },
  ];
}

async function deleteAll() {
  await db.recipe.deleteMany();
  await db.pantryShelf.deleteMany();
  await db.user.deleteMany();
  await db.role.deleteMany();
  await db.category.deleteMany();
}

async function createAll() {
  const [userRole, adminRole] = await Promise.all(createRoles());
  const user = await createUser("me", userRole.id);
  await createUser("root", adminRole.id);
  const categories = await Promise.all(
    getCategories().map((shelf) => db.category.create({ data: shelf }))
  );
  await Promise.all([
    ...getShelves(user.id).map((shelf) =>
      db.pantryShelf.create({ data: shelf })
    ),
    ...getRecipes(user.id).map((recipe) =>
      db.recipe.create({
        data: {
          ...recipe,
          instructions: "",
          categories: {
            connect: [
              {
                id: categories.find((c) => c.name === recipe.categories[0])!.id,
              },
            ],
          },
        },
      })
    ),
  ]);
}

async function seed() {
  await deleteAll();
  await createAll();
}

seed();
