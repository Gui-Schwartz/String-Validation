
export const validString = (input) =>{
    let stack =[];
    if(numsCounter(input)){
        return console.log("String inválida, contém números.")
    } else {
        for(let char of input){
            if("([{".includes(char)){
                stack.push(char);
            
            }else if (")]}".includes(char)){
                
                if(stack.length === 0)return "String inválida";
                let top = stack.pop();
                
                if(
                    (char ===")" && top !== "(") ||
                    (char === "]"  && top !== "[") ||
                    (char === "}" && top !== "{")){
                        return console.log("String invalida");
                    }
            }
        }
        if (stack.length !== 0) return " Erro, simbolos não fechados "
        return "a string é válida"
    }
}

const numsCounter = (input) => {
    for (let char of input){
        if(char >="0" && char <= "9"){
            return true;
        }
    }
}