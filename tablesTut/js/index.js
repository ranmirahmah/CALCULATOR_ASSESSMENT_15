let date = new Date();
let newDate = date.toLocaleDateString();
let modifiedDate = date.toLocaleDateString() + " " + date.toLocaleTimeString()

const datas = [
    {
        S_N: 1,
        emailAddress: "Ranmigold01@gmail.com",
        role: "Founder",
        createdBy: "Afolaranmi Rahmat",
        createdDate: newDate,
        modifiedBy: "Afolaranmi Rahmat",
        modifiedDate: modifiedDate,
    },

    {
        S_N: 2,
        emailAddress: "AigbeSilas@gmail.com",
        role: "Frontend Engineer",
        createdBy: "Aigbe Silas",
        createdDate: newDate,
        modifiedBy: "Aigbe Silas",
        modifiedDate: modifiedDate,
    },

    {
        S_N: 3,
        emailAddress: "HafsahAdebowale@gmail.com",
        role: "Full Stack Engineer",
        createdBy: "Adebowale Hafsah",
        createdDate: newDate,
        modifiedBy: "Adebowale Hafsah",
        modifiedDate: modifiedDate,
    },

    {
        S_N: 4,
        emailAddress: "MustaphaLawan@gmail.com",
        role: "Chief Technology Officer",
        createdBy: "Mustapha Lawan",
        createdDate: newDate,
        modifiedBy: "Mustapha Lawan",
        modifiedDate: modifiedDate,
    },

    {
        S_N: 5,
        emailAddress: "Ibukunbankole@gmail.com",
        role: "Senior Software Engineer",
        createdBy: "Ibukun Bankole",
        createdDate: newDate,
        modifiedBy: "Ibukun Bankole",
        modifiedDate: modifiedDate,
    },

    {
        S_N: 6,
        emailAddress: "oladipupoolumide@gmail.com",
        role: "Chief Technology Officer",
        createdBy: "Olumide Oladipupo",
        createdDate: newDate,
        modifiedBy: "Olumide Oladipupo",
        modifiedDate: modifiedDate,
    },

    {
        S_N: 7,
        emailAddress: "Abdulraqeeb@gmail.com",
        role: "Chief Technology Officer",
        createdBy: "Abdul-Raqeeb Muhammed",
        createdDate: newDate,
        modifiedBy: "Abdul-Raqeeb Muhammed",
        modifiedDate: modifiedDate,
    },

    {
        S_N: 8,
        emailAddress: "MuhammedRoyhan@gmail.com",
        role: "Chief Technology Officer",
        createdBy: "Muhammed Royhan",
        createdDate: newDate,
        modifiedBy: "Muhammed Royhan",
        modifiedDate: modifiedDate,
    },

    {
        S_N: 9,
        emailAddress: "MuhammedRodiat@gmail.com",
        role: "Chief Technology Officer",
        createdBy: "Muhammed Rodiat",
        createdDate: newDate,
        modifiedBy: "Muhammed Rodiat",
        modifiedDate: modifiedDate,
    },

    {
        S_N: 10,
        emailAddress: "Akindelezaynab@gmail.com",
        role: "Chief Technology Officer",
        createdBy: "Akindele Zaynab",
        createdDate: newDate,
        modifiedBy: "Akindele Zaynab",
        modifiedDate: modifiedDate,
    },
];

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();

    for (let key of data) {
        let th = document.createElement("th");
        let keyText = document.createTextNode(key);
        th.appendChild(keyText);
        row.appendChild(th);
        th.style.border = "1px solid black"
        th.style.backgroundColor = 'yellow'
    }
}

function generateTableContent(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let td = row.insertCell();
            let keyText = document.createTextNode(element[key]);
            td.appendChild(keyText);
            td.style.border = "1px solid black";
            td.style.backgroundColor = "white"
            td.style.color = "black"
            
        }
    }
}

let table = document.querySelector("table");
let data = Object.keys(datas[0]);
console.log(table)

generateTableContent(table, datas);
generateTableHead(table, data);


