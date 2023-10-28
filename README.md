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
    npm install -D tailwindcss
```

2. Create tailwind config file
```
    npx tailwindcss init
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