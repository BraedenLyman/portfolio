
import ProjectTemplate from "./projectTemplate";

function ViBDigital() {
  return (
    <ProjectTemplate
      imageUrl="/images/vib.png"
      title="ViB Digital"
      category="Web Development"
      year="2025"
      description={`
        <p>ViB description </p>  
      `}
      prevProject={{ name: "Airplane Identification", url: "/work/airplane-identification" }}
      nextProject={{ name: "Lyman Rentals", url: "/work/lyman-rentals" }}
    >
      {/* Additional custom content if needed */}
    </ProjectTemplate>
  );
}

export default ViBDigital;
