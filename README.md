# Tapster PBR
Controller software library for the Tapster PBR robot

<a href="https://youtu.be/wskrWO_RAH0"><img src="img/tapster-pbr-medium.jpg" width="500"></a>



## Install:

_Run in a terminal window:_

    git clone https://github.com/tapsterbot/pbr.git
    cd pbr/software
    npm install

## Run:

_Run in a terminal window:_

    node bot.js

If everything is working, this is what the terminal window will look like:

    $ node bot.js 
    1549566236894 Available /dev/tty.usbmodem14401  
    1549566236905 Connected /dev/tty.usbmodem14401  
    1549566240779 Repl Initialized 
    >> 

## Try Demo Code:

After bot.js is running and you see the `>>` prompt, try pasting in some sample code from pbr.js, then hit Enter or Return:

    >> power = {
    ...   tap: function() { s1.to(70); setTimeout( () => s1.to(90), 200) },
    ...   longPress: function() { s1.to(70) },
    ...   release: function() { s1.to(90) }
    ... }
    { tap: [Function: tap],
      longPress: [Function: longPress],
      release: [Function: release] }
    >> 
    
Now try running a command:

    >> power.tap()
    
_At this point, one of the servos on your PBR should quickly toggle back and forth._
