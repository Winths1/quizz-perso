(function(){

      //Création des fonctions pour mettre en place le HTML
    function createNode(element) {
      return document.createElement(element);
    };
    function append(parent, el) {
    return parent.appendChild(el);
    };

    //Fonction pour créer le questionnaire
    function buildQuiz(){
      //Création du formulaire
      let form = createNode('form');
      append(quizContainer, form);

      return myQuestions.map((a,b) =>{
        //Affichage de la question
        let quest = createNode('p');
        append(form, quest);
        quest.textContent = a.question;

        //Affichage des boutons radio
        //Div pour bouton radio et label
        let div = createNode('div');
        div.className = 'answers';
        append(form, div);

        //Création d'une boucle pour chaque réponse possible
        for (x in a.answers){

          //Création des label
          let lab = createNode('label');
          lab.for = x;
          lab.textContent = a.answers[x] ;
          append(div, lab);
          
          //Création des input Radio
          let radio = createNode('input');
          radio.type = "radio";
          radio.name = "question"+b;
          radio.value = x;
          append(lab , radio)
        }
      });
    } // fin de la construction du quizz
  
    function showResults(){
      //Sélection de tous les éléments dans quizContainer
      var answersContainer = quizContainer.querySelectorAll('.answers');
      console.log(answersContainer);

      //Initialisation du compteur de bonne réponses
      let correctAns = 0;

      return myQuestions.map((a,b) => {
        //Récupérer les infos dans les boutons radio
        var ansContainer = answersContainer[b];
        console.log(ansContainer);
        //Récupération du bouléen si radio cochée
        var inpRadio = `question ${b}:checked`;
        console.log(inpRadio);
        //Récupération du radio cochée
        var userAns = (ansContainer.querySelector(label)).value;
        console.log(userAns)

        if(userAns === a.correctAnswer){
          correctAns++;

          ansContainer[b].style.color = 'lightgreen';
        } else {
          ansContainer[b].style.color = 'red';
        }
        resultsContainer.textContent = `${correctAns} sur ${myQuestions.length} corrects`

      })
    } // fin des résultats
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('resultats');
    const submitButton = document.getElementById('submit');

    const myQuestions = [
      {
        question: "Pourquoi George Lucas a t-il commencé par les épisodes IV, V et VI ?",
        answers: {
          a: "Parce qu'il pensait ne réaliser que cette trilogie",
          b: "Parce qu'il la pensait plus commerciale",
          c: "Parce que c'est la seule qu'il a été autorisé de faire"
        },
        correctAnswer: "b"
      },
      {
        question: "Comment se nomme le père de Boba Fett ?",
        answers: {
          a: "Jango Fett",
          b: "Melo Fett",
          c: "Ango Fett"
        },
        correctAnswer: "a"
      },
      {
        question: "A qui a été confié Leia, fille de Anakin Skywalker et Padme Amidala ?",
        answers: {
          a: "Au sénateur Organa et son épouse",
          b: "A la famille Solo",
          c: "A Ower Lars, fils de Shmi Skywalker"
        },
        correctAnswer: "a"
      },
      {
          question: "Comment Anakin est libéré de son statut d'esclave ?",
          answers:{
              a:"En étant acheté par Obi-Wan Kenobi qui l'affranchi",
              b:"En gagnant la course de la Boonta",
              c:"En se mariant avec Padme"
          },
          correctAnswer:"b"
      },
      {
          question:"Sur quelle planète a grandi Luke Skywalker ?",
          answers:{
              a:"Naboo",
              b:"Conruscant",
              c:"Tatooine"
          },
          correctAnswer:"c"
      },
      {
          question:"Quel est le nom Sith de Palpatine ?",
          answers:{
            a:"Dark Sidious",
            b:"Dark Maul",
            c:"Dark Vador"
          },
          correctAnswer:"a"
      },
      {
          question:"De quelle espèce fait partie Jar Jar Binks ?",
          answers:{
              a:"Ewoks",
              b:"Gungan",
              c:"Wookie"
          },
          correctAnswer:"b"
      },
      {
          question:"Dans quel épisode Padme et Anakin se marient-ils en secret ?",
          answers:{
            a:"La Menace Fantôme",
            b:" L'Attaque des Clones",
            c:"La Revanche des Sith"
          },
          correctAnswer:"b"
      },
      {
          question:"Pourquoi les Ewoks aident-ils finalement les membres de l'Alliance Rebelle ?",
          answers:{
            a:"Parce qu'ils pensent que C3PO est un dieu",
            b:"Pour protéger leur territoire",
            c:"Parce qu'ils y sont obligés par Luke"
          },
          correctAnswer:"a"
      },
      {
        question:"Où a lieu le combat entre Yoda et Palpatine dans l'épisode III ?",
        answers:{
          a:"Au sénat",
          b:"A l'académie Jedi",
          c:"Dans le bureau de Palpatine"
        },
        correctAnswer:"a"
    }
    ];
  
    // Affichage du quizz
    buildQuiz();
    
    // Gestionnaire d'évènement sur le bouton pour affichage des résultats
    submitButton.addEventListener('click', showResults);

    console.log(myQuestions);
    
  })();