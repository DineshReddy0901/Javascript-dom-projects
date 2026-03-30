function calculateTip(){
  const billAmount = parseFloat(document.getElementById('bill').value);
  const serviceQuality = parseFloat(document.getElementById('service').value);
  const numberPeople = parseFloat(document.getElementById('people').value);

   if(isNaN(billAmount) || billAmount<= 0){
       alert("enter the bill amount");
       return;

   }
   if(numberPeople<1){
    alert("enter atleast 1 person");
    return;
   }

   
   const tipAmount = billAmount * serviceQuality;
   const totalAmount = billAmount+ tipAmount;
   const perPerson = totalAmount/numberPeople;
   const tipPerPerson = tipAmount / numberPeople;
   document.getElementById('tipAmount').textContent = `${tipAmount.toFixed(2)}`;
   document.getElementById("totalAmount").textContent = `${totalAmount.toFixed(2)}`;

   document.getElementById('perPerson').textContent = `${perPerson.toFixed(2)}`;
   document.getElementById("tipPerPerson").textContent = `${tipPerPerson.toFixed(2)}`;
}

// add event listener

document.getElementById("calculateBtn").addEventListener("click",calculateTip);

const allEls = document.querySelectorAll('input','Select').forEach((element)=>{
element.addEventListener('input',calculateTip);
    
})

