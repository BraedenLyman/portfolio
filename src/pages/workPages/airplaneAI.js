
import ProjectTemplate from "./projectTemplate";

function AirplaneAI() {
  return (
    <ProjectTemplate
      imageUrl="/images/cwhm.png"
      title="Airplane Identification"
      category="Web Development"
      year="2025"
      description={`
        <p>During World War II, the Royal Air Force (RAF) employed innovative training methods, such as silhouette playing cards, to improve aircraft recognition among personnel. Inspired by this historical approach and in collaboration with the National Air Force Museum of Canada (NAFMC), our project leverages modern artificial intelligence (AI) to identify aircraft from digitized photographs, enhancing public access to museum collections. </p></br>
        <p>Working collaboratively in a team of four, we followed a structured two-phase development process. During the first half of the semester, we conducted a thorough review of previous work, originally used YOLOv8 as our target model architecture, and focused on building a robust dataset through extensive image collection and annotation. The second half of the semester was dedicated to performance optimization, where we expanded the training dataset, fine-tuned model parameters, and reorganized the project's GitHub repository for better maintainability.</p>
      `}
      embeddedHeading="Airplane Identifiation Outline"
      embeddedUrl="../FinalReport.pdf"

      videoHeading="Installation Video Demo"
      videoUrl="../videos/InstallationVideo.mov"
      
      prevProject={{ name: "Parent Pal", url: "/work/parent-pal" }}
      nextProject={{ name: "Quote Kong", url: "/work/quote-kong" }}
    >
    </ProjectTemplate>
  );
}

export default AirplaneAI;