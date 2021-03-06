---
title: Molding and Casting
date: "2019-05-26"
description: Creating silicone molds and casting tiles with plaster.
---

<p align="middle">
    <img class="report" src="img/photo-final.jpg" width=700>
    <br><small><em>The final plaster-cast tiles.</em></small></br>
</p>

<h1>Overview</h1>

<p>This week's assignment was a multi-step process. First, we needed to design a hard mold for our silicone mold, which would be either 3D printed or CNC milled. Then, using our new silicone mold, we would then cast plaster pieces.</p>

<h2>Tools and Materials</h2>
<ul>
    <li>Machinable wax <em>or</em> 3D Filament</li>
    <li>Oomoo 1:1 Ratio Silicone Mold</li>
    <li>Plaster of Paris</li>
    <li>Disposable cups, spoons, etc.</li>
</ul>
<h2>Software</h2>
<ul>
    <li>Grasshopper/Rhino</li>
    <li>Fusion 360 and Bantam Tools <em>or</em> Dremel 3D Slicer</li>
</ul>

<h1>Ideation</h1>

<p>As always, I started by thinking about what form my project would take. Technically, we didn't need to design anything for this assignment, but I've been drawn to grasshopper designs lately and wanted to get a bit more practice.</p>

<p>I decided I wanted to do some sort of tile shape, inspired by tilework I've seen in Egypt and the UAE. I knew nothing about the history of these tiles, but I knew they were normally symmetric and ornately detailed. A bit of digging taught me that one implementation is called "<a href="https://en.m.wikipedia.org/wiki/Zellige">zellige</a>." These tiles are generally abstract and show some form of <a href="https://en.m.wikipedia.org/wiki/Tessellation">tessellation</a> to avoid the depiction of living things. (More references included at the end!)</p>

<p align="middle">
    <img class="report" src="img/sketch-tile-shapes.jpg" width=700>
    <br><small><em>Sketches of the shapes of various tiles.</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/sketch-symmetry.jpg" width=350>
    <img class="report" src="img/sketch-details.jpg" width=350>
    <br><small><em>Ideas for details to add onto the tile.</em></small></br>
</p>

<p>From a practical standpoint, I also wanted to stick with something simple since I was unfamiliar with molding and casting with plaster. An interesting but simple tile shape would allow me to practice the process without too much pain, and I could add as much or as little detail as I needed to.</p>

<!-- <p align="middle">
    <img class="report" src="img/sketch-mathy-stuff.jpg" width=700>
    <br><small><em>PLACEHOLDER</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/sketch-mathy-stuff2.jpg" width=700>
    <br><small><em>PLACEHOLDER</em></small></br>
</p> -->


<h1>Process</h1>

<!-- <p align="middle">
    <img class="report" src="img/lol.png" width=700>
    <br><small><em>Original game plan (lol).</em></small></br>
</p> -->


<h2>A False Start</h2>

<!-- <p align="middle">
    <img class="report" src="img/photo-3x3.jpg" width=700>
    <br><small><em>3x3 inch block is too large</em></small></br>
</p> -->

<p>In an attempt to stay ahead of the game, I ordered some machinable wax a couple weeks ago. Thanks to Leo's comment on slack, I realized that this size was too large. I made a futile attempt to cut the wax on my own, without any luck. 0/10, would not recommend. I ended up rushing to Fluke on a Friday (thanks to a heads up from Kimberly) to buy the other size wax.</p>

<p align="middle">
    <img class="report" src="img/photo-3x3-2.jpg" width=350>
    <img class="report" src="img/photo-3x3-lol.jpg" width=350>
    <br><small><em>The 3x3 inch block is too large for the Bantam mill.</em></small></br>
</p>
<!-- <p align="middle">
    <img class="report" src="img/photo-3x3-lol.jpg" width=350>
    <br><small><em>Don't try this. :(</em></small></br>
</p> -->


<h2>Designing the Tile</h2>

<p>As stated earlier, the design wasn't central to this assignment, but I wanted to gain some experience with Grasshopper and Rhino so I decided to design it myself anyway. The geometric and mathematical form of the tile made it a natural fit for Grasshopper, though this tile design in particular was simple enough to be designed with Onshape as well.</p>

<!-- <p align="middle">
    <img class="report" src="img/rhinopper-start.png" width=700>
    <br><small><em>It doesn't take much to make something cool with Grasshopper/Rhino when you're trying to make a pattern!</em></small></br>
</p> -->

<p align="middle">
    <img class="report" src="img/gh-error2.png" width=350>
    <img class="report" src="img/gh-error.png" width=350>
    <br><small><em>Someday, I will figure out how to understand Grasshopper errors...</em></small></br>
</p>

<p>Designing with Grasshopper was tricky, as usual. It took me a bit of trial and error to design the first tile, but I was quickly able to "cut out" the second tile by tiling the first tile, then using a boolean to create the second tile.</p>

<!-- <p align="middle">
    <img class="report" src="img/gh-tile1.png" width=700>
    <br><small><em>It's tiling!</em></small></br>
</p> -->
<!-- <p align="middle">
    <img class="report" src="img/gh-tile3.png" width=700>
    <br><small><em>Tiles!!</em></small></br>
</p> -->
<p align="middle">
    <img class="report" src="img/gh-tiled.png" width=700>
    <br><small><em>Tiles!</em></small></br>
</p>
<p align="middle">
    <img class="report" src="/project-files/a6/gh-tiling.gif" width=700>
    <br><small><em>Generating more tiles with a slider!.</em></small></br>
</p>

<!-- <p align="middle">
    <img class="report" src="img/gh-hover-info.png" width=700>
    <br><small><em>Finally realized that you can hover over the input parameter.</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/gh-no-idea.png" width=700>
    <br><small><em>???</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/gh-tile2.png" width=700>
    <br><small><em>It's tiling! pt 2!</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/gh-what-is-happening.png" width=700>
    <br><small><em>What is happening</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/gh-building-base.png" width=700>
    <br><small><em>Starting to build the base.</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/gh-building-base2png.png" width=700>
    <br><small><em>Starting to build the base.</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/f360-empty-toolpath.png" width=700>
    <br><small><em>Empty toolpath error.</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/gh-flattening-data.png" width=700>
    <br><small><em>Flattening data did something good for me... though I still don't fully understand what it does.</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/gh-merging-shapes-error.png" width=700>
    <br><small><em>Weird glitching with my boolean set up.</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/gh-merging-shapes-error2.png" width=700>
    <br><small><em>Weird glitching with my boolean set up.</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/gh-merging-shapes-error3.png" width=700>
    <br><small><em>Weird glitching with my boolean set up.</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/gh-mold-squared-model.png" width=700>
    <br><small><em>Finally got a mold modeled out with grasshopper! (Before grasshopper somehow reverted itself to a version from 12 hours ago...)</em></small></br>
</p>

<p align="middle">
    <img class="report" src="img/gh-bake-as-group.png" width=700>
    <br><small><em>Baking as a group is helpful!</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/gh-bug.png" width=700>
    <br><small><em>Grasshopper bug</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/gh-manual-radius.png" width=700>
    <br><small><em>Needed to manually get the radius of the circle when designing in Rhino</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/rhino-sanity-check.png" width=700>
    <br><small><em>Figuring out the order of operations needed with booleans in Rhino.</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/rhino-bb-banana.png" width=700>
    <br><small><em>A baby banana/moon.</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/rhino-check-units.png" width=700>
    <br><small><em>Double checking units in rhino.</em></small></br>
</p>-->

<p>I wanted to add a bit of detail to my base tile shape, since that would be the real test of the plaster. I had originally intended to add some planetary/space-y motifs onto my tile, including a "planet" with some surface texture that would show up like a topological map. I never got that far, but a girl can dream... I ended up keeping the details fairly simple, since I ended up spending a bit too much time here and wanted to move on to the actual milling, molding, and castingI also decided here that I would only cast the first tile for now.</p>

<p align="middle">
    <img class="report" src="img/rhino-create-curve.png" width=350>
    <img class="report" src="img/rhino-create-curve2.png" width=315>
    <br><small><em>Creating the curve in my design. #iseefaces</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/rhino-project-curve-sphere.png" width=700>
    <br><small><em>Trying to create a wavy design on the "planet." Spoiler alert: I couldn't get it to work.</em></small></br>
</p>

<!-- <p align="middle">
    <img class="report" src="img/rhino-curve.png" width=700>
    <br><small><em>Curve? Idk.</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/rhino-detailing-base.png" width=700>
    <br><small><em>Adding details to the base.</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/rhino-detailing-base2.png" width=700>
    <br><small><em>Adding details to the base.</em></small></br>
</p> -->


<p align="middle">
    <img class="report" src="img/rhino-finished-piece.png" width=700>
    <br><small><em>Final(ish) modeled piece to cast.</em></small></br>
</p>


<!-- <p align="middle">
    <img class="report" src="img/rhino-project-curve-sphere2.png" width=700>
    <br><small><em>Project curve onto sphere (which I did not use).</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/rhino-project-curve-sphere2.png" width=700>
    <br><small><em>Project curve onto sphere (which I did not use).</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/rhino-project-curve-sphere3.png" width=700>
    <br><small><em>Project curve onto sphere (which I did not use).</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/rhino-project-surve-sphere4.png" width=700>
    <br><small><em>Project curve onto sphere (which I did not use).</em></small></br>
</p> -->

<!-- <p align="middle">
    <img class="report" src="img/rhino-gh-preview-box.png" width=700>
    <br><small><em>Using the grashopper preview to ensure everything fits.</em></small></br>
</p> -->

<p>Since I was already using Grasshopper, I was able to define the wax block and create a model of the mold to be milled as well. This process certainly was not without pain, as Grasshopper crashed on me a couple times and I lost a couple hours of work at one point. However, I am glad I used Grasshopper because it made it easy for me to move things around to see how they fit, and also to build multiple versions of the molds in case something goes wrong. I ended up baking multiple versions of my mold: one with both tiles and two more with one tile each.</p>

<p align="middle">
    <img class="report" src="img/rhino-mold-mesh-top.png" width=700>
    <br><small><em>Top view of the mold meshes.</em></small></br>
</p>
<!-- <p align="middle">
    <img class="report" src="img/rhino-mold-mesh.png" width=700>
    <br><small><em>Mesh of the mold</em></small></br>
</p> -->
<p align="middle">
    <img class="report" src="img/rhino-mold-mesh2.png" width=700>
    <br><small><em>Meshes of the single molds.</em></small></br>
</p>

<!-- <p align="middle">
    <img class="report" src="img/fusion360-change-yo-units.png" width=700>
    <br><small><em>Ensuring that my units are in millimeters!</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/fusion360-where-is-the-setup-menu.png" width=700>
    <br><small><em>Where is the setup menu and why doesn't the search work.</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/fusion360-find-setup.png" width=700>
    <br><small><em>Srsly where is the setup menu.</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/f360-double-check-size.png" width=700>
    <br><small><em>Fusion 360 scaling issues.</em></small></br>
</p> -->

<h2>Exporting from CAD to CAM in Fusion 360</h2>

<p>The next step was to import our design into Fusion 360 in order to build the toolpath for the Bantam mill. I followed the steps outlined in class and ran into some hiccups with scaling issues and general unfamiliarity with Fusion 360, but I was eventually able to get a reasonable-looking toolpath with which I exported a gcode file from.</p>

<p align="middle">
    <img class="report" src="img/f360-import.png" width=700>
    <br><small><em>Importing into Fusion 360.</em></small></br>
</p>
<!-- <p align="middle">
    <img class="report" src="img/f360-pick-the-damn-model.gif" width=700>
    <br><small><em>Error creating a toolpath because the model wasn't selected.</em></small></br>
</p> -->

<!-- <p align="middle">
    <img class="report" src="img/f360-scale-10x.png" width=700>
    <br><small><em>Fusion 360 scaling issues.</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/f360-setup-units-correct.png" width=700>
    <br><small><em>Manually scaled, and now the units look correct.</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/f360-test.png" width=700>
    <br><small><em>Running through the workflow with the test file provided in class.</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/f360-toolpath-generation.gif" width=700>
    <br><small><em>Generating the toolpath with Fusion 360.</em></small></br>
</p> -->

<p align="middle">
    <img class="report" src="img/f360-post-process-final.png" width=700>
    <br><small><em>Toolpath created and ready to post process!</em></small></br>
</p>
<p align="middle">
    <img class="report" src="/project-files/a6/f360-toolpath-test.gif" width=700>
    <br><small><em>A virtual preview of the toolpath.</em></small></br>
</p>

<!-- <p align="middle">
    <img class="report" src="img/f360-post-process.png" width=700>
    <br><small><em>Toolpath created and ready to post process!</em></small></br>
</p> -->


<h2>Exporting from Fusion 360 to Bantam Tools</h2>

Exporting the gcode from Fusion 360 and importing into Bantam tools was fairly painless, though my toolpath did get place way outside of the machine. I imagine this had something to do with the scaling issues in Fusion 360, though it wasn't difficult to fix in Bantam.

<p align="middle">
    <img class="report" src="/project-files/a6/bantam-insanity-check.gif" width=700>
    <br><small><em>Somehow, the toolpath got placed way outside of the box.</em></small></br>
</p>
<p align="middle">
    <img class="report" src="/project-files/a6/bantam-sanity-check.gif" width=700>
    <br><small><em>Moved the toolpath to the correct location and things are looking reasonable.</em></small></br>
</p>

<!-- <p align="middle">
    <img class="report" src="img/bantam-reasonable-looking-toolpath.png" width=700>
    <br><small><em>A reasonable looking toolpath!</em></small></br>
</p> -->
<!-- <p align="middle">
    <img class="report" src="img/photo-bantam-setup.jpg" width=700>
    <br><small><em>Setting up the fluke wax in the Bantam!</em></small></br>
</p> -->

<h2>CNC Milling with the Bantam</h2>

<p>When I got to the MILL, I set up my wax with some double sided tape at the bottom and loaded my Bantam set up. Now, I am ready to cut! <em>*foreshadowing intensifies.*</em></p>

<p align="middle">
    <img class="report" src="img/photo-bantam-setup2.jpg" width=700>
    <br><small><em>Ready to cut!!!</em></small></br>
</p>

<p>Ha ha haaaa, just kidding. I somehow missed the memo that this wax was <em>still</em> too large for the Bantam, and by just a couple millimeters! I found some orphaned sandpaper and tried to sand down my block of wax enough to fit in the Bantam, but was unsuccessful.</p>

<p align="middle">
    <img class="report" src="img/photo-bantam-too-large.jpg" width=700>
    <br><small><em>Just kidding.</em></small></br>
</p>
<p align="middle">
    <img class="report" src="img/photo-attempt-to-sand.jpg" width=700>
    <br><small><em>An unsuccessful attempt to sand down the block of wax to fit in the Bantam...</em></small></br>
</p>
<!-- <p align="middle">
    <img class="report" src="img/photo-seattle-chocolates.jpg" width=700>
    <br><small><em>Seattle Chocolates is the real MVP.</em></small></br>
</p> -->

<h2>Pivot to 3D Printing</h2>

<p>At this point, Christa and Nitya came over and suggested 3D printing. Unfortunately, I had really wanted to gain some practice using the CNC mill and some of the details on my piece were designed with the CNC mill in mind (i.e., the little stars at the top and bottom), but I didn't have a way to quickly move forward with the CNC mill at the moment. I was able to edit a few parameters in Grasshopper in order to make the walls of my mold a bit thinner, and then export again as a stupid triangle list to import into Dremel tools.</p>

<p align="middle">
    <img class="report" src="img/dremel-3d-printed-mold-squared.png" width=700>
    <br><small><em>The first design for a 3D printed mold.</em></small></br>
</p>

<p>I stopped the first print after about 20 minutes to ensure that the layers were sticking together properly. It seemed like it did, but about an hour into the print, I realized that the layers were definitely not sticking. Per Irina's suggestions, I decided not to print the box, but instead print just the tile which I would later put in a cup at home. I also scaled down the print and raised the temperature of the nozzle to 235 deg C.</p>

<p align="middle">
    <img class="report" src="img/photo-first-test-print.jpg" width=700>
    <br><small><em>A partial print to test if the filament layers are sticking together properly.</em></small></br>
</p>

<p align="middle">
    <img class="report" src="img/photo-flakey-print.jpg" width=700>
    <br><small><em>What a flake. :'(</em></small></br>
</p>
<!-- <p align="middle">
    <img class="report" src="img/photo-flakey-print2.jpg" width=700>
    <br><small><em>Flakey 3D print.</em></small></br>
</p> -->
<p align="middle">
    <img class="report" src="img/photo-print-scaled-down.jpg" width=700>
    <br><small><em>Scaled down 3D print.</em></small></br>
</p>

Finally, I had a 3D printed tile I could use to create a mold with. I wasn't entirely happy with the print, as it was still a little flakey and a lot of the detail was lost, but I didn't have the time to wait for another print.

<h2>Creating a mold with Oomoo</h2>

<p>Since my 3D printed piece was a bit flakey, I slathered it in vaseline to fill the gaps and and coated it in bit of dry shampoo to ensure it doesn't bond to the silicone. I glued the piece down to the bottom of a paper cup with a glue stick, mixed the Oomoo, and slowly poured it in. About 10 minutes after pouring in the Oomoo, I realized I did not glue the piece down enough, as the 3D printed piece had floated to the top. I flipped over the 3d-printed piece and let it float face-down, thinking that I would need to redo it again, but I'll let this sit. At the very least, I got some experience using the Oomoo.</p>

<p align="middle">
    <img class="report" src="img/photo-sky.jpg" width=350>
    <img class="report" src="img/photo-oomoo.jpg" width=350>
    <br><small><em>Who wore it better? A partly cloudly sunset, or partially mixed Oomoo?</em></small></br>
</p>

<p align="middle">
    <img class="report" src="img/photo-mold.jpg" width=700>
    <br><small><em>A successful Oomoo mold!</em></small></br>
</p>

<p>But surprise! My Oomoo mold actually came out okay! It picked up on all the imperfections of my 3D printed mold, but it's usable!</p>


<h2>Casting with Plaster</h2>

<p>I bought Plaster of Paris since that was the type of plaster I heard about most often. I eyeballed the ratio according to the package, and went through a couple iterations before I was able to find the right technique. My first couple of casts were far too thick, and I had way overfilled the mold with the intention of sanding down the back. By the ~7th iteration, I found that a "heavy cream" texture what what you wanted for the plaster (kudos to Dawn for that descriptor).</p>

<!-- <p align="middle">
    <img class="report" src="img/photo-casting-with-mold.jpg" width=700>
    <br><small><em>Casting with the mold.</em></small></br>
</p> -->
<p align="middle">
    <img class="report" src="img/photo-casting-with-mold2.jpg" width=700>
    <br><small><em>Casting with the mold.</em></small></br>
</p>

<p align="middle">
    <img class="report" src="img/photo-dont-do-this.jpg" width=700>
    <br><small><em>WARNING: Apparently, you're not supposed to do this since plaster could burn you! I washed it off immediately after this photo. It's so creamy though!</em></small></br>
</p>

<p>While the Plaster of Paris supposedly takes a full 24 hours to cure, it hardened enough for me to remove in about 30 minutes, which meant I was able to cast all my pieces in a night and allow them all to sit for another day to cure. Apparently ,there's an exothermic reaction that occurs, though I never felt any heat, which was slightly disappointing. I wanted to see some chemistry!</p>

<p align="middle">
    <img class="report" src="img/photo-tile-casts.jpg" width=700>
    <br><small><em>A couple of tile casts!</em></small></br>
</p>

<h1>Results</h1>

<p>This project had a bunch of false starts and surprises, but the end result ended up okay! The plaster definitely picked up on all the imperfections of my flakey 3D print, but at least I was able to gain some experience working with plaster. Using a parametric design made it easy to quickly pivot from CNC milling to 3D printing, though I still hope to get some experience using the CNC mill later on. Working with the actual molding and casting wasn't as painful as I expected it to be!</p>

<p align="middle">
    <img class="report" src="img/photo-tile-detail.jpg" width=350>
    <img class="report" src="img/photo-tile-detail2.jpg" width=350>
    <br><small><em>A close-up of one of the better tiles.</em></small></br>
</p>

<p align="middle">
    <img class="report" src="img/photo-final-cat.jpg" width=700>
    <br><small><em>My cat being a cat and trying to knock over the final pieces.</em></small></br>
</p>

<p align="middle">
    <img class="report" src="img/photo-final-all.jpg" width=700>
    <br><small><em>The final cast pieces along with the mold and 3d printed piece.</em></small></br>
</p>


<h1>Source Files</h1>

<ul>
    <li><a href="/project-files/a6/cad/tile.gh">tile.gh</a> - Grasshopper definition for the tile designs.</li>
    <li><a href="/project-files/a6/cad/tile-box.gh">tile-box.gh</a> - Grasshopper definition for the mold of the molds.</li>
    <li><a href="/project-files/a6/cad/tile.3dm">tile.3dm</a> - Rhino file with tile and mold models.</li>
    <li><a href="/project-files/a6/cam/tile-box-combined.gcode">tile-box-combined.gcode</a> - Unused gcode with the CNC toolpath.</li>
    <li><a href="/project-files/a6/cam/tile-box-v3.btm">tile-box-v3.btm</a> - Unused Bantam setup</li>
    <li><a href="/project-files/a6/cad/tile-a-scaled-20190519.stl">tile-a-scaled-20190519.stl</a> - Stupid triangle list for the 3D print (further scaled by 75% in the final version.</li>
    <li><a href="https://github.com/dotj/hcde598/tree/master/a6" target="_blank">Folder with all related files.</a></li>
</ul>


<h1>Acknowledgments</h1>

<p>A huge thanks to Leo, Kimberly, Dawn, Christa, Nitya, and Irina for help and support on this project.</p>

<h1>References</h1>

<ul>
    <li>
        <a href="https://www.pinterest.com/pin/138063544814307918/">Tile Design found via Pinterest (Original source unknown :()</a>
    </li>
    <li>
        <a href="https://www.fireclaytile.com/blog/full/subtle-moroccan">Fireclay Tile - Modern Moroccan Simplicity</a>
    </li>
    <li>
        <a href="https://juxtamorph.com/the-plaster-faq-working-with-plaster/">The Plaster FAQ</a>
    </li>
    <li>
        <a href="https://mosaicmorocco.com/history-lesson-moroccan-tiles/">Mosaic Morocco - History of Moroccan Tiles</a>
    </li>
    <li>
        <a href="https://en.m.wikipedia.org/wiki/Zellige">Zellige on Wikipedia</a>
    </li>
    <li>
        <a href="https://en.m.wikipedia.org/wiki/Islamic_geometric_patterns">Islamic Geometric Patterns on Wikipedia</a>
    </li>
    <li>
        <a href="https://en.m.wikipedia.org/wiki/Tessellation">Tessellation on Wikipedia</a>
    </li>
</ul>
