const express = require('express');
const bodyParser = require('body-parser');
const query = require('./db/customers');
const auth = require('./services/authenticate');
process.env.SECRET_KEY = "salasana";

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.get("/api/customers", auth.authenticate, query.getAllCustomers);// Get all customers
app.get("/api/customers/:id", auth.authenticate, query.getCustomerById); // Get customer by id
app.post("/api/customers", auth.authenticate, query.addCustomer); // New customer
app.delete("/api/customers/:id", auth.authenticate, query.deleteCustomer); // Delete customer
app.put("/api/customers/:id", auth.authenticate, query.updateCustomer); // Update customer
app.post("/login", auth.login)


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}.`);
});
module.exports = app