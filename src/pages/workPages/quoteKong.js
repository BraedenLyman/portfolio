
import ProjectTemplate from "./projectTemplate";

function QuoteKong() {
  return (
    <ProjectTemplate
      imageUrl="/images/qk.png"
      title="Quote Kong"
      category="Web Development"
      year="2025"
      description={`
        <p>QuoteKong is a quoting website for Subcontractors that relieves the stress of building out quotes. The goal is to make building out quotes as simple as possible for the user</p>
      `}
      prevProject={{ name: "Parent Pal", url: "/work/parent-pal" }}
      nextProject={{ name: "Airplane Identification", url: "/work/airplane-identification" }}
    >
      {/* Additional custom content if needed */}
    </ProjectTemplate>
  );
}

export default QuoteKong;