
           import React from "react";
           import FontAwesome from 'fontawesome';
           import "./footer.css";
           import Logo from './coreesud.jpg'
           function Footer() {
             return (
               <div className="footer">
                 <footer class="site-footer">
                   <div className="container">
                     <div className="row">
                       <div className="col-sm-12 col-md-6">
                        <div className="logomoviefooter">korean restaurant</div> 
                         
                       <img className="logos" src={Logo} alt="logo" />
                         
                       </div>
           
                       
           
                      
                     </div>
                     <hr />
                   </div>
                   <div className="container">
                     <div className="row">
                       <div className="col-md-8 col-sm-6 col-xs-12">
                         <p className="copyright-text">
                           Copyright &copy; 2020 All Rights Reserved by
                           <a href="#">Movie Nessrine</a>.
                         </p>
                       </div>
           
                       <div className="col-md-4 col-sm-6 col-xs-12">
                         <ul className="social-icons">
                           <li>
                             <a className="facebook" href="#">
                               <i className="fa fa-facebook"></i>
                             </a>
                           </li>
                           <li>
                             <a className="twitter" href="#">
                               <i className="fa fa-twitter"></i>
                             </a>
                           </li>
                           <li>
                             <a className="dribbble" href="#">
                               <i className="fa fa-dribbble"></i>
                             </a>
                           </li>
                           <li>
                             <a className="linkedin" href="#">
                               <i class="fa fa-linkedin"></i>
                             </a>
                           </li>
                         </ul>
                       </div>
                     </div>
                   </div>
                 </footer>
               </div>
             );
           }
           
           export default Footer;
           