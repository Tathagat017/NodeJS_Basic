const fs = require("fs");

//~.....................................................................
// fs.readFile("./text.txt", { encoding: "utf-8" }, (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });
//~.....................................................................
//! the above and below are the same utf can be given as object or directly
// fs.readFile("./text.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// console.log(
//   "Bye",
//   "this will run first as readFile is asynchronously runnign hence it will print before readFile is consoled"
// );
//~.....................................................................
///- readFile is synchronous in nature

// const data = fs.readFileSync("./text2.txt", "utf-8");
// console.log(data);

// console.log("adios", "this will print before readLine Sync");

//~..................................................................
//! writeFile overwrites the original file
//* file is not present in the directory , it will create a new file and overwrite in it
// const data = fs.readFileSync("./text2.txt", "utf-8");

// fs.writeFile("./text3.txt", "I am writing via module", (err) => {
//   if (err) {
//     console.log("error encountered", err);
//   } else {
//     console.log("done writing");
//   }
// });
//~.....................................................................
//fs.appendFile-> does not overwrite the original file
// const data = fs.readFileSync("./text3.txt", "utf-8");
// fs.appendFile("./text3.txt", "\nBATMAN", (error) => {
//   if (error) {
//     console.log("error encountered", error);
//   } else {
//     console.log("done appending");
//   }
// });
//~.....................................................................

// const data = fs.readFileSync("./text3.txt", "utf-8");
// fs.appendFile("./text3.txt", "\nBATMAN5", (error) => {
//   try {
//     console.log("done appending");
//   } catch (error) {
//     console.log("error encountered", error);
//   }
// });

//~.....................................................................
// to catch the error in sync read
// try {
//   const data = fs.readFileSync("./text3.txt", "utf-8");
//   console.log(data);
// } catch (error) {
//   console.log("error encountered", error);
// }

//~.....................................................................
//!Process <process.argv>

//console.log(process.argv);
let num1 = Number(process.argv[3]);
let num2 = Number(process.argv[4]);
if (process.argv[2] == "sum") {
  console.log(num1 + num2);
}

//~.....................................................................
// const isEven = require("is-even");
// function even(num) {
//   return num % 2 == 0 && num > 0;
// }
// console.log(even(1));

// console.log(isEven(1));

// readFile("/etc/passwd", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
