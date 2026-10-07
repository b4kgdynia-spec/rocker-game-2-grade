basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        nezhaV2.move(nezhaV2.MotorPostion.M1, 80, nezhaV2.MovementDirection.CW, 2, nezhaV2.SportsMode.Degree)
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.TiltRight)) {
        nezhaV2.move(nezhaV2.MotorPostion.M1, 80, nezhaV2.MovementDirection.CCW, 2, nezhaV2.SportsMode.Degree)
    }
})
