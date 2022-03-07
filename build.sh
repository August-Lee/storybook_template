echo Storybook Build Start...

cd storybook-react 
cnpm install
npm run build-storybook

cd ../storybook-vue 
cnpm install
npm run build-storybook

cd ../storybook-vue3
cnpm install
npm run build-storybook

echo Storybook Build Success!!!
