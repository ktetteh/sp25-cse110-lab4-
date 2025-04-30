for (let prop in statistics) {
    if(prop.startsWith("r") || statistics[prop] % 2 != 0){
      console.log(statistics[prop]);
    }
}
