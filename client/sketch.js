let xOffset = 0;
let yOffset = 0;
let mouseDragging = false;
let connections = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    if (localStorage.getItem("connections") == null) {
        let string = JSON.stringify(connections);
        localStorage.setItem("connections",string);
    }
  };
  
function draw() {
    background(0);
    fill(255);
    textFont('Comfortaa');
    textSize(50);
    text('CLSTRS', ((window.innerWidth - (50 * 3)) / 2), 75);
    drawCenterNode();
    drawNodes();
    addFriends();
};

function addFriends() {
    let addFriendsInput = createInput('');
    addFriendsInput.position((windowWidth / 2) - 80, 100);
    let friendName;
    addFriendsInput.input(() => {

        friendName = addFriendsInput.value();
        text(friendName, 5, 100);

        if (friendName != "" && keyCode === ENTER) {
            connections += friendName;
            localStorage.setItem("connections", string) 
            addFriendsInput = "";
            console.log(arrayConnections);
        }
      });

    

    text(localStorage.getItem("connections",100,100));
    let totalConnections = localStorage.getItem("connections");
    let arrayConnections = JSON.parse(totalConnections);
}

function drawCenterNode() {
    fill(255);
    let radius = 100;
    circle(200 + xOffset,200 + yOffset,20);
    circle(((window.innerWidth) / 2) + xOffset, ((window.innerHeight) / 2) + yOffset, radius); 
    
    for (let i = radius; i > 0; i--) {
        fill(0,200,200);
        text("testst",100,100);
        
        circle(((window.innerWidth) / 2) + xOffset, ((window.innerHeight) / 2) + yOffset, radius - i); 
    }
}

function mousePressed() {
    mouseDragging = true;
}

function mouseReleased() {
    mouseDragging = false;
}

function mouseDragged() {
    if (mouseDragging) {
        xOffset = constrain(xOffset - (pmouseX - mouseX), - windowWidth / 2, windowWidth / 2);
        yOffset = constrain(yOffset - (pmouseY - mouseY), - windowHeight / 2, windowHeight / 2);
    }
}

