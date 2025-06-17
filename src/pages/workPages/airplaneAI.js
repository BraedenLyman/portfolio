
import ProjectTemplate from "./projectTemplate";

function AirplaneAI() {
  return (
    <ProjectTemplate
      imageUrl="/images/cwhm.png"
      title="Airplane Identification"
      category="Web Development"
      year="2025"
      description={`
        <p>Working collaboratively in a team of four, we developed an airplane identification system from an older groups model, that leveraged YOLO for detecting aircraft in the Canadian Warplane Heritage Museum's extensive photo archive. A key aspect of my role involved annotating more than 200 images with Roboflow and setting up the project using pyhton.</p>
      `}
      prevProject={{ name: "Quote Kong", url: "/work/quote-kong" }}
      nextProject={{ name: "ViB Digital", url: "/work/vib-digital" }}
    >
      {/* Additional custom content if needed */}
    </ProjectTemplate>
  );
}

export default AirplaneAI;