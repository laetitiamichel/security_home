document.addEventListener("DOMContentLoaded", (e)=>{
    //PAGE SIR_SECOPS:
    let sir_page = document.getElementById("sir_page");
    sir_page.addEventListener("click",()=>{
        window.open("secops_sir.html","blank")});

    //PAGE THREAT INTELLIGENCE SECOPS:
    let threat_page = document.getElementById("threat_page");
    threat_page.addEventListener("click",()=>{
    window.open("secops_threat_intelligence.html","blank")});

    //PAGE VULNERABILITY SECOPS:
    let vulnerability_page = document.getElementById("vulnerability_page");
    vulnerability_page.addEventListener("click",()=>{
    window.open("secops_vulnerability_response.html","blank")});
            
    //PAGE CONFIG COMPLIANCE SECOPS:
    let compliance_page = document.getElementById("compliance_page");
    compliance_page.addEventListener("click",()=>{
    window.open("secops_config_compliance.html","blank")});

});
    