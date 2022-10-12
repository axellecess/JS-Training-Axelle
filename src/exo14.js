export function Observable(action) {
  this.observers = [];
  action({
    next: (value) => {
      //TODO: notify subscribers of a new value emitted
      this.observers.forEach((obs) => obs.next(value));
    },
    complete: () => {
      //TODO: notify subscribers of completion
      this.observers.forEach((obs) => obs.complete());
    }
  });
}

Observable.prototype.subscribe = function (subscriber) {
  //TODO: register the subscriber
  if (!this.observers.includes(subscriber)) {
    this.observers.push(subscriber);
  }
  subscriber.unsubscribe = () => {
    this.observers = this.observers.filter((o) => o !== subscriber);
  };
  return subscriber;
};

/* wont work 
Observable.prototype.unsubscribe = function (subscriber) {
  //TODO: unregister the subscriber
  this.observers = this.observers.filter((o) => o !== subscriber);
  return subscriber;
};*/

/* usage example: */
/*
const Lottery = new Observable(function draw({ next, complete }) {
  setTimeout(() => {
    next(28)
    next(16)
    next(36)
    next(42)
    complete()
  }, timeBeforeLotteryDraw)
})

let michel = Lottery.subscribe({
  next(number){
    if(michel.numbers.includes(number)) michel.correctNumbers++;
  },
  complete(){
    alert(`Michel had ${michel.correctNumbers} correct numbers !`)
  }
})

michel.numbers = [7, 13, 36, 49]
michel.correctNumbers = 0
if(michel.turnsOffTV) michel.unsubscribe()
*/
