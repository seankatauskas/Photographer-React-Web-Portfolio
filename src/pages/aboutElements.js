import styled  from "styled-components";


export const ContentContainer = styled.div `
display: flex;
flex-flow: row;
max-width: 1120px;
width: 90%;
margin: 0 auto;
padding-bottom: 2rem;

@media (max-width: 480px) { {
    flex-flow: column;
`

export const Description = styled.div `
    width: 50%;
    padding: 50px;
    overflow: hidden;
    
    img {
        width: 70%;
        height: auto;


        @media (max-width: 480px) { 
        width: 100%;
        height: auto;
        }
    }
   
    
    p {
        margin: 10px 0;
        font-size: 0.8rem;
        color: #262626;
    }

    @media (max-width: 480px) { {
        width: 100%;
        
`
export const Content = styled.div `
    line-height: 1.5rem;
    color: #262626;
`

export const Space = styled.div `
    padding: 35px;

    @media (max-width: 480px) { 
    padding: 0;
    }
    
`

