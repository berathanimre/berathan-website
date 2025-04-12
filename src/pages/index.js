import * as React from "react"
import { motion } from "framer-motion";
import profilePic from "../images/profile.jpg";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#000099",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

const profileImageStyle = {
  width: 150,
  height: 150,
  borderRadius: "50%",
  marginBottom: 20,
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <img src={profilePic} alt="Profile" style={profileImageStyle} />
      <h1 style={headingStyles}>Berathan Imre3k</h1>
      <h2 style={headingAccentStyles}>Data Scientist</h2>
      <p style={paragraphStyles}>
      I’m a Data Scientist with 8+ years of experience, specializing in machine learning, mainly in tabular data and time series forecasting, and scalable AI solutions. Currently, I’m focused on deep learning, particularly transformers and retrieval-augmented generation (RAG), as well as building production-grade ML pipelines in cloud-native environments. I’m passionate about optimizing models for real-world impact.
      </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href="https://www.linkedin.com/in/berathan-imre"
          >
            Let's connect on LinkedIn
          </a>
        </li>
      </ul>
    </main>
  )
}

export default IndexPage;

export const Head = () => (
  <>
    <title>Berathan Imre - Data Scientist</title>
    <meta name="description" content="Berathan Imre is a Data Scientist with 8+ years of experience in machine learning, time series forecasting, and LLM-driven systems. Explore his expertise in predictive modeling, scalable AI, and cloud-native solutions." />
    <meta name="keywords" content="Berathan Imre, Data Scientist, Machine Learning, Time Series Forecasting, LLM, AI, Predictive Modeling, Scalable AI, Cloud-Native Solutions" />
    <meta name="author" content="Berathan Imre" />
    <meta property="og:title" content="Berathan Imre - Data Scientist" />
    <meta property="og:description" content="Berathan Imre is a Data Scientist with 8+ years of experience in machine learning, time series forecasting, and LLM-driven systems." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.yourdomain.com" />
    <meta property="og:image" content="https://www.yourdomain.com/og-image.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Berathan Imre - Data Scientist" />
    <meta name="twitter:description" content="Berathan Imre is a Data Scientist with 8+ years of experience in machine learning, time series forecasting, and LLM-driven systems." />
    <meta name="twitter:image" content="https://www.yourdomain.com/twitter-image.jpg" />
  </>
);
