import React from "react";
import PDF1 from "../../assets/pdf/111W57-Tower-Triplex-72-with-Loggia.pdf";
import PDF2 from "../../assets/pdf/111W57-Tower-Residence-53.pdf";
function Availability(props) {
  const table_list = [
    {
      id: 1,
      residence: "1",
      bedroon: "3.0 / 3.5",
      interior: "4,492 / 417",
      exterior: "- / -",
      exposure: "N,S,E,W",
      price: "$ 22,750,000",
      view: "",
    },
    {
      id: 2,
      residence: "2",
      bedroon: "3.0 / 3.5",
      interior: "4,492 / 417",
      exterior: "- / -",
      exposure: "N,S,E,W",
      price: "$ 28,500,000",
      view: "",
    },
    {
      id: 3,
      residence: "3",
      bedroon: "3.0 / 3.5",
      interior: "4,492 / 417",
      exterior: "- / -",
      exposure: "N,S,E,W",
      price: "$ 16,500,000",
      view: "",
    },
    {
      id: 4,
      residence: "4",
      bedroon: "4.0 / 4.5",
      interior: "6,512 / 605",
      exterior: "309 / 29",
      exposure: "N,S,E,W",
      price: "$ 54,600,000",
      view: "",
    },
    {
      id: 5,
      residence: "5",
      bedroon: "3.0 / 4.5",
      interior: "5,269 / 490",
      exterior: "3,788 / 352",
      exposure: "N,S,E,W",
      price: "$ 21,000,000",
      view: "",
    },
    {
      id: 6,
      residence: "6",
      bedroon: "4.0 / 5.5",
      interior: "7,130 / 662",
      exterior: "1,367 / 127",
      exposure: "N,S,E,W",
      price: "$ 66,000,000",
      view: "",
    },
    {
      id: 7,
      residence: "7",
      bedroon: "3.0 / 3.5",
      interior: "4,183 / 389",
      exterior: "- / -",
      exposure: "N,S,E,W",
      price: "$ 26,500,000",
      view: "",
    },
    {
      id: 8,
      residence: "8",
      bedroon: "4 / 5.5",
      interior: "7,130 / 662",
      exterior: "1,367 / 127",
      exposure: "N,S,E,W",
      price: "$ 66,000,000",
      view: (
        <a target="_blank" className="underline" href={PDF1}>
          Floor Plan
        </a>
      ),
    },
    {
      id: 8,
      residence: "9",
      bedroon: "3 / 3.5",
      interior: "4,183 / 389",
      exterior: "1,367 / 127",
      exposure: "N,S,E,W",
      price: "$ 26,500,000",
      view: (
        <a target="_blank" className="underline" href={PDF2}>
          Floor Plan
        </a>
      ),
    },
  ];
  return (
    <div>
      <div className="container_wrapper">
        <div className="bg-[#292929] h-[75vh] w-full relative p-1 text-[#877a6b]">
          <div className="overflow-auto custom_scrollbar  h-full py-10 px-[50px]">
            <table className="w-full h-full ">
              <caption>
                <h2 className="text-white text-center text-[22px] mb-[30px]">
                  Tower Residences
                </h2>
              </caption>
              <thead>
                <tr style={{borderBottom: '1px solid #d4cdc7'}}>
                  <th className="text-[13px] py-3 text-white font-normal text-center">
                    RESIDENCE
                  </th>
                  <th className="text-[13px] py-3 text-white font-normal text-center">
                    BEDROOM <br /> / BATHROOM
                  </th>
                  <th className="text-[13px] py-3 text-white font-normal text-center">
                    INTERIOR <br /> Sq Ft / Sq M
                  </th>
                  <th className="text-[13px] py-3 text-white font-normal text-center">
                    EXTERIOR <br /> Sq Ft / Sq M
                  </th>
                  <th className="text-[13px] py-3 text-white font-normal text-center">
                    EXPOSURE
                  </th>
                  <th className="text-[13px] py-3 text-white font-normal text-center">
                    PRICE
                  </th>
                  <th className="text-[13px] py-3 text-white font-normal text-center">
                    VIEW / DOWNLOAD
                  </th>
                </tr>
              </thead>
              <tbody>
                {table_list.map((value, index) => {
                  return (
                    <tr key={value.id} className={index % 2 !== 0 ? 'bg-[#3A3A3A]' : ''} style={{borderBottom: '1px solid #d4cdc7'}}>
                      <td className="text-center text-lg py-5" >
                        <div
                          className=" py-[10px]"
                          style={{ borderRight: "1px dotted #d4cdc7" }}
                        >
                          {value.residence}
                        </div>
                      </td>
                      <td className="text-center text-lg py-5">
                        <div
                          className=" py-[10px]"
                          style={{ borderRight: "1px dotted #d4cdc7" }}
                        >
                          {value.bedroon}
                        </div>
                      </td>
                      <td className="text-center text-lg py-5">
                        <div
                          className=" py-[10px]"
                          style={{ borderRight: "1px dotted #d4cdc7" }}
                        >
                          {value.interior}
                        </div>
                      </td>
                      <td className="text-center text-lg py-5">
                        <div
                          className=" py-[10px]"
                          style={{ borderRight: "1px dotted #d4cdc7" }}
                        >
                          {value.exterior}
                        </div>
                      </td>
                      <td className="text-center text-lg py-5">
                        <div
                          className=" py-[10px]"
                          style={{ borderRight: "1px dotted #d4cdc7" }}
                        >
                          {value.exposure}
                        </div>
                      </td>
                      <td className="text-center text-lg py-5">
                        <div
                          className=" py-[10px]"
                          style={{ borderRight: value.view ? "1px dotted #d4cdc7" : '' }}
                        >
                          {value.price}
                        </div>
                      </td>
                      <td className="text-center text-lg py-5">{value.view}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Availability;
