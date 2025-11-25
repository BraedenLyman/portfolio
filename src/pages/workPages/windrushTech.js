
import ProjectTemplate from "./projectTemplate";

function WindrushTech() {
  return (
    <ProjectTemplate
      imageUrl="/images/wt.png"
      title="Windrush Technical"
      category="Web Development"
      year="2025"
      description={`
        <p>Windrush Technical specializes in expert arborist services designed to preserve the health, beauty, and integrity of your trees. Their skilled team takes a thoughtful, personalized approach whether you’re dealing with routine maintenance, tree care for a mature canopy, or managing landscape transitions. They are there to support your property’s vitality.</p>
        <br/><p>At Windrush Technical, they believe that every tree matters. From safe pruning and removal to proper support and long‐term care strategies, they work diligently so your outdoor space can thrive in harmony with nature.</p>
      `}
      embeddedUrl="https://www.windrushtechnical.com/"
      embeddedHeading="Windrush Technical's Website"
      prevProject={{ name: "ViB Digital", url: "/work/vib-digital" }}
      nextProject={{ name: "Haletale", url: "/work/haletale" }}
    >
    </ProjectTemplate>
  );
}

export default WindrushTech;
