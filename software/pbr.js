-------------------------------------------------------
LG G4
power = {
  tap: function() { s1.to(105); setTimeout( () => s1.to(90), 100) },
  longPress: function() { s1.to(105) },
  release: function() { s1.to(90) }
}

volumeUp = {
  tap: function() { s2.to(110); setTimeout( () => s2.to(98), 100) }
}

volumeDown = {
  tap: function() { s3.to(72); setTimeout( () => s3.to(83), 100) }
}



-------------------------------------------------------
Apple - iPhone 6 Plus

power = {
  tap: function() { s1.to(70); setTimeout( () => s1.to(90), 200) },
  longPress: function() { s1.to(70) },
  release: function() { s1.to(90) }
}

home = {
  tap: function() { s4.to(110); setTimeout( () => s4.to(95), 100) },
  doubleTap: function() { s4.to(110);
                          setTimeout( () => s4.to(95), 100)
                          setTimeout( () => s4.to(110), 200)
                          setTimeout( () => s4.to(95), 300)
                        },
  longPress: function() { s4.to(110) },
  release: function() { s4.to(95) }
}

volumeUp = {
  tap: function() { s2.to(70); setTimeout( () => s2.to(90), 150) }
}

volumeDown = {
  tap: function() { s3.to(120); setTimeout( () => s3.to(100), 150) }
}




-------------------------------------------------------
Samsung - Galaxy S6 Edge

power = {
  tap: function() { s1.to(100); setTimeout( () => s1.to(85), 200) },
  longPress: function() { s1.to(100) },
  release: function() { s1.to(85) }
}

home = {
  tap: function() { s4.to(110); setTimeout( () => s4.to(95), 100) },
  doubleTap: function() { s4.to(110);
                          setTimeout( () => s4.to(95), 75)
                          setTimeout( () => s4.to(110), 150)
                          setTimeout( () => s4.to(95), 225)
                        },
  longPress: function() { s4.to(110) },
  release: function() { s4.to(95) }
}

volumeUp = {
  tap: function() { s2.to(70); setTimeout( () => s2.to(85), 100) }
}

volumeDown = {
  tap: function() { s3.to(60); setTimeout( () => s3.to(50), 100) }
}



-------------------------------------------------------
Google - Pixel 2 XL

power = {
  tap: function() { s1.to(95); setTimeout( () => s1.to(80), 200) },
  longPress: function() { s1.to(95) },
  release: function() { s1.to(80) }
}

volumeUp = {
  tap: function() { s2.to(75); setTimeout( () => s2.to(90), 100) }
}

volumeDown = {
  tap: function() { s3.to(65); setTimeout( () => s3.to(80), 100) }
}




