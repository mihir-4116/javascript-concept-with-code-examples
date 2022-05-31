const div = document.querySelector("div");
const button = document.querySelector("button");
const a = document.querySelector("a");
const ul = document.querySelector("#catagory");

// child to parent (event-bubbling)
/*
Event bubbling is a method of event propagation in the HTML DOM API when an event is in an element inside another element, 
and both elements have registered a handle to that event. 
It is a process that starts with the element that triggered the event and then bubbles up to the containing elements in the hierarchy.
*/
div.addEventListener("click", () => {
  console.log("div");
});
button.addEventListener("click", () => {
  console.log("button");
});

// parent to child (event-capturing)
/*
Event capturing is one of two ways to do event propagation in the HTML DOM. In event capturing,
 an event propagates from the outermost element to the target element. 
 It is the opposite of event bubbling, where events propagate outwards from the target to the outer elements.
*/
div.addEventListener(
  "click",
  () => {
    console.log("div");
  },
  true
);
button.addEventListener(
  "click",
  () => {
    console.log("button");
  },
  true
);

// stop-propogation
/*
The event.stopPropagation() method stops the bubbling of an event to parent elements, 
preventing any parent event handlers from being executed.
*/
div.addEventListener("click", () => {
  console.log("div");
});
button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("button");
});

// stop-immidiate-propogation
/*
 The stopImmediatePropagation() method of the Event interface prevents other listeners of the same event from being called. 
*/
button.addEventListener("click", (event) => {
  console.log("button");
});
button.addEventListener("click", (event) => {
  event.stopImmediatePropagation();
  console.log("button twice");
});

// prevent default
/*
The preventDefault() method cancels the event if it is cancelable, 
meaning that the default action that belongs to the event will not occur.
*/
a.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("ancher tag");
});

// event delegation
/*
Event Delegation is basically a pattern to handle events efficiently. 
Instead of adding an event listener to each and every similar element, 
we can add an event listener to a parent element and call an event on a particular target using the 
.target property of the event object.
*/
ul.addEventListener("click", (e) => {
  console.log("catagory clicked", e.target.id);
});
