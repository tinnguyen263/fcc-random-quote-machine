import React, { Component } from "react";
import quotes from "./quotes";

const randomQuoteFrom = quotes => {
  const randdomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randdomIndex];
};
class App extends Component {
  state = {
    quotes: [],
    displayQuote: {}
  };

  constructor() {
    super();

    this.state = {
      ...this.state,
      quotes: quotes,
      displayQuote: randomQuoteFrom(quotes)
    };

    this.nextQuote = this.nextQuote.bind(this);
  }

  render() {
    return (
      <div className="App">
        <div id="quote-box">
          <div id="text">{this.state.displayQuote.quote}</div>
          <div id="author">{this.state.displayQuote.author}</div>
          <div id="new-quote" onClick={this.nextQuote}>
            Change
          </div>
          <sp> or </sp>
          <a id="tweet-quote" href="https://twitter.com/intent/tweet">
            Tweet
          </a>
        </div>
      </div>
    );
  }

  nextQuote() {
    this.setState({ displayQuote: randomQuoteFrom(this.state.quotes) });
  }
}

export default App;
