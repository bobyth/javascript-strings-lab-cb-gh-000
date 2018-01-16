/*global concatenatedString, describe, interpolatedString, it, myString */
var greeting ='Hello, everybody!';
var specialGuest = "Neil deGrasse Tyson";
var greetSpecialGuest = "Hello, " + specialGuest + "!";
var conversation = `${topic}`;
var topic = "space";

it('defines `greeting`', function() {
  expect(greeting).toEqual("Hello, everybody!")
})

it('concatenates strings to greet a special guest in `greetSpecialGuest`', function() {
  expect(greetSpecialGuest).toEqual(`Hello, ${specialGuest}!`)
})

it('interpolates a string in `conversation`', function() {
  expect(conversation).toEqual(`Let's talk about ${topic}.`)
})
