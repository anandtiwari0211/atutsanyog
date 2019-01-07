import { connect } from 'react-redux'
import App from '../components/app'

const mapStateToProps = state => ({
  user: state.users,
})

const mapDispatchToProps = {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)