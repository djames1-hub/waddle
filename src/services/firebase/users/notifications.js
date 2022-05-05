import emailjs from "emailjs-com";

const sendNotification = (email, buyerOrSeller, name) => {

    let templateID = "";

    if (buyerOrSeller == "buyer"){
        templateID = "template_bx3nn0m";
    }else{
        templateID = "template_5q54cat";
    }

    let templateParams = {
        name,
        email  
    };

    emailjs.send("service_oyeauuf", templateID, templateParams, 'd2bcyfNd8twKk4AfL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
}

export {sendNotification};