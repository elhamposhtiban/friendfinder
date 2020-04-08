
//define our package here 

const express = require ("express")
const path = require ("path")

const app = express();

const PORT = process.env.PORT || 8000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname +'/public/'));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



app.listen(PORT, function () {
    console.log (" server is listening from port" + PORT)
})