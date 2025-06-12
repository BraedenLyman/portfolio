
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
      prevProject={{ name: "Windrush Technical", url: "/work/windrush-tech" }}
      nextProject={{ name: "Haletale", url: "/work/haletale" }}
    >
      {/* Additional custom content if needed */}
    </ProjectTemplate>
  );
}

export default ParentPal;
