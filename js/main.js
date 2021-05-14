
let listTime = document.querySelectorAll('.list-time');
let listTimeItems = document.querySelectorAll('.list-time');
let btnMore = document.querySelectorAll('.list-time__item--more');
function showTimeList(listTime){
    for(let i = 0; i < listTime.length; i++){
        let listTimeItem = listTime[i].querySelectorAll('.list-time__item');
        let listItemMore = listTime[i].querySelector('.list-time__item--more');
            for(let j = 0; j < listTimeItem.length; j ++){
                if(j >= 3 ){
                    listTimeItem[j].classList.add('none');
                    if(listItemMore.classList.contains('none')){
                        listItemMore.classList.remove('none');
                    }
                }else if(j < 3){
                    listItemMore.classList.add('none');
                }
            }
        }
    }
listTimeItems.forEach(function(item){
    item.addEventListener('click', function(event){
       event.preventDefault();
        if(event.target.classList.contains('list-time__link--more')){
            console.log('click')
            let items = item.querySelectorAll('.list-time__item');
            event.target.parentNode.classList.add('none');
            for(let i = 0; i < items.length; i++){
                if(items[i].classList.contains('none')){
                    items[i].classList.remove('none');
                }
            }
            
        }
        
    })
})

showTimeList(listTime)