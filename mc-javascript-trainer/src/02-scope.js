// Let scope
// The scope of the let variable remains in the {} brackets

if (true) {
    var name = "Brian";
    console.log(name);
}

if (true) {
    let name = "Ben";
    name = "Peter";
    console.log(name);
}

console.log(name);