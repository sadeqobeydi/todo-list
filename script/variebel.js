const addButton = document.querySelector('button');
// --------------- aded box --------------------------
const addBox = document.querySelector('.add-box');
const addTopic = document.getElementById('topic')
const addHour = document.getElementById('hours');
const addMinit = document.getElementById('minit');
const creatBtn = document.querySelector('.create'); 

// ----------continet items --------------
const itemContiner = document.querySelector('.items-continer');

// ------------ items  -------------------
let items = [];
let topicText = document.querySelectorAll('topic-text')
let timeText = document.querySelectorAll('.time-text')
// ---------------------- trashing Element -----------------
let elements = document.querySelectorAll('.item');
let trash = document.getElementsByClassName('trash');

// --------------- editor ----------------------------
let btnEdit = document.querySelectorAll('.edit')
const appear = document.querySelector('.appear')
const inputEdit = document.getElementById('edit-topic')
const editHour = document.getElementById('edit-houre')
const editMinit = document.getElementById('edit-minit')
const closeEdit = document.querySelector('.close-edit')
const change = document.querySelector('.change')

// --------------------------------- new change -------------------
let newTopic;
let newHoure;
let newMinit;
let newElement;

// ------------------------------- complate btn -------------------

let complateBtn = document.getElementsByClassName('complated')