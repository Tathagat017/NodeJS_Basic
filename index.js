/* 
Node Basics :- 

Node Js helps JavaScript to run outside the browser(in browser Js engine was used to interpret js in browser). 


Created by Ryan Dahl in 2008


Advantage --> It's based on Js hence no need to learn any other language

Note ---> It's a runtime environment but not a programming language used to write backend code.

its --> All functionality of Js Engine + added features (Modules)

import and export are keywords to import and export modules which were given by ES6.

before that common JS module was used

//* Types of Modules in node --> 1.Inbuilt Module:-   inbuilt module->Already installed

//* 2. External modules--> we can get externally

//* 3. User developed modules or Third Party modules    --> we create it / users create --> self created modules



*/
const { sum, sub, mul, div } = require("./app"); // Local modules

console.log(sum(10, 10));
