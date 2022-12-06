//SOME GLOBAL CONSTANTS

//HEADER
const myHeading = document.getElementsByTagName("h1")[0];
const giveMeAName = document.querySelector(".input-and-sumbit-cont")
let chosenName
// let activity1 = 'new-activity-1'//variable for first extra function
// let activity2 = 'new-activity-2'//variable for second extra function

// //PICTURE
// const petPic = document.getElementById("myPetPic") //The pic that appears when a pet is initially chosen

//CONSOLE IMAGE
const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");

const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");

const c1 = document.getElementById("c1");
const c2_munch = document.getElementById("c2-munch");
const c3_slurp = document.getElementById("c3-slurp");
const c4_extra1 = document.getElementById("c4-extra1");
const c5_extra2 = document.getElementById("c5-extra2");
const c6 = document.getElementById("c6");

const d1 = document.getElementById("d1");
const d2_button1 = document.getElementById("d2-button1");
const d3_button2 = document.getElementById("d3-button2");
const d4_button3 = document.getElementById("d4-button3");
const d5_button4 = document.getElementById("d5-button4");
const d6 = document.getElementById("d6");

const e1 = document.getElementById("e1");

//'CHOOSE A PET' BUTTONS
const caseyButton = document.getElementById("casey");
const matthewButton = document.getElementById("matthew")
const adamButton = document.getElementById("adam")
const nickButton = document.getElementById("nick")
const shinaButton = document.getElementById("shina")

//CHARACTERISTICS - TYPE, NAME, AGE - THESE IDENTIFY WHERE THE TEXT APPEARS IN THE HTML
const type = document.getElementById("type")
const myNewName = document.getElementById("my-new-name")
const age = document.getElementById("age")

//SCORES - THESE IDENTIFY WHERE THE TEXT APPEARS IN THE HTML
const happiness = document.getElementById("happiness") //SCORE No.1
const cleanliness = document.getElementById("cleanliness") //SCORE No.2
const hunger = document.getElementById("hunger") //SCORE No.3

let scoreName4; //this is a variable that holds the name of the first score category unique to each pet
let scoreName5; //this is a variable that holds the name of the second score category unique to each pet

//SCORES THAT ARE UNIQUE TO EACH PET - THESE IDENTIFY WHERE THE TEXT APPEARS IN THE HTML
const number4 = document.getElementById("number-4") //SCORE No.4
const number5 = document.getElementById("number-5") //SCORE No.5

//BUTTONS COMMON TO ALL PETS
const feed = document.getElementById("feed")
const drink = document.getElementById("drink")
//BUTTONS UNIQUE TO EACH PET
const extra1 = document.getElementById("extra1")
const extra2 = document.getElementById("extra2")

//THE MAIN PCTURES FOR THE CONSOLE
a1.src = "./Images/console/tamagochi_A1.png";
a2.src = "./Images/console/tamagochi_A2.png"; //This one changes when the pet is chosen
a3.src = "./Images/console/tamagochi_A3.png";

b1.src = "./Images/console/tamagochi_B1.png";
b2.src = "./Images/console/tamagochi_B2.png"; // This is where the pet pic appears
b3.src = "./Images/console/tamagochi_B3.png";

c1.src = "./Images/console/tamagochi_C1.png";
c2_munch.src = "./Images/console/tamagochi_C2_munch_unlit.png";
c3_slurp.src = "./Images/console/tamagochi_C3_slurp_unlit.png";
c4_extra1.src = "./Images/console/tamagochi_C4_extra1_unlit.png";
c5_extra2.src = "./Images/console/tamagochi_C5_extra2_unlit.png";
c6.src = "./Images/console/tamagochi_C6.png";

d1.src = "./Images/console/tamagochi_D1.png";
d2_button1.src = "./Images/console/tamagochi_D2_button1_unlit.png";
d3_button2.src = "./Images/console/tamagochi_D3_button2_unlit.png";
d4_button3.src = "./Images/console/tamagochi_D4_button3_unlit.png";
d5_button4.src = "./Images/console/tamagochi_D5_button4_unlit.png";
d6.src = "./Images/console/tamagochi_D6.png";

e1.src = "./Images/console/tamagochi_E1.png";

class Cyberpet {
    constructor(type, name, age, happiness, cleanliness, hunger) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.happiness = happiness;
        this.cleanliness = cleanliness;
        this.hunger = hunger;
    }
    giveFood() {
        // con
        this.hunger -= 10;
        this.cleanliness -= 10;
        // pro
        this.happiness += 5;
    }
    giveDrink() {
        // con
        this.hunger -= 50;
        this.cleanliness -= 5;
        // pro
        this.happiness += 30;
    }


}

class FerretPet extends Cyberpet {
    constructor(type, name, age, happiness, cleanliness, hunger, wriggle, dig) {
        super(type, name, age, happiness, cleanliness, hunger)
        this.score4 = wriggle //we use a 'score4' in the 'this.' part to call the unique characteristic/activity
        this.score5 = dig //we use 'score5' in the 'this.' part to call the unique characteristic/activity

    }
    addCasey() {
        number4.textContent = `Wriggle: ${chosenName.score4}` //This is where you put your unique characteristics
        number5.textContent = `Dig: ${chosenName.score5}` //This is where you put your unique characteristics
    }
    giveFood() {
        // con
        this.hunger -= 40;
        this.cleanliness -= 40;
        // pro
        this.happiness += 50;
    }
    giveDrink() {
        // con
        this.hunger -= 5;
        this.cleanliness -= 5;
        // pro
        this.happiness += 5;
    }
    extra1() {
        // petPic.src = "./images/ferret.wriggle.gif"
        this.hunger -= 100
    }
    extra2() {

    }
}


class DogPet extends Cyberpet {
    constructor(type, name, age, happiness, cleanliness, hunger, panting, dribbling) {
        super(type, name, age, happiness, cleanliness, hunger)
        this.score4 = panting //we use 'score4' in the 'this.' part to call the unique characteristic/activity
        this.score5 = dribbling //we use 'score5' in the 'this.' part to call the unique characteristic/activity
    }
    addMatthew() {
        number4.textContent = `Panting: ${chosenName.score4}` //This is where you put your unique characteristics
        number5.textContent = `Dribbling: ${chosenName.score5}` //This is where you put your unique characteristics
    }
    extra1() {
        // petPic.src = "./images/dribbledog.gif"
    }
    extra2() {

    }
}

//each constant has 8 entries: Type, name, age, happiness, cleanliness, hunger plus two extra
const MatthewPet = new DogPet("dog", "", "23", 50, 50, 50, 30, 80)
const AdamPet = new Cyberpet("cat", "", "27", 50, 55, 52, 50, 64)
const ShinaPet = new Cyberpet("mouse", "", "32", 50, 50, 50, 50, 50)
const NickPet = new Cyberpet("hamster", "", "580", 50, 50, 50, 50, 50)
const CaseyPet = new FerretPet("Ferret", "Niffler", "10", 50, 50, 50, 50, 50)

//We use the petArray below as a means of capturing the pet in each of the buttons (caseypet, matthewpet, etc...)
let petArray = [CaseyPet, MatthewPet, AdamPet, ShinaPet, NickPet]

//renderData() is initailly called when choosing a pet and then each time that you press one of the yellow buttons. 
const renderData = () => {
    type.textContent = `Type: ${chosenName.type}`;
    myNewName.textContent = `Name: ${chosenName.name}`;
    age.textContent = `Age: ${chosenName.age}`;
    happiness.textContent = `Happiness: ${chosenName.happiness}`;
    cleanliness.textContent = `Cleanliness: ${chosenName.cleanliness}`
    hunger.textContent = `Hunger: ${chosenName.hunger}`
    number4.textContent = `${scoreName4}: ${chosenName.score4}`;
    number5.textContent = `${scoreName5}: ${chosenName.score5}`;
    console.log(`wriggle is ${chosenName.wriggle}`)
    console.log(`wriggle is ${chosenName}[activity1]`)
}

//CASEY BUTTON
//IMAGE SIZE FOR PICTURES IS 480px WIDE by 306px HIGH
caseyButton.addEventListener("click", () => {
    a2.src = "./Images/console/tamagochi_A2_casey.png"; //Name on top of console
    b2.src = "./images/ferret_1.png"
    chosenName = petArray[0]
    CaseyPet.addCasey();// new code
    scoreName4 = 'wriggle';
    scoreName5 = 'dig';
    renderData();
})

//MATTHEW BUTTON
//IMAGE SIZE FOR PICTURES IS 480px WIDE by 306px HIGH
matthewButton.addEventListener("click", () => {
    chosenName = petArray[1]
    a2.src = "./Images/console/tamagochi_A2_matthew.png"; //Name on top 
    MatthewPet.addMatthew(); // Casey's code!!!! Yay!
    scoreName4 = 'panting'
    scoreName5 = 'dribbling'
    renderData();
})

//ADAM BUTTON
//IMAGE SIZE FOR PICTURES IS 480px WIDE by 306px HIGH
adamButton.addEventListener("click", () => {
    chosenName = petArray[2]
    a2.src = "./Images/console/tamagochi_A2_adam.png"; //Name on top 
    AdamPet.addAdam(); // Casey's code!!!! Yay!
    scoreName4 = ''
    scoreName5 = ''
    renderData();
})

//SHINA BUTTON
//IMAGE SIZE FOR PICTURES IS 480px WIDE by 306px HIGH
// shinaButton.addEventListener("click", () => {
//     chosenName = petArray[3]
//     // a2.src = ""; //Name on top 
//     ShinaPet.addShina(); // Casey's code!!!! Yay!
//     scoreName4 = ''
//     scoreName5 = ''
//     renderData();
// })

//NICK BUTTON
//IMAGE SIZE FOR PICTURES IS 480px WIDE by 306px HIGH
// nickButton.addEventListener("click", () => {
//     chosenName = petArray[4]
//     a2.src = "./Images/console/tamagochi_A2_nick.png"; //Name on top 
//     NickPet.addNick(); // Casey's code!!!! Yay!
//     scoreName4 = ''
//     scoreName5 = ''
//     renderData();
// })


//INTERACTION BUTTONS

// MUNCH BUTTON
d2_button1.addEventListener("mouseenter", () => {
    c2_munch.src = "./images/console/tamagochi_C2_munch_lit.png"
})
d2_button1.addEventListener("mouseleave", () => {
    c2_munch.src = "./images/console/tamagochi_C2_munch_unlit.png"
    d2_button1.src = "./images/console/tamagochi_D2_button1_unlit.png"
})
d2_button1.addEventListener("click", () => {
    d2_button1.src = "./images/console/tamagochi_D2_button1_lit.png"

    chosenName.giveFood();
    // checkCondition();
    // flag = true;
    renderData();
})

//SLURP BUTTON
d3_button2.addEventListener("mouseenter", () => {
    c3_slurp.src = "./images/console/tamagochi_C3_slurp_lit.png"
})
d3_button2.addEventListener("mouseleave", () => {
    c3_slurp.src = "./images/console/tamagochi_C3_slurp_unlit.png"
    d3_button2.src = "./images/console/tamagochi_D3_button2_unlit.png"
})
d3_button2.addEventListener("click", () => {
    d3_button2.src = "./images/console/tamagochi_D3_button2_lit.png"
    chosenName.giveDrink()
    renderData();
})

//EXTRA1 BUTTON
d4_button3.addEventListener("mouseenter", () => {
    c4_extra1.src = "./images/console/tamagochi_C4_extra1_lit.png"
})
d4_button3.addEventListener("mouseleave", () => {
    c4_extra1.src = "./images/console/tamagochi_C4_extra1_unlit.png"
    d4_button3.src = "./images/console/tamagochi_D4_button3_unlit.png"
})
d4_button3.addEventListener("click", () => {
    d4_button3.src = "./images/console/tamagochi_D4_button3_lit.png"
    chosenName.extra1();
    renderData();
})

//EXTRA2 BUTTON
d5_button4.addEventListener("mouseenter", () => {
    c5_extra2.src = "./images/console/tamagochi_C5_extra2_lit.png"
})
d5_button4.addEventListener("mouseleave", () => {
    c5_extra2.src = "./images/console/tamagochi_C5_extra2_unlit.png"
    d5_button4.src = "./images/console/tamagochi_D5_button4_unlit.png"
})
d5_button4.addEventListener("click", () => {
    d5_button4.src = "./images/console/tamagochi_D5_button4_lit.png"
    chosenName.extra2();
    renderData();
})