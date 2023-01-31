import styled from "styled-components";

export const CarrinhoStyle = styled.div`


border-radius: 5px;
background-color:  #27AE60;
color: white;

    h3{
        padding: 20px;
        text-align: center;
    }

    ul{
        box-sizing: border-box;
        background-color:  #F5F5F5;
        padding: 10px;
        color: black;

        li{

            display: flex;
            justify-content: space-between;
            width: 100%;

            img{
                max-width: 40%;
                display: flex;
            }

            div{
                width: 150px;
                display: flex;
               
                align-items: center;
                justify-content: space-around;
                padding: 5px;

                div{

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-around;
                    gap: 10px;
                    
                    h4{
                        font-size: 14px;
                    }
                    span{
                        font-size: 12px;
                    }
                  
                }
                 
            }

            button{
                background: none ;
                border: none;
                align-self: center;
                width: max-content;
                height: max-content;
                align-items: center;

                color: gray;
                font-size: 12px;
            }
       
        } 
    }
`