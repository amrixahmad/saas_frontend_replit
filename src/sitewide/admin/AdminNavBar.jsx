import React from 'react'
import { Bell, AlertCircle, Home, UserPlus, MessageSquare, Settings, User, PieChart, HelpCircle } from 'react-feather';
import { Link } from 'react-router-dom';
import Logout from '../../pages/Logout';

const AdminNavBar = () => {

  return (

    <nav className="navbar navbar-expand navbar-light navbar-bg">
       <a className="sidebar-toggle js-sidebar-toggle">
       <i className="hamburger align-self-center"></i>
       </a>

       <div className="navbar-collapse collapse">
         <ul className="navbar-nav navbar-align">
           <li className="nav-item dropdown">
             <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
               <div className="position-relative">                 
                 <Bell className='align-middle' />
                 <span className="indicator">4</span>
               </div>
             </a>
             <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
               <div className="dropdown-menu-header">
                 4 New Notifications
               </div>
               <div className="list-group">
                 <a href="#" className="list-group-item">
                   <div className="row g-0 align-items-center">
                     <div className="col-2">                       
                       <AlertCircle className="align-middle" />
                     </div>
                     <div className="col-10">
                       <div className="text-dark">Update completed</div>
                       <div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
                       <div className="text-muted small mt-1">30m ago</div>
                     </div>
                   </div>
                 </a>
                 <a href="#" className="list-group-item">
                   <div className="row g-0 align-items-center">
                     <div className="col-2">                       
                       <Bell className='text-warning'/>
                     </div>
                     <div className="col-10">
                       <div className="text-dark">Lorem ipsum</div>
                       <div className="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
                       <div className="text-muted small mt-1">2h ago</div>
                     </div>
                   </div>
                 </a>
                 <a href="#" className="list-group-item">
                   <div className="row g-0 align-items-center">
                     <div className="col-2">                       
                       <Home className="text-primary" />
                     </div>
                     <div className="col-10">
                       <div className="text-dark">Login from 192.186.1.8</div>
                       <div className="text-muted small mt-1">5h ago</div>
                     </div>
                   </div>
                 </a>
                 <a href="#" className="list-group-item">
                   <div className="row g-0 align-items-center">
                     <div className="col-2">                       
                       <UserPlus className="text-success" />
                     </div>
                     <div className="col-10">
                       <div className="text-dark">New connection</div>
                       <div className="text-muted small mt-1">Christina accepted your request.</div>
                       <div className="text-muted small mt-1">14h ago</div>
                     </div>
                   </div>
                 </a>
               </div>
               <div className="dropdown-menu-footer">
                 <a href="#" className="text-muted">Show all notifications</a>
               </div>
             </div>
           </li>
           <li className="nav-item dropdown">
             <a className="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-bs-toggle="dropdown">
               <div className="position-relative">                 
                 <MessageSquare className='align-middle' />
               </div>
             </a>
             <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="messagesDropdown">
               <div className="dropdown-menu-header">
                 <div className="position-relative">
                   4 New Messages
                 </div>
               </div>
               <div className="list-group">
                 <a href="#" className="list-group-item">
                   <div className="row g-0 align-items-center">
                     <div className="col-2">
                       <img src="src/assets/img/admin/avatars/avatar-5.jpg" className="avatar img-fluid rounded-circle" alt="Vanessa Tucker"></img>
                     </div>
                     <div className="col-10 ps-2">
                       <div className="text-dark">Vanessa Tucker</div>
                       <div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
                       <div className="text-muted small mt-1">15m ago</div>
                     </div>
                   </div>
                 </a>
                 <a href="#" className="list-group-item">
                   <div className="row g-0 align-items-center">
                     <div className="col-2">
                       <img src="src/assets/img/admin/avatars/avatar-2.jpg" className="avatar img-fluid rounded-circle" alt="William Harris"></img>
                     </div>
                     <div className="col-10 ps-2">
                       <div className="text-dark">William Harris</div>
                       <div className="text-muted small mt-1">Curabitur ligula sapien euismod vitae.</div>
                       <div className="text-muted small mt-1">2h ago</div>
                     </div>
                   </div>
                 </a>
                 <a href="#" className="list-group-item">
                   <div className="row g-0 align-items-center">
                     <div className="col-2">
                       <img src="src/assets/img/admin/avatars/avatar-4.jpg" className="avatar img-fluid rounded-circle" alt="Christina Mason"></img>
                     </div>
                     <div className="col-10 ps-2">
                       <div className="text-dark">Christina Mason</div>
                       <div className="text-muted small mt-1">Pellentesque auctor neque nec urna.</div>
                       <div className="text-muted small mt-1">4h ago</div>
                     </div>
                   </div>
                 </a>
                 <a href="#" className="list-group-item">
                   <div className="row g-0 align-items-center">
                     <div className="col-2">
                       <img src="src/assets/img/admin/avatars/avatar-3.jpg" className="avatar img-fluid rounded-circle" alt="Sharon Lessman"></img>
                     </div>
                     <div className="col-10 ps-2">
                       <div className="text-dark">Sharon Lessman</div>
                       <div className="text-muted small mt-1">Aenean tellus metus, bibendum sed, posuere ac, mattis non.</div>
                       <div className="text-muted small mt-1">5h ago</div>
                     </div>
                   </div>
                 </a>
               </div>
               <div className="dropdown-menu-footer">
                 <a href="#" className="text-muted">Show all messages</a>
               </div>
             </div>
           </li>
           <li className="nav-item dropdown">
             <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
               <Settings className='align-middle' />
             </a>

             <Link className="nav-link dropdown-toggle d-none d-sm-inline-block" to="/profile" data-bs-toggle="dropdown">
               <img src="src/assets/img/admin/avatars/avatar.jpg" className="avatar img-fluid rounded me-1" alt="Charles Hall" /> <span className="text-dark">Charles Hall</span>
             </Link>
             <div className="dropdown-menu dropdown-menu-end">
               <Link className="dropdown-item" to="/admin/profile"><User className="align-middle me-1"/> Profile</Link>
               <a className="dropdown-item" href="#"><PieChart className="align-middle me-1" /> Analytics</a>
               <div className="dropdown-divider"></div>
               <a className="dropdown-item" href="index.html"><Settings className="align-middle me-1" /> Settings & Privacy</a>
               <a className="dropdown-item" href="#"><HelpCircle className="align-middle me-1" /> Help Center</a>
               <div className="dropdown-divider"></div>
               <Logout />
             </div>
           </li>
         </ul>
       </div>
     </nav>
      
  )
}

export default AdminNavBar