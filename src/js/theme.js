

export function toggleTheme() {
    const htmlElement = document.documentElement;
    const backgroundImage = document.getElementById("bg-img");
    const themeIcon = document.getElementById("theme-icon");

    const bgDarkURL = "./assets/bg-desktop-dark.jpg";
    const bgLightURL = "./assets/bg-desktop-light.jpg";
    const iconSunURL = "./assets/icon-sun.svg";
    const iconMoonURL = "./assets/icon-moon.svg";
    
    htmlElement.classList.toggle("light");

    htmlElement.classList.contains("light") ? backgroundImage.src = bgLightURL : backgroundImage.src = bgDarkURL;

    htmlElement.classList.contains("light") ? themeIcon.src = iconMoonURL : themeIcon.src = iconSunURL;

}

