let coef = [0.121229425, 0.030708308, -0.001054815, 0.065969830, 0.006218500, 0.044359909, 0.010717864]
let intercept = [-9.551915256]

function predict() {
    var preg = document.getElementById('preg').value
    var gluc = document.getElementById('gluc').value
    var blood = document.getElementById('blood').value
    var skin = document.getElementById('skin').value
    var ins = document.getElementById('ins').value
    var bmi = document.getElementById('bmi').value
    var age = document.getElementById('age').value

    let params = [preg, gluc, blood, skin, ins, bmi, age]
    let y = 0

    for (let i = 0; i < 7; i++) {
        y += params[i] * coef[i] 
    }
    y += intercept[0]

    let prob = 1/(1 + (Math.E)**(-y))
    let temp = (prob*100).toFixed(2)
    let proba = temp+'%'


    document.getElementById('result').value = proba
}
