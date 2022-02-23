import React, { Component } from "react";
import Statistics from "./Statistics/Statistics.js";
import FeedBack from "./FeedBack/FeedBack.js";
import Section from "./Section/SectionTitle.js";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, stat) => {
      acc += stat;
      return acc;
    }, 0);
  }

  countPositiveFeedback() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  handleClickButton = (nameBtn) => {
    this.setState({ [nameBtn]: this.state[nameBtn] + 1 });
  };
  positiveStyles = () => {
    if (
      this.countPositiveFeedback() > 0 &&
      this.countPositiveFeedback() <= 20
    ) {
      return "bad";
    } else if (
      this.countPositiveFeedback() > 20 &&
      this.countPositiveFeedback() <= 40
    ) {
      return "neutral";
    } else if (
      this.countPositiveFeedback() > 40 &&
      this.countPositiveFeedback() <= 60
    ) {
      return "good";
    } else if (
      this.countPositiveFeedback() > 60 &&
      this.countPositiveFeedback() <= 80
    ) {
      return "great";
    } else if (this.countPositiveFeedback() > 80) {
      return "excellent";
    }
  };
  render() {
    const { good, bad, neutral } = this.state;
    return (
      <Section title="Please leave feedback">
        <FeedBack
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleClickButton}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positive={this.countPositiveFeedback()}
          positiveStyles={this.positiveStyles()}
        />
      </Section>
    );
  }
}
