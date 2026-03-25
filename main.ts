let erros = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        erros = 0
        basic.showNumber(erros)
    } else if (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.No)
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(932, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        basic.pause(300)
        erros += 1
        basic.showNumber(erros)
    }
})
