const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
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
        localStorage.setItem('theme', 'dark');

    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    };    
};

toggleSwitch.addEventListener('change', switchTheme, false);


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

   