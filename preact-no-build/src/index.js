import { Component, render } from "preact";
import { html } from "./lib/htmShim.js";
class MyButton extends Component {
    render(props) {
        return html `
      <button style=${props.style} onClick=${props.onClick}>
        ${props.children}
      </button>
    `;
    }
}
class App extends Component {
    constructor() {
        super(...arguments);
        this.state = { count: 0 };
    }
    onClick(count) {
        this.setState({ count: count + 1 });
    }
    render() {
        return html `
      <div>
        <p class="count">Count is: ${this.state.count}</p>
        <${MyButton}
          style="color: purple;"
          onClick=${() => this.onClick(this.state.count)}
          >Click Me!<//
        >
      </div>
    `;
    }
}
render(html `<${App} />`, document.body);
