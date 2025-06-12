
import ProjectTemplate from "./projectTemplate";

function WindrushTech() {
  return (
    <ProjectTemplate
      imageUrl="/images/wt.png"
      title="Windrush Technical"
      category="Web Development"
      year="2025"
      description={`
        <p>Windrush Technical is a tree service business serving the GTA with services such as tree removal, tree pruning, land clearing and stump grinding. The aim was to create a website by focusing on simplicity for an online presence.</p>
      `}
      
      prevProject={{ name: "Lyman Rentals", url: "/work/lyman-rentals" }}
      nextProject={{ name: "Parent Pal", url: "/work/parent-pal" }}
    >
      {/* Additional custom content if needed */}
    </ProjectTemplate>
  );
}

export default WindrushTech;
