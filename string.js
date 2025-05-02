export const validString = (input) =>{
    const stack =[];
    for(let char of input) {
        if(!isNaN(Number(char))) return "String inválida, contém números";
        if("([{".includes(char)){
            stack.push(char);
        } else if (")]}".includes(char)){
            if(stack.length === 0)return "String inválida";
            const top = stack.pop();
            if(
                (char ===")" && top !== "(") ||
                (char === "]"  && top !== "[") ||
                (char === "}" && top !== "{")){
                    return "String inválida";
                }
        }
    }
    if (stack.length !== 0) return "Erro, simbolos não fechados"
    return "a string é válida";
}