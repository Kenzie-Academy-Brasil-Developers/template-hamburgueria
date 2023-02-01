import styled from "styled-components";

export const HeaderComponet = styled.header`

     background-color:#F5F5F5;
     padding: 10px 0;
     box-sizing: border-box;

    @media (max-width: 500px ) {
        > div{
       
            flex-direction: column;
            gap: 20px;
       
        }
    }

    > div{
        box-sizing: border-box;
        padding: 5px 0;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1400px;

        h1{
            font-size: 24px;

            span{

                font-size: 16px;
                color: var( --color-2);

            }
        }

        div{
            display: flex;
            gap: 5px;
            width: 100%;
            max-width: max-content;
            background-color: #fff ;
            padding: 10px 4px;
            border: 2px solid rgb(0 , 0 , 0 , 0.1) ;
            border-radius: 6px;
 
            button{

                background-color: var(--color-1);
                color: white;

                width: max-content;
                border: none;
                padding: 10px 10px;
                border-radius: 6px;
            }

            input{
                width: max-content;
                border: none;
                padding: 10px 15px;
                border-radius: 6px; 
                outline: none;
            }

        }
    }

    div >div:hover{
        border: solid 2px black;
    }

`