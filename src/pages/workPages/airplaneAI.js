
import ProjectTemplate from "./projectTemplate";

function AirplaneAI() {
  return (
    <ProjectTemplate
      imageUrl="/images/ai.png"
      title="Airplane Identification"
      category="Web Development"
      year="2025"
      description="A revolutionary quote generation platform with AI integration."
      prevProject={{ name: "Quote Kong", url: "/work/quote-kong" }}
      nextProject={{ name: "ViB Digital", url: "/work/vib-digital" }}
    >
      {/* Additional custom content if needed */}
    </ProjectTemplate>
  );
}

export default AirplaneAI;