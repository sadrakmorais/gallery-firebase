import styled from 'styled-components';

export const Wrapper = styled.div`
background: #141E30;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
min-height:100vh;
color: #fff;
`;

export const Area = styled.div`
margin: auto;
max-width:980px;
padding:30px 0;
display:flex;
flex-direction:column;
gap:30px;
`;
export const Header = styled.h1`
  text-align: center;
  margin-bottom:30px;
`;

export const uploadForm = styled.form`
width: 100%;
display: flex;
justify-content: space-between;
background-color: #5B728C;
align-items: center;
border-radius:10px;
padding: 10px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

input[type="file"] {
    position: relative;
    right:252px;
    z-index: 1;
}
label {
    width: 200px;
    background: #141E30;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: #FFF;
    padding: 10px;
    border-radius:10px;
    text-align:center;
    display: block;
    cursor: pointer;
    z-index: 3;

}
.upload{
  
      display:flex;
      flex-direction:column;
      padding: 10px;
      width: 20%;
      text-align: center;
      font-family: 'Nunito', sans-serif;

    }

.submitForm{
    background: #141E30;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: #FFF;
    padding: 10px;
    border-radius:10px;
    text-align:center;
    border:none;
    cursor: pointer;
    transition: .2s all ease;
     
    &:hover{
      transform: scale(1.1);
    }
}
`

export const LoadingScreen = styled.div`
  text-align: center;
  .loading{
    font-size:50px;
    margin-bottom:20px;
  }
`;

export const Gallery = styled.div`
display: grid;
grid-template-columns:repeat(4,1fr);
gap:20px;
`;




