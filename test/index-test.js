/*global concatenatedString, describe, interpolatedString, it, myString */
var greeting;
it('defines `greeting`', function() {
  expect(greeting).toEqual("Hello, everybody!")
})
var greetSpecialGuest;
it('concatenates strings to greet a special guest in `greetSpecialGuest`', function() {
  expect(greetSpecialGuest).toEqual(`Hello, ${specialGuest}!`)
})
var conversation;
it('interpolates a string in `conversation`', function() {
  expect(conversation).toEqual(`Let's talk about ${topic}.`)
})
