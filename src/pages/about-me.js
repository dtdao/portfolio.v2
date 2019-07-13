import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import HireMePopup from '../components/HireMePopup.js';
import { media } from '../MediaQueries';
// import Img from 'gatsby-image';  ****MIGHT NEED LATER*****
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

// const BackgroundSection = ({className}) => {
//   return(
//
//   )
// }
// <StaticQuery query={graphql`
//     query{
//       billboard: file(relativePath: { eq:"IMG-2587.jpg"} ){
//         childImageSharp{
//           fluid (quality: 90, maxWidth: 4160) {
//             ...GatsbyImageSharpFluid_withWebp
//           }
//         }
//       }
//     }
//   `}
//   render={data => {
//     const imageData = data.billboard.childImageSharp.fluid
//     return(
//       <BackgroundImage Tag="section"
//                        className={className}
//                        fluid={imageData}
//                        backgroundColor={`#fff`}
//                        >
//                        <h1>Hello</h1>
//                        </BackgroundImage>
//     )
//   }}
//   />

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding-bottom: 100px;

  ${t.H1} {
    margin-bottom: 25px;
  }
  ${t.H4} {
    line-height: 1.14;
  }
  ${media.tablet`background-position: center top 0px;`};
`;

// const Billboard = styled.div`
//   overflow: hidden;
//   .billboard {
//     max-height: 100vh;
//     background-attachment: fixed;
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     ${media.tablet`
//       position: relative;
//       left: 190%;
//       margin-left: -200%
//       `}
//   }
// `;

const AboutMeWrapper = styled.div`
  ${Mixins.wrapper}
  .m-b-60 {
    margin-bottom: 60px;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
    ${media.phone`
      font-size: 15px;
      text-align: left;
      `}
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    min-height: 540px;
    ${media.phone`min-height: 620px;`};
  }
  .gatsby-image {
    ${media.tablet`text-align: center;`}
    div {
      padding: 0;
    }
    picture img {
      max-width: 85%;
      position: relative;
      ${media.tablet`max-width: 80%;`}
    }
  }
  .avatar {
    max-width: 400px;
    width: 80%;
    margin: 0 auto 100px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
`;

const StyleBackground = styled(BackgroundImage)`
  height: 100vh;
  background-attachment: fixed;
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
`;

class AboutMe extends React.Component {
  state = {
    openHireMePopup: false
  };

  handleRequestDemoClose = () => {
    this.setState({
      openHireMePopup: false
    });
  };

  openContactPopup = () => {
    this.setState({
      openHireMePopup: true
    });
  };

  render() {
    const { openHireMePopup } = this.state;
    const { data } = this.props;
    return (
      <AboutMeWrapper>
        <StyleBackground
          Tag="section"
          className="billbo"
          fluid={data.parallaxBillboard.childImageSharp.fluid}
          backgroundColor={'#fff'}
        />
        <Layout theme="white" openContactPopup={this.openContactPopup}>
          <AboveFold>
            <t.H1 green align="center">
              Dong Dao
            </t.H1>
            <t.LargeP align="center" max70>
              Hi, I'm an American citizen, who was borned in Vietnam to Vietnamese parents, grew up in "Mormonville",
              USA (AKA UTAH), who eventually travelled half-way around the world to live in Japan. I have been teaching
              English to Japanese kids and adults for the last 8 years. I eventually made a financially smart and
              informed decision to move into the tech world. I heard that the was gold to be found in the Internet and I
              am ready to mine that gold. When not mining that Internet gold you can find me at the gym pumping the iron
              or quietly enjoying a book with a cup of Kona Coffee.
            </t.LargeP>
          </AboveFold>
        </Layout>
        <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
      </AboutMeWrapper>
    );
  }
}

export default AboutMe;

export const pageQuery = graphql`
  query {
    avatarAbout: file(relativePath: { eq: "avatar.jpg" }) {
      ...fluidImage
    }
    billboard: file(relativePath: { eq: "IMG-2587.jpg" }) {
      ...fluidImage
    }
    parallaxBillboard: file(relativePath: { eq: "IMG-2587.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
