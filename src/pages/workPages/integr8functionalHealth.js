
import ProjectTemplate from "./projectTemplate";

function Integr8() {
  return (
    <ProjectTemplate
      imageUrl="/images/Integr8.png"
      title="Integr8 Functional Health"
      category="Web Development"
      year="2025"
      description={`
        <p>Integr8 Functional Health is a client-centered wellness practice dedicated to helping individuals move, feel, and live better through evidence-based massage therapy and functional healing techniques. With a focus on fascia, mobility, and long-term wellbeing, Integr8 provides personalized treatments designed to restore balance, reduce pain, and improve overall physical function.</P>
        <br/><p>At Integr8, every client is treated through a holistic lens considering lifestyle, movement patterns, diet, and daily habits to create meaningful, lasting changes. Through specialized therapies such as Fascial Stretch Therapy, Neurostim Scar Tissue Release, and deep tissue techniques, Integr8 empowers clients to understand their bodies and achieve optimal health from the inside out.</p>
      `}
      embeddedUrl="https://integr8functionalhealth.ca/"
      embeddedHeading="Integr8 Functional Health's Website"
      prevProject={{ name: "Lyman Rentals", url: "/work/lyman-rentals" }}
      nextProject={{ name: "ViB Digital", url: "/work/vib-digital" }}
    >
    </ProjectTemplate>
  );
}

export default Integr8;
