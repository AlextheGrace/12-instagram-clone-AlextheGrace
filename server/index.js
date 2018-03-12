var express = require('express');
var app = express();
// var db = require('./db.js');

//test index route get wudup
app.get('/',(req,res) => {
    res.json({
        "wudup":"wudup"
    })
});


app.get('/photos', (req, res) => {
    res.json(
        [
            {
            id: "1",
            createdAt: 1520863911,
            name: "name 1",
            imageUrl: "imageUrl 1"
            },
            {
            id: "2",
            createdAt: 1520863851,
            name: "name 2",
            imageUrl: "imageUrl 2"
            },
            {
            id: "3",
            createdAt: 1520863791,
            name: "name 3",
            imageUrl: "imageUrl 3"
            },
            {
            id: "4",
            createdAt: 1520863731,
            name: "name 4",
            imageUrl: "imageUrl 4"
            },
            {
            id: "5",
            createdAt: 1520863671,
            name: "name 5",
            imageUrl: "imageUrl 5"
            },
            {
            id: "6",
            createdAt: 1520863611,
            name: "name 6",
            imageUrl: "imageUrl 6"
            },
            {
            id: "7",
            createdAt: 1520863551,
            name: "name 7",
            imageUrl: "imageUrl 7"
            },
            {
            id: "8",
            createdAt: 1520863491,
            name: "name 8",
            imageUrl: "imageUrl 8"
            },
            {
            id: "9",
            createdAt: 1520863431,
            name: "name 9",
            imageUrl: "imageUrl 9"
            },
            {
            id: "10",
            createdAt: 1520863371,
            name: "name 10",
            imageUrl: "imageUrl 10"
            },
            {
            id: "11",
            createdAt: 1520863311,
            name: "name 11",
            imageUrl: "imageUrl 11"
            },
            {
            id: "12",
            createdAt: 1520863251,
            name: "name 12",
            imageUrl: "imageUrl 12"
            },
            {
            id: "13",
            createdAt: 1520863191,
            name: "name 13",
            imageUrl: "imageUrl 13"
            },
            {
            id: "14",
            createdAt: 1520863131,
            name: "name 14",
            imageUrl: "imageUrl 14"
            },
            {
            id: "15",
            createdAt: 1520863071,
            name: "name 15",
            imageUrl: "imageUrl 15"
            },
            {
            id: "16",
            createdAt: 1520863011,
            name: "name 16",
            imageUrl: "imageUrl 16"
            },
            {
            id: "17",
            createdAt: 1520862951,
            name: "name 17",
            imageUrl: "imageUrl 17"
            },
            {
            id: "18",
            createdAt: 1520862891,
            name: "name 18",
            imageUrl: "imageUrl 18"
            },
            {
            id: "19",
            createdAt: 1520862831,
            name: "name 19",
            imageUrl: "imageUrl 19"
            },
            {
            id: "20",
            createdAt: 1520862771,
            name: "name 20",
            imageUrl: "imageUrl 20"
            },
            {
            id: "21",
            createdAt: 1520862711,
            name: "name 21",
            imageUrl: "imageUrl 21"
            },
            {
            id: "22",
            createdAt: 1520862651,
            name: "name 22",
            imageUrl: "imageUrl 22"
            },
            {
            id: "23",
            createdAt: 1520862591,
            name: "name 23",
            imageUrl: "imageUrl 23"
            },
            {
            id: "24",
            createdAt: 1520862531,
            name: "name 24",
            imageUrl: "imageUrl 24"
            },
            {
            id: "25",
            createdAt: 1520862471,
            name: "name 25",
            imageUrl: "imageUrl 25"
            },
            {
            id: "26",
            createdAt: 1520862411,
            name: "name 26",
            imageUrl: "imageUrl 26"
            },
            {
            id: "27",
            createdAt: 1520862351,
            name: "name 27",
            imageUrl: "imageUrl 27"
            },
            {
            id: "28",
            createdAt: 1520862291,
            name: "name 28",
            imageUrl: "imageUrl 28"
            },
            {
            id: "29",
            createdAt: 1520862231,
            name: "name 29",
            imageUrl: "imageUrl 29"
            },
            {
            id: "30",
            createdAt: 1520862171,
            name: "name 30",
            imageUrl: "imageUrl 30"
            },
            {
            id: "31",
            createdAt: 1520862111,
            name: "name 31",
            imageUrl: "imageUrl 31"
            },
            {
            id: "32",
            createdAt: 1520862051,
            name: "name 32",
            imageUrl: "imageUrl 32"
            },
            {
            id: "33",
            createdAt: 1520861991,
            name: "name 33",
            imageUrl: "imageUrl 33"
            },
            {
            id: "34",
            createdAt: 1520861931,
            name: "name 34",
            imageUrl: "imageUrl 34"
            },
            {
            id: "35",
            createdAt: 1520861871,
            name: "name 35",
            imageUrl: "imageUrl 35"
            },
            {
            id: "36",
            createdAt: 1520861811,
            name: "name 36",
            imageUrl: "imageUrl 36"
            },
            {
            id: "37",
            createdAt: 1520861751,
            name: "name 37",
            imageUrl: "imageUrl 37"
            },
            {
            id: "38",
            createdAt: 1520861691,
            name: "name 38",
            imageUrl: "imageUrl 38"
            },
            {
            id: "39",
            createdAt: 1520861631,
            name: "name 39",
            imageUrl: "imageUrl 39"
            },
            {
            id: "40",
            createdAt: 1520861571,
            name: "name 40",
            imageUrl: "imageUrl 40"
            },
            {
            id: "41",
            createdAt: 1520861511,
            name: "name 41",
            imageUrl: "imageUrl 41"
            },
            {
            id: "42",
            createdAt: 1520861451,
            name: "name 42",
            imageUrl: "imageUrl 42"
            },
            {
            id: "43",
            createdAt: 1520861391,
            name: "name 43",
            imageUrl: "imageUrl 43"
            },
            {
            id: "44",
            createdAt: 1520861331,
            name: "name 44",
            imageUrl: "imageUrl 44"
            },
            {
            id: "45",
            createdAt: 1520861271,
            name: "name 45",
            imageUrl: "imageUrl 45"
            },
            {
            id: "46",
            createdAt: 1520861211,
            name: "name 46",
            imageUrl: "imageUrl 46"
            },
            {
            id: "47",
            createdAt: 1520861151,
            name: "name 47",
            imageUrl: "imageUrl 47"
            },
            {
            id: "48",
            createdAt: 1520861091,
            name: "name 48",
            imageUrl: "imageUrl 48"
            },
            {
            id: "49",
            createdAt: 1520861031,
            name: "name 49",
            imageUrl: "imageUrl 49"
            }
        ]
    );
});

// var UserController = require('./controllers/UserController');
// var AuthController = require('./controllers/AuthController');

// app.use('/users', UserController);
// app.use('/auth', AuthController);

module.exports = app;