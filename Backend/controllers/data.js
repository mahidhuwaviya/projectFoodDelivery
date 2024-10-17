async function handleGetFoodItemsData(req, res) {
  try {
    // console.log("from controllers", global.foodItemsData);
    res.send([global.foodItemsData, global.foodCategoryData]);
  } catch (error) {
    console.log(error);
  }
}
export default handleGetFoodItemsData;
