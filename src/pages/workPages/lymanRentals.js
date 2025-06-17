
import ProjectTemplate from "./projectTemplate";

function LymanRentals() {
  return (
    <ProjectTemplate
      imageUrl="/images/lr.png"
      title="Lyman Rentals"
      category="Web Development"
      year="2024/2025"
      description={`
        <p> Inspired by my brother’s wedding, where we handmade decor and event items, my family and I launched Lyman Rentals. It is a wedding rental business offering unique, handcrafted pieces. </br></br> </p>
        <p> To establish our online presence quickly, I built our website lymanrentals.ca using Wix, prioritizing speed and ease of use. The site features a clean, visually appealing design with high-quality images of our rentals, easy navigation for browsing inventory, and a seamless contact system for inquiries and bookings. By using Wix, I efficiently created a professional, mobile-friendly website without extensive coding, allowing us to start promoting our business right away.</br></br> </p>
        <p> This project combined creativity with practical execution, turning a personal experience into a functional and marketable online business. </p>
      `}
      embeddedUrl="https://www.lymanrentals.ca/"
      embeddedHeading="Lyman Rentals Website"
      prevProject={{ name: "ViB Digital", url: "/work/vib-digital" }}
      nextProject={{ name: "Windrush Technical", url: "/work/windrush-tech" }}
    >
    </ProjectTemplate>
  );
}

export default LymanRentals;
