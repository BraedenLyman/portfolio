
import ProjectTemplate from "./projectTemplate";

function QuoteKong() {
  return (
    <ProjectTemplate
      imageUrl="/images/QK/qk.png"
      title="Quote Kong"
      category="Web Development"
      year="2025"
      description={`
        <p>As part of a 3-member group on the Quote Kong project, we utilized React with TypeScript to build out three main subcontractor pages. My responsibilities included the creation of dynamic tables and their styling, for two of the pages.</p>
      `}
      //embeddedUrl="https://app.quotekong.com/"
      embeddedHeading="Quote Kong's Website"
      websiteImagesHeading="Images of Sub Contractor Page"
      websiteImages={[
        "/images/QK/qkSub1.png",
        "/images/QK/qkSub2.png",
        "/images/QK/qkSub3.png"
      ]}
      prevProject={{ name: "Haletale", url: "/work/haletale" }}
      nextProject={{ name: "Airplane Identification", url: "/work/airplane-identification" }}
    >
      {/* Additional custom content if needed */}
    </ProjectTemplate>
  );
}

export default QuoteKong;