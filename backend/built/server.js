"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var food_router_1 = __importDefault(require("./routers/food.router"));
var user_router_1 = __importDefault(require("./routers/user.router"));
var order_router_1 = __importDefault(require("./routers/order.router"));
var db_1 = require("./configs/db");
// connect to database.....
(0, db_1.dbConnect)();
// calling express app.......
var app = (0, express_1.default)();
//using cors....
app.use((0, cors_1.default)({
    credentials: true,
    origin: ["http://localhost:4200"],
}));
app.use(express_1.default.json());
// Routers..........
app.use("/api/foods", food_router_1.default);
app.use("/api/users", user_router_1.default);
app.use("/api/orders", order_router_1.default);
app.use(express_1.default.static("public"));
app.get("*", function (req, res) {
    res.sendFile(path_1.default.join(__dirname, "public", "index.html"));
});
// -**********************************************-*/
// listening to the port
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("App served on http://localhost:" + port);
});
