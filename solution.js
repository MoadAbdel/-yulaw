function yulaw(s) {
    let yulawd = [];
    for (let i=0; i<s.length; i++) {
      if(!yulawd.includes(s[i])){
        yulawd.push(s[i]);
      }
    }
    return yulawd.join("")
}

module.exports={
    yulaw
}