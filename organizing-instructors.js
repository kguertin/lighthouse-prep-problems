const organizeInstructors = function(instructors) {
  let courseInstructors = {};

  instructors.forEach(function(instructor, i){
    if(courseInstructors[instructor.course]){
      courseInstructors[instructor.course].push(instructor.name);
    } else {
      courseInstructors[instructor.course] = [instructor.name]
    }
  });
  return courseInstructors;
}

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));