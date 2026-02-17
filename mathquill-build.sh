# MUST BE RUN IN THIS FOLDER

CWD=$(pwd)

cd ~/roebling/roebling-base-mathquill

make basic

echo "✅ Built MathQuill"

cd $CWD

cp ~/roebling/roebling-base-mathquill/build/mathquill-basic.* ./src/mathquill/
cp ~/roebling/roebling-base-mathquill/build/fonts/Symbola-basic.* ./src/mathquill/fonts/

echo "✅ Copied MathQuill source to build folder (src/mathquill/)"
