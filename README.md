# newcalendar

[StyledComponents information](https://habr.com/ru/articles/591381/)

[video](https://www.youtube.com/watch?v=Elpu7CIuqjY&list=PLC3y8-rFHvwiWPS2RO3BKotLRfgg_8WEo)
6 | 0:0
```
react + webpack config

create .gitignore
create build and src
yarn init
create src/index.html
yarn add react react-dom
yarn add -D typescript @types/react @types/react-dom
create tsconfig.json
yarn add -D @babel/core babel/preset-env @babel/preset-react @babel/preset-typescript
yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin
yarn add -D babel-loader
yarn add -D @babel/plugin-transform-runtime
___ 1 step
yarn add -D css-loader style-loader sass sass-loader 
update webpack.config
yarn add -D webpack-merge

yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh конфигурация на случай ,
 если хотим более детального обновления компонент

yarn add -D eslint
yarn add -D eslint-plugin-react eslint-plugin-react-hooks
yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
create .eslintrc.js config
yarn add -D eslint-plugin-import eslint-plugin-jsx-a11y
yarn add -D eslint-plugin-eslint-comments@latest ???
_____
hooks
useState
useEffect
useRef //useRef посчитал кол-во рендеров, сделал ссылку на дом элемент,
        получил фокус, получил предыдущее состояние
useMemo  //закешировал некоторые значения чтобы отвязать их от рендера 
..можто сказать аналог shouldComponentUpdate
useCallback
```
//     devtool: "cheap-module-source-map", прочитать в свободное время

https://ru.react.js.org/docs/react-component.html#shouldcomponentupdate
