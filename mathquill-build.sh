# MUST BE RUN IN THIS FOLDER

CWD=$(pwd)

cd ~/synonym/synonym-mathquill

make basic

echo "✅ Built MathQuill"

cd $CWD

mkdir -p build
mkdir -p mathquill/fonts

cp ~/synonym/synonym-mathquill/build/mathquill-basic.* mathquill/
cp ~/synonym/synonym-mathquill/build/fonts/Symbola-basic.* mathquill/fonts/

echo "✅ Copied MathQuill to build folder"