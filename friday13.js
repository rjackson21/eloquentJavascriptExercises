function fridayTheThirteenths(start, end){

    var d = new Date()
    var dates = []
    var month
    
   for (let year = start; year < end + 1 ; year++){
        for (month = 0 ; month <12; month++){
            d.setFullYear(year, month, 13)
            if (d.getDay() == 5 ){
            dates.push(d)
            console.log(d)
            }
        }
    }
}



fridayTheThirteenths(1999, 2000)

