
import ProjectTemplate from "./projectTemplate";

function QuoteKong() {
  return (
    <ProjectTemplate
      imageUrl="/images/qk.png"
      title="Quote Kong"
      category="Web Development"
      year="2025"
      description={`
        <p> QK description /p>
      `}
      prevProject={{ name: "Parent Pal", url: "/work/parent-pal" }}
      nextProject={{ name: "Airplane Identification", url: "/work/airplane-identification" }}
    >
      {/* Additional custom content if needed */}
    </ProjectTemplate>
  );
}

export default QuoteKong;