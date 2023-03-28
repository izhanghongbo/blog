# Graph Data Structure


Graph 数据结构，支持更新React组件
```js
interface GraphObserver {
  onGraphDataChanged(graph: Graph): void;
}

class Graph {
  private observers: GraphObserver[] = [];

  // ...

  addObserver(observer: GraphObserver) {
    this.observers.push(observer);
  }

  removeObserver(observer: GraphObserver) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  private notifyObservers() {
    for (const observer of this.observers) {
      observer.onGraphDataChanged(this);
    }
  }
}

class MyReactComponent extends React.Component implements GraphObserver {
  constructor(props: any) {
    super(props);
    this.state = { graph: new Graph([]) };
  }

  componentDidMount() {
    this.state.graph.addObserver(this);
    this.state.graph.load();
  }

  componentWillUnmount() {
    this.state.graph.removeObserver(this);
  }

  onGraphDataChanged(graph: Graph) {
    this.setState({ graph });
  }

  render() {
    // Render the graph nodes and edges using this.state.graph
  }
}

```


