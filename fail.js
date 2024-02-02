let failSub=[70,80,40,33,57,80,32,46,20];
let element=[];
for (let i = 0; i < failSub.length; i++) {
     
    if (failSub[i] >=40) {
      continue;
    }
    element.push(failSub[i]);
 console.log(element.length)
}