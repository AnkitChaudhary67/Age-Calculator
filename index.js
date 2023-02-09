
    let d1=document.getElementById('day').value;
    let m1=document.getElementById('month').value;
    let y1=document.getElementById('year').value;

    
function age(){
    // let z1=/^[0-9]*$/;...
    Calcutaor
    // if(d1!=z1 & m1!=z1 || y1!=z1){
    //     document.getElementById('error').innerHTML= 'Please input valid data for Date Field,Month Field, Year Field '
    // }
    let form=document.getElementById("formId");
    function submitForm(event){
       event.preventDefault();
    }
    
    let date= new Date();
   
    let d2=date.getDate();
    let m2=1+ date.getMonth();
    let y2=date.getFullYear();
    
    let month=[31,28,31,30,31,30,31,31,30,31,30,31];

    if(d1>d2){
        d2=d2+ month[m2-1];
        m2=m2-1;
    }

    if(m1>m2){
        m2=m2+12;
        y2=y2-1;
    }

    let d=d2-d1;
    let m=m2-m1;
    let y=y2-y1;

    

    
    
        document.getElementById('age').innerHTML= 'Your Age is ' +y+ ' Years '+m+ ' Months '+d+ ' Days '
    
    
   

    
}




