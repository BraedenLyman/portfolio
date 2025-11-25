
import ProjectTemplate from "./projectTemplate";

function ParentPal() {
  return (
    <ProjectTemplate
      imageUrl="/images/pp.png"
      title="Parent Pal"
      category="Web Development"
      year="2025"
      description={`
        <p>ParentPal is a mobile first application that tracks multiple different health activities of a child. These activites include, growth tracking, sleep analysis, notes, medication/vaccination tracking... and lots more! The goal was to create a relativly simple and appealing application for new parents going throguh the proccess of raising a child.</p>  
      `}
      //embeddedHeading="Parent Pal Mockup Flow"      
      //embeddedUrl="https://parentpals.ca/"
      websiteImagesHeading="Images of ParentPal's Website"
      websiteImages={[
        "/images/ParentPal/login.png",
        "/images/ParentPal/dashboard.png",
        "/images/ParentPal/log.png",
        "/images/ParentPal/tasks.png",
        "/images/ParentPal/messaging.png",
      ]}
      prevProject={{ name: "Haletale", url: "/work/haletale" }}
      nextProject={{ name: "Airplane Identification", url: "/work/airplane-identification" }}
    >
    </ProjectTemplate>
  );
}

export default ParentPal;
