
import ProjectTemplate from "./projectTemplate";

function ViBDigital() {
  return (
    <ProjectTemplate
      imageUrl="/images/vib.png"
      title="ViB Digital"
      category="Mobile App"
      year="2025"
      description={`
        <p>At ViB, I leveraged FlutterFlow to significantly enhance the UI frontend design, ensuring precise adherence to Figma mockups. My work also involved critical backend connections and the implementation of API calls for services like Pexels, Unsplash, and an AI chatbot.</p>
        </br><p><em>**As per an NDA and the application not being published yet, unfortunatly there are no images or links to showcase**</em></p>
      `}
      prevProject={{ name: "Airplane Identification", url: "/work/airplane-identification" }}
      nextProject={{ name: "Lyman Rentals", url: "/work/lyman-rentals" }}
    >
    </ProjectTemplate>
  );
}

export default ViBDigital;
