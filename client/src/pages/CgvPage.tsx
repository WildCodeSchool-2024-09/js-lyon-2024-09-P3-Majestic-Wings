import "./../components/CGV/cgv.css";
function CgvPage() {
  return (
    <>
      <div className="section1">
        <section>
          <h2>1. MENTIONS LÉGALES</h2>
          <h3>1.1 Informations sur l’entreprise</h3>
          <p>Raison sociale : MAJESTIC WINGS</p>
          <p>Forme juridique : SARL</p>
          <p>Siège social : boulevard lyonnais</p>
          <p>Numéro d’immatriculation : 471586147357</p>
          <p>Capital social : 100.000.000</p>
          <p>E-mail : majestic_wingz@gmail.com</p>
          <p>Téléphone : 01.05.03.04.89</p>
          <p>Directeur de publication : M.Berger</p>

          <h3>1.2 Hébergement du site</h3>
          <p>Hébergeur : AWS</p>
          <p>Adresse de l’hébergeur : Cloud</p>
          <p>Téléphone de l’hébergeur : 04.05.06.74.08</p>
        </section>

        <hr />
        <section>
          <h2>2. CONDITIONS GÉNÉRALES DE VENTE (CGV)</h2>

          <h3>2.1 Objet</h3>
          <p>
            Les présentes Conditions Générales de Vente définissent les droits
            et obligations de la société MAJESTIC WINGS et de ses clients dans
            le cadre de la location de jets privés pour la journée.
          </p>

          <h3>2.2 Services proposés</h3>
          <p>
            MAJESTIC WINGS propose la location de jets privés pour une durée
            déterminée, incluant les prestations annexes éventuelles (équipage,
            services à bord, etc.).
          </p>

          <h3>2.3 Réservation et paiement</h3>
          <ul>
            <li>
              Toute réservation doit être effectuée via notre site internet, par
              téléphone ou par e-mail.
            </li>
            <li>
              Le paiement doit être effectué en totalité au moment de la
              réservation, sauf accord spécifique.
            </li>
            <li>
              Les modes de paiement acceptés sont : carte bancaire, virement
              bancaire.
            </li>
          </ul>

          <h3>2.4 Tarifs</h3>
          <ul>
            <li>Les tarifs sont indiqués en euros, toutes taxes comprises.</li>
            <li>
              Les frais annexes (taxes d’aéroport, services additionnels, etc.)
              seront précisés au moment de la réservation.
            </li>
          </ul>

          <h3>2.5 Conditions d’annulation et de remboursement</h3>
          <ul>
            <li>
              Annulation par le client :
              <ul>
                <li>
                  Plus de 7 jours avant la date prévue : remboursement à hauteur
                  de 70%.
                </li>
                <li>
                  Moins de 7 jours avant la date prévue : aucun remboursement.
                </li>
              </ul>
            </li>
            <li>
              Annulation par MAJESTIC WINGS : remboursement intégral ou report
              de la réservation.
            </li>
          </ul>

          <h3>2.6 Responsabilités</h3>
          <ul>
            <li>
              MAJESTIC WINGS s’engage à assurer la prestation conformément aux
              normes en vigueur.
            </li>
            <li>
              La société ne pourra être tenue responsable en cas de force
              majeure ou d’événements indépendants de sa volonté empêchant la
              réalisation du vol.
            </li>
          </ul>

          <h3>2.7 Assurance</h3>
          <ul>
            <li>
              MAJESTIC WINGS dispose d’une assurance responsabilité civile pour
              l’exploitation de ses services.
            </li>
            <li>
              Les clients sont invités à souscrire une assurance complémentaire
              si nécessaire.
            </li>
          </ul>

          <h3>2.8 Protection des données personnelles</h3>
          <p>
            Conformément au RGPD, les données personnelles des clients sont
            collectées uniquement dans le cadre de la réservation et de
            l’exécution du contrat. Elles ne sont en aucun cas revendues à des
            tiers. Les clients disposent d’un droit d’accès, de rectification et
            de suppression de leurs données en contactant
            majestic_wingz@gmail.com.
          </p>

          <h3>2.9 Litiges et droit applicable</h3>
          <p>
            En cas de litige, une solution amiable sera recherchée en priorité.
            À défaut, les tribunaux compétents seront ceux du siège social de
            MAJESTIC WINGS. Les présentes CGV sont soumises au droit français.
          </p>
        </section>

        <footer>
          <h2>Contact</h2>
          <p>MAJESTIC WINGS</p>
          <p>boulevard lyonnais</p>
          <p>E-mail : majestic_wingz@gmail.com</p>
          <p>Téléphone : 03.01.08.12.85</p>
        </footer>
      </div>
    </>
  );
}
export default CgvPage;
