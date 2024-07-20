// score 


 // DECLARATION DES VARIABLES
let q=1;
let cpt=1;


//Bouton 1 : sert à passer d'une question à une autre, fait progresser la barre de progression + le compte des questions
//           une fois que le compteur de questions (q) arrive à 11, déclenche certains evenements
 $(".button1").on({
"click": function() {
         let id = "#q"+q;
         q=q+1;
         cpt++;
         let idSuiv = "#q"+q;
         $(id).hide();
         $(idSuiv).show();

         $("#progquest").html(q+"/10");
         $("#bar").attr("value",q);
         
         if (q>10){
             $(".button1").hide();
             $(".button3").show();
             $("#progquest").html("10/10 <br/> Bravo");
             $("#resultat").html("Cliquer sur \"Vérifiez vos réponse\"");

         }
     
         } 
 });

//Bouton 2 : bouton reset qui fonctionne en JQuery, sans quoi cela nécessite de faire appel à la balise form (ce qui casse tout le code en échange...)
//           le bouton parcourt les flag de chaque réponse et les reset selon la méthode d'input utilisée. Moins élégant que le bouton reset HTML mais fonctionnel...

 $(".button2").on({
 "click": function(){
         let r=confirm("voulez-vous recommencer ?");
         if(r==true){

        location.reload();

        $("#q1_reponse").prop("selectedIndex",0);
        $("[name=q2_reponse]:checked").prop('checked', false);
        $("[name=q4_reponse]:checked").prop('checked', false);
        $("[name=q6_reponse]:checked").prop('checked', false);
        $("[name=q10_reponse]:checked").prop('checked', false);

        $("[name=q8_reponse]").val("");
        $("#q3_reponse").prop("selectedIndex",0);
        $("[name=q5_reponse]").prop("selectedIndex",0);
        $("[name=q5_reponse]").val(10);
        $("[name=q7_reponse]").val(10);
        $("#q9_reponse").val("");

         }
     }
 });

//Bouton 3 : apparait dès que q=11, sert à initialiser le compte des points. Le code est assez transparents
//           dans l'idée : capturer un input dans une variable et faire un test pour savoir comment se gère le compte de points ensuite

 $(".button3").on({
     "click" : function(){
let score = 0; // initialisation du score
let feedback = "VOS RESULTATS <br/><ul>"; // initialisation du feedback

// EVALUATION DE LA QUESTION 1
let rep1 = $("#q1_reponse").val();
if (rep1 == 1) {
feedback += "<li>Question 1 : OK (+1)</li>";
score = score + 1;
} else {
feedback += "<li>Question 1 : NON, la fausse enseigne était JQu'Hair'y</li>";
}

// EVALUATION DE LA QUESTION 2
let rep2 = 0;
$("input[name=q2_reponse]:checked").each(function() { // parcours des cases cochées
if ($(this).val()==1) { // on ajoute 1 pour les rép justes
 rep2 = rep2 + 1;
} else { // on enlève 0,5 pour les rép fausses
 rep2 = rep2 - 0.5;
}
});

if (rep2 == 3) {
feedback += "<li>Question 2 : OK (+1)</li>";
score = score + 1;
} else {
feedback += "<li>Question 2 : NON, Eric Judor était l'intru (on a des preuves que les autres ont des cheveux)</li>";
}


// EVALUATION DE LA QUESTION 3
let rep3 = $("#q3_reponse").val();
if (rep3 == 1) {
feedback += "<li>Question 3 : OK (+1)</li>";
score = score + 1;
} else {
feedback += "<li>Question 3 : NON, c'était Jamel Debbouze !</li>";
}

// EVALUATION DE LA QUESTION 4
let rep4 = $("input[name=q4_reponse]:checked").val();
if (rep4 == 1) {
feedback += "<li>Question 4 : OK (+1)</li>";
score = score + 1;
} else {
feedback += "<li>Question 4 : NON, c'était la coupe Macaron (miam miam)</li>";
}

// EVALUATION DE LA QUESTION 5
let rep5 = $("#cheveu_taille").val();
if (rep5==17){
    feedback += "<li>Question 5 : OK (+1)</li>";
    score = score+1;
} else {
    feedback += "<li>Question 5 : NON, le plus long dreadlock du monde fait 17m</li>";
}

// EVALUATION DE LA QUESTION 6

let rep6 = $("input[name=q6_reponse]:checked").val();
if (rep6==1){
    feedback += "<li>Question 6 : OK (+1)</li>";
    score = score+1;
} else {
    feedback += "<li>Question 6 : NON, bien qu'ils ont tous la même coupe le premier était Bardock, le père de Goku</li>";
}

//EVALUATION DE LA QUESTION 7
let rep7=$("#fifi_couleur").val();
    console.log(rep7)
if ((rep7=="#ff8000") || (rep7=="#ff8040")){
    feedback += "<li>Question 7 : OK (+1)</li>";
    score = score+1;
} else {
    feedback += "<li>Question 7 : NON, Fifi Brindacier est rousse ! (couleur capilaire statistiquement assez rare)</li>"
}

// EVALUATION DE LA QUESTION 8
let rep8 = $("#age_calvitie").val();
if (rep8==30){
    feedback += "<li>Question 8 : OK (+1)</li>";
    score = score+1;
} else {
    feedback += "<li>Question 8 : NON, en moyenne la calvitie se développe vers 30 ans</li>"
}

// EVALUATION DE LA QUESTION 9
let rep9 = $("#q9_reponse").val();
if (/([L|l]a(\s)?[F|f]ouine)|([F|f]ouin[y|i][B|b]abe)/.test(rep9)){
    feedback += "<li>Question 9 : OK (+1)</li>";
    score = score+1;
} else {
    feedback += "<li>Question 9 : NON, cette fabuleuse barbich' appartenait à La Fouine</li>"
}

// EVALUATION DE LA QUESTION 10
let rep10=0;
$("input[name=q10_reponse]:checked").each(function() { // parcours des cases cochées
if ($(this).val()==1) { // on ajoute 0,5 pour les rép justes
rep10 = rep10 + 0.5;
} else { // on enlève 0,5 pour les rép fausses
rep10 = rep10 - 0.5;
}
});

if (rep10 == 1) {
feedback += "<li>Question 10 : OK (+1)</li>";
score = score + 1;
} else {
feedback += "<li>Question 10 : NON, Dick et Ace portent la Banane/une Afro !! Let's Boogie !</li>";
}

// AFFICHAGE FINAL du FEEDBACK
feedback += "</ul>Score final = "+score+"/10<br/>";
$("#resultat").html(feedback);
}
 });
 
// récupérer la valeur de la barre cheveu_taille (question 5) : sert à afficher la valeur de la barre 
$(document).on("input", "#cheveu_taille", function() {
         $("#cheveu_taille_reponse").html( $(this).val() );
 });

