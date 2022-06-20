const {createScoreService} = require("./services/scoreService.js");

let five = require("johnny-five"),
    board, button;

board = new five.Board({port:"COM2"});

board.on("ready", function() {

    buttonStart = new five.Button({
        board: board,
        pin: 7,
        holdtime: 1000,
        invert: true
    });

    button1 = new five.Button({
        board: board,
        pin: 6,
        holdtime: 1000,
        invert: true
    });
    button2 = new five.Button({
        board: board,
        pin: 5,
        holdtime: 1000,
        invert: true
    });
    button3 = new five.Button({
        board: board,
        pin: 4,
        holdtime: 1000,
        invert: true
    });
    button4 = new five.Button({
        board: board,
        pin: 3,
        holdtime: 1000,
        invert: true
    });
    const led1 = new five.Led(13);
    const led2 = new five.Led(12);
    const led3 = new five.Led(11);
    const led4 = new five.Led(10);


    // Inject the `button` hardware into
    // the Repl instance's context;
    // allows direct command line access
    board.repl.inject({
        buttonStart,
        button1,
        button2,
        button3,
        button4,
        led1,
        led2,
        led3,
        led4,
    });
    const leds = [led1, led2, led3, led4]
    let lastLEd;
    let timeUp;
    let score = 0;

    function randomLed(leds){
        const idx = Math.floor(Math.random() * leds.length)
        const led = leds[idx]
        if (led === lastLEd){
            return randomLed(leds)
        }
        lastLEd = led
        return led
    }

    function peep(){
        const led = randomLed(leds)
        led.on()
        setTimeout(() => {
            led.off()
            if(!timeUp){
                peep()
            }
        }, 2000)

    }
    button1.on("down", function (){
        if (led1.value){
            score +=1
            led1.off()
        }
    })
    button2.on("down", function (){
        if (led2.value){
            score +=1
            led2.off()
        }
    })
    button3.on("down", function (){
        if (led3.value){
            score +=1
            led3.off()
        }
    })
    button4.on("down", function (){
        if (led4.value){
            score +=1
            led4.off()
        }
    })

    buttonStart.on("down", function() {
        score = 0;
        timeUp = false;
        peep();
        setTimeout(async () => {
            timeUp = true;
            await createScoreService(score)
        }, 10000);
        console.log("down");
    });
});
