const pdf = require("pdf-creator-node");
const fs = require("fs");

const template = fs.readFileSync("./templates/template.html", "utf-8");

const options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm"
};

const plans = [
    {
        "name": "Install NGINX on 100 hosts",
        "yearly_savings": 10000
    },
    {
        "name": "Install NodeJS on 20 hosts",
        "yearly_savings": 5000
    },
    {
        "name": "Configure AWS instances",
        "yearly_savings": 40000
    }

]

const document = {
    html: template,
    data: {
        plans
    },
    path: "./pdf_output/myplans.pdf"
};

pdf.create(document, options).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
