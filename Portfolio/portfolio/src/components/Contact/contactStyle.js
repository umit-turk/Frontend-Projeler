import styled from "styled-components";

export const Containercontact = styled.div`
h1{
    margin-left: -100px;
}
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    input {
        height: 25px;
        width: 300px;
        margin-top: 30px;
        border-radius: 5px;
        border-Color: black;
        padding-left:10px;
    }
    .textarea {
       resize: none;
        width: 300px;
        height: 150px;
        border-radius: 5px;
        border-Color: black;
        padding-left: 10px;
    }
    button {
        border-radius: 5px;
        outline: none;
        border: none;
        background: #333;
        width: 120px;
        height: 25px;
        color: #ddd;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }
    button:hover{
        color:#333;
        background:  #ddd;
        
    }
`