import React from "react";

function TeamContent(props) {
  const team_content_list = [
    {
      id: 1,
      role: "Developer",
      title: "JDS Development Group",
      link: "http://jdsdevelopment.com/",
      description: `JDS Development Group is a real estate development, construction,
            and acquisition firm raising the bar of residential, hospitality,
            and mixed-use projects in New York City and Miami. JDS has more than
            nine million square feet of property in various stages of
            development, including the record-setting Walker Tower and Stella
            Tower, the American Copper Buildings, 111 West 57th Street and The
            Fitzroy. JDS's goal is to redefine what it means to be a real estate
            developer in the twenty-first century. The firm is dedicated to
            pushing design boundaries and aligning incentives to leave the urban
            landscape better served by its buildings.`,
    },
    {
      id: 2,
      role: "Developer",
      title: "Property Markets Group",
      link: "http://propertymg.com/",
      description: (
        <>
          Property Markets Group (PMG) was founded by Kevin Maloney in 1991 and
          is a premier real estate investment, development and general
          construction firm. The company is headquartered in New York with
          offices in Miami and Chicago. PMG is one of the few remaining
          full-service, large-scale development companies with staff capable of
          maneuvering all facets of the development process. With direct
          hands-on experience in the acquisition, renovation, financing,
          operation and marketing of commercial and residential real estate, PMG
          has completed 85 residential buildings in New York, Florida, and
          Chicago, and over 150 real estate projects throughout the United
          States.
          <br />
          <br />
          During its 27-year history, PMG has developed projects across all
          asset types and distinguished itself by focusing on premier luxury
          residential properties. Consistently enhancing the luxury experience,
          PMG is notable for meticulously-designed projects such as Walker
          Tower, Stella Tower, The Belnord, The Briarcliffe, The Kingsley, Mei
          Miami Beach and most recently, Echo Aventura, and Echo Brickell in the
          heart of Miami's financial district. Currently, PMG is in various
          stages of developing over 5 million square feet of residential
          property, including 10 Sullivan, Queens Plaza South, Muse Residences,
          111 Leroy Street, 548 West 22nd St and numerous other projects
          throughout New York City, Miami and Chicago.{" "}
        </>
      ),
    },

    {
      id: 3,
      role: "Developer",
      title: "Spruce Capital Partners",
      link: "http://sprucecap.com/",
      description: (
        <>
          Spruce Capital Partners, founded in 2007 by Joshua Crane and Robert
          Schwartz, is a New York City based real estate owner, developer, and
          investor. The firm and its partners have both acquired and developed a
          portfolio of assets totaling in excess of $3 billion. Additionally,
          the partners of Spruce run S3 Capital, one of the most active bridge
          lenders in New York City. S3 has closed over 250 loans since 2014
          totaling over $1 billion. The firm employs a team of experienced
          industry professionals in construction, finance, underwriting,
          acquisitions, origination and asset management.
        </>
      ),
    },

    {
      id: 4,
      role: "ARCHITECTS",
      title: "SHoP",
      link: "http://sprucecap.com/",
      description: (
        <>
          SHoP harnesses the power of interdisciplinary expertise to create
          architecture that makes our cities more vibrant, more beautiful, and
          more rewarding places for all to live. Operating from its studios in
          New York’s historic Woolworth Building, the critically-acclaimed firm
          has a staff of 180 talented people and projects completed or underway
          on four continents. At the heart of SHoP’s work is a respect for the
          expressive potential of traditional architectural materials, and a
          pioneering technological capability that transforms them into
          inspiring statements for the world of today.
        </>
      ),
    },

    {
      id: 5,
      role: "INTERIOR DESIGN",
      title: "Studio Sofield",
      link: "http://studiosofield.com/",
      description: (
        <>
          Studio Sofield, led by Principal William Sofield, is a design firm
          with the reputation for a thoughtful, multi-disciplined approach to
          design characterized by working in response to not only the project
          locale but the unique needs of the client. All of Sofield’s projects
          imbue a restrained luxury in design through choices in materials and
          craft as well as through a process of discovery where clients decipher
          their very own concept of luxury. With 111 West 57th Street, William
          Sofield has incorporated this philosophy with his Historicist training
          to develop a considerate and contemporary response to the changing New
          York City skyline.
        </>
      ),
    },

    {
      id: 6,
      role: "EXCLUSIVE MARKETING & SALES AGENT",
      title: "Douglas Elliman Development Marketing",
      link: "https://www.elliman.com/",
      description: "",
    },
    {
      id: 7,
      role: "BRANDING",
      title: "Pandiscio Green",
      link: "http://pandiscio.green/",
      description: "",
    },
    {
      id: 8,
      role: "RENDERINGS",
      title: "Hayes Davidson",
      link: "http://hayesdavidson.com/",
      description: "",
    },
  ];
  return (
    <div className=" h-full overflow-auto custom_scrollbar ">
      <ul className="max-w-[400px]  mx-auto ">
        {team_content_list.map((value, index) => {
          return (
            <li key={value.id}>
              <h2 className="text-white text-base text-center">
                {" "}
                {value.role}{" "}
              </h2>
              <h3 className="text-lg text-center mb-[26px]">
                <a
                  href={value.link}
                  target="_blank"
                  className="text-[24px]"
                  style={{ color: "#8B7359" }}
                >
                  {" "}
                  {value.title}{" "}
                </a>
              </h3>

              <p className="text-base text-primary mb-[25px]">
                {value.description}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TeamContent;
