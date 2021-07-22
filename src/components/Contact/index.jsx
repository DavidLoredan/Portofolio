import SContactMe from './style';

function ContactMe() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <SContactMe>
      <div className="content">
        <h2 className="titleContact">Contact Me</h2>

        <form className="contactUs" onSubmit={handleSubmit}>
          <label htmlFor="username">
            <h3>Votre Nom et Prenom</h3>
            <input
              className="nomsStyle"
              placeholder="Nom"
              name="firstname"
              id="field"
            />
          </label>

          <label htmlFor="email">
            <h3>Email</h3>
            <input
              className="emailStyle"
              placeholder="votre@mail.com"
              name="email"
              id="field"
            />
          </label>

          <label htmlFor="message">
            <h3>Message</h3>
            <textarea
              className="text"
              type="textarea"
              name="textValue"
              id="field"
              placeholder="Votre message"
            />
          </label>

          <button type="submit" className="button">
            <h4>Envoyé</h4>
          </button>
        </form>
      </div>
    </SContactMe>
  );
}
export default ContactMe;
