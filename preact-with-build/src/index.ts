import { Component, render, ComponentChildren } from "preact";
import { html } from "./lib/htmShim.ts";

type MyButtonProps = {
  style: string;
  onClick: MouseEvent;
  children: ComponentChildren;
};

class MyButton extends Component<MyButtonProps> {
  render(props: MyButtonProps) {
    return html`
      <button style=${props.style} onClick=${props.onClick}>
        ${props.children}
      </button>
    `;
  }
}

class App extends Component {
  state = { count: 0 };

  onClick(count: number) {
    this.setState({ count: count + 1 });
  }

  render() {
    return html`
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

render(html`<${App} />`, document.body);
