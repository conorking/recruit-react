import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// TESTING
// Not familiar enough with React Testing and already spent longer than 3 hours on this task
// Here is an outline of what I would be looking to test.
// -----------------------------------------------------------------------------------------


// Test that Credit Card Number validation/filtering works
	// 1. Only numbers and dashes appear
	// 2. Dashes are every 4 numbers
	// 3. Validation only passes when length is 16 digits + 3 dashes

// Test CVC validation
	// 1. Only accepts number input
	// 2. Max length is 3
	// 3. Validation passes when length is 3 and only numbers

// Test Date Validation
	// 1. Only numbers and forstslash appears
	// 2. Fowardslash only appears as 3rd charater
	// 3. Validation only passes if first 2 characters are an integer less than 13, and there are 5 characters
	// 4. Max number of characters is 5

// Test navigation bar
	// 1. Navigation bar renders with menu button and title
	// 2. Initially renders with hamburger icon and "Register Card Form" as title
	// 3. When hamburger icon is clicked nav bar renders with "Menu" and icon is back arrow
	// 4. When back icon is clicked, view reverts to Register Card Form

// Test rendering Credit Card frame
	// 1. Shows content "Welcome User"
	// 2. Shows form
		// a) shows Credit Card Number field
		// b) shows CVC on second line, right aligned
		// c) shows Expiry on second line, right aligned 
		// d) shows submit button

// Test rendering Menu frame
	// 1. Shows content "This is menu content"