export default function About() {
  return (
    <div className="flex justify-center neuebit text-3xl py-24">
      <div className="space-y-12 max-w-8xl">
        <h2 className="pb-6 text-4xl text-center uppercase retro text-whitepurp">
          Make games, <span className="text-pink">meet cool people</span>
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-2 gap-12 leading-[3rem] tracking-wider mx-6 2xl:mx-0">
          <div className="row-span-2 p-8 space-y-12 border-4 border-dashed border-pink md:p-12">
            <p>
              Counterspell Madrid es una game jam para adolescentes en la que{" "}
              <span className="text-pink">
              artistas, músicos, y programadores/as
              </span>{" "}
              se unen para construir juegos.
            </p>
            <p className="text-2xl uppercase retro">¡Crea lo que quieras!</p>
            <p>
              ¡Cualquier juego cuenta! El tema de Counterspell Madrid será decidido
              por votación popular antes de que el evento comience.{" "}
            </p>
            <p>
              Da igual que seas un principiante o programador experimentado, tendremos guías y recursos para 
              ayudar a crear tu proyecto durante todo el evento.
            </p>
          </div>
          <div
            className="h-64 bg-center bg-cover border-4 border-dashed border-pink bg-clip-padding xl:h-auto"
            style={{ backgroundImage: `url(/photos/1.png)` }}
          ></div>
          <div
            className="hidden bg-center bg-cover border-4 border-dashed xl:block border-pink bg-clip-padding"
            style={{ backgroundImage: `url(/photos/2.png)` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
