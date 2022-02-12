input.onButtonPressed(Button.A, function () {
    if (kør == true) {
        kør = false
    } else {
        kør = true
    }
    if (kør == true) {
        RingbitCar.forward()
    } else {
        RingbitCar.brake()
    }
})
let kør = false
kør = false
let strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.showString("BA")
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showString("BU")
})
