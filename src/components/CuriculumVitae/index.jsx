import SCuriculumVitae from './style';

function CuriculumVitae() {
  return (
    <SCuriculumVitae>
      <div>
        <img className="cvStyle" src="/image/CV.jpg" alt="cv" />
      </div>
      <div className="descriptionStyle">
        <img
          className="emploiStyle"
          src="/image/offre-emploi.png"
          alt="emploiImg"
        />
        <p className="titlePremStyle">A la recherche d’un premier poste</p>
        <p className="titleSecStyle">En recherche d’emploi</p>
        <p className="textemploistyle">
          Je viens de terminer ma formation de développeur web chez Wild Code
          School et je cherche un poste de développeur web en région Lilloise.
        </p>
        <p className="textemploistyle">
          Si vous êtes à la recherche d’un nouveau collaborateur dans le domaine
          du développement Frontend ou Backend, Je pourrais être votre homme!
          Alors n’hésitez pas à me contacter.
        </p>
      </div>
    </SCuriculumVitae>
  );
}

export default CuriculumVitae;
