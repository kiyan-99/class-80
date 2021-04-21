studentArray=[];
function submit(){
    for(i=1;i<=4;i++)
    {
        var name=document.getElementById("name_of_the_student_"+i).value;
        studentArray.push(name);
}
  document.getElementById("display_name_with_commas").innerHTML=studentArray;
  document.getElementById("submit_button").style.display="none";
  document.getElementById("sort_button").style.display="inline";
}
function sorting(){
    studentArray.sort();
    document.getElementById("display_name_without_commas").innerHTML=studentArray;
}