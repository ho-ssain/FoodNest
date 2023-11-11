import { Router } from "express";
import { sample_foods, sample_tags } from "../data";
import expressAsyncHandler from "express-async-handler";
import { FoodModel, Food } from "../models/Food";

const router = Router();

//seed foods into database
router.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const foodsCount = await FoodModel.countDocuments();
    if (foodsCount > 0) {
      res.send("Seed is already done!");
      return;
    }
    await FoodModel.create(sample_foods);
    res.send("Seed is Done!");
  })
);

//1
router.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const foods = await FoodModel.find();
    res.send(foods);
  })
);

//2
router.use(
  "/search/:searchTerm",
  expressAsyncHandler(async (req, res) => {
    const searchRegexp = new RegExp(req.params.searchTerm, "i");
    const foods = await FoodModel.find({ name: { $regex: searchRegexp } });
    res.send(foods);
  })
);

//3
router.use(
  "/tags",
  expressAsyncHandler(async (req, res) => {
    const tags = await FoodModel.aggregate([
      {
        $unwind: "$tags",
      },
      {
        $group: {
          _id: "$tags",
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          name: "$_id",
          count: "$count",
        },
      },
    ]).sort({ count: -1 });

    const all = {
      name: "All",
      count: await FoodModel.countDocuments(),
    };
    tags.unshift(all);

    res.send(tags);
  })
);

//4
router.use(
  "/tag/:tagName",
  expressAsyncHandler(async (req, res) => {
    const tagName = req.params.tagName;
    const foods = await FoodModel.find({ tags: tagName });
    res.send(foods);
  })
);

//5
router.use(
  "/:foodId",
  expressAsyncHandler(async (req, res) => {
    const foodId = req.params.foodId;
    const food = await FoodModel.findById(foodId);
    res.send(food);
  })
);

export default router;
