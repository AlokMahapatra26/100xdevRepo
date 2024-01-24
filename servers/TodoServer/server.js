const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors());

app.get("/" , (req,res)=>{
    res.status(200).json({
        "message" : "homepage"
    })
})

app.get("/getData" , (req,res)=>{
    res.status(200).json([
        {
          "id": 1,
          "name": "John Doe",
          "username": "john_doe",
          "email": "john.doe@example.com",
          "address": {
            "street": "123 Main Street",
            "city": "Anytown",
            "zipcode": "12345",
            "geo": {
              "lat": "40.7128",
              "lng": "-74.0060"
            }
          },
          "phone": "555-1234",
          "website": "johndoe.com",
          "company": {
            "name": "ABC Corp",
            "catchPhrase": "Making things happen",
            "bs": "Innovate and create"
          }
        },
        {
          "id": 2,
          "name": "Jane Smith",
          "username": "jane_smith",
          "email": "jane.smith@example.com",
          "address": {
            "street": "456 Oak Avenue",
            "city": "Sometown",
            "zipcode": "67890",
            "geo": {
              "lat": "34.0522",
              "lng": "-118.2437"
            }
          },
          "phone": "555-5678",
          "website": "janesmith.com",
          "company": {
            "name": "XYZ Ltd",
            "catchPhrase": "Building the future",
            "bs": "Innovate and grow"
          }
        },
        {
          "id": 3,
          "name": "Bob Johnson",
          "username": "bob_j",
          "email": "bob.j@example.com",
          "address": {
            "street": "789 Pine Street",
            "city": "Anothercity",
            "zipcode": "54321",
            "geo": {
              "lat": "37.7749",
              "lng": "-122.4194"
            }
          },
          "phone": "555-8765",
          "website": "bobjohnson.com",
          "company": {
            "name": "123 Industries",
            "catchPhrase": "Innovate and excel",
            "bs": "Quality and precision"
          }
        },
        {
          "id": 4,
          "name": "Alice Williams",
          "username": "alice_w",
          "email": "alice.w@example.com",
          "address": {
            "street": "987 Birch Lane",
            "city": "Randomville",
            "zipcode": "13579",
            "geo": {
              "lat": "41.8781",
              "lng": "-87.6298"
            }
          },
          "phone": "555-4321",
          "website": "alicewilliams.com",
          "company": {
            "name": "Tech Innovators",
            "catchPhrase": "Transforming ideas into reality",
            "bs": "Tech solutions"
          }
        },
        {
          "id": 5,
          "name": "Charlie Brown",
          "username": "charlie_b",
          "email": "charlie.b@example.com",
          "address": {
            "street": "654 Maple Street",
            "city": "Everytown",
            "zipcode": "24680",
            "geo": {
              "lat": "45.5231",
              "lng": "-122.6765"
            }
          },
          "phone": "555-9876",
          "website": "charliebrown.com",
          "company": {
            "name": "Innovation Hub",
            "catchPhrase": "Where ideas come to life",
            "bs": "Creative solutions"
          }
        }
      ]
      )
})

const PORT  = 4000;
app.listen(PORT , ()=>{
    console.log(`Server is running on port number ${PORT}`)
})