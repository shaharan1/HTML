function sendForm (event){
    event.preventDefault();


    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let remarks = document.getElementById("area").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let course = document.querySelectorAll('input[name="course"]:checked');
    let location = document.getElementById("location").value;

    let selectedCourses = [];
    for (let i = 0; i < course.length; i++){
        selectedCourses.push(course[i].value);
    }
    let output= "Name: "+ name
    "\n";
    output += "contact: " + contact + "\n";
    output += "remarks: " + remarks + "\n";
    output += "gender: " + (gender ? gender.id : "Not selected") + "\n";
    output += "location: " + location + "\n";
     output += "courses: " + selectedCourses + "\n";
     
 let newWindow= window.open(" ",'_blank');
 newWindow.document.writeln("<pre>" + output + "</pre>");

}
 let myForm = document.getElementById("myForm");
 myForm.addEventListener("submit", sendForm);