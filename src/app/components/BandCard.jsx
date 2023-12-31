import Image from "next/image";
import "./BandCard.css";

export default async function BandCard() {
  const res = await fetch(`https://pollen-flawless-aerosteon.glitch.me/bands`);
  const data = await res.json();
  const { name, members, genre, logoCredits, logo, bio, slug } = data;

  console.log(data);

  return (
    <>
      {data.map((band) => {
        return (
          <article key={slug}>
            <img src={band.logo} alt="" />
            <section>
              <h2>{band.name}</h2>
              <h3>{band.members}</h3>
              <h4>MUSIC GENRE {band.genre}</h4>
              <p>{band.bio}</p>
            </section>
          </article>
        );
      })}
    </>
  );
}
