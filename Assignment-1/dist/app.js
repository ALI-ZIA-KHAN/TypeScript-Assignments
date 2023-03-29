"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const callingAPI = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //. First, you need to choose a public API to fetch data from. There are many
        // public APIs available that provide different types of data such as weather,
        // news, sports, and more. Choose an API that provides data in a tabular
        // format.
        const res = yield fetch('https://dummyjson.com/products');
        //  
        const data = yield res.json();
        console.log("data", data.products);
        if (!data) {
            // throw new Error('Data is not present');
            alert("Oops there is problem in connecting with API");
        }
        createTable(data.products);
        //       Next, create a TypeScript file, say index.ts, in which you will write the code
        // to fetch data from the API and display it in a table
    }
    catch (error) {
        console.log('Error:', error);
    }
});
function createTable(products) {
    const table = document.createElement('table');
    table.setAttribute("class", "table_class");
    table.setAttribute("id", "products");
    const thead = table.createTHead();
    const tbody = table.createTBody();
    const headRow = thead.insertRow();
    const headers = ['ID', 'Title', 'Brand', 'Category', 'Price', 'Stock', 'Rating', 'Discount'];
    headers.forEach((header) => {
        const th = document.createElement('th');
        const text = document.createTextNode(header);
        th.appendChild(text);
        headRow.appendChild(th);
    });
    // Loop through the product data and create table rows
    products.forEach((product) => {
        console.log("p", product);
        const tr = tbody.insertRow();
        tr.setAttribute("class", "table_class");
        // Insert the data for each product into the table cells
        tr.insertCell().appendChild(document.createTextNode(product.id.toString()));
        tr.insertCell().appendChild(document.createTextNode(product.title));
        tr.insertCell().appendChild(document.createTextNode(product.brand));
        tr.insertCell().appendChild(document.createTextNode(product.category));
        tr.insertCell().appendChild(document.createTextNode(product.price.toString()));
        tr.insertCell().appendChild(document.createTextNode(product.stock.toString()));
        tr.insertCell().appendChild(document.createTextNode(product.rating.toString()));
        tr.insertCell().appendChild(document.createTextNode(product.discountPercentage.toString()));
    });
    // Add the table in browser
    document.body.appendChild(table);
}
callingAPI();
//# sourceMappingURL=app.js.map