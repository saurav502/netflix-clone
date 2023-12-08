import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsPlayFill, BsPlus } from "react-icons/bs";

function ContentDetails({ match }) {
  const [content, setContent] = useState({});
  const [recommendations, setRecommendations] = useState([]);

  const fetchContentDetails = async (id) => {
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/ott/show/${id}`,
        {
          headers: { projectId: "f104bi07c490" },
        }
      );
      setContent(response.data);
    } catch (error) {
      console.error("Error fetching content details:", error);
    }
  };

  const fetchContentRecommendations = async () => {
    try {
      // You can customize the recommendation logic here
      // For example, you can fetch recommendations based on genres or user preferences
      // Use axios to fetch recommendations from your API
      // const response = await axios.get("Your recommendation API URL");
      // setRecommendations(response.data);
    } catch (error) {
      console.error("Error fetching content recommendations:", error);
    }
  };

  useEffect(() => {
    const { id } = match.params;
    fetchContentDetails(id);
    fetchContentRecommendations();
  }, [match.params]);

  const addToWatchLater = () => {
    // Implement your logic to add the content to the Watch Later section
    // This could involve making a POST request to your backend API
  };

  return (
    <div className="content-details">
      <div className="backdrop">
        <img
          src={`https://image.tmdb.org/t/p/original/${content.backdrop_path}`}
          alt={content.title}
        />
      </div>
      <div className="content-info">
        <h1>{content.title}</h1>
        <div className="meta">
          <span>{content.release_year}</span>
          <span>{content.duration} mins</span>
          <span>{content.genres.join(", ")}</span>
          <span>Rating: {content.rating}</span>
        </div>
        <p>{content.description}</p>
        <div className="actions">
          <button onClick={addToWatchLater}>
            <BsPlus /> Watch Later
          </button>
          <button>
            <BsPlayFill /> Play
          </button>
        </div>
      </div>
      <div className="recommendations">
        <h2>Recommended Content</h2>
        {/* Display recommended movies or TV shows */}
        {recommendations.map((recommendation) => (
          <div key={recommendation.id} className="recommended-content">
            <img
              src={`https://image.tmdb.org/t/p/w500/${recommendation.poster_path}`}
              alt={recommendation.title}
            />
            <h3>{recommendation.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentDetails;
