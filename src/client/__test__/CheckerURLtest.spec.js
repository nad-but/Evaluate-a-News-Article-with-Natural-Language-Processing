// testing CheckerURL.js file
//const { VvalidURL } = require("../client/js/CheckerURL")
import  {VvalidURL } from "../js/CheckerURL"
describe("This will test validation of URL", () => { 
    test("The empty text will be false", () => {
          expect(VvalidURL("")).toBeFalsy();
    })
    test("Strings are false, No URL format", () => {
        expect(VvalidURL("nadhira")).toBeFalsy();
    })
    test("URL format is true", () => {
        expect(VvalidURL("https://learn.udacity.com/"));
    })
});
  