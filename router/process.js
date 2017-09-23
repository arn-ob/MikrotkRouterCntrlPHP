var shoppingCart = [];
var ip;
var username;
var pass;
var orderedProductsTblBody;
//this function manipulates DOM and displays content of our shopping cart
function displayShoppingCart(){
    orderedProductsTblBody=document.getElementById("orderedProductsTblBody");
    //ensure we delete all previously added rows from ordered products table
    while(orderedProductsTblBody.rows.length>0) {
        orderedProductsTblBody.deleteRow(0);
    }

    //variable to hold total price of shopping cart

    //iterate over array of objects
    for(var product in shoppingCart){
        //add new row
        var row=orderedProductsTblBody.insertRow();
        //create three cells for product properties
        var cellName = row.insertCell(0);
        var cellDescription = row.insertCell(1);
       
        
        //fill cells with values from current product object of our array
        cellName.innerHTML 		= shoppingCart[product].id;
        cellDescription.innerHTML = shoppingCart[product].name;
        


    }
    //fill total cost of our shopping cart
    
}


function AddtoCart(){
   //Below we create JavaScript Object that will hold three properties you have mentioned:    Name,Description and Price
   var singleProduct = {};
   //Fill the product object with data
   singleProduct.id=document.getElementById("ids").value;
   singleProduct.name=document.getElementById("name").value;
   singleProduct.ip=document.getElementById("ip").value;
   singleProduct.username=document.getElementById("username").value;
   singleProduct.passwords=document.getElementById("password").value;
   
   //Add newly created product to our shopping cart
   shoppingCart.push(singleProduct);
   //call display function to show on screen
   displayShoppingCart();
   document.getElementById("ids").value = "";
   document.getElementById("name").value = "";

   ip = document.getElementById("ip").value;
   username = document.getElementById("username").value;
   pass = document.getElementById("password").value;
}

    //Add some Clients to our shopping cart via code or you can create a button with onclick event
    //AddtoList("Table","Big red table",50);
    //AddtoList("Door","Big yellow door",150);
    //AddtoList("Car","Ferrari S23",150000);

    function Enable(){
        
      if(ip == "" || username == "" || pass == "" ){
            alert('enter router login information');
			window.location.replace("index.html");
        }else{

			alert('Click ok for Enable');

        for(var product in shoppingCart){

                

                var id = shoppingCart[product].id.toString();
                var name = shoppingCart[product].name.toString();
                var ip = shoppingCart[product].ip.toString();
                var username = shoppingCart[product].username.toString();
                var passwords = shoppingCart[product].passwords.toString();
                var Enable = "Enable";
               

                var dataString = 'id='+ id
                + '&name='+ name
                + '&ip='+ ip
                + '&username='+ username
                + '&password='+ passwords
                + '&type='+ Enable
                
                
                
                if (window.XMLHttpRequest) {
                    // code for IE7+, Firefox, Chrome, Opera, Safari
                        xmlhttp=new XMLHttpRequest();
                    } else {  // code for IE6, IE5
                        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                    }
                
                
                xmlhttp.open("GET","routerIndexEn.php?"+dataString,true);
                xmlhttp.send();
            
          
        
		}
		
	}
}

      function Disable(){

      if(ip == "" || username == "" || pass == "" ){
          alert('Enter Router Login Information');
            window.location.replace("index.html");

         }else{
			 
				alert('Click ok for Disable');
			
                for(var product in shoppingCart){
        
        
        
                    var id = shoppingCart[product].id.toString();
                    var name = shoppingCart[product].name.toString();
                    var ip = shoppingCart[product].ip.toString();
                    var username = shoppingCart[product].username.toString();
                    var passwords = shoppingCart[product].passwords.toString();
                    var Disable = "Disable";


                    if(id == "")
                        {    
                         alert('Check the username and pass . Username : ' + id)
                         }
						 else{ 

                        var dataString = 'id='+ id
                        + '&name='+ name
                        + '&ip='+ ip
                        + '&username='+ username
                        + '&password='+ passwords
                        + '&type='+ Disable
                    
                        if (window.XMLHttpRequest) {
                            // code for IE7+, Firefox, Chrome, Opera, Safari
                                xmlhttp=new XMLHttpRequest();
                            } else {  // code for IE6, IE5
                                xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                            }
                        
                        
                        xmlhttp.open("GET","routerIndexDis.php?"+dataString,true);
                        xmlhttp.send();
                        }
        
                }
				
        }
	  }

function CheckData(){
    var idCheck = document.getElementById("ids").value;
    var usernameCheck= document.getElementById("name").value;
    if(idCheck == ""){
        alert('Check ID');
    }else{
        AddtoCart();
    }
}