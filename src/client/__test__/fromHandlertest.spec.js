// testin formHandler.js file

//const { handleFormSubmit } =require("../client/js/formHandler")
import  {handleFormSubmit } from "../js/formHandler"


describe("Testing for handler submit functionality", () => { 
    test("Testing the handleFormSubmit function", () => {
          expect(handleFormSubmit).toBeDefined();
    })});