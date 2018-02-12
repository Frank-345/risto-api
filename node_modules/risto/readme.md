# Order restaurant simulator

> a simple package with functions to manage orders of a restaurant

## Install
```console
$ npm install risto
```

## Usage
```js
var orders = require('risto');
```

Get all the orders from your array with `getOrders()`.

```js
orders.getOrders();
```
Get an order by status with `getOrderByStatus(status)`.

```js
orders.getOrderByStatus(status);
```
Add a new order with `addOrder(dishes, bill)`. The package will automatically assign an id and name through your token to the new order.

```js
orders.addOrder(dishes, bill);
```
Delete an order by id with `deleteOrder(id)`.

```js
orders.deleteOrder(id);
```

Modify status with `setOrder(id, status)`.

```js
orders.setOrder(id, status);
```

Get all the orders by an user through his token `getOrderByToken(token)` .

```js
orders.getOrderByToken(token);
```

Reset original orders array with `reset()`.

```js
orders.reset();
```
