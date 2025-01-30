/* eslint-disable no-undef */
import express, { json, urlencoded } from "express";
// import mongoose from "mongoose";
import cors from "cors";
import http from "http";
import { readFileSync } from "fs";
const actions = JSON.parse(readFileSync("./MOCK_DATA.json", "utf8"));

const PORT = 4000;
const app = express();

// mongoose
//   .connect("mongodb://localhost:27017/Skyler", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => {
//     console.error("Failed to connect to MongoDB", err);
//     process.exit(1); // Exit the app if the database connection fails
//   });

// const UserSchema = new mongoose.Schema(
//   {
//     category_name: String,
//     categories: [
//       {
//         videoSrc: String,
//         title: String,
//         clickEvent: String,
//         btnName: String,
//         words: [
//           {
//             word: String,
//             clickEvent: String,
//           },
//         ],
//       },
//     ],
//   },
//   { timestamps: true }
// );

// const UserModel = mongoose.model("users", UserSchema);

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

// Helper functions
const findMainAction = (main_id) => actions.find((act) => act.id === main_id);

const findSubAction = (mainAction, category_id) =>
  mainAction?.categories.find((cat) => cat.id === category_id);

const findWords = (subAction, words_id) =>
  subAction?.words?.find((word) => word.id === words_id);

// Error response function
const sendError = (res, message) => {
  return res.status(404).json({ status: "error", message });
};

// GET ALL
app.get("/api/get", (req, res) => {
  return res.json(actions);
  // UserModel.find({})
  //   .then((users) => {
  //     res.status(200).json(users);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     res.status(500).json({ error: "Failed to fetch users" });
  //   });
});

// GET BY ID sub action
app.get("/api/get/:main_id/:category_id", (req, res) => {
  const main_id = parseInt(req.params.main_id);
  const category_id = parseInt(req.params.category_id);

  const mainAction = findMainAction(main_id);
  if (!mainAction) return sendError(res, "Main action not found");

  const subAction = findSubAction(mainAction, category_id);
  if (!subAction) return sendError(res, "Sub action not found");

  res.json(subAction);
});

const myServer = http.createServer(app);

myServer.listen(PORT, () => console.log(`Server Started ${PORT}`));

// // GET BY ID main action
// app.get("/api/get/:main_id", (req, res) => {
//   const main_id = parseInt(req.params.main_id);
//   const mainAction = findMainAction(main_id);

//   if (!mainAction) return sendError(res, "Main action not found");
//   res.json(mainAction);
// });

// // GET BY ID words

app.get("/api/get/:main_id/:category_id/:word_id", (req, res) => {
  const main_id = parseInt(req.params.main_id);
  const category_id = parseInt(req.params.category_id);
  const word_id = parseInt(req.params.word_id);

  const mainAction = findMainAction(main_id);
  if (!mainAction) return sendError(res, "Main action not found");

  const subAction = findSubAction(mainAction, category_id);
  if (!subAction) return sendError(res, "Sub action not found");

  const words = findWords(subAction,word_id);
  if (!words) return sendError(res, "Words not found");

  res.json(words );
});
