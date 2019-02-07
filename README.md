# Tapster PBR
Controller software library for the Tapster PBR robot

## Install:

_Run in a terminal window:_

    git clone https://github.com/tapsterbot/pbr.git
    cd pbr
    npm install

## Run:

Run in a terminal window:

    node bot.js

If everything is working, this is what the terminal window will look like:

    $ node bot.js 
    1549566236894 Available /dev/tty.usbmodem14401  
    1549566236905 Connected /dev/tty.usbmodem14401  
    1549566240779 Repl Initialized 
    >> 

## Try Demo Code:

After bot.js is running and you see the ">>" prompt, try pasting some sample code from pbr.js, then hit Enter or Return

    >> power = {
    ...   tap: function() { s1.to(70); setTimeout( () => s1.to(90), 200) },
    ...   longPress: function() { s1.to(70) },
    ...   release: function() { s1.to(90) }
    ... }
    { tap: [Function: tap],
      longPress: [Function: longPress],
      release: [Function: release] }
    >> 
    
Next, try running a command

    >> power.tap()
    
(At this point, one of the servos on your PBR should quickly toggle back and forth.)
