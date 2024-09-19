document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('choice-1').addEventListener('click', function() {
        document.getElementById('choice-1').style.backgroundImage="";
        document.getElementById('choice-1p').style.fontSize='22px';
        document.getElementById('choice-1p').style.fontWeight='500';
        document.getElementById('choice-1p').style.marginTop='2vh';
        document.getElementById('choice-1p').style.paddingLeft='1.5vh';
        document.getElementById('choice-1p').innerHTML="Consequence: The controversial figure is appointed to the Council of Ministers. While this strengthens your political position, it leads to significant public outcry and increased scrutiny from opposition parties and the media. The appointment also faces legal challenges, and questions are raised about the adherence to constitutional principles of good governance. The controversy affects the public's perception of your government and leads to calls for greater transparency and accountability in ministerial appointments.<br><br> Approving the appointment led to public outcry and scrutiny, raising concerns about adherence to principles of good governance. According to Article 75 (Prime Minister and Council of Ministers), the Council of Ministers must uphold integrity and accountability in their functioning. The controversy highlighted the need for transparency and adherence to constitutional norms in ministerial appointments";
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
        document.getElementById('choice-2p').innerHTML="The appointment is rejected, and the decision is praised for maintaining the integrity of the Council of Ministers. This move reinforces the government's commitment to good governance and accountability. Your decision is well-received by the public and strengthens the credibility of your administration, emphasizing the importance of ethical standards in ministerial appointments. <br>Your decision to reject the appointment upheld the integrity of the Council of Ministers and demonstrated a commitment to good governance. By maintaining high ethical standards in ministerial appointments, you reinforced the principles of accountability and transparency.";
        document.getElementById('choice-1p').innerHTML="";
        document.getElementById('choice-1').style.backgroundImage="url('./e9.jpg')";
        document.getElementById('choice-1').style.backgroundSize='contain';
        // document.getElementById('choice-1').style.background='no-repeat';


    });
});
