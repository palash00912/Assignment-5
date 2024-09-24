document.getElementById("btn-1").addEventListener("click", function () {
    const text1 = validityTest('donate-1','donate-1');
    calculateDonate('donate-1','addMoney1');
    addHistory('donate-1','noakhali');

    function   showModal(){

    }
  document.getElementById('modal1').classList.remove('hidden');
document.getElementById('donate-1').value="";
});
document.getElementById('btn-2').addEventListener('click',function(){
    validityTest('donate-2','donate-2');
    calculateDonate('donate-2', 'addMoney2')
    addhistory('donate-2','feni')
    document.getElementById('modal2').classList.remove('hidden');
   

    document.getElementById('donate-2').value="";
})
document.getElementById('btn-3').addEventListener('click',function(){
    validityTest('donate-3','donate-3');
    calculateDonate('donate-3', 'addMoney3')
    addhistory('donate-3','movment')
    
    document.getElementById('modal3').classList.remove('hidden');
    document.getElementById('donate-3').value="";
    
})
document.getElementById('button-donate').addEventListener('click',function(){

styleChangeOfHistoryAndDonate('button-donate')
document.getElementById('historyPage').classList.add('hidden')
document.getElementById('donatePage').classList.remove('hidden')
document.getElementById('button-history').classList.add('border')

})
document.getElementById('button-history').addEventListener('click',function(){
styleChangeOfHistoryAndDonate('button-history')
document.getElementById('donatePage').classList.add('hidden')
document.getElementById('historyPage').classList.remove('hidden')
document.getElementById('button-donate').classList.add('border')
})

const blogs1=document.getElementById("blogs")

   
document.getElementById('dmodal1').addEventListener('click',function(){
    document.getElementById('modal1').classList.add('hidden');
})
document.getElementById('dmodal2').addEventListener('click',function(){
    document.getElementById('modal2').classList.add('hidden');
})
document.getElementById('dmodal3').addEventListener('click',function(){
    document.getElementById('modal3').classList.add('hidden');
})