function Human() {
  this.name = 'John Dou';
  this.age = '20';
  this.sex = 'male';
  this.weight = '60';
}

var newHuman =  new Human();

function Worker() {
  this.placeOfWork = 'company';
  this.salary = '1000';
  this.work = function() {
    alert('Working');
  };
}

function Student() {
  this.placeOfStudy = 'college';
  this.grants = '100';
  this.watchTVShows = function() {
    alert('Watching TV shows');
  };
}

Worker.prototype = newHuman;
Student.prototype = newHuman;


var newWorker1 = new Worker();
var newWorker2 = new Worker();
var newWorker3 = new Worker();

var newStudent1 = new Student();
var newStudent2 = new Student();
var newStudent3 = new Student();

console.log('Возраст второго рабочего', newWorker2.age);
console.log('Вес третьего студента', newStudent3.weight);
