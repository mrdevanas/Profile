function evry() {
  document.getElementById("s").style.display = 'block';
  document.getElementById("inpprofile").style.display = 'block';
  document.getElementById("name").removeAttribute("readonly");
  document.getElementById("bio").removeAttribute("readonly");
  document.getElementById("phone").removeAttribute("readonly");
  document.getElementById("email").removeAttribute("readonly");
  document.getElementById("saveevry").style.display = 'block';
  document.getElementById("evry").style.display = 'none';
  document.getElementById("chbg").style.display = 'block';
}

function saveevry() {
  document.getElementById("inpprofile").style.display = 'none';
  document.getElementById("chbg").style.display = 'none';
  document.getElementById("name").setAttribute("readonly", true);
  document.getElementById("bio").setAttribute("readonly", true);
  document.getElementById("phone").setAttribute("readonly", true);
  document.getElementById("email").setAttribute("readonly", true);
  document.getElementById("saveevry").style.display = 'none';
  document.getElementById("evry").style.display = 'block';
  document.getElementById("x").href = document.getElementById("inpx").value;
  document.getElementById("s").style.display = 'none';
  document.getElementById("fb").href = document.getElementById("inpfb").value;
  document.getElementById("ig").href = document.getElementById("inpig").value;

  // Save changes to localStorage
  localStorage.setItem('profileName', document.getElementById('name').value);
  localStorage.setItem('profileBio', document.getElementById('bio').value);
  localStorage.setItem('profilePhone', document.getElementById('phone').value);
  localStorage.setItem('profileEmail', document.getElementById('email').value);
  localStorage.setItem('twitterLink', document.getElementById('x').href);
  localStorage.setItem('facebookLink', document.getElementById('fb').href);
  localStorage.setItem('instagramLink', document.getElementById('ig').href);
}

function p(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  
  reader.onload = function (e) {
      document.getElementById("prof").src = e.target.result;
      localStorage.setItem('profilePicture', e.target.result);
  };
  
  reader.readAsDataURL(file);
}

function chbg(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  
  reader.onload = function (e) {
      document.getElementById("bg").style.backgroundImage = `url(${e.target.result})`;
      localStorage.setItem('backgroundImage', e.target.result);
  };
  
  reader.readAsDataURL(file);
}

function loadSavedData() {
  document.getElementById('name').value = localStorage.getItem('profileName') || '';
  document.getElementById('bio').value = localStorage.getItem('profileBio') || '';
  document.getElementById('phone').value = localStorage.getItem('profilePhone') || '';
  document.getElementById('email').value = localStorage.getItem('profileEmail') || '';
  document.getElementById('x').href = localStorage.getItem('twitterLink') || '';
  document.getElementById('fb').href = localStorage.getItem('facebookLink') || '';
  document.getElementById('ig').href = localStorage.getItem('instagramLink') || '';
  document.getElementById('prof').src = localStorage.getItem('profilePicture') || 'https://tse4.mm.bing.net/th?id=OIP.Tv3oG-Is7dcMNcysxIVwLAHaHa&pid=Api&P=0&h=220';
  document.getElementById('bg').style.backgroundImage = `url(${localStorage.getItem('backgroundImage') || 'https://tse3.mm.bing.net/th?id=OIP.4bNIwIWwcZs49_l1LyaDRwHaE7&pid=Api&P=0&h=220'})`;
}

window.onload = loadSavedData;

