
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
      embeddedHeading="Parent Pal Mockup Flow"
      embeddedUrl="https://embed.figma.com/proto/THitc9AYOHw87f33xD0Dhk/Capstone-Project?node-id=48-4&p=f&scaling=scale-down&content-scaling=fixed&page-id=48%3A2&starting-point-node-id=48%3A4&show-proto-sidebar=1&embed-host=share"
      prevProject={{ name: "Windrush Technical", url: "/work/windrush-tech" }}
      nextProject={{ name: "Haletale", url: "/work/haletale" }}
    >
      {/* Additional custom content if needed */}
    </ProjectTemplate>
  );
}

export default ParentPal;
