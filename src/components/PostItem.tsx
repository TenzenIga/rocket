import React from 'react'
import { IPost, IUser } from '../api';
import { Img, Post, Wrapper } from './PostItem.styles';
import avatar from './../assets/empty-avatar.png';

type props = {
        post:IPost & IUser
      }

export default function PostItem(props:props) {
    const {post} = props;
    return (
        <Wrapper>
            <Img src={avatar} alt="" />
            <Post>
                <h5>{post.username}<span>@{post.name}</span></h5>
                <p>{post.body}</p>
            </Post>
        </Wrapper>
    )
}
