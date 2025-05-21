
import ProjectTemplate from "./projectTemplate";

function LymanRentals() {
  return (
    <ProjectTemplate
      imageUrl="/images/ai.png"
      title="Lyman Rentals"
      category="Web Development"
      year="2025"
      description="A revolutionary quote generation platform with AI integration."
      prevProject={{ name: "ViB Digital", url: "/work/vib-digital" }}
      nextProject={{ name: "Windrush Technical", url: "/work/windrush-tech" }}
    >
      {/* Additional custom content if needed */}
    </ProjectTemplate>
  );
}

export default LymanRentals;
