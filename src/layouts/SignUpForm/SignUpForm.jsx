import React from 'react'

//css
import "./SignUpForm.scss"
import FA from 'react-fontawesome'

//api
import { signup } from '../../api/authApi'

//utils
import { getErrorMessage } from '../../utils/error'
import { Link } from 'react-router-dom'

class SignUpForm extends React.Component {

  state = {
    name: "",
    email: "",
    role: 0,
    password: "",
    confirmPassword: "",
    bio: "",
    error: "",
    success: false,
    loading: false
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({ error: "", loading: true })
    const { name, email, password, confirmPassword, role, bio } = this.state;
    try {
      if (!name || !email || !password || !confirmPassword) throw new Error("All Fields Required...")
      else if (password !== confirmPassword) throw new Error("Password dosen't matched...")
      else {
        const res = await signup({ name, email, password, bio, role })
        const { status, user } = res;
        if (status === "success") this.setState({
          name: "",
          email: "",
          role: 0,
          password: "",
          confirmPassword: "",
          bio: "",
          error: "",
          success: true,
          loading: false
        }, () => { setTimeout(() => { this.setState({ success: false }) }, 10000) })
        else throw new Error(getErrorMessage("Registration Failed... Try Again..."))
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
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="check-form"
                        type="text"
                        placeholder="First Name*:"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                      <span><FA name="check" /></span>
                    </div>
                  </div>
                  <div className="col-md-6">
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
                  <div className="col-md-6">
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
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="check-form"
                        type="password"
                        placeholder="Confirm Password*:"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                      />
                      <span><FA name="check" /></span>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        placeholder="Tell us about your question!"
                        name="bio"
                        value={this.state.bio}
                        onChange={this.handleChange}
                      ></textarea>
                    </div>
                    <h5 className="mb-3">Role<span>*</span>:</h5>
                    <div className="signup-type">
                      <label className="ct-label">User
                      <input
                          type="radio"
                          name="role"
                          value={0}
                          checked={this.state.role == 0 ? "checked" : ""}
                          onChange={this.handleChange}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="ct-label">Miner
                      <input
                          type="radio"
                          name="role"
                          value={2}
                          checked={this.state.role == 2 ? "checked" : ""}
                          onChange={this.handleChange}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>

                    {this.state.error && (
                      <div className="alert alert-danger" role="alert">
                        {this.state.error}
                      </div>
                    )}
                    {this.state.success && (
                      <div className="alert alert-success" role="alert">
                        Registration Successful...
                        <Link to="/signin">Sign In Here...</Link>
                      </div>
                    )}
                    <button className="site-btn sb-gradients mt-4">
                      {this.state.loading && (
                        <div className="spinner-border text-light" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      ) || "Signup"}
                    </button>
                    <br/><br/>
                    <Link to="/signin">Have Account Sign In Here...</Link>
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
export default SignUpForm
