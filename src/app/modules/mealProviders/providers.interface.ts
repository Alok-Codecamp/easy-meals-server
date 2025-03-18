import { ObjectId } from "mongoose";

export type TMeal = {
    name: string;
    price: number;
    calories: number;
    isVegetarian: boolean;
}

export type TcustomerReview = {
    rating: number; review: string; reviewer: ObjectId

}
export interface IMealProvider {
    name: string;
    cuisineSpecialties: string[];
    availableMeals: TMeal[];
    pricing: { min: number; max: number };
    experience: number;
    customerReviews: TcustomerReview[];
}

// const mealProviders: MealProvider[] = [
//     {
//       name: "Healthy Bites",
//       cuisineSpecialties: ["Italian", "Mexican", "Vegan"],
//       availableMeals: [
//         { name: "Vegan Tacos", price: 12, isVegan: true },
//         { name: "Pasta Primavera", price: 15, isVegan: true },
//       ],
//       pricing: { min: 10, max: 25 },
//       experience: 5,
//       customerReviews: [
//         { rating: 4.8, review: "Amazing vegan options!", reviewer: "John Doe" },
//         { rating: 4.5, review: "Great taste, a bit pricey.", reviewer: "Jane Smith" },
//       ],
//     },
//     {
//       name: "HomeChef Delights",
//       cuisineSpecialties: ["Indian", "Thai", "Continental"],
//       availableMeals: [
//         { name: "Butter Chicken", price: 18, isVegan: false },
//         { name: "Pad Thai", price: 14, isVegan: false },
//       ],
//       pricing: { min: 12, max: 30 },
//       experience: 8,
//       customerReviews: [
//         { rating: 5.0, review: "Authentic flavors!", reviewer: "Alice Brown" },
//         { rating: 4.7, review: "Delicious and well-packaged.", reviewer: "Michael Lee" },
//       ],
//     },
//   ];