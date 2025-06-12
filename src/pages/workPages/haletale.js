import ProjectTemplate from "./projectTemplate";

function Haletale() {
  return (
    <ProjectTemplate
      imageUrl="/images/ht.png"
      title="Haletale"
      category="Mobile Development"
      year="2024"
      description={`
        <p>Haletale Description</p>
      `}
      prevProject={{ name: "Parent Pal", url: "/work/parent-pal" }}
      nextProject={{ name: "Quote Kong", url: "/work/quote-kong" }}
    >
      {/* Additional custom content if needed */}
    </ProjectTemplate>
  );
}

export default Haletale;