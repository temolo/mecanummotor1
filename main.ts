let speed = 30
basic.forever(function () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, speed)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, speed)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, speed)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, speed)
    basic.pause(2000)
    mecanumRobot.Motor(LR.Upper_left, MD.Back, speed)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, speed)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, speed)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, speed)
    basic.pause(2000)
    mecanumRobot.Motor(LR.Upper_left, MD.Back, speed)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, speed)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, speed)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, speed)
    basic.pause(2000)
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, speed)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, speed)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, speed)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, speed)
    basic.pause(2000)
    mecanumRobot.state(MotorState.stop)
    basic.pause(2000)
})
