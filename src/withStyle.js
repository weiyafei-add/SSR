import React from "react";

export default (oldComponent, style) => {
  return class WithStyle extends React.Component {
    componentWillMount() {
      console.log(this.props);
      if (this.props.staticContext) {
        this.props.staticContext.css = style._getCss();
      }
    }

    render() {
      return <oldComponent {...this.props} />;
    }
  };
};
