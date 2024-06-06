#
# Rotating Images in ImageMagick
# to see what each interpolation & filter does
# sorts into folders with same filenames
# (to make After Effects sequence swaps easy)
#

# file to rotate needs to be in same folder as shell script
# then `sh rotations-imagemagick.sh` to run

file_name=hsb_rainbow-361x10
rot=1

# for interpolate in Background Bilinear Blend Catrom Integer Mesh Nearest Spline
for interpolate in Average Average4 Average9 Average16
# for interpolate in Average
do

   for filter in Bartlett Blackman Bohman Box Catrom Cosine Cubic Gaussian Hamming Hann Hermite Jinc Kaiser Lagrange Lanczos Lanczos2 Lanczos2Sharp LanczosRadius LanczosSharp Mitchell Parzen Point Quadratic Robidoux RobidouxSharp Sinc SincFast Spline CubicSpline Triangle Welch
   # for filter in Bartlett
   do

      mkdir -p "$interpolate"/"$filter"

      next_file="$interpolate"/"$filter"/"$file_name"-1.png
      magick "$file_name".png -gravity center -background none -interpolate "$interpolate" -filter "$filter" -rotate "$rot" "$next_file"
      magick mogrify -trim "$next_file"

      for i in {1..359}
      do

         start_file="$interpolate"/"$filter"/"$file_name"-"$i".png
         (( j=$i+1 ))
         next_file="$interpolate"/"$filter"/"$file_name"-"$j".png
         magick "$start_file" -gravity center -background none -interpolate "$interpolate" -filter "$filter" -rotate "$rot" "$next_file"
         magick mogrify -trim "$next_file"

         # because the Average interpolations don’t keep full transparency in background, we need to crop
         if (( $interpolate==Average || $interpolate==Average4 || $interpolate==Average9 || $interpolate==Average16 )); then
            magick mogrify +repage -gravity center -crop 501x500+0+0 "$next_file"
         fi

         if (( $i%30==1 )); then
            echo $interpolate : $filter : $i
         fi

      # end degrees loop
      done

   # end filters loop
   done

# end interpolations loop
done
