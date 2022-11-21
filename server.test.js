const request = require("supertest");
const app = require('./Routes/User');
const mongoose = require ('mongoose');



describe("Test the root path", () =>{
    test("It should response the Get method", () =>{
        const response = request(app).post("http://loclhost:8000/User/add").send({
            "Name":"Zeeshan", 
            "E-mail":"zeeshanali@gamil.com",
            "Age":20,
            "Contact":3107048506
        })
        expect(response.statusCode).toBe(200);
    })
})

describe("Test the root path", () =>{
    test("It should response the Get method", () =>{
        const response = request(app).post("http://loclhost:8000/User/add").send({
            "Name":"Zeeshan"
        })
        expect(response.statusCode).toBe(200);
    })
})

describe("Test the root path", () =>{
    test("It should response the Get method", () =>{
        const response = request(app).delete("http://loclhost:8000/User/637b632b52f1fc28898d615a")
        expect(response.statusCode).toBe(200);
    })
})



