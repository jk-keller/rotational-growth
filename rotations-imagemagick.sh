#
# Rotating Images in ImageMagick
# to see what each interpolation & filter does
# sorts into folders with same filenames
# (to make After Effects sequence swaps easy)
#

# file to rotate needs to be in same folder as shell script
# then `sh rotations-imagemagick.sh` to run

# for interpolate in Background Bilinear Blend Catrom Integer Mesh Nearest Spline
for interpolate in Integer Mesh Nearest Spline
# for interpolate in Average Average4 Average9 Average16
# for interpolate in Integer
do

	# for filter in Bartlett Blackman Bohman Box Catrom Cosine Cubic Gaussian Hamming Hann Hermite Jinc Kaiser Lagrange Lanczos Lanczos2 Lanczos2Sharp LanczosRadius LanczosSharp Mitchell Parzen Point Quadratic Robidoux RobidouxSharp Sinc SincFast Spline CubicSpline Triangle Welch
	for filter in Bartlett Blackman Bohman Catrom Cosine Cubic Gaussian Hamming Hann Hermite Jinc Kaiser Lagrange Lanczos Lanczos2 Lanczos2Sharp LanczosRadius LanczosSharp Mitchell Parzen Point Quadratic Robidoux RobidouxSharp Spline CubicSpline Triangle Welch
	# for filter in Sinc SincFast Box
	# for filter in Catrom
	do

		file_name=hsb_rainbow-361x10
		ang=5
		# if (( $filter==Sinc || $filter==SincFast )); then
		# 	revs=10
		# else
			revs=45
		# fi
		c_deg=0

		mkdir -p "$interpolate"/"$filter"
		# how many revolutions?
		for r in $(seq 1 $revs)
		# for i in {1..360}
		do

			# how many steps based on rotation amount?
			(( z=360/$ang ))
			for s in $(seq 1 $z)
			do
				if (( $s==1 )); then
					echo $interpolate : $filter : $r
				fi

				# for first revolution
				if (( $r==1 )); then
					(( s_deg=($r-1)*360 + ($s-1)*$ang ))
					(( e_deg=($r-1)*360 + ($s)*$ang ))
# echo start deg $s_deg : end deg $e_deg : rev $r : step $s

					# for first time running
					if (( $s==1 )); then
						start_file="$file_name".png
					else
						start_file="$interpolate"/"$filter"/"$file_name"-"$s_deg".png
					fi
					next_file="$interpolate"/"$filter"/"$file_name"-"$e_deg".png
					magick "$start_file" -gravity center -background none -interpolate "$interpolate" -filter "$filter" -rotate "$ang" "$next_file"
# echo start file $start_file : end file $next_file : rev $r : step $s : angle $ang
					if (( $s==$z )); then
						start_file=$next_file
					fi
				# for rest of revolutions
				else
					if (( $s==1 )); then
						(( t_deg=($r)*360 ))
						next_file="$interpolate"/"$filter"/"$file_name"-"$t_deg".png
						magick "$start_file" -gravity center -background none -interpolate "$interpolate" -filter "$filter" -rotate "$ang" "$next_file"
# echo start file $start_file : end file $next_file : rev $r : step $s : angle $ang
					else
						magick mogrify -gravity center -background none -interpolate "$interpolate" -filter "$filter" -rotate "$ang" "$next_file"
# echo start file $start_file : end file $next_file : rev $r : step $s : angle $ang
					fi
					if (( $s==$z )); then
						start_file=$next_file
					fi
				fi

				# magick mogrify -trim "$next_file"
				# maybe trim is too restrictive...

				# WHY DOESNT THIS WORK?!?!?
				# SAVE VARIABLE AS VARIABLE?!?
				# (( t_filter = "$filter" ))
				# if (( $t_filter==Sinc || $t_filter==SincFast )); then
				# 	(( t_size=500+$r*360 ))
				# 	magick mogrify +repage -gravity center -crop "$t_size"x"$t_size"+0+0 "$next_file"
				# elif (( $t_filter==Box )); then
				# 	(( t_size=500+$r*50 ))
				# 	magick mogrify +repage -gravity center -crop "$t_size"x"$t_size"+0+0 "$next_file"
				# else
					magick mogrify +repage -gravity center -crop 1024x1024+0+0 "$next_file"
				# fi

				# because the Average interpolations don’t keep full transparency in background, we need to crop
				# if (( $interpolate==Average || $interpolate==Average4 || $interpolate==Average9 || $interpolate==Average16 )); then
				#    magick mogrify +repage -gravity center -crop 501x500+0+0 "$next_file"
				# fi

			# end steps loop
			done

		# end iterations loop
		done

	# end filters loop
	done

# end interpolations loop
done
