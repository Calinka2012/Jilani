input.onButtonPressed(Button.AB, function () {
    music.setVolume(255)
    music.playMelody("C5 B A G F E D C ", 500)
    basic.showString("Hallo Jilani!")
    basic.showLeds(`
        # . . . .
        # # # . #
        # # # . #
        . # # . #
        # . . # #
        `)
    basic.showLeds(`
        . # # # #
        . . . # .
        . . . # .
        # . . # .
        . # # . .
        `)
    basic.showLeds(`
        # . . . .
        # # # . #
        # # # . #
        . # # . #
        # . . # #
        `)
    basic.showLeds(`
        . # # # #
        . . . # .
        . . . # .
        # . . # .
        . # # . .
        `)
    music.playMelody("C5 B A G F E D C ", 500)
})
