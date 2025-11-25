import ProjectTemplate from "./projectTemplate";

function Haletale() {
  return (
    <ProjectTemplate
      imageUrl="/images/Haletale/ht.png"
      title="Haletale"
      category="Mobile Development"
      year="2024"
      description={`
        <p>Haletale is a modern, cloud-based property management platform designed to streamline and centralize every aspect of managing residential and commercial portfolios. With tools for lease management, tenant portals, online payments, maintenance tracking, advanced reporting, and full white-label customization, Haletale empowers property managers to replace spreadsheets and multiple systems with one unified solution.</p>
        <br/><p>Whether you’re managing dozens or hundreds of units, Haletale gives you the visibility and efficiency needed to scale your business all wrapped in a user-friendly interface built to handle the operational demands of property management. </p>
      `}
      websiteImagesHeading="Images of Haletale Sign In/Sign Up Page"
      websiteImages={[
        "/images/Haletale/loginSignUp.png",
        "/images/Haletale/signUp.png",
        "/images/Haletale/signUp2.png",
        "/images/Haletale/login.png",
        "/images/Haletale/forgotPassword.png"
      ]}
      prevProject={{ name: "Windrush Technical", url: "/work/windrush-tech" }}
      nextProject={{ name: "Parent Pal", url: "/work/parent-pal" }}
    >
      {/* Additional custom content if needed */}
    </ProjectTemplate>
  );
}

export default Haletale;