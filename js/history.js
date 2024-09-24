document.getElementById('button-history')
.addEventListener('click',function(){

     document.getElementById('history-page').classList.remove('hidden');
     document.getElementById('donation-page').classList.add('hidden');
})

document.getElementById('button-donate')
.addEventListener('click',function(){

     document.getElementById('donation-page').classList.remove('hidden');
     document.getElementById('history-page').classList.add('hidden');
})