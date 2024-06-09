## find - 360, 3600, 16200 files, dupe, rename, open

## likely a dumb way of doing this, but was the first I found to work
## -n flag will not overwrite if already exists
find . -name 'hsb_rainbow-361x10-360.png' -exec bash -c '
	for file; do
		f=${file#./}
		cp -n "$file" "./${f//hsb_rainbow-361x10-360.png//hsb_rainbow-361x10-360-trim.png}"
	done' _ {} +

find . -name 'hsb_rainbow-361x10-3600.png' -exec bash -c '
	for file; do
		f=${file#./}
		cp -n "$file" "./${f//hsb_rainbow-361x10-3600.png//hsb_rainbow-361x10-3600-trim.png}"
	done' _ {} +

find . -name 'hsb_rainbow-361x10-16200.png' -exec bash -c '
	for file; do
		f=${file#./}
		cp -n "$file" "./${f//hsb_rainbow-361x10-16200.png//hsb_rainbow-361x10-16200-trim.png}"
	done' _ {} +

## Commands for opening key files for trimming
# find . -iname "hsb_rainbow-361x10-360-trim.png" -exec open {} ";"
# find . -iname "hsb_rainbow-361x10-3600-trim.png" -exec open {} ";"
# find . -iname "hsb_rainbow-361x10-16200-trim.png" -exec open {} ";"

## Commands for deleting key temp files
# find . -iname "hsb_rainbow-361x10-360 copy.png" -delete
# find . -iname "hsb_rainbow-361x10-3600 copy.png" -delete
# find . -iname "hsb_rainbow-361x10-16200 copy.png" -delete
