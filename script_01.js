
/***** Erinnerung: Arrays *******/

let arr;
arr = ["Ich","bin","Max"];
output(arr);
output(arr[0]);
output("------------");

// nested arrays - Prinzip: [[[]]]
// nested arrays - hier: [[],[]]
arr =   [
                 ["Ich","bin","Max"],
                 ["Ich","bin","Moritz"]
         ];


output(arr);
output(arr[0]);
output(arr[0][0] + " " + arr[0][1] + " " + arr[0][2]);
output(arr[1][2]);

//nested loop
// for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
        
// }
        



/***** Objekte 1 Daten/Funktionen *******/





/** Ausgabe */
function output(outputData) {
        console.log(outputData);
}