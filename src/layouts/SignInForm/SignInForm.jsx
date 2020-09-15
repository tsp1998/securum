import React from 'react'

//css
import "./SignInForm.scss"
import FA from 'react-fontawesome'

//routing
import { Link, withRouter } from 'react-router-dom'

//api
import { signin } from '../../api/authApi'

//utils
import { getErrorMessage } from '../../utils/error'

//redux
import { connect } from 'react-redux'
import { setUser } from '../../redux/user/userActions'

class SignInForm extends React.Component {

  state = {
    email: "",
    password: "",
    error: "",
    loading: false
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({ error: "", loading: true })
    const { email, password } = this.state;
    try {
      if (!email || !password) throw new Error("All Fields Required...")
      else {
        const res = await signin({ email, password })
        const { status, token, user } = res;
        if (status === "success") this.setState({
          email: "",
          password: "",
          error: "",
          loading: false
        }, () => {
          localStorage.setItem("securumToken", token)
          this.props.setUser(user);
          this.props.history.push("/");
        })
        else throw new Error(getErrorMessage("Sign In Failed... Try Again..."))
      }
    } catch (error) {
      this.setState({ error: getErrorMessage("Something Went Wrong...", error), loading: false }, () => setTimeout(() => { this.setState({ error: "" }) }, 10000))
    }
  }

  render() {
    return (
      <section className="signup-page spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <form className="signup-form" onSubmit={this.handleSubmit} method="post">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        className="check-form"
                        type="email"
                        placeholder="Email*:"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                      <span><FA name="check" /></span>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        className="check-form"
                        type="password"
                        placeholder="Password*:"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                      <span><FA name="check" /></span>
                    </div>
                  </div>
                  <div className="col-md-12">
                    {this.state.error && (
                      <div className="alert alert-danger" role="alert">
                        {this.state.error}
                      </div>
                    )}
                    <button className="site-btn sb-gradients mt-4">
                      {this.state.loading && (
                        <div className="spinner-border text-light" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      ) || "Sign In"}
                    </button>
                    <br /><br />
                    <Link to="/signup">Don't Have Account Sign Up Here...</Link>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="map" id="map-canvas"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapDispatchToProps = {
  setUser
}

export default withRouter(connect(null, mapDispatchToProps)(SignInForm))
