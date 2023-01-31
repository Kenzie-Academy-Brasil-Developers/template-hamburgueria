import styled from "styled-components";

export const StyleMain = styled.main`
   
    

    margin-top: 30px ;
    box-sizing: border-box;
    padding: 5px;
    
    
    > div{

        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        width: 100%;
        max-width: 1400px;
        

        section{

           
            width: 100%;
            max-width: 70%;
        
            ul{
                display: flex;
                justify-content:center ;
                flex-wrap: wrap;
                gap: 20px; 
            }

        }

        section + section{

            width: 100%;
            max-width: 30% ;
           
        }

    }


     

`