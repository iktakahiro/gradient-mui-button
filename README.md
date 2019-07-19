# Gradient Material-UI Button

[![Netlify Status](https://api.netlify.com/api/v1/badges/e495af5b-3d7a-46be-a83e-f4e87e75cf6c/deploy-status)](https://app.netlify.com/sites/gradient-mui-button/deploys)

This package provides modern gradient colors button components based on [Material-UI](https://material-ui.com/).

!['buttons-with-default-theme'](./docs/buttons-1.png)

!['buttons-with-default-theme'](./docs/buttons-2.png)

## Install

```bash
npm i '@iktakahiro/material-gradient-button'

yarn add '@iktakahiro/material-gradient-button'
```

## Usage

```tsx
import { ContainedButton } from 'material-gradient-button'

const MyComponent = () => {
    return (
    <div>
        <ContainedButton color="primary">Primary</ContainedButton>
        <ContainedButton color="secondary">Secondary</ContainedButton>
        <ContainedButton>Default</ContainedButton>
        <ContainedButton color="primary" disabled={true}>Disabled</ContainedButton>
    </div>
    )
}
```
