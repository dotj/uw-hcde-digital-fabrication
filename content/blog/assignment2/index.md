---
title: CAD Modeling
date: "2019-04-24"
description: CAD (Computer Aided Design) modeling with Grasshopper and Rhino.
---


<p align="middle">
    <img class="report" src="img/obvious-plant.jpg" width=700>
    <br><small><em>A plant-like shape made with the thinner cardboard.</em></small></br>
</p>

# Overview

For this week, we were tasked with creating an updated version of our laser cut press fit construction kit in Grasshopper and Rhino using Grasshopper's parametric modeling features.

## Materials

- Digital calipers
- Grasshopper & Rhino
- Adobe Illustrator
- Different types of cardboard
- Laser Cutter


# Ideation

After last week's assignment, I wanted to experiment more with scoring the cardboard and further differentiating the leaf/petal shape. I decided that I wanted to try to find a way to score the cardboard in such a way that it would curve slightly like a petal or a leaf.

I made a bunch of different prototypes using thick cardboard, thin cardboard/card stock, and paper, and experimented with different ways to bend and curl the leaf/petal. After several iterations, I chose a design in which the base of the leaf is cut and then overlapped to make the leaf cup together. A simple score pattern would allow the leaf to bend more easily and I would slot the overlapping base pieces into a slot that would fit 2x the width of the cardboard. (I also decided to just make the second piece a leaf because I wanted a more obvious point to differentiate it from the circular base pieces.)

<p align="middle">
    <img class="report" src="img/prototypes.JPG" width=700>
    <br><small><em>Some early prototypes of a bent leaf.</em></small></br>
</p>

# Design

I chose a modified design in which I have a circular base node with both regular and double-width slots, as well as a scored leaf with overlapping slots at the base.

<p align="middle">
    <img class="report" src="img/trig.JPG" width=700>
    <br><small><em>Calculating the angles at which to place the scores and cut the overlapping slots.</em></small></br>
</p>


# Process

<p align="middle">
    <img class="report" src="img/overview.jpg" width=700>
    <br><small><em>My approach to this week's assignment.</em></small></br>
</p>

## Learning Grasshopper and Rhino

I spent the majority of my time on this project familiarizing myself with Grasshopper. I have previously worked with Solidworks for parametric modeling so I understood the value of learning Grasshopper. Grasshopper also uses very "math-y" terms and it was strange (and fascinating) to see objects described this way.

I struggled quite a bit with the organization of the nodes. Things got messy real fast and I quickly got confused because everything so scattered. I'm sure I will learn more tricks in due time, but at the moment I constantly felt very, very lost.

Conceptually, the idea of moving objects around programmatically came fairly naturally to me (even if the implementation took a bit of trial and error). I made a big effort to keep things organized so most of my time was spent poking around and trying to find ways to make things more clear to me.

<p align="middle">
    <img class="report" src="img/screen013.png" width=700>
    <br><small><em>Noob.</em></small></br>

<p align="middle">
    <img class="report" src="img/screen010.png" width=700>
    <br><small><em>Organization! Labeling!</em></small></br>
</p>

<p align="middle">
    <img class="report" src="img/shifted-preview.png" width=700>
    <br><small><em>Shifted the preview of the end geometry so I could see what was going on.</em></small></br>
</p>

<p align="middle">
    <img class="report" src="img/screen003.png" width=700>
    <br><small><em>First pass at trying to make the gauge.</em></small></br>
</p>

<p align="middle">
    <img class="report" src="img/screen007.png" width=700>
    <br><small><em>Accidentally stumbled upon the UI separation feature and awkwardly spaced out all my nodes.</em></small></br>
</p>

<p align="middle">
    <img class="report" src="img/screen002.png" width=700>
    <br><small><em>The base node with various slot widths.</em></small></br>
</p>

<p align="middle">
    <img class="report" src="img/screen005.png" width=700>
    <br><small><em>The most awkward Bezier curve in existence.</em></small></br>
</p>

<p align="middle">
    <img class="report" src="img/screen008.png" width=700>
    <br><small><em>Gave up on the Bezier curve and make the leaf shape in Rhino and set it as a geometry in Grasshopper.</em></small></br>
</p>

<p align="middle">
    <img class="report" src="img/screen009.png" width=700>
    <br><small><em>Playing with the angles at which the overlapping slots should be. In my original design, the slots were closer together, which means that the cardboard might be weak.</em></small></br>
</p>

## Ctrl+G/Cmd+G

The biggest breakthrough for me was understanding out to use the grouping function! I managed to figure out how to do it on the UI once by accident, and couldn't reproduce it, so then I simply tried "ctrl+G" and it worked...

*SIGH.*

<p align="middle">
    <img class="report" src="img/screen014.png" width=700>
    <br><small><em>Finally found the grouping function. :')</em></small></br>
</p>


## Exporting and Setup

I had previously set my units to inches in Rhino, and didn't run into any issues exporting from Rhino to .dxf to Illustrator. Others were not quite so lucky. I don't really have any insight on this, I think I just got lucky.

<p align="middle">
    <img class="report" src="img/screen012.png" width=400>
    <br><small><em>Importing the .dxf file into Illustrator.</em></small></br>
</p>


## Scoring with the Laser Cutter

In order to score the cardboard, I found [this project site](http://fab.cba.mit.edu/classes/863.12/people/pip/WK2/wk2.html) which outlined the steps to score the cardboard. In Illustrator, I made the lines where the cardboard neede dto be cut or scored, and mapped those colors in the Epilog laser cutter preferences. (Unfortunately, I forgot to take a screenshot of this.)

<p align="middle">
    <img class="report" src="img/gauges-test.png" width=400>
    <br><img src="img/screen016.png" width=400>
    <br><small><em>The test print pattern in Rhino (top) and Illustrator (bottom).</em></small></br>
</p>

<p align="middle">
    <img class="report" src="img/screen015.png" width=700>
    <br><small><em>Preparing the final print for the laser cutter. Weird artifacts but ok.</em></small></br>
</p>

<p align="middle">
    <img class="report" src="img/pewpew.jpg" width=700>
    <br><small><em>Pew pew.</em></small></br>
</p>

# Results

In total, I made 1 full kit with the thinner cardboard (12 leaves and 12 base nodes), and a half kit with the thicker cardboard.

Thick cardboard:
- Width: 0.124"
- Slot width: 0.112"
- Laser cutter score settings: 100 speed, 30 power, 50 frequency
- Laser cutter cut settings: 40 speed, 100 power, 50 frequency

Thin cardboard:

- Width: 0.060"
- Slot width: 0.050"
- Laser cutter score settings: 100 speed, 10 power, 50 frequency
- Laser cutter cut settings: 70 speed, 100 power, 50 frequency

Overall, the effect wasn't *quite* what I wanted but I was able to pick up a bit of Grasshopping and experiment with scoring and bending cardboard. The bent cardboard worked much better with the thinner material. I think my previous iteration was more flexible and easier to assemble and play with. I would have liked to spend more time iterating on the shape and angle of the leaf in particular, and perhaps find more interesting patterns to score the leaf on.

<p align="middle">
    <img class="report" src="img/leaf.jpg" width=700>
    <br><small><em>A single leaf (which was very satisfying to bend with the pre cut scores).</em></small></br>
</p>

<p align="middle">
    <img class="report" src="img/test.jpg" width=350>
    <img class="report" src="img/leaf-stem.JPG" width=350>
    <br><small><em>The resulting leaf and base node with the thicker cardboard (left) and thinner cardboard(right)</em></small></br>
</p>

# Acknowledgments

Kudos to my classmates: Angel for learning Rhino/Grasshopper with me (and for feeding me!), to everyone whose comments I lurked on slack (Colleen, Michael, Leo), and to everyone in lab with my Tuesday night (Lukas, D'Marcus, Julie M., Kellie).


# Source Files

- [base.gh](/project-files/a2/base.gh)
- [gauge.gh](/project-files/a2/gauge.gh)
- [leaf.gh](/project-files/a2/leaf.gh)
- [parts.3dm](/project-files/a2/parts.3dm)
- [final.ai](/project-files/a2/final.ai)
- [final-thin.ai](/project-files/a2/final-thin.ai)


# References

- [http://rhino.github.io](http://rhino.github.io)
- [https://blog.ramboll.com/rcd/tutorials/a-beginners-guide-to-visual-scripting-with-grasshopper.html](https://blog.ramboll.com/rcd/tutorials/a-beginners-guide-to-visual-scripting-with-grasshopper.html)
- [http://fab.cba.mit.edu/classes/863.12/people/pip/WK2/wk2.html](http://fab.cba.mit.edu/classes/863.12/people/pip/WK2/wk2.html)


# Appendix

<p align="middle">
    <img class="report" src="img/boolean.jpg" width=400>
    <br><small><em>I tried to set up bail-out button to fall back to the older leaf pattern...</em></small></br>
</p>