basic.forever(function () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, 75)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, 75)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, 75)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, 75)
    basic.pause(2000)
    mecanumRobot.state(MotorState.stop)
    basic.pause(2000)
})
