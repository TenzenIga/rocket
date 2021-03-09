import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    padding: 10px;
    border-bottom: 2px solid #d8e2f0;;
    
    &::last-child{
        border-bottom:none;
    }
`

export const Img = styled.img`
    height:75px;
    border-radius: 50%;
`

export const Post = styled.div`
    margin-left:10px;

    h5{
        margin:0;
    }   

    span{
        color:#7d88b2;
        font-size:.8rem;
    }

    p{
        margin:0;
    }
`