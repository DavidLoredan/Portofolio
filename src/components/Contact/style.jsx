import styled from 'styled-components';

const SContactMe = styled.div`
  background-color: black;
  .content {
    height: 100vh;
  }
  .titleContact {
    font-size: 2em;
    color: white;
  }
  .contactUs {
    margin-top: 10vh;
    margin-left: 40vw;
  }
  .button {
    width: 300px;
    height: 30px;
    margin-top: 30px;
    
  }
  @keyframes bounce {
  0%, 20%, 60%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  40% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }

  80% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
}
  .button:hover {
    animation: bounce 3s;
    
}
  }
  .emailStyle {
    width: 300px;
  }
  .nomsStyle {
    width: 300px;
  }
  .text {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100px;
  }
`;

export default SContactMe;
