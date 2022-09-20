
import categoryModel from '../Models/category.model.js';
export const categorySeeder =  ()  => {
  const categories = [
    { name: "Computer" },
    { name: "Watch" },
    { name: "Laptop" },
    { name: "Keyboard" },
    { name: "Headphone" },
    { name: "Mobile" },
  ];
  categories.forEach(async (category) => {
    await categoryModel.create(category);
  });
}