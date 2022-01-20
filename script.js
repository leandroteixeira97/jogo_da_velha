var game = []
var table = []
var whoPlays = 0 //0 - Player and 1 - Computer
var verify
var playing = true
var gameLevel = 1 // To improve: Using JS, get the value of the level selection in the main page, and based on that, change the level of the game for one more chalenging. Need to develop the intelligence behind this too.
var cpuPlay = 1
var whoStarts = 1

function computerPlays() {
    if (playing) {
        var line
        var column
        if (gameLevel == 1) {
            do {
                line = Math.round(Math.random() * 2)
                column = Math.round(Math.random() * 2)
            } while (table[line][column] != '')
            table[line][column] = 'O'
        } else if (gameLevel == 2) {
            //LEVEL 2
        }
        verify = verifyWinner()
        if (verify != '') {
            alert(`Parabéns ${verify}, você venceu!!!`)
            playing = false
        }
        updateTable()
        whoPlays = 0
    }
}

function verifyWinner() {
    var line
    var column
    //LINES
    for (line = 0; line < 3; line++) {
        if (table[line][0] == table[line][1] && table[line][1] == table[line][2]) {
            return table[line][0]
        }
    }

    //COLUMNS
    for (column = 0; column < 3; column++) {
        if (table[0][column] == table[1][column] && table[1][column] == table[2][column]) {
            return table[0][column]
        }
    }

    //DIAGONAL
    if (table[0][0] == table[1][1] && table[1][1] == table[2][2]) {
        return table[0][0]
    }

    if (table[0][2] == table[1][1] && table[1][1] == table[2][0]) {
        return table[0][2]
    }

    return ''
}


function play(p) {
    if (playing == true && whoPlays == 0) {

        switch (p) {
            case 1:
                if (table[0][0] == '') {
                    table[0][0] = 'X'
                    whoPlays = 1
                }
                break
            case 2:
                if (table[0][1] == '') {
                    table[0][1] = 'X'
                    whoPlays = 1
                }
                break
            case 3:
                if (table[0][2] == '') {
                    table[0][2] = 'X'
                    whoPlays = 1
                }
                break
            case 4:
                if (table[1][0] == '') {
                    table[1][0] = 'X'
                    whoPlays = 1
                }
                break
            case 5:
                if (table[1][1] == '') {
                    table[1][1] = 'X'
                    whoPlays = 1
                }
                break
            case 6:
                if (table[1][2] == '') {
                    table[1][2] = 'X'
                    whoPlays = 1
                }
                break
            case 7:
                if (table[2][0] == '') {
                    table[2][0] = 'X'
                    whoPlays = 1
                }
                break
            case 8:
                if (table[2][1] == '') {
                    table[2][1] = 'X'
                    whoPlays = 1
                }
                break
            default:
                if (table[2][2] == '') {
                    table[2][2] = 'X'
                    whoPlays = 1
                }
        }
        if (whoPlays == 1) {
            updateTable()
            verify = verifyWinner()
            if (verify != '') {
                alert(`Parabéns ${verify}, você venceu!!!`)
                playing = false
            }
            computerPlays()
        }
    }
}

function updateTable() {
    for (var line = 0; line < 3; line++) {
        for (var column = 0; column < 3; column++) {

            if (table[line][column] == 'X') {
                newTable[line][column].innerHTML = 'X'
                newTable[line][column].style.cursor = 'default'
            } else if (table[line][column] == 'O') {
                newTable[line][column].innerHTML = 'O'
                newTable[line][column].style.cursor = 'default'
            } else {
                newTable[line][column].innerHTML = ''
                newTable[line][column].style.cursor = 'pointer'
            }
        }
    }
}

function begins() {
    playing = true
    cpuPlay = 1
    table = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    newTable = [
        [document.querySelector('div#p1'), document.querySelector('div#p2'), document.querySelector('div#p3')],
        [document.querySelector('div#p4'), document.querySelector('div#p5'), document.querySelector('div#p6')],
        [document.querySelector('div#p7'), document.querySelector('div#p8'), document.querySelector('div#p9')]
    ]
    updateTable()
    if (whoStarts == 1) {
        whoStarts = 0
        whoPlays = whoStarts
        document.querySelector('p#whoStarts').innerHTML = 'Quem começa: Jogador'
    } else {
        whoStarts = 1
        whoPlays = whoStarts
        document.querySelector('p#whoStarts').innerHTML = 'Quem começa: Computador'
        computerPlays()
    }
}

window.addEventListener('load', begins)
