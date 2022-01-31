function openCity(event, cityName) {
  // console.log(cityName);

  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.querySelectorAll<HTMLElement>(".tabContent");
  console.log(tabcontent);
  for (i = 0; i < tabcontent.length; i++) {
    console.log(i);
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  console.log(event.currentTarget);
  event.currentTarget.className += " active";    
}

export default openCity
