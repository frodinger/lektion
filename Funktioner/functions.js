function juice(fruit) {
    return fruit + "-juice";
}

console.log(juice("äpple"));

function fjarrkontroll(kanal) {
    return `Du ser på kanal ${kanal}`
}

console.log(fjarrkontroll(1));

function trangselskatt(tid) {
    if (tid >= 12 && tid <= 15) {
        return 20;
    } else {
        return 10;
    }
}

console.log(trangselskatt(15));