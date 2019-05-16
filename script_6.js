function arnCoder(){
  var str = "CCGUCGUUGCGCUACAGC";
  var res = str.match(/.{1,3}/g);
  res.forEach(function(element) {
    if (res.includes('UCU'||'UCC'||'UCA'||'UCG'||'AGU'||'AGC')){
      res.push("Sérine")
    }
    else if (res.includes('CCU'||'CCC'||'CCA'||'CCG')){
      res.push("proline")
    }
    else if (res.includes('UUA'||'UUG')){
      res.push("leucine")
    }
    else if (res.includes('UUU'||'UUC')){
      res.push("phénylalanine")
    }
    else if (res.includes('CGU','CGC','CGA','CGG','AGA','AGG')){
      res.push("arginine")
    }
    else if (res.includes('UAU'||'UAC')) {
      res.push("tyrosine")
    }

    console.log(res.join('-'))

})

}
arnCoder()