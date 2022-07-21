import React from 'react';
import { graphql } from "gatsby"
import { Container, Typography, Link } from '@material-ui/core';
import { Theme, makeStyles } from '@material-ui/core/styles';

import { FC } from '../util';

export default ({ data }:any) => {
    const post = data.markdownRemark
    return (
        <div style={{marginLeft:'100px'}}>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    )
  }
  
  export const query = graphql`
    query($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        frontmatter {
          title
        }
      }
    }
  `
