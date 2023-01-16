radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        bitbot.go(BBDirection.Forward, 60)
    } else if (receivedNumber == 2) {
        bitbot.go(BBDirection.Reverse, 60)
    } else if (receivedNumber == 3) {
        bitbot.rotate(BBRobotDirection.Left, 60)
    } else if (receivedNumber == 4) {
        bitbot.rotate(BBRobotDirection.Right, 60)
    } else if (receivedNumber == 5) {
        bitbot.stop(BBStopMode.Coast)
    }
})
radio.setGroup(1)
basic.showIcon(IconNames.House)
