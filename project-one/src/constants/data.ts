import type { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "SNICKERS",
    price: 28.84,
    desc: "SNICKERS, TWIX, & MILKY WAY Minis Chocolate Candy Bars Variety Pack, 150 Ct Bulk Bag",
    images: ["snickers_1.png", "snickers_2.png"],
    flavor: "milk",
  },
  {
    id: "2",
    name: "Pepperidge Farm",
    price: 6.3,
    desc: "Pepperidge Farm Chocolate Collection, 7 Cookie Varieties, 13-oz Box",
    images: ["pepperidge_1.png", "pepperidge_2.png", "pepperidge_3.png"],
    flavor: "dark",
  },
  {
    id: "3",
    name: "HERSHEY'S",
    price: 13.21,
    desc: "HERSHEY'S Miniatures Assorted Chocolate Candy Party Pack, Halloween Candy, 35.9 oz",
    images: ["hersheys_1.png", "hersheys_2.png"],
    flavor: "milk",
  },
  {
    id: "4",
    name: "M&M'S",
    price: 28.84,
    desc: "M&M'S Peanut Candy Jars, Assorted Chocolate Candies, Party Size Bulk, Movie Night Treats, Bulk Chocolate Candy, Buffet Chocolates, Resealable and Recyclable, 23 Oz Each, Pack of 2",
    images: ["mm_1.png", "mm_2.png", "mm_3.png", "mm_4.png"],
    flavor: "milk",
  },
  {
    id: "5",
    name: "DOVE PROMISES",
    price: 47.74,
    desc: "DOVE PROMISES Milk Chocolate, Dark Chocolate & Caramel Chocolate Mothers Day Candy Variety Bag, 38.9oz",
    images: ["dove_1.png", "dove_2.png"],
    flavor: "dark",
  },
  {
    id: "6",
    name: "Kinder BUeno",
    price: 23.24,
    desc: "Kinder Bueno Milk Chocolate and Hazelnut Cream, Bulk 20 Pack, 2 Individually Wrapped Chocolate Bars Per Pack, 30 oz",
    images: ["kinder_1.png", "kinder_2.png"],
    flavor: "milk",
  },
  {
    id: "7",
    name: "REESE'S",
    price: 14.84,
    desc: "REESE'S Milk Chocolate Snack Size Peanut Butter Cups, Candy Bag, Halloween Candy, 33 oz (60 Pieces)",
    images: ["reese_1.png", "reese_2.png"],
    flavor: "mixed",
  },
].map((item) => ({
  ...item,
  images: item.images.map((img) => `/images/products/${img}`),
}));
