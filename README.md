# Anspar Theme 

![release](https://github.com/anspar/anspar-theme/actions/workflows/release.yml/badge.svg?branch=main)

### Use styles
```
    import "@anspar/anspar-theme/styles.css";
```
### Available Classes
`as-btn-primary` | `as-btn-secondary` | `as-bg-light` | `as-bg-dark` | `as-text-light` | `as-text-dark` | `as-shadow` | `as-loading` | `as-pointer`  & many more

Check [css](src/css) folder for full list

### Available Colors
    --as-dark: #1c2541;
    --as-dark-dim: #3a506b1a;
    --as-light: #fffffff9;
    --as-light-dim: #ffffffa0;
    --as-success: #a1c181;
    --as-danger: #de3f4f;
    --as-warning: #fcca46;
    --as-primary: #5bc0be;
    --as-secondary: #3a506b;


### Add theme switch
```
    import { ThemeSwitch } from "@anspar/anspar-theme";

    export default App(){
        return (
            <ThemeSwitch />
            ...
            OR
            <ThemeSwitch size="150px"/>
        )
    }
```

## [Examples](https://anspar.github.io/anspar-theme)

## Ask question at [Discord](https://discord.gg/ENQfPEcrZJ)

[anspar.io](https://anspar.io)