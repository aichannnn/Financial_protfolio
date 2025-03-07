import React from "react";
import "../App.css";
import { Link } from "react-router-dom"; 

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Home</h1>

      <div className="top-section">
        <div className="card">
        <Link to="https://www.capitalmind.in/">
            <span className="material-symbols-outlined">arrow_outward</span>
        </Link>
          <h2>Get Started</h2>
          <p>Read our getting started guide to get the most out of your Capitalmind subscription.</p>
          
        </div>
        <div className="card">
        <Link to="https://premium.capitalmind.in/">
            <span className="material-symbols-outlined">arrow_outward</span>
        </Link>
          <h2>Community</h2>
          <p>Join the conversation on our exclusive community on Slack for Capitalmind Premium subscribers.</p>
        </div>
        <div className="card">
        <Link to="https://www.capitalmind.in/">
            <span className="material-symbols-outlined">arrow_outward</span>
        </Link>
          <h2>Visit Website</h2>
          <p>Keep up with our latest content on our website.</p>
        </div>
      </div>

      <h2 className="latest-posts-title">Latest Posts</h2>
      <div className="posts-container">
        {[
          {
            date: "Apr 18, 2024",
            title: "CM Fixed Income: Exiting Banking & PSU to Add a New Gilt Fund",
            description:
              "We are increasing the duration of our Fixed Income portfolio to reflect the current macro conditions. We want to take advantage of the current higher rates to further increase the duration of the Gilt funds we hold.",
          },
          {
            date: "Apr 03, 2024",
            title: "The Focused Way of Investing: Our Four-Quadrant Strategy and FY24 Review",
            description:
              "FY24 brought us a 42% gain in our Capitalmind Focused portfolio, gently outperforming the Nifty’s 29%. It’s been a bit of a rollercoaster, especially these last few months, but that’s part of the equity investing.",
          },
          {
            date: "Mar 25, 2024",
            title: "Poonawalla Fincorp: One right step at a time",
            description:
              "There are some winning patterns in investing that keep repeating: One such pattern is when a big company buys a struggling company, fixes old profile, and brings in new leaders to grow the business.",
          },
          {
            date: "Apr 05, 2024",
            title: "Craftsman Automation: Poised for Growth Amid Temporary Headwinds",
            description:
              "Unlock this post by trail. Craftsman Automation excels in making precise parts for cars and machines. Amidst temporary headwinds, looks resilient with a focus on growth and innovation.",
          },
          {
            date: "Mar 27, 2024",
            title: "A Small CAD for India, Yet Again",
            description:
              "Yet again, India’s Current Account Deficit is a mere 10 bn in the quarter (Dec 2023), less than levels more than a decade back, and less than 2017-18 too. Why net of gold? It’s not really a current account import.",
          },
          {
            date: "Mar 18, 2024",
            title: "CM Focused: Reducing our allocation to smallcaps & increasing cash",
            description:
              "In the last few days, we have seen increased volatility in the mid and small-cap sectors due to regulatory effects including acquisitions or fallows late mid and small-cap sectors.",
          },
        ].map((post, index) => (
          <div key={index} className="post-item">
            <p className="post-date">{post.date}</p>
            <h3 className="post-title">{post.title}</h3>
            <p className="post-description">{post.description}</p>
            <a href="#" className="read-more">Read full post</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;