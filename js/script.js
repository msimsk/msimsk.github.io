function loadSkills(){
  loader(document.getElementById('Android'),document.getElementById('Android').innerHTML);
  loader(document.getElementById('MySQL'),document.getElementById('MySQL').innerHTML);
  loader(document.getElementById('Html'),document.getElementById('Html').innerHTML);
  loader(document.getElementById('Java'),document.getElementById('Java').innerHTML);
  loader(document.getElementById('Ruby'),document.getElementById('Ruby').innerHTML);
  loader(document.getElementById('Python'),document.getElementById('Python').innerHTML);
  loader(document.getElementById('Eng'),document.getElementById('Eng').innerHTML);
}

  function loader(element,percent){
  element.style.width = percent;
}
