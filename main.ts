input.onButtonPressed(Button.A, function () {
    basic.showNumber(max_value)
    basic.pause(1000)
})
let new_value = 0
let max_value = 0
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
max_value = sonar.ping(
DigitalPin.P1,
DigitalPin.P0,
PingUnit.Centimeters
)
basic.forever(function () {
    new_value = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P0,
    PingUnit.Centimeters
    )
    if (max_value < new_value) {
        max_value = new_value
    }
})
