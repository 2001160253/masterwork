function easeOutExpo(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
    const startTime = performance.now()
    function updateNumber(currentTime) {
        const elapsedTime = currentTime - startTime
        if (elapsedTime > duration) {
            callback(finalNumber)
        } else {
            const timeRate = (1.0 * elapsedTime) / duration
            const numberRate = easeOutExpo(timeRate)
            const currentNumber = Math.round(numberRate * finalNumber)
            callback(currentNumber)
            requestAnimationFrame(updateNumber)
        }
    }
    requestAnimationFrame(updateNumber)
}

document.addEventListener('DOMContentLoaded', function () {
    animateNumber(10458, 3000, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('count-10445').innerText = formattedNumber
    });
    animateNumber(890, 3000, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('count-890').innerText = formattedNumber
    });
    animateNumber(1045, 3000, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('count-1045').innerText = formattedNumber
    });
})