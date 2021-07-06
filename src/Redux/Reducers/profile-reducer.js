import { profileApi } from "../../api/api";
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';

let initialState = {
   id: 1,
   name: 'Test',
   surname: 'Dubinsky',
   position: 'front-end developer',
   grade: 'junior',
   skills_summary: ['HTML5', 'CSS3', 'Javascript ES6', 'React', 'Redux', 'NPM', 'GIT', 'SASS', 'Project & Product Management'],
   education: {
      university_grade: 'Private Higher Education Establishment',
      university_name: 'EUROPEAN UNIVERSITY',
      expiration_date: 'Jun 2019',
      program_subject_area: 'Computer Science'
   },
   languages: {
      Ukrainian: 'Native',
      Russian: 'Native',
      English: 'Intermediate'
   },
   awards: ['Best telecom solution for mass market 2018'],
   work_experience: [
      {
         position: 'Senior Specialist',
         department: 'Tariffs and products department',
         company: 'Kyivstar JSC',
         period: 'Nov 2018 - Aug 2020',
         direction: 'Product management',
         responsibilities: ['Product strategy development', 'Product development and promotion', 'Coordination internal resources and third parties/vendors for the flawless execution of goals', 'Partnerships', 'etc.']
      },
      {
         position: 'Product Manager',
         department: 'Tariffs and products department',
         company: 'Kyivstar JSC',
         period: 'Nov 2016 - Nov 2018',
         direction: 'Project management',
         responsibilities: ['Development project plan to monitor and track progress', 'Сoordination of all project participants', 'Create and maintain comprehensive project documentation', 'Сreation of product support processes', 'Risk management', 'Supporting tender procces', 'Product launch processes', 'etc.']
      },
      {
         position: 'Technical support specialist',
         department: '',
         company: 'Promotion Staff LLC',
         period: 'Jun 2012 - Nov 2016',
         direction: '',
         responsibilities: ['Solving problems related to Internet connection and billing restrictions', 'Interaction with subcontractors. Trobleshooting', 'Active sales']
      },
   ],
   contacts: {
      telephone_number: '067 233 77 59',
      viber: true,
      telegramm: true,
      skype: 'https://join.skype.com/invite/mVxdu1nLdoCH',
      location: 'Kyiv, Ukraine',
      email: 'Dmitriy.Dubinsky@gmail.com',
      facebook: 'http://www.facebook.com/dmitriy.dubinsky',
      linkedin: 'https://www.linkedin.com/in/dmitriy-dubinsky-836249185/',
      github: 'https://github.com/DubinskyD'
   }
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_PROFILE_DATA:
         return {
            ...state,
            ...action.data
         }
      default:
         return state;
   }
}

export const setProfileData = (data) => ({ type: SET_PROFILE_DATA, data })
export const getProfileData = () => {
   return async (dispatch) => {
      let response = await profileApi.getProfile();
      let data = response.data;
      dispatch(setProfileData(data))

   }
}

export default profileReducer;