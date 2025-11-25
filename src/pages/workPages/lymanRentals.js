
import ProjectTemplate from "./projectTemplate";

function LymanRentals() {
  return (
    <ProjectTemplate
      imageUrl="/images/lr.png"
      title="Lyman Rentals"
      category="Web Development"
      year="2024/2025"
      description={`
        <p>Lyman Rentals is a family-owned event rental business specializing in creating memorable moments by providing carefully selected items such as wedding arches, benches, and memory ladders. Whether you're planning a rustic ceremony, a stylish reception, or a meaningful tribute, Lyman Rentals brings thoughtful, beautifully crafted pieces that support your vision and bring your event to life.</p>
        <br/><p>Founded by the Lyman family after a personal wedding inspired them to repurpose and share meaningful décor, Lyman Rentals combines practical rental solutions with a personal touch making your celebration feel both unique and stress-free.</p>
      `}
      embeddedUrl="https://www.lymanrentals.ca/"
      embeddedHeading="Lyman Rentals Website"
      prevProject={{ name: "Quote Kong", url: "/work/quote-kong" }}
      nextProject={{ name: "Integr8", url: "/work/integr8-functional-Health" }}
    >
    </ProjectTemplate>
  );
}

export default LymanRentals;
