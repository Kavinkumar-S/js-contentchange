let parent_div = document.getElementsByClassName("parent-div")[0].children;

console.log("parent-div", parent_div);

let odd = [],
  even = [];

function arrangeorder() {
  let new_order = [...parent_div].map((ele, ind) => {
    // console.log("element", ele);
    // console.log("index", ind);
    if (ind % 2 !== 0) {
      return odd.push(ele.innerText);
    } else {
      return even.push(ele.innerText);
    }
  });
  console.log("neworder", new_order);
  console.log("even", even);
  console.log("odd", odd);
  let newarr = [...even, ...odd];

  console.log("newarr", newarr);
  let newdiv = newarr && newarr.map((data) => ` <div id=${data}>${data}</div>`);
  console.log("newdiv", newdiv);
  document.getElementsByClassName("parent-div")[0].innerHTML = newdiv.join(" ");
}

// setTimeout(() => {
arrangeorder();
// }, 2000);

let firt_ele = document.getElementById("one");

console.log("firt_ele", firt_ele);
let second_ele = document.getElementById("two");
console.log("second_ele", second_ele);

let third_ele = document.getElementById("three");
console.log("third_ele", third_ele);

let four_ele = document.getElementById("four");
console.log("four_ele", four_ele);

parent_div.inner;
