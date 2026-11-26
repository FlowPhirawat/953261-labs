# 953261 Lab 2 — Kad Café (Modern JavaScript)

| | |
|---|---|
| **Name** | Phirawat Kanjananuchit |
| **Nickname** | Flow |
| **Student ID** | 692115033 |
| **Section** | 701 |

## How to run

```bash
cd lab02
npm run warmup   # Part B
npm test         # Part C
npm start        # Part D — the daily report
```

## My own function (Part D)

`cheapDrinks(menu, maxPrice)` returns the menu lines of available drinks that cost maxPrice or less, cheapest first. It uses `filter` to keep only available drinks under the price limit, `sort` to order them by price, and `map` to turn each item into a menu line with `menuLine`.

## What I learned today

## What I learned today

I use `map` when I want to change every item in an array into a new value, and I get a new array with the same length. I use `filter` when I want to keep only the items that match a condition, so the new array is shorter. I use `find` when I want the first item that matches, and I get one object (or `undefined` if nothing matches). I use `reduce` when I want to combine many values into one value, for example the total price of an order.

## AI-use statement

I used ChatGPT to guide me understand what to do after `npm start` worked and how to commit and push.
