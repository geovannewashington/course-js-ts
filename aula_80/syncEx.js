//Synchronous code:
/*
1. Executes one line at a time, in order.
2. Each operation must complete before the next one starts
3. if a line of code takes a long time to complete (e.g., a network request)
it blocks the executions of the code that follows
*/

function syncTask() {
    console.log('start');
    //simulate a long-running task
    for (let i = 0; i < 2e9; i++) {}
    console.log('end');
}

syncTask();
console.log('This message will wait until syncTask completes');