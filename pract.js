// const timeTakingFunction = () => {
//   return "I will take time";
// };

// const callingSyncFunction = () => {
//   const name = timeTakingFunction();
//   console.log(name);
// };
// callingSyncFunction();
// console.log("After time taking Function");

const timeTakingFunction = async () => {
  return "Hello i will take time";
};
const callingAsyncFunction = async () => {
  const name = await timeTakingFunction();
  console.log(name);
};
callingAsyncFunction();
console.log("after time taking func");
