# React Food Order App

## Overview

I built an app that allows users to be add itmes to a cart.

- Using React hook useState and useContext
- Reusing components
- Using CSS modules
- Used Portals to render modal outside the DOM

- `Assets` folder includes useful info such as Component Tree.

## Tech Stack

**FrontEnd:** React/JS/CSS

## ✨ Deployed Site ✨

https://react-basics-101-app.netlify.app/

## App Demo

- A talk-through of my solution

## Leanring Points
- This did not show image:
 ```<img src="../../Images/shopping-cart.png" width={'50px'} height={'50px'} alt='cart-icon'></img>```
This works:
```import shoppingCartImage from '../../Images/shopping-cart.png';```
```<img src={shoppingCartImage} width={'50px'} height={'50px'} alt='cart-icon'></img>```
Need to add height and width to div in order to see image.

## Future Goals
- Modal component could have components inside as its got a lot of code making it hard to read. 
- The order button could have some functionality implemented

## Run Locally

Clone the project

```bash
  git clone https://github.com/faseehahmed1/Food-order-app.git
```

Install dependencies

```bash
  npm install
```

Start the server 

```bash
  npm start
```
