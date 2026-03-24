let erros = 0
input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        erros = 0
        basic.showNumber(erros)
    } else if (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.No)
        basic.pause(1000)
        erros += 1
        basic.showNumber(erros)
    }
})
