import React from "react";
import "./Activities.css";

const activities = [
  { emoji: "📅", text: "End Times Prayer Meeting (2nd Friday of each month)" },
  { emoji: "🎙️", text: "Uplifting Moments radio program" },
  { emoji: "📖", text: "Friday night in-depth bible studies" },
  { emoji: "💞", text: "Pastoral counseling" },
  { emoji: "🙏", text: "Healing prayer" },
  { emoji: "⚡", text: "Deliverance / Breaking curses" },
  { emoji: "🌐", text: "Internet ministry" },
];

const Activities = () => {
  return (
    <section className="activities-section">
      <h2 className="activities-title">Our Main Activities</h2>
      <div className="activities-grid">
        {activities.map((activity, index) => (
          <div key={index} className="activity-card">
            <span className="activity-icon">{activity.emoji}</span>
            <p className="activity-text">{activity.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;

