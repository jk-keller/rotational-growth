# Rotational Growth Photoshop Script

## How did this, become this, become that?

Did you know that if you repeatedly rotate an image in Photoshop (likely any app / framework with same interpolation algorithms), it eventually breaks down and may produce something similar to a differential growth alogrithm?

> ***The start:** HSB gradient (hue = 0–360, s = 100, b = 100), 361 × 2 px*
> 
> ![rainbow gradient start](zzz--example_images/hsb_366x2_rainbow-start.png)

> ***And then:** the above image rotated by 2 degrees, 360 times (a.k.a 2 full revolutions)*
> 
> ![rainbow gradient rotated 2 degrees, 360 times (2 revolutions) using bicubicSharper interpolation](zzz--example_images/hsb_366x2_rainbow-2deg-2rev-bicubicsharper.png)

> ***But THEN:** the start image rotated by 2 degrees, 10800 times (a.k.a 60 full revolutions)*
> 
> ![rainbow gradient rotated 2 degrees, 10800 times (60 revolutions) using bicubicSharper interpolation](zzz--example_images/hsb_366x2_rainbow-2deg-60rev-bicubicsharper.png)

It may be hard to believe, but the ***only*** thing I did was rotate the first image thousands of times. See it as an animation: YOUTUBE link.

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

### Interpolation (2 degrees by 2 & 60 revolutions):

> **bicubic**
>
> ![rainbow gradient rotated 2 degrees, 720 times (2 revolutions) using bicubic interpolation](zzz--example_images/hsb_366x2_rainbow-2deg-2rev-bicubic.png)
>
> ![rainbow gradient rotated 2 degrees, 10800 times (60 revolutions) using bicubic interpolation](zzz--example_images/hsb_366x2_rainbow-2deg-60rev-bicubic.png)

> **bicubicSharper**
>
> ![rainbow gradient rotated 2 degrees, 720 times (2 revolutions) using bicubicSharper interpolation](zzz--example_images/hsb_366x2_rainbow-2deg-2rev-bicubicsharper.png)
>
> ![rainbow gradient rotated 2 degrees, 10800 times (60 revolutions) using bicubicSharper interpolation](zzz--example_images/hsb_366x2_rainbow-2deg-60rev-bicubicsharper.png)
>
> the best IMHO

> **bicubicSmoother**
>
> ![rainbow gradient rotated 2 degrees, 720 times (2 revolutions) using bicubicSmoother interpolation](zzz--example_images/hsb_366x2_rainbow-2deg-2rev-bicubicsmoother.png)
>
> ![rainbow gradient rotated 2 degrees, 10800 times (60 revolutions) using bicubicSmoother interpolation](zzz--example_images/hsb_366x2_rainbow-2deg-60rev-bicubicsmoother.png)

> **nearestNeighbor**
>
> ![rainbow gradient rotated 2 degrees, 720 times (2 revolutions) using nearestNeighbor interpolation](zzz--example_images/hsb_366x2_rainbow-2deg-2rev-nearestneighbor.png)
>
> ![rainbow gradient rotated 2 degrees, 10800 times (60 revolutions) using nearestNeighbor interpolation](zzz--example_images/hsb_366x2_rainbow-2deg-60rev-nearestneighbor.png)

### Degrees (by 60 revolutions):

> **2 degrees**
>
> ![rainbow gradient rotated 2 degrees, 10800 times (60 revolutions) using bicubicSharper interpolation](zzz--example_images/hsb_366x2_rainbow-2deg-60rev-bicubicsharper.png)

---

### Caveats:

- Rotating by 0 (obvs), (-)90, (-)180, (-)270, or (-)360 will produce no real results
- a single pixel, or very small amounts of pixels may not produce any real results
- same for very tiny degrees of rotation (e.g. .001)
- small degrees of rotation will take forever, as will large numbers of revolutions

### Possible Titles:

- Rotating into Oblivion, Rotating Images into Oblivion
- Growtations, Growthations, Grothations
- Big Bang, like the expansion of the universe if you just stir it up.

### Related / Research / etc.:

- Differential Growth links
- Emergent behavior

---

by [JK Keller](https://jk-keller.com), dilettante 🔮 coder, use at your own risk 🕳

https://jk-keller.com/o__o/rotational_growth
