

let obj = {
    name: 'Dimka',
    protocol: 'https',
    maxValue: 10,
    isOnline: true,
    student: ['Roma', 'Lesya', 'Kira'],
    classRoom: {
        teatcher: {
            name: 'Oleg',
            age: 35
        }
    }
}
let obj1 = {
    ...obj,
    student:  obj.student.map(el => el),
    classRoom: {
        ...obj.classRoom,
        teatcher: {...obj.classRoom.teatcher}
    }
}

let obj3 = {...obj}
// console.log(obj === obj3)

let obj4 = JSON.stringify(obj)
let obj5 = JSON.parse(obj4)
// console.log(obj5 === obj);

obj5.student[0] = 'DIMON'
obj5.classRoom.teatcher.age = 45

console.log(obj5.classRoom.teatcher.age);
console.log(obj.classRoom.teatcher.age);
console.log(obj5.student[0]);
console.log(obj.student[0]);
