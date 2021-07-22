import styled from 'styled-components';

const SCuriculumVitae = styled.footer`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin-bottom: 10vh;

  .cvStyle {
    width: 20vw;
    margin-right: 22vw;
    margin-top: 17vh;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
  }
  .cvStyle:hover {
    width: 30vw;
  }
  .descriptionStyle {
    display: flex;
    flex-direction: column;
  }
  .emploiStyle {
    width: 500px;
    margin-left: 20vw;
    margin-top: 15vh;
  }
  .titlePremStyle {
    color: black;
    font-size: 1.8em;
    margin-left: 22vw;
  }
  .titleSecStyle {
    color: black;
    font-size: 1.6em;
    margin-left: 26vw;
    margin-top: 20px;
  }
  .textemploistyle {
    font-size: 1.2em;
    color: #8e9dae;
    margin-left: 20vw;
    margin-right: 11vw;
    margin-top: 20px;
    text-align: justify;
  }
`;

export default SCuriculumVitae;
