
import ProjectTemplate from "./projectTemplate";

function QuoteKong() {
  return (
    <ProjectTemplate
      imageUrl="/images/QK/qk.png"
      title="Quote Kong"
      category="Web Development"
      year="2025"
      description={`
        <p>Quote Kong is a quoting company in the construction industry that makes it easier for sub-contrators to create and build out quotes for their clients. </p></br>
        <p>The main responsability for this project was to create the SubContractor page that consists of three tabs. 1. Selection of Scope Lines, 2. Send Out for Tender/Bid, and 3. Purchase Order/Award.</p></br>
        <p>Collaborating as a group of 3, my focus was on the front end design. I designed the tables for Tab 2 and 3, adding the necessary information for our client.</p>
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
      nextProject={{ name: "Lyman Rentals", url: "/work/lyman-rentals" }}
    >
      {/* Additional custom content if needed */}
    </ProjectTemplate>
  );
}

export default QuoteKong;