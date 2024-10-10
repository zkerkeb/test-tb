const identity = {
    name: "Enzo Diser",
    job: "Chef de Projet Digital",
    company: "Projets Universitaires"
}

// console.log(identity.name);
// console.log(identity.job);
// console.log(identity.company);

const mockApiResponse = [
    {
        name: "Enzo Diser",
        job: "Chef de Projet Digital",
        company: "Projets Universitaires",
        email: "diser.enzo@gmail.com",
        phone: "07 62 24 57 08",
    },  
    {
        name: 'john doe',
        job : '',
        company: "Projets Universitaires",
        email: "diser.enzo@gmail.com",
        phone: "07 62 24 57 08",
    }
]

const getHarryPotterCharacters = async () => {
    const characters = await fetch('https://hp-api.onrender.com/api/characters')
    console.log("🚀 ~ getHarryPotterCharacters ~ characters:", characters)
    const data = await characters.json()
    return data[0]
}


const createCharacterCard = async () => {
    const character = await getHarryPotterCharacters()
    console.log("🚀 ~ createCharacterCard ~ character:", character)
    
    let header = document.querySelector(".header-title");
    header.innerHTML = character.actor;
    // header.classList.add("text-dark");
    header.classList.add("text-light");




}

// createCharacterCard()


const switchTheme = (currentTheme) => {
    const allElements = document.querySelectorAll("."+currentTheme);
    console.log("🚀 ~ allElements:", allElements)
    allElements.forEach(element => {
        if(currentTheme === 'text-light'){
        element.classList.remove('text-light')
        element.classList.add('text-dark')
    } else if (currentTheme === 'text-dark')
    {
        element.classList.remove('text-dark')
        element.classList.add('text-light')
    }
    })

}
// switchTheme('text-light')

  const avatarOui = document.getElementById("avatarOui");

  avatarOui.addEventListener("click", () => {
    const dataTheme = document.querySelector("data");
    const currentTheme = dataTheme.getAttribute("class");
    console.log("🚀 ~ avatarOui.addEventListener ~ currentTheme:", currentTheme)
    console.log("🚀 ~ avatarOui.addEventListener ~ dataTheme:", dataTheme)
    console.log("L'élément a été cliqué !");
    switchTheme(currentTheme);

  });

  const general = document.getElementById("general");
  console.log("🚀 ~ general:", general)
  general.style.backgroundColor = "green";

  const newParagraph = document.createElement("p");
  newParagraph.innerHTML = "Bonjour";
  general.appendChild(newParagraph)
//   general.parentNode.removeChild(general);

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const contact = event.target.contact.value;
    console.log("🚀 ~ contactForm.addEventListener ~ contact:", contact)
}
)


const getAllSpells = async () => {
   const spells = await fetch('https://hp-api.onrender.com/api/spells')
   const data = await spells.json()

   return data
}

// getAllSpells()

const appendSpells = async () => {
    const spells = await getAllSpells()
    console.log("🚀 ~ appendSpells ~ spells:", spells)
    spells.forEach(spell => {
        console.log(spell)
        const newSpell = document.createElement("li");
        newSpell.classList.add("red");
        newSpell.innerHTML = `${spell.name}:${spell.description}` ;
        general.appendChild(newSpell)
    })
}

appendSpells()

  
// let calcul = 3;
// let calcul2 = 3;


// if (calcul === 2) {
//     alert('c\'est validé')
// } else if (calcul2 ===1) {
//     console.log('deuxieme condition')
// } else {
//     console.log('nul')
// }



// // console.log(calcul)


// for (let i = 0; i <= 5; i++) {
//     console.log(i);
//   }

//   const greet = (name) => {
//     console.log(`Hello, ${name}!`);
//   };


//   greet("John");
//   greet("Jane");

//   const avatarOui = document.getElementById("avatarOui");
  
//   console.log("🚀 ~ avatarOui:", avatarOui)

//   avatarOui.src = "non.jpeg";
// //   avatarOui.src = "oui.jpg";

//   let elements = document.querySelectorAll(".square");
//   console.log("🚀 ~ elements:", elements)

// elements.forEach(element => {
//     element.style.backgroundColor = "red";
//     element.style.width = "500px";
//     element.style.height = "500px";
// });


// let header = document.querySelector(".header-title");
// console.log("🚀 ~ header:", header)
// console.log("🚀 ~ header innerHTML:", header.innerHTML)


// header.innerHTML = "CV de Non-Non";
// console.log("🚀 ~ header innerHTML:", header.innerHTML)