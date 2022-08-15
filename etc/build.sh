rimraf dist

tsc --project tsconfig.json && tscpaths -p tsconfig.json -s ./ -o ./dist

cp package.json dist/