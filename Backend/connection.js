import mongoose from "mongoose";

const uri =
  "mongodb+srv://mahidhuwaviya04:firstprojectfooddelivery@fooddelivery.szrmk.mongodb.net/fooddelivery?retryWrites=true&w=majority&appName=fooddelivery";

async function Connecttomongodb() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");

    const fetchedFoodItemData = mongoose.connection.db.collection("foodItems");
    const FoodItemData = await fetchedFoodItemData.find({}).toArray();
    const fetchedFoodCategoryData =
      mongoose.connection.db.collection("foodCategory");
    const FoodCategoryData = await fetchedFoodCategoryData.find({}).toArray();

    global.foodItemsData = FoodItemData;
    global.foodCategoryData = FoodCategoryData;
    // console.log("from connection", global.food_items);
  } catch (err) {
    console.error("Failed to connect or fetch data", err);
  }
}

export default Connecttomongodb;
