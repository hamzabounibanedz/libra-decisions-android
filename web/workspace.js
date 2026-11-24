import {$,read,save} from './ui.js';
const key='evenhand-journal',journal=read(key,{question:'',entries:[]});
$('#question').value=journal.question;
$('#question').oninput=e=>{journal.question=e.target.value;save(key,journal)};
function paint(){
 const totals={yes:0,no:0};
 for(const side of ['yes','no']){
  const list=$('#'+side);list.replaceChildren();
  for(const entry of journal.entries.filter(x=>x.side===side)){
   totals[side]+=entry.weight;
   const row=document.createElement('li'),label=document.createElement('span'),end=document.createElement('small'),remove=document.createElement('button');
   label.textContent=entry.text;end.textContent=entry.weight+' / 5 ';remove.className='remove';remove.textContent='×';remove.setAttribute('aria-label','Remove '+entry.text);
   remove.onclick=()=>{journal.entries=journal.entries.filter(x=>x.id!==entry.id);save(key,journal);paint()};
   end.append(remove);row.append(label,end);list.append(row);
  }
  if(!list.children.length){const empty=document.createElement('li');empty.className='detail';empty.textContent='No arguments yet.';list.append(empty)}
 }
 const sum=totals.yes+totals.no,diff=totals.yes-totals.no;
 $('#meter').value=sum?totals.yes/sum:.5;
 $('#score').textContent=!sum?'Awaiting arguments':diff===0?'Evenly balanced':Math.abs(diff)+' points '+(diff>0?'in favor':'against');
}
$('#reason').onsubmit=e=>{e.preventDefault();const input=$('#argument'),text=input.value.trim();if(!text)return; journal.entries.push({id:crypto.randomUUID(),text,side:$('#side').value,weight:Number($('#weight').value)});save(key,journal);input.value='';paint();input.focus()};paint();
