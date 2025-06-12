import ProjectTemplate from "./projectTemplate";

function Haletale() {
  return (
    <ProjectTemplate
      imageUrl="/images/ht.png"
      title="Haletale"
      category="Mobile Development"
      year="2024"
      description={`
        <p>Haletale Description</p>
      `}
      embeddedUrl="https://web.haletale.com/?ShowLogin=ture&_ga=2.16457590.1179923616.1719834913-1487083066.1717506787&_gl=1*12pynui*_gcl_au*MTUzODgyNDE0Mi4xNzQ5NzUyMTQw"
      embeddedHeading="Haletale Sign In/Sign Up Page"
      prevProject={{ name: "Parent Pal", url: "/work/parent-pal" }}
      nextProject={{ name: "Quote Kong", url: "/work/quote-kong" }}
    >
      {/* Additional custom content if needed */}
    </ProjectTemplate>
  );
}

export default Haletale;