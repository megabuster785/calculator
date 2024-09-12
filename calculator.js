function display_num(value){
    document.getElementById('display').value+=value
};
function calculate(){
    let x=document.getElementById('display');
    document.getElementById('display').value=eval(x.value);
}
function clear_display(){
    document.getElementById('display').value='';
}