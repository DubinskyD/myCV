import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './Redux/Reducers/app-reducer';
import Languages from "./components/Languages/Languages";
import Skils from './components/Skills/Skills';
import Education from './components/Education/Education';
import Awards from './components/Awards/Awards';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Contacts from './components/Contacts/Contacts';
import Avatar from './components/Avatar/Avatar';

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    return (
      <div>
        <div>
          <Avatar
            name={this.props.name}
            surname={this.props.surname}
            grade={this.props.grade}
            position={this.props.position}
          />
        </div>
        <div>
          <Skils skills={this.props.skills} />
        </div>
        <div>
          <Education education={this.props.education} />
        </div>
        <div>
          <Languages languages={this.props.languages} />
        </div>
        <div>
          <Awards awards={this.props.awards} />
        </div>
        <div>
          <WorkExperience work_experience={this.props.work_experience} />
        </div>
        <div>
          <Contacts contacts={this.props.contacts} />
        </div>
      </div >
    )
  }
}

const mapStateToProps = (state) => ({
  languages: state.profile.languages,
  skills: state.profile.skills_summary,
  education: state.profile.education,
  awards: state.profile.awards,
  work_experience: state.profile.work_experience,
  contacts: state.profile.contacts,
  name: state.profile.name,
  surname: state.profile.surname,
  grade: state.profile.grade,
  position: state.profile.position
})

export default connect(mapStateToProps, { initializeApp })(App);
