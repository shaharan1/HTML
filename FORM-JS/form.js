<<<<<<< HEAD
function sendForm(event) {
=======
function sendForm(event){
>>>>>>> 4b3f7f0dcff797d146e77c6937f1a79591294722
    event.preventDefault();

    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let address = document.getElementById("address").value;
    //   let round=document.getElementById("round").value;
    //         let gender=document.getElementById("gender").value;
    //   let hobby=document.getElementById("hobby").value;



<<<<<<< HEAD
    let outPut = "ID: " + id + "\n";
    outPut += "Name: " + name + "\n";
    outPut += "Email: " + email + "\n";
    outPut += "Password: " + password + "\n";
    outPut += "Address: " + address + "\n";
=======
    let outPut= "ID: " + id + "\n"
+ "Name: " + name + "\n"
+ "Email: " + email + "\n"
+ "Password: " + password + "\n"
+ "Address: " + address + "\n";
>>>>>>> 4b3f7f0dcff797d146e77c6937f1a79591294722
}





let newWindow = window.open("", '_blank');
newWindow.document.writeln("<pre>" + outPut + "</pre>");


let myForm = document.getElementById("myForm");
myForm.addEventListener('submit', sendForm);