import styled from "styled-components"

export const ProductsListStyle = styled.li`

    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    border-radius: 5px;
    border: 2px solid #E0E0E0;

    color: white;
    background-color: #F5F5F5;

    width: 100%;
    max-width: 250px;
    height:300px;
    

    img{
    
        max-width: 50%;
        height: 100%;
        max-height: 50%;
        
    }

    div{

        width: 100%;
        height: 100%;
        max-height: 50%;
        
        padding: 10px 20px;
        border-radius: 0 0 8px 8px;
        box-sizing: border-box;
        background-color: #fff;
        color: black;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 8px;

        .tipo{ 
           
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            color: #828282;

        }

        .preco{
            
            font-size: 15px;
            font-weight: 600;
            color: #27AE60;
        
        }

        button{
          background-color: var(--color-1);
          opacity: 95%;
          
          color: #fff;

          border: none;
          width: max-content;
          padding: 12px 25px;
          border-radius: 8px;
        }
        button:hover{
            opacity: 100%;
        }
    }

`