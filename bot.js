five = require("johnny-five") 
board = new five.Board({
  debug: true
})

board.on("ready", function() {
    var servo1 = five.Servo(11)
    var servo2 = five.Servo(10)
    var servo3 = five.Servo(9)
    var servo4 = five.Servo(6)    

    board.repl.inject({
      servo1: servo1,
      s1: servo1,
      servo2: servo2,
      s2: servo2,
      servo3: servo3,
      s3: servo3,
      servo4: servo4,
      s4: servo4      
    })

    var s1_initValue = 90
    var s2_initValue = 90
    var s3_initValue = 90
    var s4_initValue = 95            

    servo1.to(s1_initValue)
    servo2.to(s2_initValue)
    servo3.to(s3_initValue)
    servo4.to(s4_initValue)    

    servo1.on("error", function() {
      console.log(arguments)
    })
    servo2.on("error", function() {
      console.log(arguments)
    })
    servo3.on("error", function() {
      console.log(arguments)
    })
    servo4.on("error", function() {
      console.log(arguments)
    })    
})
