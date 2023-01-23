
/***** Erinnerung: Arrays *******/

// let arr;
// arr = ["Ich","bin","Max"];
// // output(arr);
// // output(arr[0]);
// // output("------------");

// // nested arrays - Prinzip: [[[]]]
// // nested arrays - hier: [[],[]]
// arr =   [
//                  ["Ich","bin","Max"],
//                  ["Ich","bin","Moritz"]
//          ];


// output(arr);
// output(arr[0]);
// output(arr[0][0] + " " + arr[0][1] + " " + arr[0][2]);
// output(arr[1][2]);

//nested loop
// for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//                 // output("Index i: " + i + " Index j: " + j);
//                 // output(arr[i][j])
                
//         }
        
        
// }
        

/***** Objekte 1 Daten/Funktionen *******/

let person =  {
                firstName: "Thomas",
                familyName: "Korn",
                salary: [120000,160000],
                permission: true,
                DOB: 1971,
                sayHello:
                        function () {
                                this.firstName ="Lawrence";
                                return "Hallo, ich bin " + this.firstName + "!";
                        }
              };

// output(person);
// output(person.firstName);
// output(person.permission);
// output(person.salary[1]);

// person.familyName = "Taula";
// output(person.sayHello());
// const currentYear = 2023
// const getAge = currentYear - person.DOB;
// output(getAge);

// const GAP = " ";
// const txt =     "Ich bin " + person.firstName + GAP +
//                 person.familyName +
//                 " und verdiene " + 
//                 person.salary[1] + " p.a";

// output(txt);


/***** Objekte 2 - Hierarchie *******/
// Tiefer, tiefer - Irgendwo in der Tiefe gibt es ein Licht // K:Bush
// Der Baikalsee ist mit 1642 m der tiefste See der Erde. ...
// deep - deeper - deepest

const baikal = {
                value:"10m",
                deep:{
                        deeper:{
                                deepest:{ 
                                        value: "Das Licht - auf 1642m!",
                                        temperature:1
                                        }
                               }

                     }
               };
output(baikal);
output(baikal.value);
output(baikal.deep.deeper.deepest);
output(baikal.deep.deeper.deepest.value);
output(baikal.deep.deeper.deepest.temperature);

/** Ausgabe */
function output(outputData) {
        console.log(outputData);
}