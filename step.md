npm init -y

npm install typescript @types/node -D

npx tsc --init

npm install tsx -D
npm i fastify

<!--  -->

"dev": "tsx watch src/server.ts"

<!-- Configura dist -->

// tsconfig.build.json
{
"extends": "./tsconfig.json",
"compilerOptions": {
"outDir": "dist"
}
}

<!-- Configura scripts -->

// tsconfig.json
"scripts": {
"dev": "tsx watch src/server.ts",
"start": "node dist/server.js",
"build": "tsc --project tsconfig.build.json"
},

<!--  -->

<!--  -->
