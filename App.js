class App extends React.Component {
  state = {
    isVisible: false
  }

  buttonHandler = () => {
    // this.setState({
    //   isVisible: !this.state.isVisible
    // })

    this.setState((prevState) => ({
      isVisible: !prevState.isVisible
    }))
  }

  render() {
    const { isVisible } = this.state;

    return (
      <React.Fragment>
        <div className="container">
          <ButtonToggle
            clickEvent={this.buttonHandler}
            isVisible={isVisible}
          />
          {isVisible && <ResultContainer />}
        </div>
      </React.Fragment>
    )
  }
}

const ButtonToggle = ({ isVisible, clickEvent }) => {
  return (
    <button
      className="button"
      onClick={clickEvent}
    >
      {isVisible ? "Hide" : "Show"}
    </button>
  )
}

const ResultContainer = (props) => {
  return (
    <div
      className="result-container"
    >
      Hello World!
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
