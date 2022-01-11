import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #5B728C;
  border-radius:10px;
  padding:10px;
  font-family: 'Nunito', sans-serif;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition:.2s all ease;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  &:hover{
    transform:scale(1.1)
  }
  img{
    max-width:100%;
    display:block;
    margin-bottom:10px;
    border-radius:10px;
  }
`;

export const Settings = styled.div`
width:100%;
display:flex;
gap:5px;
button{
  width:100%;
  padding: 5px;
  background: #E0553D;
  border:none;
  color: #fff;
  cursor:pointer;
  border-radius:5px;
  transition:.3s all ease;
  &:hover{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
}
`
