function range(start, end){
    var a = []
    for (var i = start; i < end +1 ; i += 1){
        a.push(i);
    }
    return a;
}

console.log(range(1, 10))

