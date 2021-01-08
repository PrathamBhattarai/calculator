// function ac() {
//     document.getElementsByClassName('screen')[0].innerHTML = "";
// }
function one() {
    let s = document.getElementById('one').value;
    document.getElementsByClassName('screen')[0].innerHTML = s;
    console.log(s);
}
// document.getElementById('AC').addEventListener('click', ac);
document.getElementById('one').addEventListener('click', one);