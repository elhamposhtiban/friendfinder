
//define our package here 

const express = require ("express")


const app = express();

const PORT = process.env.PORT || 2020

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"))


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



app.listen(PORT, function () {
    console.log (" server is listening from port" + PORT)
})