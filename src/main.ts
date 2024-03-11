import './css/styles.css';
import { characters } from './characters.ts';
import { Advisor } from './advisor.ts';

const casfsa = new Advisor('Mi abuela', 'Baratheon', 23, false, 'no');
console.log(casfsa.speak());

const charactersList = document.querySelector('.characters-list');

characters.forEach((character) => {
  const characterHTML = `
      <li class="character col">
        <div class="card character__card">
          <img
            src="${character.imageURL}"
            alt="${character.name} ${character.family}"
            class="character__picture card-img-top"
          />
          <div class="card-body">
            <h2 class="character__name card-title h4">
            ${character.name} ${character.family}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${character.age} años</li>
                <li>
                  Estado: ${
                    character.isAlive
                      ? '<i class="fas fa-thumbs-up"></i>'
                      : '<i class="fas fa-thumbs-down"></i>'
                  }
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Años de reinado: ${character.reignYears}</li>
                <li>Arma: ${character.weapon}</li>
                <li>Destreza: ${character.skill}</li>
                <li>Peloteo: ${character.flattery}</li>
                <li>Asesora a: ${character.advisorTo}</li>
                <li>Sirve a: ${character.serves}</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
      </li>
    `;

  charactersList.innerHTML += characterHTML;
});
