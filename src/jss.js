const myFunc = (callbackFunc) => {
    let value = 100;
    callbackFunc(value);
};
myFunc(value => {
    alert(value);
});
let people = ['Samer Saida','Omar Assi','Fares Halahlih'];
const logPerson = (person, index) => console.log(person, index);
people.forEach(logPerson); 