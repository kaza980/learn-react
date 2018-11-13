// class HelloWorldClass {
//   render() {
//     return <div>Hello World, I'm a {this.props.name}</div>;
//   }
// }

/*
<div className="logo-block">
   <img id="logo" src={params.src}/>
</div>

<div className="main-block">
    <form id="login-form" name="loginForm" onsubmit="sendLoginForm(); disableForm(); return false">

        <div className="main-block__title">
            <p>Log In</p>
        </div>

        <div className="center main-block__input">
            <input id="email" className="main-block__input-field " name="email" type="email" placeholder="E-mail"
                   required
                   title="Enter Email"/>
        </div>
        <div className="center main-block__input">
            <input id="password" className="main-block__input-field" name="password" type="password"
                   placeholder="Password"
                   required title="Enter Password"/>
        </div>
        <div className="center" id="error-block">
            <p id="error-message"></p>
        </div>
        <div className="center main-block__button">
            <input type="submit" value="Login" className="main-block__button-field"/>
        </div>
    </form>
</div>
    */

function RenderLogoFunction(params) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            {className: "logo-block"},
            React.createElement("img", {id: "logo", src: params.src})
        )
    )
}

function RenderMainBlockFunction(params) {
    return React.createElement(
        "div", {className: "main-block"},
        React.createElement(
            "form",
            {id: "login-form", name: "loginForm"},
            React.createElement(
                "div",
                {className: "main-block__title"},
                React.createElement(
                    "p",
                    null,
                    "Log In"
                )
            ),
            React.createElement(
                "div",
                {className: "center main-block__input"},
                React.createElement("input", {
                    id: "email",
                    className: "main-block__input-field ",
                    name: "email",
                    type: "email",
                    placeholder: "E-mail",
                    required: true,
                    title: "Enter Email"
                })
            ),
            React.createElement(
                "div",
                {className: "center main-block__input"},
                React.createElement("input", {
                    id: "password",
                    className: "main-block__input-field",
                    name: "password",
                    type: "password",
                    placeholder: "Password",
                    required: true,
                    title: "Enter Password"
                })
            ),
            React.createElement(
                "div",
                {className: "center", id: "error-block"},
                React.createElement("p", {id: "error-message"})
            ),
            React.createElement(
                "div",
                {className: "center main-block__button"},
                React.createElement("input", {
                    type: "submit",
                    value: "Login",
                    className: "main-block__button-field"
                })
            )))
}

ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(RenderLogoFunction, {src: "img/w-mercury-development.svg"}),
    React.createElement(RenderMainBlockFunction, {})
), document.getElementById("root"));

