import ProjectTemplate from "./projectTemplate";

function Haletale() {
  return (
    <ProjectTemplate
      imageUrl="/images/Haletale/ht.png"
      title="Haletale"
      category="Mobile Development"
      year="2024"
      description={`
        <p>Haletale Description</p>
      `}
      websiteImagesHeading="Images of Haletale Sign In/Sign Up Page"
      websiteImages={[
        "/images/Haletale/loginSignUp.png",
        "/images/Haletale/signUp.png",
        "/images/Haletale/signUp2.png",
        "/images/Haletale/login.png",
        "/images/Haletale/forgotPassword.png"
      ]}
      prevProject={{ name: "Parent Pal", url: "/work/parent-pal" }}
      nextProject={{ name: "Quote Kong", url: "/work/quote-kong" }}
    >
      {/* Additional custom content if needed */}
    </ProjectTemplate>
  );
}

export default Haletale;