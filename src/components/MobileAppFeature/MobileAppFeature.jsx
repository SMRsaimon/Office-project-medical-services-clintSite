import React from "react";
import "./MobileAppFeature.css";
import mobileAPP from "../../resurce/mobileApp.png";
import periodLogo1 from "../../resurce/periodLogo.svg";
const MobileAppFeature = () => {
  const fetature = [
    {
      id: 1,
      logo: periodLogo1,
      title: " Period tracker and ovulation calendar",
      description:
        "Log over 70 symptoms and activities to get the most precise AI-based period and ovulation predictions.",
    },
    {
      id: 1,
      logo: periodLogo1,
      title: " Daily health insights",
      description:
        "Enjoy thousands of expert articles, quizzes, and surveys in your personal feed continuously being adapted for your changing lifestyle.",
    },
    {
      id: 1,
      logo: periodLogo1,
      title: "Health Assistant",
      description:
        "Get engaged in dialogues on different health topics to understand your body signals better.",
    },
    {
      id: 1,
      logo: periodLogo1,
      title: "Pregnancy and post-pregnancy modes",
      description:
        "Track your baby’s development and learn the essentials of being a parent with special visuals and articles developed by medical experts.",
    },
    {
      id: 1,
      logo: periodLogo1,
      title: "Secret Chats",
      description:
        "Discuss intimate topics, ask questions anonymously and get support from millions of women worldwide.",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="my-5">Key Features</h1>
        </div>
        <div className="col-md-8">
          <div className="fetaure-container">
            .
            {fetature.map((x) => (
              <>
                <div className="fetature-wrapper row">
                   <div className="col-2">
                       <img src={x.logo} alt="" />

                   </div>
                   <div style={{marginLeft:"-38px"}} className="col-10">
                      <h2 className="fetaure-taitle">{x.title}</h2>
                      <p className="fetaure-description">{x.description}</p>
                   </div>


                
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <img src={mobileAPP} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MobileAppFeature;
