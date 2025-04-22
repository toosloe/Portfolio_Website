# Portfolio_Website
Portfolio website for my art and code. Will be static for the moment.

3/11/25
My current plan is to have a quick loading screen before the webiste comes up. It'll be 
more for the vibe than for any practical reason. 

After the loading screen there will be a home page with three blocks that are links to
pages with 2D, 3D and coding.

I want the blocks to "float into" their place in the middle of the page then expand when the cursor hovers over them.

My aim right now is the loading screen and home page.

![Sketch page showing plan for loading page and home page](/images/sketch1.jpeg)

3/12/25
Realized that I wanted a "Splash Screen" and not a loading screen. Reddit reccomemnded 
to not have it as its not "efficient" for users.
Yeah? And?
I'm making this for me, Redditor.

3/13/25
Implemented Splash using Javascript and CSS. I found a few tutorials for a splash screen 
but decided to maybe try to simplify it.
Couldnt figure out why it wasn't working until I realized I needed "async" in the 
Script tag. I must've spent like an hour on that.
So I ended up throwing away the "page directs to home page" idea because I realized it
wasn't necessary and will potentially get the website dinged by Google.
Next step will be to make and play an interactive kind of thing. Maybe like a door 
opening? I can probably overlay it over the black screen. Maybe the door will react to 
the cursor? I'll mess with it.

4/22/2025
Been awhile since I added to the README. 
Added door opening splash screen. It was a problem for awhile until I just implemented it
using javascript. I kept having issues overlaying the images on top of eachother even while invisible because it kept messing with the positioning. I also figured out the boxes that expand with bigger images in them soon enough. Hiding the overflow is actually just magical. My issue now is style. It looks okay...but it doesn't have that pizazz that I want from it. I wonder if just populating it with the icons and stuff would help with it. It may be that I'll start "Portfolio Website 2: Electric Boogaloo" after I finish this one. 
Anyways I added image borders. I based them off the pokemon menu borders. I'm a little worried about compatibility with other browsers but its the only thing saving this I think. The box shadows also scratch my brain in nice ways. 
Next I want to add the other pages that actually show off my portfolio. I want to actually import the 3D models in and rotate them! Or maybe thats dumb....maybe I should just import a gif. 
I'm starting to think the splash screen is unfitting now. I really should've thought more about themeing before starting all this...