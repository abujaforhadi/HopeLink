function donateme() {


    document.getElementById('histroyPage').classList.add('hidden');
    document.getElementById('DonatePage').classList.remove('hidden');
    document.getElementById('donationBtn').classList.add('bg-lime-300');
    document.getElementById('historyBtn').classList.remove('bg-lime-300');
    
}
document.getElementById('donationBtn').addEventListener('click', donateme);
function donatem() {
    document.getElementById('DonatePage').classList.add('hidden');
    document.getElementById('histroyPage').classList.remove('hidden');

    document.getElementById('historyBtn').classList.add('bg-lime-300');
    document.getElementById('donationBtn').classList.remove('bg-lime-300');
   
    
}
document.getElementById('historyBtn').addEventListener('click', donatem);