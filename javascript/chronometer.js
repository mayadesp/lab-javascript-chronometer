class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=0;
    // ... your code goes here
  }

  startClick(callback) {
    this.intervalId = setInterval(()=>{
      this.currentTime+=1;
      callback();
    },1000)
    // ... your code goes here
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60
  }

  twoDigitsNumber(n) {
    // ... your code goes here
     n=n.toString();    

    if(n.length<2){
          return "0"+ n;
        }else{
          return n
        }
      }       


  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  resetClick() {
    // ... your code goes here
    this.currentTime=0
    this.stopClick();
  }

  splitClick(a,b) {
    // ... your code goes here
    const min = this.twoDigitsNumber(this.getMinutes())
    const sec = this.twoDigitsNumber(this.getSeconds())
    return `${min}:${sec}`
  }
}