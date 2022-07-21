import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Grid, Button, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Seo, Hero, Lazy } from '../components';
import { FC } from '../util';

const useStyles = makeStyles((theme: Theme) => ({
    heroButtons: {
        marginTop: theme.spacing(4)
    }
}));

const IndexPage: FC = () => {
    const { allMarkdownRemark: { edges } } = useStaticQuery(graphql`
    {
        allMarkdownRemark {
            edges {
            node {
                fields {
                slug
                }
                frontmatter {
                title
                date
                category
                draft
                }
            }
            }
        }
    }
  `)

    // data?.edges?
    const styles = useStyles();
    return (
        <>
            <Seo title="Home" />

            <Lazy type="grow" delay={500} timeout={1000} mountOnEnter unmountOnExit>
                <Hero
                    title="Hi people"
                    description="Welcome to your new Gatsby site. Now go build something great with
          Typescript and Material-ui."
                >
                    <div className={styles.heroButtons}>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item>
                                <Lazy type="slide" direction="left" delay={500}>
                                    <div>
                                        {edges.map((item: any, index: number) => {
                                            const { node: { fields, frontmatter } } = item
                                            return (
                                                <div key={index}>
                                                    <Button
                                                        component={GatsbyLink}
                                                        to={fields?.slug}
                                                        variant="contained"
                                                        color="primary"
                                                    >
                                                        {frontmatter?.title}
                                                    </Button>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    {/* <Button
                                        component={GatsbyLink}
                                        to="/page-two/"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Go to page 2
                                    </Button> */}
                                </Lazy>
                            </Grid>
                        </Grid>
                    </div>
                </Hero>
            </Lazy>
        </>
    );
};

export default IndexPage;
