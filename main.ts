input.onButtonPressed(Button.A, function () {
    datalogger.deleteLog()
})
radio.onReceivedValue(function (name, value) {
    led.toggle(0, 0)
    serial.writeValue(name, value)
    datalogger.log(datalogger.createCV(name, value))
})
radio.setGroup(12)
basic.showString(control.deviceName())
basic.showIcon(IconNames.Yes)
