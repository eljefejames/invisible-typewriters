class UserName extends React.Component {
  render() {
    return React.createElement("div", null, "name: ", this.props.name);
  }
}

class User extends React.Component {
  render() {
    return React.createElement("div", null,
        React.createElement("h1", null, "City: ", this.props.user.city),
        React.createElement(UserName, {name: this.props.user.name})
      );
  }
}

var user = { name: 'John', city: 'San Francisco' };
React.render(React.createElement(User, {user: user}), mountNode);
<SCRIPT LANGUAGE = "Javascript">
var today= new Date()
</SCRIPT>
....
<BODY onload=alert(today)>
