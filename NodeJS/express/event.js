// Khai bao events module
var events = require('events');
// Tao mot doi tuong eventEmitter
var eventEmitter = new events.EventEmitter();

// Tao mot Event Handler nhu sau:
var connectHandler = function connected() {
   console.log('Tao ket noi thanh cong!');
  
   // Kich hoat su kien data_received 
   
}

// Gan ket su kien connection voi Event Handler
eventEmitter.on('connection', connectHandler);
 
// Gan ket su kien data_received voi mot ham an danh
eventEmitter.on('data_received', function(){
   console.log('Du lieu duoc tiep nhan thanh cong.');
});
eventEmitter.emit('data_received');


// Kich hoat su kien connection 
eventEmitter.emit('connection');

console.log("Ket thuc chuong trinh.");