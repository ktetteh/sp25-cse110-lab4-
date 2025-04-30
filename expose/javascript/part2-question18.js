function curr(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
console.log(setInterval(curr, 1000));
