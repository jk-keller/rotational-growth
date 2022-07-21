# Rotational Growth Photoshop Script

## How did this, become this, become that?

![rainbow gradient start](zzz--example_images/hsb_366x2_rainbow-start.png)

![rainbow gradient rotated 2 degrees, 360 times (2 revolutions) using bicubicSharper interpolation](zzz--example_images/hsb_366x2_rainbow-2deg-2rev-bicubicSharper.png)

![rrainbow gradient rotated 2 degrees, 10800 times (60 revolutions) using bicubicSharper interpolation](zzz--example_images/hsb_366x2_rainbow-2deg-60rev-bicubicSharper.png)


Did you know that if you repeatedly rotate an image in Photoshop, it eventually breaks down and may produce something similar to a differential growth alogrithm?

---

## How to

This only works in Photoshop (though I’ll add any other language / app variations I can verify).

It’s generally good to have a canvas that’s bigger than the image you want to alter, but you can always change that later too. You’ll also probably want to save the file as `Large Document Format` (.psb) before you begin as the file size gets real big, real fast.

- Select a layer to apply the script to.
- Go to `File` menu, choose `Scripts`, then `Browse…` and select the file you downloaded from here
- You will be prompted to input the settings you would like to use:
    - Number of degrees of rotation `-360 — 360`. Integer or decimal
    - Number of revolutions `2 – 300+ (be sane tho)`. Integers only
    - Interpolation method. One of the four text choices
- Sit back and wait 🍸

---

## Examples of settings:

### Interpolation (60 revolutions):

**bicubic**
![bicubic 60 revolutions](zzz--example_images/bicubic.png)

**bicubicSharper**
![bicubicSharper 60 revolutions](zzz--example_images/bicubicsharper.png)
the best IMHO

**bicubicSmoother**
![bicubicSmoother 60 revolutions](zzz--example_images/bicubicsmoother.png)

**nearestNeighbor**
![nearestNeighbor 60 revolutions](zzz--example_images/nearestneighbor.png)

### Degrees:

**bicubic**
![bicubic 60 revolutions](zzz--example_images/bicubic.png)

---

###Possible Titles:

- Rotating into Oblivion, Rotating Images into Oblivion
- Growtations, Growthations, Grothations

---

by [JK Keller](https://jk-keller.com), dilettante 🔮 coder, use at your own risk 🕳

https://jk-keller.com/o__o/rotational_growth
