(function (){
  var beginButton = document.getElementById('begin');
  beginButton.onclick = startSceneOne;

  function startSceneOne() {
    var newSection = document.createElement('section');
    var position = document.getElementsByTagName('main')[0];
    position.appendChild(newSection);
    newSection.setAttribute('id', 'one')

    var newH2 = document.createElement('h2');
    var newText = document.createTextNode('You are a llama')
    newH2.appendChild(newText);
    var position = document.getElementsByTagName('section')[0];
    position.appendChild(newH2);

    var newP = document.createElement('p');
    var newText = document.createTextNode('To be precise: You are a pooor llama. A very poor llama');
    newP.appendChild(newText);
    var position = document.getElementsByTagName('section')[0];
    position.appendChild(newP);

    var newP = document.createElement('p');
    var newText = document.createTextNode('You desire wealth. So you must quest');
    newP.appendChild(newText);
    var position = document.getElementsByTagName('section')[0];
    position.appendChild(newP);

    var newP = document.createElement('p');
    var newText = document.createTextNode('While walkding down a road and feeling sorry about your life you come to a crossroads.');
    newP.appendChild(newText);
    var position = document.getElementsByTagName('section')[0];
    position.appendChild(newP);

    var newP = document.createElement('p');
    var newText = document.createTextNode('Four roads lie ahead. As you sit and think about where to go a wise soul appears.');
    newP.appendChild(newText);
    var position = document.getElementsByTagName('section')[0];
    position.appendChild(newP);

    var newP = document.createElement('p');
    var newText = document.createTextNode('You whimper to the soul: "I want gold, but don\'t know where to go."');
    newP.appendChild(newText);
    var position = document.getElementsByTagName('section')[0];
    position.appendChild(newP);

    var newButton = document.createElement('button');
    newButton.textContent = 'Next';
    var position = document.getElementsByTagName('section')[0];
    position.appendChild(newButton);
    newButton.setAttribute('id', 'nextButton')

    var nextButton1 = document.getElementById('nextButton');
    nextButton1.onclick = startSceneTwo;
};

var startSceneTwo = function() {
  var newSection = document.createElement('section');
  var position = document.getElementsByTagName('main')[0];
  position.appendChild(newSection);

  var newP = document.createElement('p');
  var newText = document.createTextNode('The soul stares and considers your wretched impoverished llama-status');
  newP.appendChild(newText);
  var position = document.getElementsByTagName('section')[0];
  position.appendChild(newP);

  var newP = document.createElement('p');
  var newText = document.createTextNode('After a pretty awkward amount of time the soul finally replies:');
  newP.appendChild(newText);
  var position = document.getElementsByTagName('section')[0];
  position.appendChild(newP);

  var newP = document.createElement('p');
  var newText = document.createTextNode('The answer you seek is related to the four roads ahead of you and the one you have left behind. How many of them must you explore to find what you are looking for?');
  newP.appendChild(newText);
  var position = document.getElementsByTagName('section')[0];
  position.appendChild(newP);

  var newLabel = document.createElement('label');
  newLabel.textContent = 'Answer the riddle here: ';
  var position = document.getElementsByTagName('section')[0];
  position.appendChild(newLabel);
  newLabel.setAttribute('type', 'text')

  var newInput = document.createElement('input');
  var position = document.getElementsByTagName('section')[0];
  position.appendChild(newInput);
  newInput.setAttribute('type', 'text')
  newInput.setAttribute('id', 'answer')
  newInput.setAttribute('name', 'answerRiddle')
  newInput.setAttribute('placeholder', 'Enter Your Answer Here')

  var newButton = document.createElement('button');
  newButton.textContent = 'Answer';
  var position = document.getElementsByTagName('section')[0];
  position.appendChild(newButton);
  newButton.setAttribute('id', 'nextButton2')

  var nextButton2 = document.getElementById('nextButton2');
  nextButton2.onclick = game;
  };

  var game = function() {
    var againDummie = '"Have you reconsidered the answer?"'
    var aboutTime = '"Indeed, the path to enlightenment comes from exploring all possible paths ahead of you while leaving the past where it is."'
    var pissOff = '"You are most wise and thoughtful young llama, I believe I do not have anything more to teach you."'
    var stupidAnsw = "You will never find what you seek if you do not explore everything that is ahead of you."
    var stupiderAnsw = "Ambition is admirable, but realize what is possible. There are four roads ahead of you and one behind."
    var stupidestAnsw = "The desire to seek answers in your past and in your future will only muddle your mind sending you into an infinite loop."
    var goneGenie = "In a puff of light and dust the wise soul disappears and in its place is a pile of gold."

    var truth = 4;
    var checkCorrect = function(answer) {
      if(answer === truth) {
        alert(aboutTime);
        return true;
      } else {
        return false;
      }
    };
    function WinGold (gold, pile) {
      this.gold = 1000;
      this.pile = 1000;
      this.winner = function() {
        return this.pile + this.gold;
      };
    };

    var moreGold = new WinGold;

    var wisdom = Number.parseInt(prompt());

    while(true) {
      if (checkCorrect(wisdom)) {
        alert(pissOff);
        alert(goneGenie);
        alert('Congrats you recieved ' + moreGold.winner() + ' gold from all that nonsense. Now consider why a llama would ever need gold in the first place...');
      break;
      } else if(wisdom > 5){
          alert(stupiderAnsw);
        } else if (wisdom < 4) {
          alert(stupidAnsw);
        } else if (wisdom === 5) {
          alert(stupidestAnsw);
        } else {
          console.log()
        }

      wisdom = Number.parseInt(prompt(againDummie));

      }
  };
})();
