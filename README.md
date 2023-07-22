# phase-1-project
my flatiron phase1 project

Instructions:

Newton

A really micro micro-service for advanced math.
Newton does anything from numerical calculation to symbolic math parsing.

How does it work?
1- Send a GET request to Newton with a url-encoded math expression and your preferred operation.
2- Get back a JSON response with your problem solved.

Show me
Let's find the derivative of x^2. So, we send a request to the newton url saying just that:

-> https://newton.now.sh/api/v2/derive/x%5E2 (Note the URL-encoded ^)

Now, we get the following response:

{
  "operation":"derive",
  "expression":"x^2",
  "result":"2 x"
}

It's that simple!


Get Started

"C:\Users\ardav\Downloads\Untitled video - Made with Clipchamp.gif"

Send a GET request to Newton.
https://newton.now.sh/api/v2/:operation/:expression
Note: operation is the math operation that you want to perform. : expression is the URL-encoded math expression on which you want to operate. View available operation endpoints below!

That's it! You'll be returned a JSON object with the operation you requested, the expression you provided, and the result of the operation performed on the expression.

examples of view available endpoints:

![image](https://github.com/arda1362/phase-1-project/assets/126632174/958b9a92-dfbe-4c23-818b-a9818a78f20c)


Keep in mind: To find the tangent line of a function at a certain x value, send the request as c|f(x) where c is the given x value and f(x) is the function expression, the separator is a vertical bar '|'. See the table above for an example request.

To find the area under a function, send the request as c:d|f(x) where c is the starting x value, d is the ending x value, and f(x) is the function under which you want the curve between the two x values.

To compute fractions, enter expressions as the numerator(over)denominator. For example, to process 2/4 you must send in your expression as 2(over)4. The result expression will be in standard math notation (1/2, 3/4).

Completed Project Goals:
- Fetches from public API
- At least 3 event listeners included: 'click',  'keypress' and 'mouseleave'
- Each event listener should have its own unique callback function
- API should return a collection of at least 5 objects with each object having at least 3 attributes
 
Sources used: https://newton.vercel.app, Logo from https://calculator-online.net and background from https://banner2.cleanpng.com/
This project was created for my Phase 1 project for Flatiron School.
