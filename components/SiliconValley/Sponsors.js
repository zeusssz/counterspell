import { useState, useEffect } from "react";

export default function Sponsors() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const timestamp = new Date().getTime();
    fetch(`https://adamxu.net/counterspell/sponsors.json?t=${timestamp}`)
      .then((response) => response.json())
      .then((data) => setSponsors(data))
      .catch((error) => console.error("Error fetching sponsors:", error));
  }, []);

  return (
    <div className="py-12 space-y-6">
      <div className="flex flex-col justify-center text-center">
        <div className="">
          <p className="py-10 mx-6 text-3xl uppercase retro">
            Check out our amazing <span className="text-pink">sponsors</span>!
          </p>
          <div className="flex justify-center mx-12 my-6">
            <div className="flex flex-wrap items-center justify-center gap-6 p-8 border-4 border-dashed border-pink inter">
              {sponsors.map((sponsor, index) => (
                <SponsorCard
                  key={index}
                  img={sponsor.image}
                  text={sponsor.name}
                  link={sponsor.url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SponsorCard(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        transition: "transform 0.2s ease-in-out",
        display: "inline-block",
        textDecoration: "none",
        color: "inherit",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <SponsorCardInner img={props.img} text={props.text} />
    </a>
  );
}

function SponsorCardInner(props) {
  return (
    <div className="p-4 text-xl leading-6 tracking-wide bg-pink neuebit">
      <div className="flex flex-col items-center justify-center w-[200px] h-[200px]">
        <div className="relative w-full h-full">
          <img
            src={props.img}
            alt={props.text}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full object-contain"
          />
        </div>
      </div>
      <p
        className="h-24 px-2 flex items-center w-[200px]"
        style={{ fontSize: "2rem" }}
      >
        {props.text}
      </p>
    </div>
  );
}
