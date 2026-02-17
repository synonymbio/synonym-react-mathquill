# MUST BE RUN IN THIS FOLDER

CWD=$(pwd)

cd ~/roebling/synonym-base-mathquill

make basic

echo "✅ Built MathQuill"

cd $CWD

cp ~/roebling/synonym-base-mathquill/build/mathquill-basic.* ./src/mathquill/
cp ~/roebling/synonym-base-mathquill/build/fonts/Symbola-basic.* ./src/mathquill/fonts/

echo "✅ Copied MathQuill source to build folder (src/mathquill/)"
