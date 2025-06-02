const slide = ["updateSet_SN.png", "local_updateSet.png", "record_update.png"];
const slide2 = ["tableau_jira.jpg", "us_jira.png"];
const slide3 = ["demandeJira_1.png", "demandeJira_2.png","demandeJira_3.png"];
const slide4 = ["creation_UPSET_us.png", "creation_UPSET_us_2.png"];
const slide5 = ["table_membre.png", "table_event.png"];
let numero = 0;
const diapo = ["SIR_risk_score_2.png","SIR_risk_calculations.png","SIR_risk_calculation_2.png"];
const diapo2 = ["SIR_risk_score.png","SIR_risk_calculations.png","SIR_risk_calculation_2.png"];
const diapo3 = ["SIR_risk_score.png","SIR_risk_score_2.png","SIR_risk_calculation_2.png"];
const diapo4 = ["SIR_risk_score.png","SIR_risk_score_2.png","SIR_risk_calculations.png"];
let numero1 = 0, numero2 = 0, numero3 = 0, numero4 = 0;
/* slide update set */
function ChangeSlide(sens) {
    numero1 = numero + sens;
    if (numero > slide.length - 1)
        numero = 0;
    if (numero < 0)
        numero = slide.length - 1;
        document.getElementById("slide").src = "../asset/secOps/" + slide[numero];
}

/* présentation US dans le jira */
function ChangeSlide2(sens) {
    numero = numero + sens;
    if (numero > slide2.length - 1)
        numero = 0;
    if (numero < 0)
        numero = slide2.length - 1;
        document.getElementById("slide2").src = "../asset/secOps/" + slide2[numero];
}

/* diapo JIRA */
function ChangeSlide3(sens) {
    numero = numero + sens;
    if (numero > slide3.length - 1)
        numero = 0;
    if (numero < 0)
        numero = slide3.length - 1;
        document.getElementById("slide3").src = "../asset/secOps/" + slide3[numero];
}

/* diapo création Update set */
function ChangeSlide4(sens) {
    numero = numero + sens;
    if (numero > slide4.length - 1)
        numero = 0;
    if (numero < 0)
        numero = slide4.length - 1;
        document.getElementById("slide4").src = "../asset/secOps/" + slide4[numero];
}
/* DIAPO page projet WEB-PHP */
function ChangeSlide5(sens) {
    numero = numero + sens;
    if (numero > slide5.length - 1)
        numero = 0;
    if (numero < 0)
        numero = slide5.length - 1;
        document.getElementById("slide5").src = "../asset/secOps/" + slide5[numero];
}

/* CAROUSSEL 2 */

function ChangeDiapo(sens) {
    numero1 = numero1 + sens;
    if (numero1 > diapo.length - 1)
        numero1 = 0;
    if (numero1 < 0)
        numero1 = diapo.length - 1;
       document.querySelector("#diapo img").src = "../asset/SIR/" + diapo[numero1];
}

/* présentation US dans le jira */
function ChangeDiapo2(sens) {
    numero2 = numero2 + sens;
    if (numero2 > diapo2.length - 1)
        numero2 = 0;
    if (numero2 < 0)
        numero2 = diapo2.length - 1;
        document.querySelector("#diapo2 img").src = "../asset/SIR/" + diapo2[numero2];
}

/* diapo JIRA */
function ChangeDiapo3(sens) {
    numero3 = numero3 + sens;
    if (numero3 > diapo3.length - 1)
        numero3 = 0;
    if (numero3 < 0)
        numero3 = diapo3.length - 1;
        document.querySelector("#diapo3 img").src = "../asset/SIR/" + diapo3[numero3];
}

/* diapo création Update set */
function ChangeDiapo4(sens) {
    numero4 = numero4 + sens;
    if (numero4 > diapo4.length - 1)
        numero4 = 0;
    if (numero4 < 0)
        numero4 = diapo4.length - 1;
        document.querySelector("#diapo4 img").src = "../asset/SIR/" + diapo4[numero4];
}
/* DIAPO page projet WEB-PHP */
/* function ChangeSlide5(sens) {
    numero = numero + sens;
    if (numero > slide5.length - 1)
        numero = 0;
    if (numero < 0)
        numero = slide5.length - 1;
        document.getElementById("slide5").src = "../asset/secOps/" + slide5[numero];
} */
