input.onButtonPressed(Button.A, function () {
    datalogger.deleteLog()
})
radio.onReceivedValue(function (name, value) {
    datalogger.log(datalogger.createCV(name, value))
})
radio.setGroup(12)
basic.showIcon(IconNames.House)
datalogger.setColumnTitles(
"tovut",
"dummy"
)
datalogger.mirrorToSerial(true)
