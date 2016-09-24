

if (localStorage.getItem("number")==null){
	localStorage.setItem("number",0);
}

function searchgym(zipcode){
	
    var match =false;

    	for (i = 0; i <localStorage.getItem("number"); i++) { 

    		s= i.toString();
    		
    		if ( getStoredValue(s.concat("zipcode"))== zipcode){
    			match=true;
    		}


		}

		if (match){
				location.href = "mapgym";

				localStorage.setItem("currentzipcode",zipcode);


		}

		else{

			location.href = "nomatch";
		}


    }

function register() {
        location.href = "registration"
    	};

function findgym(){
    location.href = "find"

    };



function Gym(fname,lname,email, charge,zip,desc,addline1,addline2,mycity,mystate) {
  		
  		this.firstnamereg= fname;
  		this.lastnamereg=lname;
  		this.contactreg = email;
  		this.pricereg=charge;
	    this.zipcodereg=zip;
	    this.descripreg = desc;
	    this.addressline1=addline1;
	    this.addressline2=addline2;
	    this.city=mycity;
	    this.state=mystate;
 	 };
 			

function submitgym(userfirstname,userlastname,usercontact,userprice,userzipcode,userdescription,addressline1,addressline2,city,state){

 	
	var gymnow = new Gym(userfirstname,userlastname,usercontact,userprice,userzipcode,userdescription,addressline1,addressline2,city,state);


	
 	addgym(localStorage.getItem("number"),gymnow);

 	var newnumber = parseInt(localStorage.getItem("number")) + 1;

 	localStorage.setItem("number",newnumber);
/*
 	document.getElementById("firstname").value = "";
 	document.getElementById("lastname").value ="";
 	document.getElementById("e-mail").value = "";
 	document.getElementById("price").value= "";
 	document.getElementById("zipcode").value="";
 	document.getElementById("description").value="";

 	**/

 	location.href = "thanksforregistrating";
		}




function gohome(){
	location.href="instagym.html";
}

function addgym(key, newgym){
		key = key.toString();


        localStorage.setItem(key.concat("firstname"), newgym.firstnamereg);
        localStorage.setItem(key.concat("lastname"), newgym.lastnamereg);
        localStorage.setItem(key.concat("email"), newgym.contactreg);
        localStorage.setItem(key.concat("price"), newgym.pricereg);
        localStorage.setItem(key.concat("zipcode"), newgym.zipcodereg);
        localStorage.setItem(key.concat("description"), newgym.descripreg);
        localStorage.setItem(key.concat("addressline1"), newgym.addressline1);
        localStorage.setItem(key.concat("addressline2"), newgym.addressline2);
        localStorage.setItem(key.concat("city"), newgym.city);
        localStorage.setItem(key.concat("state"), newgym.state);



}


function getStoredValue(key) {
   
        return localStorage.getItem(key);
    
}

function contact(){


	var currkey = localStorage.getItem("currentmarker");
	var scurrkey = currkey.toString();


	var contactemail= localStorage.getItem(scurrkey + "email");

	var message = "yo, i want that ish";


	location.href="emailform.html";

}