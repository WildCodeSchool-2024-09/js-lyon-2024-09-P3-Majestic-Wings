import "./About.css";
import picture from "../../../public/about_picture.jpeg";
import pilote from "../../../public/pilote avion.webp";
function About() {
  return (
    <section className="about">
      <h2 className="Title">A Propos</h2>
      <div className="about2">
        <img className="pilote" src={pilote} alt="pilote" />
        <p className="descriptif1">
          Bienvenue sur Majestic wings, votre partenaire pour des expériences de
          voyage d’exception en jet privé. L’histoire de Majestic wings est
          avant tout une histoire d’amitié. Depuis notre enfance, nous sommes
          quatre amis partageant une passion commune : l’aviation, l’exploration
          et le goût pour les expériences uniques. En grandissant, nous avons
          réalisé que le voyage est bien plus qu’un simple déplacement, c’est
          une opportunité de vivre des moments extraordinaires. C’est ainsi
          qu’est née l’idée de Majestic wings : offrir à nos clients un service
          de location de jets privés qui allie luxe, confort et simplicité. Que
          ce soit pour des déplacements professionnels, des escapades en famille
          ou des aventures entre amis, notre mission est de vous garantir un
          voyage sur mesure, dans des conditions d’excellence absolue. Pourquoi
          nous choisir ?Une expertise passionnée : En tant qu’amis et
          partenaires, nous avons combiné nos compétences et nos expériences
          pour bâtir une entreprise qui reflète nos valeurs d’excellence et de
          convivialité.
        </p>
      </div>
      <div className="picture_equipe">
        <img className="interior" src={picture} alt="photo_plane" />
        <p className="descriptif2">
          Un service sur mesure : Chaque client est unique, et nous mettons un
          point d’honneur à répondre à vos besoins spécifiques, avec des
          solutions personnalisées et une attention aux moindres détails. Un
          réseau d’exception : Grâce à notre réseau mondial de partenaires et de
          jets privés, nous vous ouvrons les portes d’une aviation de luxe,
          adaptée à toutes vos envies. Chez Majestic wings, notre engagement est
          simple : transformer vos rêves de voyage en réalité, tout en vous
          faisant profiter d’un service de qualité et d’une expérience humaine
          authentique. Votre confort. Votre liberté. Vos moments précieux.
          Rejoignez notre communauté de voyageurs privilégiés et laissez-nous
          faire de chaque vol un moment inoubliable. Prêts à décoller avec nous
          ? ✈
        </p>
      </div>
    </section>
  );
}
export default About;
