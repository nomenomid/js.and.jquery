#JavaScript and jQuery Technical Exercise (<a href = "https://boiling-oasis-9746.herokuapp.com" target = "_blank">Demo</a>)

A company located near Reston, VA has asked to complete the following technical 
test.

##Questions

###Question 1a

Write a function `charFrequency()` that takes a string of characters, counts 
the number of occurrences of each character, and returns an object with the 
characters and their counts as key/value pairs. Don't worry about illegal 
characters. No jQuery allowed.

###Question 1b

Modify `charFrequency()` to return an array of just the characters sorted by 
frequency in descending order. No jQuery allowed.

###Question 2

There are TWO primary reasons why the line inside this loop will perform poorly. 
Identify them, explain why they are inefficient, and show what you would do instead.

*jQuery Code*

```javascript
for (var i = 0; i < 100; i++) {
	$('content section:first-child div').append('<p>' + i + '</p>');
}
```

###Question 3a

Write a function that logs the name and true/false value of each checkbox in the form 
below to the browser console. Bind this function to the form's submit event. If no 
checkboxes are checked, abort the form submission. Do this succinctly using jQuery.

*HTML Code*

```html
<form id="default-form">
	<label><input type="checkbox" name="one">One</label>
	<label><input type="checkbox" name="two">Two</label>
	<label><input type="checkbox" name="three">Three</label>
	<input type="submit">
</form>
```

###Question 3b

Do the above, but do it without using jQuery. Don't worry about non-W3C browsers.

###Question 3c

Modify the jQuery version of the function to apply to all forms on the page that 
have a class of "lazy-form". Change the line of code that does the event binding to 
allow it to work with forms that are lazy-loaded onto the page by some user action. 
In other words, the event binding that you perform immediately will capture form 
submissions for forms that are generated and added to the page post-onload (via 
Ajax, for example), so long as they have the "lazy-form" class.

###Question 4a

Write a block of code that will change the title of an HTML page once per minute to 
show how many minutes have passed. No jQuery allowed.

###Question 4b

Modify the above code to restart the timer when a user clicks on the page. In other 
words, page titles are only changed when the user has not interacted with the page 
for a minute or more. No jQuery allowed.