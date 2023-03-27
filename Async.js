// const timeTakingFunction = () => {
//   return "I will take time";
// };

// const callingSyncFunction = () => {
//   const name = timeTakingFunction();
//   console.log(name);
// };
// callingSyncFunction();
// console.log("After time taking Function");


// Async/Await
// to avoid the problem of waiting for too long for execution of any line of code we use 
// async /await .it moves to the next line of code if
// the time taking line promises to execute.

const timeTakingFunction = async () => {
  return "Hello i will take time";
};
const callingAsyncFunction = async () => {
  const name = await timeTakingFunction();
  console.log(name);
};
callingAsyncFunction();
console.log("after time taking func");

const newFunc=async()=>{
  return "hey";
};
const mainFunction=async()=>{
  const call=await newFunc();
  console.log(call);
}
mainFunction();
console.log("waiting");