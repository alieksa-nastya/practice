// const NOTIFICATION_DELAY = 3000;
// let timeoutId = null;
// const notification = document.querySelector('.js-alert');

// setTimeout(showNotification, NOTIFICATION_DELAY)

// notification.addEventListener('click', () => {
//     hideNotification();
//     clearInterval(timeoutId);
// });

// function showNotification() {
//     notification.classList.add('is-visible');
//     timeoutId = setTimeout(hideNotification, 4000);
// }
// function hideNotification() {
//     notification.classList.remove('is-visible');
// }

// лічильник
// const initTime = Date.now();

// setInterval(() => {
//     const current = Date.now();
//     const diff = current - initTime;
//     console.log(diff);
// }, 1000);


//!----------------
// const date = new Date();
// const diff = date.getHours() - date.getUTCHours();
// console.log(diff);

//!==================написати таймер,який буде запускати 
//!і зупиняти відлік часу

// const refs = {
//     startBtn: document.querySelector('[data-action-start]'),
//     stopBtn: document.querySelector('[data-action-stop]'),
//     clockface: document.querySelector(".clockface")
// }

// const timer = {
//     intervalId: null,
//     initTime: null,

//     start() {
//         console.log('START');
//         // this.initTime = Date.now();
//         this.initTime = new Date('04.02.2025');
//         this.intervalId = setInterval(() => {
//             this.tick();
//         }, 1000)

//         refs.startBtn.disabled = true;
//         refs.startBtn.disables = false;
//     },

//     stop() {
//         console.log('STOP');
//         refs.stopBtn.disabled = false;
//         refs.stopBtn.disables = true;

//         clearInterval(this.intervalId);
//     },

//     tick() {
//         const currentTime = Date.now();
//         // const ms = currentTime - this.initTime;
//         const ms = this.initTime - currentTime;
        
//         const time = getTimeComponents(ms);
//         const str = timeToStr(time);
//         refs.clockface.textContent = str;

//         if (ms < 1000) {
//             this.stop();
//         }
//     },
// };

// refs.startBtn.addEventListener('click', () => {
//     timer.start();
// });
// refs.stopBtn.addEventListener('click', () => {
//     timer.stop();
// });

// function msToTime(s) {
//   var ms = s % 1000;
//   s = (s - ms) / 1000;
//   var secs = s % 60;
//   s = (s - secs) / 60;
//   var mins = s % 60;
//   var hrs = (s - mins) / 60;

//   return hrs + ':' + mins + ':' + secs;
// };

// function getTimeComponents(time) {
//     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     const secs = Math.floor((time % (1000 * 60)) / 1000);

//     return { hours, mins, secs };
// }

// function timeToStr({ hours, mins, secs }) {
//     hours = hours.toString().padStart(2, '0');
//     mins = mins.toString().padStart(2, '0');
//     secs = secs.toString().padStart(2, '0')
//     return `${hours}:${mins}:${secs}`;
// }


//!+++++++++promises 
// const x = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('Waiting for you');
//         reject({
//             name: 'Nastya',
//             message: 'Sorry',
//         });
//     }, 5000)
// });

// setTimeout(() => {
//     console.log(x);
// }, 6000)


// function onFulfilled() {
//     console.log('Time to eat');
// }

// function onRejected() {
//     console.log('I will be hungry')
// }

// x.then(onFulfilled).catch(onRejected);

// x.then(data => {
//     const value = data.json();
//     return value;
// }).then(value => {
//     console.log(value);
//     const title = value.title;
//     return title;
// }).then(value => {
//     document.body.textContent = title;
// })

//!!!===================

function createPromise(value, delay) {
    const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve(value);
        }, delay)
    });
    return promise;
};


const p1 = createPromise('Hello1', 4000, true);
const p2 = createPromise('Hello2', 2000, false);
const p3 = createPromise('Hello3', 5000, true);
const p4 = createPromise('Hello4', 1000, true);
const p5 = createPromise('Hello5', 3000, true);

// p1.then(data => {
//     console.log(data);
// });

// p2.then(data => {
//     console.log(data);
// })

const promises = [p1, p2, p3, p4, p5];

const result = Promise.allSettled(promises);
result.then(data => { console.log(data) });

Promise.race
Promise.allSettled

//!!!!!!!!!===========================

// const x = Promise.resolve('Hello');
// const y = Promise.reject('Bye');

// const promise = createPromise(5, 20, true);

// promise
//     .then(value => {
//     console.log(value);
//     if (value % 2 !== 0) {
//         return Promise.reject('Sorry');
//     }
//     })
//     .catch(error => {
//         console.log(error);
// })

//!!!!!===============
