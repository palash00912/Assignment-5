document.getElementById("btn-1").addEventListener("click", function () {
    const text1 = validityTest('donate-1','donate-1');
    calculateDonate('donate-1','addMoney1');
    addHistory('donate-1','noakhali');

    function   showModal(){

    }
  document.getElementById('my_modal_1').classList.remove('hidden');
  document.getElementById('donate-1').value="";
});
document.getElementById('btn-2').addEventListener('click',function(){
    validityTest('donate-2','donate-2');
    calculateDonate('donate-2', 'addMoney2')
    addHistory('donate-2','feni')
    document.getElementById('my_modal_2').classList.remove('hidden');
   

    document.getElementById('donate-2').value="";
})
document.getElementById('btn-3').addEventListener('click',function(){
    validityTest('donate-3','donate-3');
    calculateDonate('donate-3', 'addMoney3')
    addHistory('donate-3','movment')
    
    document.getElementById('my_modal_3').classList.remove('hidden');
    document.getElementById('donate-3').value="";
    
})


