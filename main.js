console.clear();
console.log("==================")
console.log("heelo wolrd5")

console.log("==================")

import _ from "lodash"



{
  let a=1;
  console.log(a);
  a=3;
  console.log(a);

  var b =4;
  console.log(b);
  b=5;
  console.log(b);
  let c=5;
  let d=c;
  console.log("c=" ,c);
  console.log("d=", d);

}
{
  let a=1;
  let f= Infinity;
  console.log(f)

}
{
  var a =2;
  console.log(a);
  {
    a=5;
    
  }
  console.log(a);
}
{
  let t =9;
  let isdark = t > 10;
  if (isdark) {
    console.log("dark")
  }else{
    console.log("light")
  }
}
{
  let f= "world"
  let ff = `she saod: ${f}`
  console.log(ff)
  let ip ="1217.0.1"
  let port = "5000"
  console.log(`heep://${ip}:${port}`)
}

{
  a=a+1;
  a+=1;
  a=a=1;
  a-=1;
  a=a*2;
  a*=2;
}

{
  console.clear();
  console.log(typeof 1);
  console.log("1"-3);
  console.log(+'1');
  console.log(+'1.2' ,typeof(+'1.2'));
  console.log(parseInt("2.3"));

  console.log(typeof(+"1"))

}
{
  const myself ={
    name:'ray',
    age: 18,
    working:false,
    profile: {
      height:'170cm',
      weight:"60kg",

    }

    
  }
  console.log(myself);
  myself.name = "jack";
  console.log(myself);

}
{
  
  const arrar = [23,12];
  console.log(arrar);
  const set2 = new Set(arrar);
  set2.add(18);
  console.log(set2);
}

{
  console.clear();
  const meself ={
    nmae:'ash',
    age:12,
  }
  const myslef2 =meself;
  console.log(meself);
  console.log(myslef2);
  meself.age = 90;
  console.log(meself);
  console.log(myslef2);


}

{
 
  const self = {
    nmae: 'as',
    age: 12,
  };
  const self2 = {
   
  };
  self2.name = self.nmae;
  self2.age = 12;
  console.log(self);
  console.log(self2);
}

{
  const myself ={
    name:'jack',
    age:23,
    profile:{
      height:109,
    }
  }
  const myself2 = {...myself};
  console.log(myself,myself2);
  myself2.name = "wei"
  myself2.profile.height =90;
  console.log(myself, myself2);

  const myself3 = _.cloneDeep(myself);
  console.log(myself3);
  console.log(myself);
  myself.profile.height = 10;
  myself3.name = "wei";
  console.log(myself3);
  console.log(myself);

}

{
  console.clear();
  var a = 3;
  console.log(a);
  {
    var a = 5;
    console.log(a)
  }
  console.log(a)

  {}
}
{console.log("==========11wewew=======")};
{
  console.clear();
  console.clear();
  console.log("==========11wewew=======")

  const array = [1,2,3,4,5,6,7,8,9];
  let a= 0
  while (true) {
    console.log(array[a]);
    a++;
    if (a>=9) {
      break;
    }
  
  }
  console.log(a)
  console.log("==========11wewew=======")
  for (let i=0;i<array.length;i++) {
    if (i==3) {
      continue
    }
    console.log(array[i])

  }
  // array.forEach()
}


{
  console.clear();
  function add(a,b) {
    return a+b
  }
  console.log(add(1,2))
}

/**
 * @param {*} a array
 * @returns null
 */
{
  function forEachArray (a=[1,2,3])
  {
    for (let i=0;i<a.length;i++)
    console.log(a[i])
  }
console.log(forEachArray());
}
{
  const add = (a,b) => {
    return (a+b)
  }
  console.log(add(2,30));

  let array =[1,2,3];
  array.forEach((it) => {
    console.log(it);
  })
  let a= "12";
  console.log(+a);
  let b =12;
  console.log(+b)
  console.clear();
  let array2 = [1,2,4];
  array2.forEach(it => {
    console.log(it+1)});
    console.clear();
  let f =3;
  const add4 = a=>a+1;
  console.log(add4(3));
  console.clear();
  let array3 = [3,5];
  array3.forEach(it => console.log(it + 2))

}
{
  console.clear();
  console.log("====new+++")
  for (let num =1;num<=9; num++)
    {
    for (let i=1; i<=9; i++) {
    console.log(`${num} x ${i} = ${num * i}`)
    
    }}
  }
{
  console.clear();
  console.log("====99999999999999999999999+++")
  for ( let num =1;num<=9;num++) {
    let sum =""
    for (let i= 1;i<=num; i++){
      sum +=`${i} x ${num} = ${num * i}  `
    }
    console.log(sum)
   
  }
}
