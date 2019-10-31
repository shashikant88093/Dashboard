// import React from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { userSignOut } from 'actions/Auth';
// import "./Userinfo.css"


// class UserInfo extends React.Component {

//   state = {
//     anchorEl: null,
//     open: false,
//   };

//   handleClick = event => {
//     this.setState({ open: true, anchorEl: event.currentTarget });
//   };

//   handleRequestClose = () => {
//     this.setState({ open: false });
//   };

//   render() {
//     const { ToggleButton } = this.props
//     return (
//       <>
//         {
//           ToggleButton ?
//             < div className="user-profile-size text-center " >
//               <Link className="logo-lg" to="/" title="shashikant">
                
//                 {/* <img className="zmdi-hc-2x" src={require("assets/images/favicon.ico")} width="30px" alt="Stackupico" title="Stackup" /> */}
//               </Link>
//             </div > :
//             <div className="user-profile d-flex flex-row align-items-center">
//               <Link className="logo-lg" to="/" title="shashikant">
//                 {/* <img src={require("assets/images/logo1.png")} alt="Stackup" title="Stackup" /> */}
//               </Link>
//             </div>
//         }
//       </>
//     );
//   }
// }

// const mapStateToProps = ({ settings }) => {
//   const { locale } = settings;
//   return { locale }
// };
// export default connect(mapStateToProps, { userSignOut })(UserInfo);


