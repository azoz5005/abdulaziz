let n1 = 0
let n2 = 0
input.onButtonPressed(Button.A, function () {
    n1 += 10
    basic.showNumber(n1)
})
input.onButtonPressed(Button.B, function () {
    n2 = n1 * 15 / 100 + n1
    basic.showNumber(n2)
})
