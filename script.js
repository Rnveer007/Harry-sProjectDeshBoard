// const promise1 = new Promise((_, reject) => setTimeout(() => reject("Error 1"), 1000));
// const promise2 = new Promise( reject("Success 2"));
// const promise3 = new Promise(resolve => setTimeout(() => resolve("Success 3"), 800));

// Promise.any([promise1, promise2, promise3])
//     .then(result => console.log(result)) // Output: "Success 2"
//     .catch(error => console.error(error));


const p1 = new Promise((resolve) => {
    resolve("this is first promise");
});

const p2 = new Promise((resolve) => {
    resolve("this is the second promise");
});

const p3 = new Promise((resolve, reject) => {
    resolve("this is the third promise");
});

// Handling `p1` with `.then`
p1.then((result) => {
    console.log(result); // Output: "this is first promise"
});
