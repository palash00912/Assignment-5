
  function validityTest(id1,id2){
    const value1=backTodigint(id1);
   const value2=document.getElementById(id2)
    if(value1<0 || isNaN(value1)){
      alert('INVALID NUMBER')
      return 0;
    }
   
  
  }
  
  const mainBalance=document.getElementById('myBalanceAmount')
  const historyDiv=document.getElementById('history-page')
  function backTodigint(id){
      const number1=document.getElementById(id).value;
   return parseFloat(number1);
  }
  function backTodigintFormString(id){
     const number1=document.getElementById(id).innerText;
  return parseFloat(number1);
  }
  function calculateDonate(id1,id2){
     const addMoney= document.getElementById(id2);
     addMoney.innerText=backTodigint(id1)+backTodigintFormString(id2);
     if((backTodigintFormString('myBalanceAmount')-backTodigint)<0){
      alert("Insufficient Balance")
      return;
     }
    mainBalance.innerText=backTodigintFormString('myBalanceAmount')-backTodigint(id1);
  }
  function addHistory(donate,place){
  
     const div=document.createElement('div');
     
     const div1=document.createElement('div');
     div1.innerHTML=`<p>${backTodigint(donate)}  ${document.getElementById(place).innerText} </p>
     
     <h5>${new Date()}</h5>
     
     `
     div1.classList.add('p-3', 'border','space-y-2','rounded-xl')
     div.appendChild(div1)
     
     historyDiv.appendChild(div)
    
  
  
  
  }