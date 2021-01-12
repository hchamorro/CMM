const friendsList = document.querySelector('#friendsList');

const friends = [
  { name: 'Ray', color: 'red', background: 'bg-blue' },
  { name: 'Oscar', color: 'orange', background: 'bg-green' },
  { name: 'Gwen', color: 'green', background: 'bg-orange' },
  { name: 'Bob', color: 'blue', background: 'bg-red' },
  { name: 'Marie', color: 'magenta', background: 'bg-gray' },
];

let randomizedFriends = shuffle(friends);

function renderFriends() {
  randomizedFriends.forEach((friend) => {
    div = document.createElement('div');

    div.textContent = friend.name;
    div.setAttribute(
      `class`,
      `d-f jc-c f-20p card ${friend.color} ${friend.background}`
    );
    friendsList.appendChild(div);

    console.log('this is currnet friend', friend);
  });
}

// this is the fisher yates shuffle
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

renderFriends();
