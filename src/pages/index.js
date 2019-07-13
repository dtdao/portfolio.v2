import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import Placeholder from '../images/placeholder.png';
import { HireMe, LinkButton } from '../components/Button.js';
import HireMePopup from '../components/HireMePopup.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faNode, faHtml5, faNpm, faGithub, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { media } from '../MediaQueries';
import Colors from '../Colors';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import { graphql } from 'gatsby';
import { darken } from 'polished';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 140px 0 60px 0;
  ${t.H1} {
    color: ${Colors.darkest};
  }
`;

const Block = styled.div`
  &:nth-child(even) {
    border: solid 1px ${darken(0.1, Colors.light)};
    background-color: ${Colors.light};
  }
`;

const FontAwIconWrapper = styled.div`
  ${media.desktop`
    font-size: 1.2em;
    `}
  ${media.phone`
    font-size: 0.5em
  `};
`;

const BlockContent = styled(Content)`
  ${Mixins.block}
  padding: 100px 30px;
  ${media.tablet`
    flex-direction: column;
    align-items: baseline;
  `};
  ${media.phone`
    padding: 40px 10px;
  `};
  ${t.P} {
    margin-top: 10px;
  }
  ${t.H2} {
    margin-top: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const DivWrapper = styled.div`
  padding: 80px 30px;
  ${media.tablet`padding: 50px 0;`}
  &:first-child {
    ${media.tablet`
      margin-bottom: 40px;
  `};
  }
`;

const ItemImage = styled.img`
  max-width: 85%;
  position: relative;
  ${media.tablet`max-width: none;`}
`;

const HomepageWrapper = styled.div`
  ${Mixins.wrapper}
  .who-desc {
    display: block;
    margin: 0 auto 60px auto;
    max-width: 90%;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  ${t.H1} {
    margin: 0 0 20px 0;
  }
  .avatar {
    max-width: 300px;
    width: 80%;
    margin: 0 auto 50px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
  .link {
    padding: 0;
    color: ${Colors.darkest};
    text-decoration: underlined;
    svg {
      margin-left: 7px;
    }
  }
  .portfolio {
    margin: 100px 0 50px 0;
    font-size: 42px;
  }
`;

const BrandName = styled.h2`
  border-bottom: 3px solid #363b3a;
  display: inline-block;
  font-family: 'Cantarell', sans-serif;
`;

const WorkWithMe = styled.div`
  padding: 80px;
  width: 73%;
  border-radius: 6px;
  box-shadow: 0 2px 26px 0 rgba(57, 55, 55, 0.18);
  background-color: #ffffff;
  text-align: center;
  position: relative;
  margin: 100px auto -150px auto;
  ${t.LargeP} {
    max-width: 80%;
    margin: 0 auto 28px auto;
  }
  ${media.tablet`
    width: auto;
    padding: 40px;
    margin: 50px 30px -100px 30px;
  `};
`;

class Homepage extends React.Component {
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
      <HomepageWrapper>
        <Layout theme="white" bigFooter openContactPopup={this.openContactPopup}>
          <AboveFold>
            <Img fluid={data.avatarHomepage.childImageSharp.fluid} alt="Dong Dao" className="avatar" />
            <BrandName>
              <t.H1 align="center" primary>
                DONG DAO
              </t.H1>
            </BrandName>
            <t.LargeP align="center" max45>
              <i>Full-Stack Web Developer</i>
            </t.LargeP>
            <HireMe large onClick={this.openContactPopup} book>
              Hire me
            </HireMe>
          </AboveFold>
          <Content>
            <t.H2 primary align="center" bold>
              Hi, nice to meet you.
            </t.H2>
            <t.P alight="center" max70 className="who-desc">
              Since beginning my journey in Web Development, I've learned many things. I like to work with clean code. I
              think the simplest design and ideas are often the best. I like building sites and app from top to bottom.
              I love JavaScript. JavaScript is my home and the MERN stack is where my heart lies. Work + coffee =
              success. Patience is a virtue, especially when you are staring at error messages. Theres always a
              tomorrow, so its okay to stop and walk away. A journey of a thousand miles begins with a single step.
              <t.H4 align="center" max45 bold>
                So how can I help?
              </t.H4>
            </t.P>
          </Content>
          <Content />
          <Content>
            <t.H2 primary align="center" bold>
              Tools of The Trade
            </t.H2>
            <t.H2 primary align="center" bold>
              <t.P align="center">
                <FontAwIconWrapper>
                  <FontAwesomeIcon style={{ padding: '5px' }} icon={faReact} size="6x" />
                  <FontAwesomeIcon style={{ padding: '5px' }} icon={faJs} size="6x" />
                  <FontAwesomeIcon style={{ padding: '5px' }} icon={faNode} size="6x" />
                  <FontAwesomeIcon style={{ padding: '5px' }} icon={faHtml5} size="6x" />
                  <FontAwesomeIcon style={{ padding: '5px' }} icon={faNpm} size="6x" />
                  <FontAwesomeIcon style={{ padding: '5px' }} icon={faGithub} size="6x" />
                  <FontAwesomeIcon style={{ padding: '5px' }} icon={faBootstrap} size="6x" />
                </FontAwIconWrapper>
              </t.P>
            </t.H2>
            <t.H2 primary align="center" bold className="portfolio">
              Portfolio
            </t.H2>
          </Content>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={Placeholder} alt="Placeholder title" />
              </DivWrapper>
              <Fade left>
                <DivWrapper>
                  <t.H2 bold>Placeholder website</t.H2>
                  <t.P>Lorem ipsum</t.P>
                  <t.P>Dolor sit amet</t.P>
                  <LinkButton primary bold className="link" as="a" target="_blank" href="#">
                    Lorem ipsum
                  </LinkButton>
                </DivWrapper>
              </Fade>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <Fade right>
                <DivWrapper>
                  <t.H2 bold>Placeholder website</t.H2>
                  <t.P>Lorem ipsum</t.P>
                  <t.P>Dolor sit amet</t.P>
                  <LinkButton primary bold className="link" as="a" target="_blank" href="#">
                    Lorem ipsum
                  </LinkButton>
                </DivWrapper>
              </Fade>
              <DivWrapper>
                <ItemImage src={Placeholder} alt="Placeholder title" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <Fade up>
            <WorkWithMe>
              <t.H1 green>Get in touch with me</t.H1>
              <t.LargeP>
                Want me to do work with you? Contact me for more info!{'\n'} Looking forward to hearing from you!
              </t.LargeP>
              <HireMe onClick={this.openContactPopup} book>
                Contact me
              </HireMe>
            </WorkWithMe>
          </Fade>
        </Layout>
        <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
      </HomepageWrapper>
    );
  }
}

export default Homepage;

export const pageQuery = graphql`
  query {
    avatarHomepage: file(relativePath: { eq: "avatar.jpg" }) {
      ...fluidImage
    }
  }
`;
