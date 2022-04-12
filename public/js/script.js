function toggleDropdown() {
  document.getElementById("dropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  let dropdown = document.getElementById("dropdown");
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
}