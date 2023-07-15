// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(str) {
	 let decodedArr = []; // Your Result goes here
  // Only change code below this line
	for(let i=0; i<str.lenght:i++){
		if(lookup[str[i]]==undefined){
			decodedArr.push(str[i])
 
		else decodedArr.push(lookup[str[i]])
	}

  return; //return decodedArr
}
  

// Do not change this line
window.rot13 = rot13;