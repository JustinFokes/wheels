/*
 * Pre-req: have node.js installed. https://nodejs.org/en/
 * Navigate to this folder (cd ~/Desktop/repo-name)
 * Run node index.js from root directory
 */

function buildTree(){
  let i = 1
  const arr = ["x","x","x","x","x","x","x"]
  while(i <= 7){
    console.log(arr.slice(0, i).join(""))
    i++
  }
}

//buildTree()

function fizzBuzz(){
  for(let i = 1; i <= 100; i++){
    if(i % 15 === 0){
      console.log("FIZZ BUZZ")
    } else if(i % 3 === 0){
      console.log("FIZZ")
    } else if(i % 5 === 0){
      console.log("BUZZ")
    }else {
      console.log(i)
    }
  }
}

//fizzBuzz()

function chessBoard(){
  let finalStringArr = ["\n"]
  let oddString = " # # # #\n"
  let evenString = "# # # # \n"
  for(let i = 0; i <= 8; i++){
    if(i % 2 === 0){
      finalStringArr.push(evenString)
    } else {
      finalStringArr.push(oddString)
    }
  }
  console.log(finalStringArr.join(""))
}

//chessBoard()

