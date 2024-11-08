let user = prompt("enter S w or G")

let cpuInput = Math.floor(Math.random() * 3);
let cpu = ["S" , "W", "G"][cpuInput];
const match = (cpu,user)=>{
 if (cpu === user){
    return "Draw"
 }
 else if (cpu == "S" && user === "W"){
        return "cpu"
 }
 else if (cpu == "S" && user === "G"){
            return "user"
        
        }
 
 else if (cpu == "G" && user === "S"){
    return "cpu"

}
else if (cpu == "G" && user === "W"){
    return "cpu"

}
else if (cpu == "W" && user === "S"){
    return "User"

}
else if (cpu == "W" && user === "G"){
    return "user"

}


}
let result = match(cpu, user)
document.write(`The winner is ${result}  as CPU:${cpu} and user is ${user}`) 