import Product from "./productsClass.js";

//Functions for drop down navigation
function showList(){
    document.getElementById("list").style.display = "inherit";
}
function hideList(){
    document.getElementById("list").style.display = "none";
}

//Listeners for the drop down navigation list
document.getElementById("listItem3").addEventListener("mouseover", showList);
document.getElementById("listItem3").addEventListener("mouseleave", hideList);


//Lets get object oriented!

//listeners for each button

// document.getElementById("bikesButton").addEventListener("click", hideContent);
document.getElementById("bikesButton").addEventListener("click", showBikes);
document.getElementById("scootersButton").addEventListener("click", showScooters);
document.getElementById("surfboardsButton").addEventListener("click", showSurfboards);
document.getElementById("motorcycleButton").addEventListener("click", showMotorcycles);

//functions to  display each object type

// productImage,
// productName,
// productMake,
// productModel,
// productPrice,
// productBlurb

//bikes
const eBike1 = new Product(
    "images/magnum1.png",
    "Magnum Voyager",
    "Magnum", 
    "VG5000",
    "$3000",
    "This is some serious riding flex.<br> Ever thought about looking awesome and going fast at the same time?<br> Look no further.")
const eBike2 = new Product(
    "images/magnum2.png",
    "Magnum Summit",
    "Magnum", 
    "SM6000",
    "$5000",
    "Picture this: Mountains. Summits. Speed. Heavy Metal. Luxury."
)
const eBike3 = new Product(
    "images/blacktrail.png",
    "Black Trail",
    "Black", 
    "TRAILNATOR2001",
    "$8000",
    "Don't let the name fool you, this bike is blue.<br> Like the colour of the lakes you'll be jumping with all that speed!"
)
const eBike4 = new Product(
    "images/blacktrail2.png",
    "Black All Terrain",
    "Black", 
    "ALTEREGO3456",
    "$15000",
    "Want more than the ability to jump lakes? Look no further.<br>Top speed 200km/h.<br> Legal? Hell no!"
)

//scooters

const scooter1 = new Product(
"images/erider40.jpg",
"Erider 4.0",
"Erider", 
"4000",
"$3000",
"Whoa. You're seeing this right.<br> Just $3000 for the 4000. Done deal!")
const scooter2 = new Product(
    "images/ETRAX10.jpeg",
    "ETRAX 0.10 ",
    "Etrax", 
    "0.10",
    "$5000",
    "Hey, think the 0.10 is awesome?<br>That means you're awesome.<br>Go on, you deserve it."
)
const scooter3 = new Product(
    "images/kugoom4.jpg",
    "Kugoo M4 PRO",
    "Kugoo", 
    "M4",
    "$10000",
    "Kugoo.<br> You could beat a Kangaroo on this, hands down."
)
const scooter4 = new Product(
    "images/ZukboardCity.jpg",
    "Zukboard City",
    "Zukboard", 
    "V2",
    "$15000",
    "Sounds like Zukerburg has some competition. <br> I'd trust this piece of equipment more than that piece of <br> <strong>-This has been censored at the advice of my lawyers-</strong>"
)

//surfboards

    const surfboard1 = new Product(
    "images/efoilcruiser.jpg",
    "eFoil Cruiser",
    "Lift2", 
    "5'6",
    "$15000",
    "If you're looking for your next obsession, it is right here."
    )
    const surfboard2 = new Product(
    "images/Fliteboard.webp",
    "Fliteboard",
    "eFoil", 
    "4000",
    "$50000",
    "Not going to lie, this is gorgeous.<br>Just like the people on your yacht you rich mofo."
    )
    const surfboard3 = new Product(
    "images/ripsnorter.jpg",
    "Ripsnorter v2.0",
    "ripsnorter", 
    "2",
    "$15000",
    "With a name like Ripsnorter its any wonder why this is still in stock..."
    )
    const surfboard4 = new Product(
    "images/flyer1.PNG",
    "Flyer One Carbon Edition",
    "Flyer", 
    "1",
    "$40000",
    "Sleek. Carbon. Sexy. Fly, in style!"
    )

//motorcycles

    const moto1 = new Product(
        "images/lightning.jpg",
        "Lightning LS-218",
        "Lightning", 
        "9000",
        "$500000",
        "Whats that noise?<br>Your bank balance being obliterated."
    )
    const moto2 = new Product(
        "images/arcvector.jpg",
        "Arc Vector",
        "Arc", 
        "Premium",
        "$450000",
        "This is a value-based bike.<br> Their words not mine!"
    )
    const moto3 = new Product(
        "images/zerosrf.jpg",
        "Zero SR/F",
        "Zero", 
        "SR/F",
        "$40000",
        "You might have a lot more friends after this purchase....girlfriends!"
    )
    const moto4 = new Product(
        "images/harleylivewire.jpg",
        "Harley-Davidson LiveWire",
        "Harley Davidson", 
        "FancyPants",
        "$400000",
        "You can be your own gang with this one! <br> (You'll be too quiet for a real gang)"
    )


//functions for showing each product type

function showBikes(){
document.getElementById("title").innerText = "Prepare, for the eBike revolution!"
document.getElementById("product1").innerHTML = eBike1.productProfile();
document.getElementById("product2").innerHTML = eBike2.productProfile();
document.getElementById("product3").innerHTML = eBike3.productProfile();
document.getElementById("product4").innerHTML = eBike4.productProfile();
}

function showScooters(){
document.getElementById("title").innerText = "Scoot your boot, in style!"
document.getElementById("product1").innerHTML = scooter1.productProfile();
document.getElementById("product2").innerHTML = scooter2.productProfile();
document.getElementById("product3").innerHTML = scooter3.productProfile();
document.getElementById("product4").innerHTML = scooter4.productProfile();
}

function showSurfboards(){
document.getElementById("title").innerText = "You read that right - Electric Surfboards!"
document.getElementById("product1").innerHTML = surfboard1.productProfile();
document.getElementById("product2").innerHTML = surfboard2.productProfile();
document.getElementById("product3").innerHTML = surfboard3.productProfile();
document.getElementById("product4").innerHTML = surfboard4.productProfile();
}

function showMotorcycles(){
document.getElementById("title").innerText = "Vroom vroom mother trucker"
document.getElementById("product1").innerHTML = moto1.productProfile();
document.getElementById("product2").innerHTML = moto2.productProfile();
document.getElementById("product3").innerHTML = moto3.productProfile();
document.getElementById("product4").innerHTML = moto4.productProfile();
}