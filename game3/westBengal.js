document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('choice-1').addEventListener('click', function() {
        document.getElementById('choice-1').style.backgroundImage="";
        document.getElementById('choice-1p').style.fontSize='22px';
        document.getElementById('choice-1p').style.fontWeight='500';
        document.getElementById('choice-1p').style.marginTop='7vh';
        document.getElementById('choice-1p').style.paddingLeft='1.5vh';
        document.getElementById('choice-1p').innerHTML="The bill becomes law, but soon after, the central government challenges it in the Supreme Court, arguing that it conflicts with central laws on the same subject, violating the principle of federalism. The Supreme Court strikes down the law, referencing the State of West Bengal v. Union of India (1963) case. The Court emphasizes that under Article 246, in case of a conflict between Union and State laws, the Union law prevails. <br>Your decision to assent to the bill resulted in its conflict with central laws, leading to its annulment by the Supreme Court. According to Article 246, the Union Parliament has supremacy in areas where both Parliament and State Legislatures have the power to legislate. The State of West Bengal v. Union of India (1963) case reaffirmed this principle, highlighting the importance of maintaining harmony between central and state laws to preserve the federal structure of the Constitution.";
        document.getElementById('choice-2p').innerHTML="";
        document.getElementById('choice-2').style.backgroundImage="url('./e4.jpg')";
        document.getElementById('choice-2').style.backgroundSize='contain';
    
    
    });
    document.getElementById('choice-2').addEventListener('click', function() {
        document.getElementById('choice-2').style.backgroundImage="";
        document.getElementById('choice-2p').style.fontSize='22px';
        document.getElementById('choice-2p').style.fontWeight='500';
        document.getElementById('choice-2p').style.marginTop='7vh';
        document.getElementById('choice-2p').style.paddingLeft='1.5vh';
        document.getElementById('choice-2p').innerHTML="The bill is sent to the President for review. After careful consideration and legal consultation, the President decides not to give assent to the bill, preventing a potential conflict with central laws. This decision upholds the constitutional balance between the Union and State governments. <br>Your decision to reserve the bill for the President under Article 200 was a wise move. This provision ensures that any legislation passed by the State Legislature, which could conflict with central laws or raise significant constitutional questions, is thoroughly reviewed at the highest level. This process protects the integrity of the Constitution and prevents potential legal conflicts, maintaining the delicate balance of power between the Union and the States.";
        document.getElementById('choice-1p').innerHTML="";
        document.getElementById('choice-1').style.backgroundImage="url('./e11.jpg')";
        
        document.getElementById('choice-1').style.backgroundSize='contain';


    });
});