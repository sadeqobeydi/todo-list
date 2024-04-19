createOptionTime()

addButton.addEventListener( 'click' , function(){
    addBox.classList.toggle('active')
})
/* ---------- create item with a local storage ---------------- */
if(localStorage.getItem('items') != null){
    items = JSON.parse(localStorage.getItem('items'))
    
    
    items.forEach( (element) => {
            createitem(element.text , element.houre , element.minit)
    });
}

/* ---------------- create item sith button */

creatBtn.addEventListener('click' , ()=>{
    let text = addTopic.value 
    let minit = addMinit.value
    let houre = addHour.value

    createitem(text , houre , minit)
    setTimeout(()=>{
        addToStorage(text , houre , minit)
    },1000)
})

/* ---------------- edit buttons -----------------*/
itemContiner.addEventListener('click' , (even)=>{

    if(even.target.classList.contains('edit')){
      
        appear.classList.add('active')
        inputEdit.focus()
        let toper = even.target.getBoundingClientRect().top
        appear.style.top = `${toper - 80}px`

        for(let i=0 ; i<btnEdit.length ; i++){
            if(even.target == btnEdit[i]){
                newElement = elements[i]
                inputEdit.value =topicText[i].textContent
            }
        }
    }
})

/* --------------- close edit ---------------------*/
closeEdit.addEventListener('click' , function(){
    appear.classList.remove('active')
})

change.addEventListener('click' , ()=>{
    newTopic = inputEdit.value;
    newHoure = editHour.value;
    newMinit = editMinit.value;

    changing(newTopic , newHoure , newMinit)
})

/*------------------- complated ----------------------  */
itemContiner.addEventListener('click' , (even)=>{

    if(even.target.classList.contains('complated')){
        
        even.target.parentElement.parentElement.classList.toggle("active")
        
    }
})




