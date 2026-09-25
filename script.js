document.body.classList.add('js');
const toggle=document.querySelector('.menu-toggle'), navigation=document.querySelector('#primary-nav'), mobile=window.matchMedia('(max-width: 700px)');
function setMenu(open,restoreFocus=false){navigation.dataset.open=String(open);toggle.setAttribute('aria-expanded',String(open));toggle.querySelector('.menu-label').textContent=open?'Close':'Menu';if(restoreFocus)toggle.focus();}
setMenu(false);
toggle.addEventListener('click',()=>setMenu(toggle.getAttribute('aria-expanded')!=='true'));
navigation.addEventListener('click',e=>{if(e.target.closest('a'))setMenu(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true')setMenu(false,true)});
document.addEventListener('click',e=>{if(mobile.matches&&!e.target.closest('.site-header'))setMenu(false)});
navigation.addEventListener('focusout',()=>{setTimeout(()=>{if(mobile.matches&&!document.querySelector('.site-header').contains(document.activeElement))setMenu(false)},0)});
mobile.addEventListener('change',()=>setMenu(false));
const copyButton=document.querySelector('.copy-email');
if(copyButton)copyButton.addEventListener('click',async()=>{const status=document.querySelector('.copy-status');try{if(!navigator.clipboard)throw new Error('Clipboard is unavailable');await navigator.clipboard.writeText(copyButton.dataset.email);status.textContent='Email address copied.'}catch{status.textContent='Select and copy the email address above.'}});
