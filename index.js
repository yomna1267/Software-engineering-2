import express from 'express';
const app = express();
const names = [
    "Yomna",
    "Nancy",
    "Alaa",
    "Reem",
];
const fun = (request, response) => {

    let message = "<ul>";

    for (let i = 0; i < names.length; ++i){
        message += "<li>" + names[i]+ "</li>";
    }

    message += "</ul";

    response.send(message);
};

app.get('/students', fun);
app.listen(5000);