import styled from "styled-components";

export const StyleMain = styled.main`

    margin-top: 40px 0;
    padding: 10px;
    padding-top: 30px;
    
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

            @media (max-width: 800px) {
                
               > ul{
              
                    flex-direction: row;
                    justify-content: flex-start ;
                    flex-wrap: nowrap ;
                    overflow-y: hidden ;
                    padding: 10px;
                }

                li{
                   min-width: 250px;
                }

            }

        }

        section + section{

            width: 100%;
            max-width: 30% ;
           
        }

    }

    @media (max-width: 800px ) {
        
        >div{
            flex-direction: column;

            section{
             min-width: 100%;
             margin-bottom: 20px;
 
            }
        }

    }
  
`