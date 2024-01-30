import React from "react";
import { Link } from "react-router-dom";
import HistorySlide from "./HistorySlide";
function HistoryContent(props) {
  const historyList = [
    {
      id: 1,
      year: "1853",
      link: "/history/1853/",
      img: "https://111w57.com/content/themes/111w57/assets/history/steinway-and-sons.png",
      imgWidth: 59,
      imgHeight: 155,
      title: "STEINWAY &amp; SONS",
      description: `Steinway &amp; Sons, an American and German piano company,
      is founded in New York City by German immigrant Henry E.
      Steinway in 1853. The company establishes itself as a
      world-known and industry-leading manufacturer of pianos.`,
      historyClass:
        "ajax-link history-item history-item--1 history-item--bottom",
      itemClass: "item-body border--left bullet",
    },
    {
      id: 2,
      year: "1887",
      link: "/history/1887/",
      img: "https://111w57.com/content/themes/111w57/assets/history/1887.jpg",
      imgWidth: 128,
      imgHeight: 148,
      title: (
        <>
          THE ORIGINAL ARCHITECTS:
          <br />
          MASTERS OF MANHATTAN
        </>
      ),
      description: `The celebrated firm Warren &amp; Wetmore is founded in 1887.
      The firm designs many of Manhattan’s most refined
      residential and cultural buildings, from 927 Fifth Avenue to
      Grand Central Station, and go on to design Steinway Hall in
      1923.`,
      historyClass: "ajax-link history-item history-item--2 history-item--top",
      itemClass: "item-body item-body--bottom border--left bullet",
    },
    {
      id: 3,
      year: "1916",
      link: "/history/1916/",
      img: "https://111w57.com/content/themes/111w57/assets/history/1925.png",
      imgWidth: 92,
      imgHeight: 102,
      title: `STEINWAY HALL&nbsp;ON 57TH STREET`,
      description: ` Steinway Hall construction begins in June 1924 and is
      completed less than a year later, in April 1925.`,
      historyClass: "ajax-link history-item history-item--3 history-item--top",
      itemClass: "item-body  item-body--bottom border--left bullet",
    },
    {
      id: 4,
      year: "1925",
      link: "/history/1925/",
      img: "https://111w57.com/content/themes/111w57/assets/history/1932.jpg",
      imgWidth: 112,
      imgHeight: 171,
      title: `STEINWAY HALL OPENING NIGHT`,
      description: `October 27, 1925`,
      historyClass:
        "ajax-link history-item history-item--4 history-item--bottom",
      itemClass: "item-body border--left bullet",
    },
    {
      id: 5,
      year: "1928–2014",
      link: "/history/19282014/",
      img: "https://111w57.com/content/themes/111w57/assets/history/1928-2014.png",
      imgWidth: 125,
      imgHeight: 130,
      title: `STEINWAY HALL OPENING NIGHT`,
      description: `October 27, 1925`,
      historyClass: "ajax-link history-item history-item--5 history-item--top",
      itemClass: "item-body item-body--bottom",
    },
    {
      id: 6,
      year: "2001-2013",
      link: "/history/2001/",
      img: "https://111w57.com/content/themes/111w57/assets/history/1995.png",
      imgWidth: 88,
      imgHeight: 98,
      title: `LANDMARK STATUS`,
      description: `Steinway Hall on 57th Street is&nbsp;designated a registered
      historic and cultural landmark in 2001.`,
      historyClass:
        "ajax-link history-item history-item--6 history-item--bottom",
      itemClass: "item-body border--left bullet z-5",
    },
    {
      id: 7,
      year: "2013",
      link: "/history/2013/",
      img: "https://111w57.com/content/themes/111w57/assets/history/2014.png",
      imgWidth: 183,
      imgHeight: 168,
      title: (
        <>
          STEINWAY HALL—
          <br />
          THE NEXT CHAPTER
        </>
      ),
      description: `Steinway &amp; Sons sells its famous recital hall and
      showroom to JDS Development Group and Property Markets
      Group.`,
      historyClass: "ajax-link history-item history-item--7 history-item--top",
      itemClass:
        "item-body item-body--bottom item-body--right border--right bullet",
    },
    {
      id: 8,
      year: "Today",
      link: "/history/2019/",
      img: "https://111w57.com/content/themes/111w57/assets/history/2016.png",
      imgWidth: 92,
      imgHeight: 407,
      title: <>111 WEST&nbsp;57TH&nbsp;STREET</>,
      description: `The history of fine-tuning at Steinway&nbsp;Hall continues
      today in combining the&nbsp;landmark with&nbsp;a new
      luxurious tower.`,
      historyClass:
        "ajax-link history-item history-item--8 history-item--bottom",
      itemClass: "item-body",
    },
  ];
  return (
    <div>
      <div className="xl:hidden">
        <HistorySlide historyList={historyList}></HistorySlide>
      </div>
      <div className="hidden xl:block">
        <div className="mobile--hidden history--desktop">
          <div className="inner u-p5">
            <div className="history-list">
              <div className="js-history-slide history-item history-item--0 history-item--top hide-on-mobile">
                <div className="item-body item-body--bottom item-body--right">
                  <img
                    width={88}
                    height={72}
                    src="https://111w57.com/content/themes/111w57/assets/history/klavier.png"
                    alt=""
                    data-lazy-src="https://111w57.com/content/themes/111w57/assets/history/klavier.png"
                    className="entered lazyloaded"
                    data-was-processed="true"
                    data-ll-status="loaded"
                  />
                </div>
              </div>
              {historyList.map((value, index) => {
                return (
                  <Link
                    key={value.id}
                    className={value.historyClass}
                    to={value.link}
                    data-index={index}
                    data-year={value.year}
                  >
                    <span
                      className={`timeline-bar timeline-bar--${value.id} ${
                        value.id === 6 ? "z-[9]" : ""
                      }`}
                    >
                      {value.year}
                    </span>
                    <div className={value.itemClass}>
                      <img
                        width={value.imgWidth}
                        height={value.imgHeight}
                        className="image entered lazyloaded"
                        src={value.img}
                        alt=""
                        data-lazy-src=""
                        data-was-processed="true"
                        data-ll-status="loaded"
                      />

                      <div className="copy">
                        <h3>{value.title}</h3>
                        <p>{value.description}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryContent;
