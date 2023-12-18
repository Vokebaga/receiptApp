import React from 'react';
import styled from 'styled-components';
const MainContent = styled.main`
    height: 100vh;
    overflow-y: auto;
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Heading = styled.h1`
  color: #333;
`;

const Paragraph = styled.p`
  color: #555;
  line-height: 1.5;
`;

const ContactInfo = styled.div`
  margin-top: 20px;
`;

const ContactInfoParagraph = styled.p`
  margin-bottom: 10px;
`;

const Strong = styled.strong`
  color: #333;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = styled.div`
  margin-top: 20px;
  border-top: 1px solid #ddd;
  padding-top: 10px;
`;

const About = () => {
    return (
        <MainContent className='main-content py-5'>
            <Heading>About Us</Heading>
            <Paragraph>
                Welcome to our website! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit,
                vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.
            </Paragraph>

            <ContactInfo>
                <ContactInfoParagraph>
                    <Strong>Phone:</Strong> <Link href="tel:+77777777777">+7 (777) 777-7777</Link>
                </ContactInfoParagraph>
                <ContactInfoParagraph>
                    <Strong>Email:</Strong> <Link href="mailto:info@example.com">info@example.com</Link>
                </ContactInfoParagraph>
                <ContactInfoParagraph>
                    <Strong>Instagram:</Strong> <Link href={"https://www.instagram.com/"}>@example</Link>
                </ContactInfoParagraph>
                <ContactInfoParagraph>
                    <Strong>Email:</Strong> info@example.com
                </ContactInfoParagraph>
            </ContactInfo>

            <Footer>
                <p>
                    <Strong>Year of Foundation:</Strong> 2023
                </p>
            </Footer>
        </MainContent>
    );
};
export default About;