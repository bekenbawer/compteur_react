import Profil from "./Profil"; // On importe le composant qu'on vient de créer
import Bouton from "./Bouton"; // On importe le composant qu'on vient de créer


export default function App() {
  return (
  
    <div style={{ fontFamily: 'sans-serif', maxWidth: '400px', margin: '40px auto' }}>
      <h1>Mon Application</h1>
      
      {/* On appelle le composant Profil ici pour qu'il s'affiche ! */}
      <Profil />
      
      <h2>Mon Compteur Personnel</h2> 

      <Bouton/>

    </div> 
    
  );
}
