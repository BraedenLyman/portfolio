
import ProjectTemplate from "./projectTemplate";

function WindrushTech() {
  return (
    <ProjectTemplate
      imageUrl="/images/ai.png"
      title="Windrush Technical"
      category="Web Development"
      year="2025"
      description={`
        <p>This is a description </p>
      `}
      
      prevProject={{ name: "Lyman Rentals", url: "/work/lyman-rentals" }}
      nextProject={{ name: "Parent Pal", url: "/work/parent-pal" }}
    >
      {/* Additional custom content if needed */}
    </ProjectTemplate>
  );
}

export default WindrushTech;
