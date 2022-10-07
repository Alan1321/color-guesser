const hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

export const getRandomHex = () =>{
    let randomHex = '#'
    for(let i = 0;i<6;i++){
        randomHex = randomHex + hex[Math.floor(Math.random() * 16)]
    }

    return randomHex
}

export const shuffledArray = () =>{
    const randomNum = [0,1,2]
    for(let i = 0;i<10;i++){
        const index1 = Math.floor(Math.random() * 3);
        const index2 = Math.floor(Math.random() * 3);

        const num1 = randomNum[index1]
        const num2 = randomNum[index2]
        
        randomNum[index1] = num2
        randomNum[index2] = num1
    }
    return randomNum
}