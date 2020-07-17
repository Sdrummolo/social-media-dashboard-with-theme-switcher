import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import ThemeState from "./utilities/ThemeState"
import Theme from "./utilities/Theme"

ReactDOM.render(
  <ThemeState>
    <Theme>
      <App />
    </Theme>
  </ThemeState>,
  document.getElementById("root")
)
