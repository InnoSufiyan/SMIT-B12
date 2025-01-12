function foo([a,b, ...others]) {
    console.log(a)
    console.log(b)
    console.log(others)
}

foo(["sufiyan", "farhan", "kamran", "aslam"])

var a = [1,2,3,4,5,6,7,8]

var [a,b, ...others] = a

console.log(a)
console.log(b)
console.log(others)