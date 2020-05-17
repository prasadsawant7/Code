var option = document.querySelectorAll('.option');
var currOption;

function toggle()
{
    currOption = document.querySelector('.active');
    
    if( currOption != null )
    {
        currOption.classList.remove('active');
        currOption.classList.add('nonactive');
    }
    
    this.classList.remove('nonactive');
    this.classList.add('active');
    
}

option.forEach((elm) =>{
    elm.addEventListener('click', toggle, false);
});