
import ProjectTemplate from "./projectTemplate";

function ViBDigital() {
  return (
    <ProjectTemplate
      imageUrl="/images/ai.png"
      title="ViB Digital"
      category="Web Development"
      year="2025"
      description="A revolutionary quote generation platform with AI integration."
      prevProject={{ name: "Airplane Identification", url: "/work/airplane-identification" }}
      nextProject={{ name: "Lyman Rentals", url: "/work/lyman-rentals" }}
    >
      {/* Additional custom content if needed */}
    </ProjectTemplate>
  );
}

export default ViBDigital;
