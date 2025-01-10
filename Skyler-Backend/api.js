import express, { json, urlencoded } from "express";
import cors from 'cors';
import http from "http";
import { readFileSync } from "fs";
const actions = JSON.parse(readFileSync("./MOCK_DATA.json", "utf8"));

const PORT = 4000;
const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

// Helper functions
// const findMainAction = (main_id) => actions.find((act) => act.id === main_id);

// const findSubAction = (mainAction, category_id) =>
//   mainAction?.categories.find((cat) => cat.id === category_id);

// const findWords = (subAction, words_id) =>
//   subAction?.words?.find((word) => word.id === words_id);

// Error response function
// const sendError = (res, message) => {
//   return res.status(404).json({ status: "error", message });
// };

// GET ALL
app.get("/api/get", (req, res) => res.json(actions));

// // GET BY ID main action
// app.get("/api/get/:main_id", (req, res) => {
//   const main_id = parseInt(req.params.main_id);
//   const mainAction = findMainAction(main_id);

//   if (!mainAction) return sendError(res, "Main action not found");
//   res.json(mainAction);
// });

// // GET BY ID sub action
// app.get("/api/get/:main_id/:category_id", (req, res) => {
//   const main_id = parseInt(req.params.main_id);
//   const category_id = parseInt(req.params.category_id);

//   const mainAction = findMainAction(main_id);
//   if (!mainAction) return sendError(res, "Main action not found");

//   const subAction = findSubAction(mainAction, category_id);
//   if (!subAction) return sendError(res, "Sub action not found");

//   res.json(subAction);
// });

// // GET BY ID words
// app.get("/api/get/:main_id/:category_id/:words_id", (req, res) => {
//   const main_id = parseInt(req.params.main_id);
//   const category_id = parseInt(req.params.category_id);
//   const words_id = parseInt(req.params.words_id);

//   const mainAction = findMainAction(main_id);
//   if (!mainAction) return sendError(res, "Main action not found");

//   const subAction = findSubAction(mainAction, category_id);
//   if (!subAction) return sendError(res, "Sub action not found");

//   const word = findWords(subAction, words_id);
//   if (!word) return sendError(res, "Words not found");

//   res.json(word);
// });

const myServer = http.createServer(app);

myServer.listen(PORT, () => console.log(`Server Started ${PORT}`));
