import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t=document.querySelector(".feedback-form"),l="feedback-form-state";let e={email:"",message:""};const m=JSON.parse(localStorage.getItem(l));m&&(e=m,t.elements.email.value=e.email,t.elements.message.value=e.message);t.addEventListener("input",a=>{a.target.name==="email"?e.email=a.target.value.trim():a.target.name==="message"&&(e.message=a.target.value.trim()),localStorage.setItem(l,JSON.stringify(e))});t.addEventListener("submit",a=>{if(a.preventDefault(),e.email===""||e.message===""){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(l),e={email:"",message:""},t.reset()});
//# sourceMappingURL=commonHelpers2.js.map
