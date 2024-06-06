import React from 'react'

function ResultForm() {

    let firstYearTotalMarks= ()=>{

  
    let studentName:string = "govardhan"
    let englishMarks:number = 70
    let sanskritMarks:number = 96
    let maths1AMarks:number = 50
    let maths1BMarks:number = 55
    let physicsMarks:number = 48
    let chemistryMarks:number = 45

    let firstYearMarks = englishMarks+sanskritMarks+maths1AMarks+maths1BMarks+physicsMarks+chemistryMarks
    let firstYearPerc = firstYearMarks/470*100

    console.log(`Name:${studentName},TotalMarks:${firstYearMarks},Percentage:${firstYearPerc.toFixed(2)}`)

} 
firstYearTotalMarks()


let secondYear:{
  studentName : string,
  english2Marks : number 
  sanskrit2Marks : number 
  maths2AMarks : number 
  maths2BMarks : number 
  physics2Marks : number 
  chemistry2Marks : number
  phyPracticals :number
  chemPractical : number 
}={
  studentName:"govardhan",
  english2Marks : 72,
  sanskrit2Marks :98,
  maths2AMarks : 55,
  maths2BMarks :50,
  physics2Marks : 52, 
  chemistry2Marks : 40,
  phyPracticals : 28,
  chemPractical : 28
}

let secondYearMarks = secondYear.english2Marks + secondYear.sanskrit2Marks + 
secondYear.maths2AMarks+secondYear.maths2BMarks+secondYear.physics2Marks+secondYear.chemistry2Marks+
secondYear.phyPracticals+secondYear.chemistry2Marks

 let secondYearPerc = secondYearMarks/530*100

 console.log(`Name:${secondYear.studentName},TotalMarks:${secondYearMarks},Percentage:${secondYearPerc.toFixed(2)}`)




function isAdult(age: number): boolean {
    return age >= 18;
}

let age: number = 20;
console.log(`Is the person an adult? ${isAdult(age)}`); 

 age = 16;
console.log(`Is the person an adult? ${isAdult(age)}`);

age = 10;
console.log(`Is the person an adult? ${isAdult(age)}`);

  return (
    <div>
        

    </div>
  )
}

export default ResultForm