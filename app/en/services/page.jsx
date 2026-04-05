export default function ServicesPage() {
  return (
    <main style={{background:"#000", color:"#fff", padding:"80px"}}>

      <h1 style={{fontSize:"42px", marginBottom:"40px"}}>
        Nos Services
      </h1>

      <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"30px"}}>

        <div>
          <img src="/service-exterior.jpg" style={{width:"100%", borderRadius:"10px"}} />
          <h2>Lavage extérieur premium</h2>
          <p>
            Nettoyage complet de la carrosserie, des jantes et des vitres pour
            redonner à votre véhicule une brillance exceptionnelle.
          </p>
        </div>

        <div>
          <img src="/service-interior.jpg" style={{width:"100%", borderRadius:"10px"}} />
          <h2>Nettoyage intérieur complet</h2>
          <p>
            Aspiration, nettoyage des surfaces et traitement des matériaux
            pour un intérieur propre et rafraîchi.
          </p>
        </div>

        <div>
          <img src="/service-full.jpg" style={{width:"100%", borderRadius:"10px"}} />
          <h2>Detailing complet</h2>
          <p>
            Un service intérieur et extérieur complet pour restaurer
            l'apparence globale du véhicule.
          </p>
        </div>

        <div>
          <img src="/service-protection.jpg" style={{width:"100%", borderRadius:"10px"}} />
          <h2>Protection de la peinture</h2>
          <p>
            Protection de haute qualité pour préserver l’éclat de la peinture
            et protéger votre véhicule.
          </p>
        </div>

        <div>
          <img src="/service-engine.jpg" style={{width:"100%", borderRadius:"10px"}} />
          <h2>Nettoyage du moteur</h2>
          <p>
            Nettoyage minutieux du compartiment moteur pour un rendu propre
            et professionnel.
          </p>
        </div>

        <div>
          <img src="/service-headlight.jpg" style={{width:"100%", borderRadius:"10px"}} />
          <h2>Restauration des phares</h2>
          <p>
            Restauration des phares ternis pour améliorer l’apparence du
            véhicule et la visibilité de nuit.
          </p>
        </div>

      </div>

    </main>
  );
}
