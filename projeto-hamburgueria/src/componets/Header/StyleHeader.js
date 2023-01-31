import styled from "styled-components";

export const HeaderComponet = styled.header`

     background-color:#F5F5F5;
     padding: 10px 0;

    > div{
        box-sizing: border-box;
        padding: 5px;
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
            width: max-content;
            background-color: #fff ;
            padding: 10px;
            border: 1px solid rgb(0 , 0 , 0 , 0.1) ;
            border-radius: 6px;
            
        
            button{

                background-color: var(--color-1);
                color: white;

                width: max-content;
                border: none;
                padding: 10px 15px;
                border-radius: 6px;
            }

            input{
                width: max-content;
                border: none;
                padding: 10px 15px;
                border-radius: 6px;
                
            }

        }
    }

`