import React from 'react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { ImageType } from '../../../types/image';
import Container from '../../styled/container';
import mq from '../../../styles/mq';

const query = graphql`
  {
    avatar: file(name: { eq: "avatar" }, relativeDirectory: { eq: "about" }) {
      childImageSharp {
        fluid(
          maxWidth: 300
          maxHeight: 350
          fit: COVER
          cropFocus: ATTENTION
          quality: 80
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

interface StaticQueryProps {
  avatar: ImageType;
}

const Presentation: React.FC = () => {
  const { avatar } = useStaticQuery<StaticQueryProps>(query);

  return (
    <section
      css={css`
        margin-bottom: 150px;
      `}
    >
      <Container>
        <div
          css={css`
            margin-bottom: 80px;
          `}
        >
          <h2
            css={css`
              font-size: 30px;

              ${mq(`md`)} {
                font-size: 60px;
              }
            `}
          >
            Un partenaire
            <br />
            unique.
          </h2>
        </div>
        <div
          css={css`
            ${mq(`md`)} {
              display: flex;
            }
          `}
        >
          <div
            css={css`
              min-width: 300px;
              margin-right: 75px;
            `}
          >
            <Img fluid={avatar?.childImageSharp?.fluid} />
          </div>
          <div
            css={css`
              padding-top: 50px;
            `}
          >
            <h3
              css={css`
                margin-bottom: 5px;
                font-size: 24px;

                ${mq(`md`)} {
                  font-size: 40px;
                }
              `}
            >
              Florian Rotty
            </h3>
            <h4
              css={css`
                font-size: 20px;
                margin-bottom: 40px;
                font-weight: 400;
              `}
            >
              Fondateur
            </h4>
            <p
              css={css`
                max-width: 650px;
              `}
            >
              La création d’espaces verts et l’entretien des plantes me
              passionnent. Le sourire des clients lorsque le travail est
              effectué avec succès. Tous les jardins méritent d’être entretenus
              et embellis.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default React.memo(Presentation);
