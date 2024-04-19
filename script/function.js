/* ------------ timing option ------------------------- */
function timeItem(value , index){
    if(index<24){
        addHour.innerHTML += `<option value="${value}">${value}</option>`
        addMinit.innerHTML += `<option value="${value}">${value}</option>`  
        editHour.innerHTML +=  `<option value="${value}">${value}</option>`
        editMinit.innerHTML += `<option value="${value}">${value}</option>`
    }
    else{
        addMinit.innerHTML += `<option value="${value}">${value}</option>`  
    }
}

function createOptionTime(){
    for(let i = 1 ; i <= 59 ; i++){
        let item = i.toString().padStart(2 , 0)
        timeItem(item , i)   
    }
    
}
/* --------------- get to this time in select */
function getTims(){
    let date = new Date()
    hTime = (date.getHours()).toString()
    hTime = hTime.padStart(2 , "0")
    addHour.value = hTime
    
    
}

setTimeout(function(){
    getTims()   
},1000)

// //////////////// add to localstorage ///////////////////
function addToStorage(text , houre , minit){
    if(text == ""){
        return undefined
    }else{

        items.push({text: text , houre : houre , minit : minit})
        localStorage.setItem('items' , JSON.stringify(items))
        items = JSON.parse(localStorage.getItem('items'))
    }
}
/* ------------------- create items --------------------------- */
function createitem(text , hour , minit ){
    let item = document.createElement('div')
    
    if(text === ""){
        return alert('Topic is null')
    }
    else{
        item.innerHTML = `
        <span class="topic-text">${text}</span>
        <span class="time-text">${hour} : ${minit}</span>
        
        <div class="box-btn">
        <button class="complated">complate</button>
        <button class="edit">Editer</button>
        <button class="trash">Trash</button>
        </div>
        `;
        
        itemContiner.appendChild(item)
        item.classList.add('item')
        
        setTimeout(()=>{
            item.classList.add('create')
        } , 0)

        topic.value = ""  

        elements = document.querySelectorAll('.item');
        trash = document.getElementsByClassName('trash');
        btnEdit = document.querySelectorAll('.edit');
        topicText = document.querySelectorAll('.topic-text');
        timeText = document.querySelectorAll('.time-text');
        complateBtn = document.getElementsByClassName('complated');
    }
    trashing()
    
}

/* ------------------- trashing Element ------------------*/

function trashing(){

    Array.from(trash).forEach((value)=>{

        value.onclick = function() {

            appear.classList.remove('active')

            for(let i = 0 ; i<trash.length ; i++){
                if(value == trash[i]){
                    elements[i].classList.remove('create')
                    setTimeout(() => {
                        elements[i].remove()

                        delete items[i]
                        items = items.filter((val)=>{
                            return val != undefined
                        })
    
                        localStorage.setItem('items' , JSON.stringify(items))
                        
                        elements = document.querySelectorAll('.item');
                        trash = document.getElementsByClassName('trash');
                    }, 500);
                }
            }
        }
    })
}
/* ----------------- editing and change------------------------ */

function changing(text , houre , minit){
    if(text != ""){
        for(let i=0 ; i<elements.length ; i++){
            if(elements[i] == newElement){
                
                items[i] = {text: text , houre : houre , minit : minit}
                localStorage.setItem('items' , JSON.stringify(items))
            
                topicText[i].textContent = text;
                timeText[i].innerHTML = `${houre} : ${minit}`
            
            }
        }
        appear.classList.remove('active')
    }
    else{
        return alert('new topic is null')
    }
}