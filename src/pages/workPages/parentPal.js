
import ProjectTemplate from "./projectTemplate";

function ParentPal() {
  return (
    <ProjectTemplate
      imageUrl="/images/ai.png"
      title="Parent Pal"
      category="Web Development"
      year="2025"
      description="A revolutionary quote generation platform with AI integration."
      prevProject={{ name: "Windrush Technical", url: "/work/windrush-tech" }}
      nextProject={{ name: "Quote Kong", url: "/work/quote-kong" }}
    >
      {/* Additional custom content if needed */}
    </ProjectTemplate>
  );
}

export default ParentPal;
