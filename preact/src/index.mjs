import { Component, render } from "preact";
import { html } from "./lib/htmShim.mjs";

class MyButton extends Component {
  render(props) {
    return html`
      <button style=${props.style} onClick=${props.onClick}>${props.children}</button>
    `;
  }
}

class App extends Component {
  state = { count: 0 };

  onClick(count) {
    this.setState({ count: count + 1 });
  }

  render(props) {
    return html`
      <div>
        <p class="count">Count: ${this.state.count}</p>
        <${MyButton} style="color: purple;" onClick=${() =>
      this.onClick(this.state.count)}>Click Me!<//>
      </div>
    `;
  }
}

render(html`<${App} />`, document.body);
