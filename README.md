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
    --as-primary-complementary: #C05B5D;
    --as-primary-analogous: #5B90C0;
    --as-primary-triadic: #C0BE5B;
    --as-primary-dim: #5bc0bea0;
    --as-secondary: #1C2734;
    --as-secondary-dim: #1C2734a0;


### Add theme switch
```
    import { ThemeSwitch } from "@anspar/anspar-theme";

    export default App(){
        return (
            <ThemeSwitch style={...} className="..."/>
        )
    }
```

### [Examples](https://anspar.github.io/anspar-theme)

### Ask question at [Discord](https://discord.gg/ENQfPEcrZJ)

[anspar.io](https://anspar.io)