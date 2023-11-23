





//  function func(a){
//  setTimeout(()=>{
//     let num=4
//     console.log((num%2)!==0)
//    a()
// },3000)

//  }
// function odd(){
//     let num=5
//     console.log((num%2)!==0)
// }
// // func(odd)
// function excl(a){
// setTimeout(()=>{
    
//     console.log("Adrian"+"!")
//    a()
// },3000)

//  }
// function odd(){
//     console.log("Adrian"+"!"+"!")
// }
// excl(odd)
function char(name) {
    let a
    setTimeout(() => {
      a = name.length
      odd()
    }, 3000)
  
    function odd() {
      let b =""
      for (let i=0;i<a;i++) {
        b += name[i] + name[i]
      }
      console.log(b)
    }
  }
  
  char('Adrian')
  char('ssssnake')