import styled from 'styled-components';

export const Nav = styled.div`
    height: 25vh;
    background-color: orange;
    background-image: url("https://images.unsplash.com/photo-1532012197267-da84d127e765?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGlicmFyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1{
        color: white;
    }
    .input-area {
    
        input {
            width: 400px;
            height: 30px;
            border-radius: 20px;
            outline: none;
            border: none;
            font-size: 15px;
            padding-left: 10px;
            font-weight: bold;
        }
    }
    
   
`