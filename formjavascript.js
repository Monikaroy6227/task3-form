function check() {
    document.getElementById("img1").style.display = 'block';
    let fname = document.getElementById("fname").value;
    let no = document.getElementById("phone").value;
    let mail = document.getElementById("mail").value;
    document.getElementById("details6").innerHTML = "Name-:" + fname;
    document.getElementById("details2").innerHTML = "Contact No.-:" + no;
    document.getElementById("details3").innerHTML = "Email-:" + mail;

    let genderlength = document.myform.gender.length;
    let text = "";
    let i;
    for (i = 0; i < genderlength; i++) {
        var genderchecked = document.myform.gender[i].checked;
        if (genderchecked) {
            text += document.myform.gender[i].value + " ";
        }
    }
    var genders = text;
    document.getElementById("details4").innerHTML = "Gender-:" + genders;


    var skillslength = document.myform.skill.length;
    var skillvalue = " ";

    for (j = 0; j < skillslength; j++) {
        var skillchecked = document.myform.skill[j].checked;
        if (skillchecked) {
            skillvalue += document.myform.skill[j].value + " ";
        }
    }
    var result = skillvalue;
    document.getElementById("details5").innerHTML = "skills-:" + result;

}


