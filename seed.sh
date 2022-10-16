#!/usr/bin/env bash



id=2
product=$(jo id="$id" name="first product $(date --rfc-3339=s)")

echo $product

dy put product "product$id" --item "$product"
