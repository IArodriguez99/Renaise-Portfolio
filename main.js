const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const logoImg = document.getElementById('logo');
const arrow = document.getElementById('arrow');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        logoImg.setAttribute('src', "./assets/logo-light.svg")
        arrow.setAttribute('src', "./assets/arrow-light.svg")
        localStorage.setItem('theme', 'dark', 'src');
        

    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        logoImg.setAttribute('src', "./assets/renaiselogo 1.svg");
        arrow.setAttribute('src', "./assets/arrow.svg")
        localStorage.setItem('theme', 'light', 'src');
    };    
};



toggleSwitch.addEventListener('change', switchTheme, false);


//hide nav on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        return document.querySelector(".nav").classList.add('hide')
    }
    return document.querySelector(".nav").classList.remove('hide')
  
  });

new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    navigationPosition: 'left',
    anchors:['home','work1','work2','work3','work4','work5',],
    });

   