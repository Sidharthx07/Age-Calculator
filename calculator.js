function calculateAge() {
    const name = document.getElementById('nameInput').value;
    const birthday = document.getElementById('birthdayInput').value;
  
    if (name && birthday) {
      const birthDate = new Date(birthday);
      const today = new Date();
  
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const dayDiff = today.getDate() - birthDate.getDate();
  
      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }
  
      document.getElementById('result').textContent = `${name} is ${age} years old.`;
    } else {
      document.getElementById('result').textContent = "Please enter both your name and date of birth.";
    }
  }
  