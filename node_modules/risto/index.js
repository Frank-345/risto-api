var orders = [
  {
    name : 'pippo',
    status : 'closed',
    dishes : ['queso', 'banderillas'],
    bill : 49,
    id : 1
  },
  {
    name : 'caio',
    status : 'ready',
    dishes : ['nachos', 'fajita'],
    bill : 29,
    id : 2
  },
  {
    name : 'sempronio',
    status : 'new',
    dishes : ['nachos', 'chili'],
    bill : 69,
    id : 3
  }

]
var odersBackup = [];

clone = function(obj){
  return JSON.parse(JSON.stringify(obj));
}

ordersBackup = clone(orders);

exports.getOrders = function() {
  return orders;
}

exports.getOrderByStatus = function(status) {
  var res = [];
  for (var i = 0; i < orders.length; i++) {
    if (status==orders[i].status) {
      res.push(orders[i]);
    }
  }
  return res;
}

exports.addOrder = function(dishes,bill, token){
  orders.push({
    name : token,
    status : 'new',
    dishes : dishes,
    bill : bill,
    id : orders[orders.length-1].id+1
  })

  return orders[orders.length-1];
}

exports.deleteOrder = function(id){
  for (var i = 0; i < orders.length; i++) {
    if (id==orders[i].id) {
      var orderDeleted = orders[i]
      orders.splice(i,1);
      return orderDeleted;
    }
  }
}

exports.setOrder = function(id, status){
  var orderToModify = [];
  for (var i = 0; i < orders.length; i++) {
    if (id==orders[i].id && status!==undefined) {
        orders[i].status = status;
        orderToModify.push(orders[i]);
    }
  }
  return orderToModify;
}

  exports.reset = function(){
    orders = clone(ordersBackup);

    return orders;
  }

  exports.getOrderByToken = function(token){
    var res = [];
    for  (var i in orders) {
      if (token==orders[i].name) {
        res.push(orders[i]);
      }
    }
    return res;
  }

  exports.profit = function(){
    var res =0;
    for (var i = 0; i < orders.length; i++) {
      res += orders[i].bill;
    }
    return res;
  }
