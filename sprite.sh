svg-sprite --symbol images/vector/*.svg --log=debug
cp -r symbol/svg/*.svg images/sprite.svg
rm -rf symbol
