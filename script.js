class Logo extends React.Component {
  render() {
    return (
      React.createElement("div", null,
      React.createElement("img", { className: "h4tw-logo", src: this.props.src })));


  }}


class App extends React.Component {
  render() {
    return (
      React.createElement("div", null,
      React.createElement(Logo, { src: "https://health4theworld.org/academy/wp-content/uploads/2019/02/NewLogoSmall.png" }),
      React.createElement("div", { className: "main" },
      React.createElement("div", { className: "contents" },
      React.createElement(Header, { name: "Health4TheWorld", desc: "Memorandum of Understanding",
        tag: "Continue to Become an Official Humanitarian Innovation Hub!" }),
      React.createElement(Terms, { desc: "Please read terms of MOU below:" }),
      React.createElement(Footer, { desc: "To complete MOU, fill in the following fields:" })))));




  }}


class Header extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "head" },
      React.createElement("p", null, this.props.name),
      React.createElement("p", null, this.props.desc),
      React.createElement("p", null, this.props.tag),
      React.createElement("input", { type: "text", className: "textbox", placeholder: "Enter your institution name" }),
      React.createElement("div", null,
      React.createElement("select", { className: "dropdown" },
      React.createElement("option", { value: "Institution type" }, "Insitution type")))));




  }}


class Terms extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "terms" },
      React.createElement("p", { className: "terms-desc" }, this.props.desc),
      React.createElement("div", { class: "iframe-container" },
      React.createElement("iframe", { src: "https://na3.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=9ab61c38-03ec-4268-b29f-ac6eb57c5a48&env=na3-eu1&acct=5d9fc255-3cf4-4a31-b813-43dc7af76de5", allowfullscreen: true }))));



  }}


class Footer extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "footer" },
      React.createElement("p", null, this.props.desc),
      React.createElement("div", null,
      React.createElement("input", { type: "text", className: "textbox", placeholder: "Enter representative name" })),

      React.createElement("div", null,
      React.createElement("input", { type: "text", className: "textbox", placeholder: "Position" }))));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("root"));