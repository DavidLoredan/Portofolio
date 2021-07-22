import styled from 'styled-components';

const SContactMe = styled.div`
  background-image: url("../../image/wood.jpg");

  .content {
    height: 60vh;
    width:99vw;

  }
  .titleContact {
    font-size: 2em;
    font-weight:bold;
    color: white;
    margin-left:10vw;
    margin-top:5vh;
  }
  .contactUs {
   display:flex;
   flex-direction:column;
   align-items:center;
   
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
  .boxstyle{
    width:50vw;
    height:40vh;
    margin-left:25vw;
    margin-right:25vw;
    background-color:white;
    border-radius:10px;
    margin-top:5vh;
    
    
  }
`;

export default SContactMe;
