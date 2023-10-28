# LMS frontend

### Setup instruction

1. Clone the Project

``` 
    git clone
```

2. Move into the directory

```
    cd LMS-frontend
```

3. install dependencies

```
    npm install
```

4. Run the server

```
    npm run dev
```

### Setup instruction for tailwind
[TailWind official instruction doc](https://tailwindcss.com/docs/installation)

1. Install tailwindcss

```
    npm install -D tailwindcss postcss autoprefixer
```

2. Create tailwind config file
```
    npx tailwindcss init -p
```

3. Add file extensions yo tailwind config file in the contents property

```
   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
```

4. Add the twilwind directives at the top of `index.css` file

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

### Adding plugins and dependencies
```
    npm i @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui@latest axios react-hot-toast @tailwindcss/line-clamp
```

### configure auto import sort eslint

1. Install simple import sort

```
    npm i -D eslint-plugin-simple-import-sort
```

2. Add rule in `.eslint.cjs`

```
    'simple-import-sort/imports': 'error'
```

3. add simple import sort plugin in `.eslint.cjs`

```
    'simple-import-sort'
```

4. To enable auto imort sort file save in vscode
    - Open `settings.json` in settings
    - add following config:
    ```
    "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
    }
    ```