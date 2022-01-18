
    const calculateAge=()=>{
        let date =document.getElementById("date_field").value ; 
        let month =document.getElementById("month_field").value ; 
        let year =document.getElementById("year_field").value ; 

        console.log(date);
        console.log(month);
        console.log(year);

 
        if (date>31){
            alert("invalid input") ; 
        }
        let dob = new Date(`${date} ${month} ${year}`);
        let now = new Date();

        let diff = now-dob ;
        console.log(diff) ;

        let days = Math.round((diff)/(1000*60*60*24) ); 
        console.log(days)

        alert(`Your age is ${days} days`)

        // console.log(dob) ;

    } ;
