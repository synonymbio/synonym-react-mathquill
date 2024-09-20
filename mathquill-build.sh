# MUST BE RUN IN THIS FOLDER

CWD=$(pwd)

cd ~/synonym/synonym-mathquill

make basic

echo "✅ Built MathQuill"

cd $CWD

cp ~/synonym/synonym-mathquill/build/mathquill-basic.* ./src/mathquill/
cp ~/synonym/synonym-mathquill/build/fonts/Symbola-basic.* ./src/mathquill/fonts/

echo "✅ Copied MathQuill to build folder"