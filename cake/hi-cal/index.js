let data = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
];

let getTimesUsed = model => {

    let coveredTimes = [];

    for (let i = model.startTime; i < model.endTime; i++) {
        coveredTimes.push(i);
    }

    return coveredTimes;
}

let usedTimes = {}

data.forEach(x => {
    let times = getTimesUsed(x);
    times.forEach(y => {
        usedTimes[y] = 0;
    })
});

//let result = data.map(x => getTimesUsed(x));

console.log(result);

//times are sorted
//if end time of second time is > than start time of first then use start time of first
//and end of second 
//if start of second time is > greater than end of first then we can merge them
