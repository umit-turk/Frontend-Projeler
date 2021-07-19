import styled from "styled-components";

export const BookField = styled.div`
   padding-top: 10px;
   display: grid;
   justify-content: space-evenly;
   img {
      height: 250px;
      width: 200px;
   }
   button {
      margin-top: 10px;
      height: 20px;
      border-radius: 5px;
      border: none;
      background-color: orange;
      cursor: pointer;
      transition: all 0.4s ease-in;
   }
   button:hover{
      background-color: black;
      color: white;
   }

  
    
`
export const Container = styled.div`
     display:grid;
    height: 300px;
    grid-gap: 50px;
    grid-template-columns: auto auto auto;
    
`