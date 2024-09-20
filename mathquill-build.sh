# MUST BE RUN IN THIS FOLDER

CWD=$(pwd)

cd ~/synonym/synonym-mathquill

make basic

echo "✅ Built MathQuill"

cd $CWD

mkdir -p build
mkdir -p build/fonts

cp ~/synonym/synonym-mathquill/build/mathquill-basic.* build/
cp ~/synonym/synonym-mathquill/build/fonts/Symbola-basic.* build/fonts/

echo "✅ Copied MathQuill to build folder"