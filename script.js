let coef = [0.06092217949588822, 0.03777600735866839, -0.012341764377214574, 0.008237106290661258, -0.0004498261174985713, 0.10421792590735364, 0.7418977008265836, 0.03033274930065028]
let intercept = [-9.674986394736406]

function predict() {
    var preg = document.getElementById('preg').value
    var gluc = document.getElementById('gluc').value
    var blood = document.getElementById('blood').value
    var skin = document.getElementById('skin').value
    var ins = document.getElementById('ins').value
    var bmi = document.getElementById('bmi').value
    var dpf = document.getElementById('dpf').value
    var age = document.getElementById('age').value

    let params = [preg, gluc, blood, skin, ins, bmi, dpf, age]
    let y = 0

    for (let i = 0; i < 8; i++) {
        y += params[i] * coef[i] 
    }
    y += intercept[0]

    let prob = 1/(1 + (Math.E)**(-y))
    let temp = (prob*100).toFixed(2)
    let proba = temp+'%'


    document.getElementById('result').value = proba
}