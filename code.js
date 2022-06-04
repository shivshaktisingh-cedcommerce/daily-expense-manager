const groceries=[];
const veggies=[];
const travelling=[];
const miscellaneous=[];
const pass=[];
const income=[];




    $(document).ready(function(){
      $(this).on("click",".delete",function(){
        if($(this).attr("arr")== "grocery")
        { 
           groceries.splice($(this).attr('id'),1);
           displayGrocery();
           totalcost();
        }
        if($(this).attr("arr")== "veggies")
        { 
           veggies.splice($(this).attr('id'),1);
           displayVeggies();
           totalcost();
        }
        if($(this).attr("arr")== "travelling")
        { 
           travelling.splice($(this).attr('id'),1);
           displayTravelling();
           totalcost();
        }
        if($(this).attr("arr")== "miscellaneous")
        { 
           miscellaneous.splice($(this).attr('id'),1);
           displayMiscellaneous();
           totalcost();
        }
        if($(this).attr("arr")== "income")
        { 
           income.splice($(this).attr('id'),1);
           displayincome();
           totalcost();
        }
        
    });
    });
function display(sign,array)
{  
  
    if (sign=="Add"){
      
      if(array=="grocery"){
      
         var grocery_item_name = document.getElementById("grocery_item").value;
         var grocery_item_price = document.getElementById("grocery_price").value;
         groceries.push({'item':grocery_item_name,'price':grocery_item_price});
         document.getElementById("grocery_item").value="";
         document.getElementById("grocery_price").value="";
         displayGrocery(); 
         totalcost();   
     
      }
      if(array=="veggies"){
        var veggies_item_name = document.getElementById("veggies_item").value;
        var veggies_item_price = document.getElementById("veggies_price").value;
        veggies.push({'item':veggies_item_name,'price':veggies_item_price});
        document.getElementById("veggies_item").value="";
        document.getElementById("veggies_price").value="";
        displayVeggies();
        totalcost();  
        
      }
      if(array=="travelling"){ 
        var travelling_item_name = document.getElementById("travelling_item").value;
        var travelling_item_price = document.getElementById("travelling_price").value;
        travelling.push({'item':travelling_item_name,'price':travelling_item_price});
        document.getElementById("travelling_item").value="";
        document.getElementById("travelling_price").value="";  
        displayTravelling();
        totalcost();  
        
      }
      if(array=="miscellaneous"){
        var miscellaneous_item_name = document.getElementById("miscellaneous_item").value;
        var miscellaneous_item_price = document.getElementById("miscellaneous_price").value;
        miscellaneous.push({'item':miscellaneous_item_name,'price':miscellaneous_item_price});
        document.getElementById("miscellaneous_item").value="";
        document.getElementById("miscellaneous_price").value="";
        displayMiscellaneous();
        totalcost();  
       
      }
    }
    else if(sign=="Update"){
      if(array=="grocery"){
        groceries[pass[0]].item = $("#grocery_item").val();
        groceries[pass[0]].price = $("#grocery_price").val();
         displayGrocery();
         totalcost();  
         pass.splice(0,pass.length);
         $("#groceryidbtnupdate").css("display","none");
         $("#groceryidbtnadd").css("display","block");

        }
        if(array=="income"){
          income[pass[0]].source = $("#source").val();
          income[pass[0]].amount = $("#amount").val();
           displayincome();
           totalcost();  
           pass.splice(0,pass.length);
           $("#incomeidbtnupdate").css("display","none");
           $("#incomeidbtnadd").css("display","block");
  
          }
     if(array=="veggies"){
 
      veggies[pass[0]].item = $("#veggies_item").val();
      veggies[pass[0]].price = $("#veggies_price").val();
      displayVeggies();
      totalcost();  
      pass.splice(0,pass.length);
      $("#veggiesidbtnupdate").css("display","none");
      $("#veggiesidbtnadd").css("display","block");
       
     }
     if(array=="travelling"){
      travelling[pass[0]].item = $("#travelling_item").val();
      travelling[pass[0]].price = $("#travelling_price").val();
      displayTravelling();
      totalcost();  
      pass.splice(0,pass.length);
      $("#travellingidbtnupdate").css("display","none");
      $("#travellingidbtnadd").css("display","block");
     }
     if(array=="miscellaneous"){
      miscellaneous[pass[0]].item = $("#miscellaneous_item").val();
      miscellaneous[pass[0]].price = $("#miscellaneous_price").val();
      displayMiscellaneous();
      totalcost();  
      pass.splice(0,pass.length);
      $("#miscellaneousidbtnupdate").css("display","none");
      $("#miscellaneousidbtnadd").css("display","block");
     }
    }

   
}

function incomesource(){
        var income_source_name = document.getElementById("source").value;
        var income_source_amount = document.getElementById("amount").value;
        income.push({'source':income_source_name,'amount':income_source_amount});
        document.getElementById("source").value="";
        document.getElementById("amount").value="";
        displayincome();
  
}
function displayincome(){
  counter=1;
  var total = 0;
  var txt="";
  txt +="<table>";
  for(let i=0;i<income.length;i++){
    txt += "<tr><td>"+counter+"</td><td><input type='text' value="+income[i].source+" class='form-control' readonly></td><td><input type='text' value="+income[i].amount+" class='form-control' readonly></td><td><button class='edit' id="+i+" onclick ='edit(this.id,this.value);' value='incomeedit'>Edit</button></td><td><input type='button' class='delete' id="+i+" arr='income' value='Delete'></td></tr>";
    counter++;
    total += parseInt(income[i].price);
  }
  txt+="</table>";
  $("#display-income").html(txt);
  totalcost();
  
}

function displayGrocery(){
  counter=1;
  var total = 0;
  var txt="";
  txt +="<table>";
  for(let i=0;i<groceries.length;i++){
    txt += "<tr><td>"+counter+"</td><td><input type='text' value="+groceries[i].item+" class='form-control' readonly></td><td><input type='text' value="+groceries[i].price+" class='form-control' readonly></td><td><button class='edit' id="+i+" onclick ='edit(this.id,this.value);' value='groceryedit'>Edit</button></td><td><input type='button' class='delete' id="+i+" arr='grocery' value='Delete'></td></tr>";
    counter++;
    total += parseInt(groceries[i].price);
  }
  txt+="</table>";
  $("#display-grocery").html(txt);
  $("#display-grocery-total").html("Total-cost:" +total);
 
}
function displayVeggies(){
  counter = 1;
  var total = 0;
  var txt="";
  txt += "<table>"; 
  for(let i=0;i<veggies.length;i++){
    txt += "<tr><td>"+counter+"</td><td><input type='text' value="+veggies[i].item+" class='form-control' readonly></td><td><input type='text' value="+veggies[i].price+" class='form-control' readonly></td><td><button class='edit' id="+i+" onclick ='edit(this.id,this.value);' value='veggiesedit'>Edit</button></td><td><input type='button' class='delete' id="+i+" arr='veggies' value='Delete'></td></tr>";
   counter++;
   total += parseInt(veggies[i].price);
  } 
  txt+="</table>";
$("#display-veggies").html(txt);
$("#display-veggies-total").html("Total-cost:" +total);
}
function displayTravelling(){
  var total =0;
  counter = 1;
  var txt="";
  txt += "<table>";
  for(let i=0;i<travelling.length;i++){
   txt += "<tr><td>"+counter+"</td><td><input type='text' value="+travelling[i].item+" class='form-control' readonly></td><td><input type='text' value="+travelling[i].price+" class='form-control' readonly></td><td><button class='edit' id="+i+" onclick ='edit(this.id,this.value);' value='travellingedit'>Edit</button></td><td><input type='button' class='delete' id="+i+" arr='travelling' value='Delete'></td></tr>";
   counter++;
   total += parseInt(travelling[i].price);
  } 
  txt+="</table>";
$("#display-travelling").html(txt);
$("#display-travelling-total").html("Total-cost:" +total);
}
function displayMiscellaneous(){
  var total = 0;
  var txt="";
  var counter=1;
  txt += "<table>";
  for(let i=0;i<miscellaneous.length;i++){
    txt += "<tr><td>"+counter+"</td><td><input type='text' value="+miscellaneous[i].item+" class='form-control' readonly></td><td><input type='text' value="+miscellaneous[i].price+" class='form-control' readonly></td><td><button class='edit' id="+i+" onclick ='edit(this.id,this.value);' value='miscellaneousedit'>Edit</button></td><td><input type='button'class='delete' id="+i+" arr='miscellaneous' value='Delete'></td></tr>";
    counter++;
    total += parseInt(miscellaneous[i].price);
  } 
txt+="</table>";
$("#display-miscellaneous").html(txt);
$("#display-miscellaneous-total").html("Total-cost:" +total);
}



function edit(arrayindex,arrayvalue){
  if(arrayvalue=='groceryedit'){
       $("#grocery_item").val(groceries[arrayindex].item);
       $("#grocery_price").val(groceries[arrayindex].price);
       pass.push(arrayindex);
       $("#groceryidbtnupdate").css("display","block");
       $("#groceryidbtnadd").css("display","none");
  }
  if(arrayvalue=='incomeedit'){
    $("#source").val(income[arrayindex].source);
    $("#amount").val(income[arrayindex].amount);
    pass.push(arrayindex);
    $("#incomeidbtnupdate").css("display","block");
    $("#incomeidbtnadd").css("display","none");
}
  if(arrayvalue=='veggiesedit'){
     $("#veggies_item").val(veggies[arrayindex].item);
     $("#veggies_price").val(veggies[arrayindex].price);
     pass.push(arrayindex);
     $("#veggiesidbtnupdate").css("display","block");
     $("#veggiesidbtnadd").css("display","none");
  }
  if(arrayvalue=='travellingedit'){
     $("#travelling_item").val(travelling[arrayindex].item);
     $("#travelling_price").val(travelling[arrayindex].price);
     pass.push(arrayindex);
     $("#travellingidbtnupdate").css("display","block");
     $("#travellingidbtnadd").css("display","none");
  }
  if(arrayvalue=='miscellaneousedit'){
     $("#miscellaneous_item").val(miscellaneous[arrayindex].item);
     $("#miscellaneous_price").val(miscellaneous[arrayindex].price);
     pass.push(arrayindex);
     $("#miscellaneousidbtnupdate").css("display","block");
     $("#miscellaneousidbtnadd").css("display","none");
  }
 }
 function totalcost(){
   var total1 =0;
   var total2 =0;
   var total3 =0;
   var total4 =0;
   var total5 =0;
   var expense =0;
   for (let i=0;i<groceries.length;i++){
      total1 +=  parseInt(groceries[i].price);
   }
   for(let i=0;i<veggies.length;i++){
      total2 += parseInt(veggies[i].price); 
   }
   for(let i=0;i<travelling.length;i++){
    total3 += parseInt(travelling[i].price); 
   }
   for(let i=0;i<miscellaneous.length;i++){
    total4 += parseInt(miscellaneous[i].price); 
   }
   for(let i=0;i<income.length;i++){
    total5 += parseInt(income[i].amount); 
   }
   var total = total1+total2+total3+total4; 
    expense = (total5-total); 
    if(total5>total){
      $("#total-expense").html("Total-saving: " +Math.abs(expense));
    }
    if(total5<total){
      $("#total-expense").html("Your balance is in negative: " +expense);
    }
    if(total5 == total){
      $("#total-expense").html("You have 0 saving");
    }
    
   $("#totalall").html("Total-expenses: " +total);
   $("#display-income-total").html("Total-income:" +total5);
  

 }


