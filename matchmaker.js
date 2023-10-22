console.log("Starting matchmaker...");

function calculateCompatibility() {
    console.log("calculateCompatibility()");
    
    const CONCLUSION_BAD = "You have failed me."

    const CONCLUSION_FAIR = "I'd consider us acquainted."

    const CONCLUSION_GOOD = "Let's be friends!"

    const CONCLUSION_GREAT = "You're awesome."

    const CONCLUSION_PERFECT = "Let's go golfing!"

    const DESIRED_RESPONSE = [
        4, 
        3,
        5,
        5,
        4,
    ]

    const MAX_SCORE = 25;
    
    let q1Response = document.getElementById("q1").selectedOptions[0].value;
    let q2Response = document.getElementById("q2").selectedOptions[0].value;
    let q3Response = document.getElementById("q3").selectedOptions[0].value;
    let q4Response = document.getElementById("q4").selectedOptions[0].value;
    let q5Response = document.getElementById("q5").selectedOptions[0].value;
    
    console.log("Question 1 Answer:");
    console.log(document.getElementById("q1").selectedOptions[0].text);
    console.log(document.getElementById("q1").selectedOptions[0].value);
    console.log(q1Response);

    console.log("Question 2 Answer:");
    console.log(document.getElementById("q2").selectedOptions[0].text);
    console.log(document.getElementById("q2").selectedOptions[0].value);
    console.log(q2Response);

    console.log("Question 3 Answer:");
    console.log(document.getElementById("q3").selectedOptions[0].text);
    console.log(document.getElementById("q3").selectedOptions[0].value);
    console.log(q3Response);
    
    console.log("Question 4 Answer:");
    console.log(document.getElementById("q4").selectedOptions[0].text);
    console.log(document.getElementById("q4").selectedOptions[0].value);
    console.log(q4Response);
    
    console.log("Question 5 Answer:");
    console.log(document.getElementById("q5").selectedOptions[0].text);
    console.log(document.getElementById("q5").selectedOptions[0].value);
    console.log(q5Response);

    let q1Compatibility = 5 - Math.abs(q1Response - DESIRED_RESPONSE[0]);  
    let q2Compatibility = 5 - Math.abs(q2Response - DESIRED_RESPONSE[1]);
    let q3Compatibility = 5 - Math.abs(q3Response - DESIRED_RESPONSE[2]);
    let q4Compatibility = 5 - Math.abs(q4Response - DESIRED_RESPONSE[3]);
    let q5Compatibility = 5 - Math.abs(q5Response - DESIRED_RESPONSE[4]);

    console.log("c1="+q1Compatibility);
    console.log("c2="+q2Compatibility);
    console.log("c3="+q3Compatibility);
    console.log("c4="+q4Compatibility);
    console.log("c5="+q5Compatibility);

    let totalCompatibility = q1Compatibility + q2Compatibility + q3Compatibility + q4Compatibility 
    + q5Compatibility;

    totalCompatibility *= 100 / MAX_SCORE;
    totalCompatibility = Math.round(totalCompatibility);
    console.log("totalCompatibility=" + totalCompatibility); 

    document.getElementById("compatibility").innerHTML = "Your compatibility is: " + totalCompatibility;

    if (totalCompatibility < 50) {
        console.log(CONCLUSION_BAD);
        document.getElementById("conclusion").innerHTML = CONCLUSION_BAD;
    } else if (totalCompatibility < 70) {
        console.log(CONCLUSION_FAIR);
        document.getElementById("conclusion").innerHTML = CONCLUSION_FAIR;
    } else if (totalCompatibility < 85) { 
        console.log(CONCLUSION_GOOD);
        document.getElementById("conclusion").innerHTML = CONCLUSION_GOOD;
    } else if (totalCompatibility < 99) { 
        console.log(CONCLUSION_GREAT);
        document.getElementById("conclusion").innerHTML = CONCLUSION_GREAT;
    } else if (totalCompatibility = 100) {
        console.log(CONCLUSION_PERFECT);
        document.getElementById("conclusion").innerHTML = CONCLUSION_PERFECT;
    }

}