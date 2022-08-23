


function main() {

    const getMainDate = new Date();
    const getYear = getMainDate.getFullYear()
    const getMonth = getMainDate.getMonth() + 1;
    const getDay = getMainDate.getDate()
    const getHours = getMainDate.getHours()
    const getMinutes = getMainDate.getMinutes()
    const getSeconds = getMainDate.getSeconds()

    document.querySelector(".container-item:nth-child(1)").innerHTML = `Year : ${getYear}`
    document.querySelector(".container-item:nth-child(2)").innerHTML = `Month : ${getMonth}`
    document.querySelector(".container-item:nth-child(3)").innerHTML = `Day : ${getDay}`
    document.querySelector(".container-item:nth-child(4)").innerHTML = `Hourse : ${getHours}`
    document.querySelector(".container-item:nth-child(5)").innerHTML = `Minutes : ${getMinutes}`
    document.querySelector(".container-item:nth-child(6)").innerHTML = `Seconds : ${getSeconds}`


}

setInterval(main,1000)














































