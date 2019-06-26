(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Header/header.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Header/header.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n\r\n\r\n <nav class=\"navbar\">\r\n  \r\n   <h1 class=\"navbar-brand\" [routerLink]=\"path\" >Welcome to Online NetWork</h1>\r\n\r\n\r\n   <div class=\"navigation\">\r\n       <a class=\"option\" routerLink=\"/register\" (click)=\"register()\" *ngIf=\"!authenticated\">Register</a>\r\n       <a class=\"option\"  (click)=\"logOut()\" *ngIf=\"authenticated\">Logout</a>\r\n       <a class=\"option\" *ngIf=\"!authenticated\" routerLink=\"/login\">Log In</a>\r\n       <a *ngIf=\"authenticated\" class=\"option\" routerLink=\"/search\">Search</a>\r\n       <div class=\"option\" (mouseenter)=\"appear()\"  (mouseleave)=\"disappear1()\">Options\r\n\t\t   <div class=\"myMenu\" *ngIf=\"myMenu\" (mouseleave)=\"disappear()\" (mouseenter)=\"settrue()\"> \r\n\t\t       <a *ngIf=\"menu2\" (click)=\"disappear()\" class=\"dropdown-item\">Menu 2</a>\r\n\t\t       <a *ngIf=\"menu3\" (click)=\"disappear()\" class=\"dropdown-item\"  routerLink=\"/founder\">Founder</a>\r\n\t       </div>\r\n       </div>\r\n   </div>\r\n   \r\n   \r\n   <div class=\"smallNavigation\" (mouseenter)=\"smallappear()\" (mouseleave)=\"smalldisappear1()\">\r\n       😎\r\n       <div class=\"smalloption\" (mouseleave)=\"smalldisappear()\" *ngIf=\"mysmallMenu\" (mouseenter)=\"settrue1()\">\r\n\t\t   <a class=\"dropdown-item\"  *ngIf=\"smallmenu1&&!authenticated\"  (click)=\"smalldisappear()\" routerLink=\"/register\">Register</a>\r\n\t\t   <a class=\"dropdown-item\"  *ngIf=\"smallmenu2&&!authenticated\" (click)=\"smalldisappear()\"  routerLink=\"/login\">Log In</a>\r\n\t\t   <a class=\"dropdown-item\"  *ngIf=\"smallmenu1&&authenticated\"  (click)=\"logOut()\">Logout</a>\r\n\t\t   <a *ngIf=\"smallmenu3&&authenticated\"  class=\"dropdown-item\" (click)=\"smalldisappear()\" routerLink=\"/search\">Search</a>\r\n\t\t   <a *ngIf=\"smallmenu4\"  class=\"dropdown-item\" (click)=\"smalldisappear()\">Menu 2</a>\r\n\t\t   <a *ngIf=\"smallmenu5\"  class=\"dropdown-item\" (click)=\"smalldisappear()\" routerLink=\"/founder\">Founder</a>\r\n\t   </div>\r\n   </div>\r\n  \r\n\r\n  \r\n</nav>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Register/register.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Register/register.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class='register' *ngIf=\"!fillInformation\">\r\n\r\n <p>This is the platform for Social Network!<p>\r\n <p>Create an account and connet to your friends!<p>\r\n <br><br><br>\r\n\r\n <button type=\"button\" class=\"btn btn-dark\" *ngIf='registerState' (click)=\"loadRegister()\">Register</button>\r\n <br><br>\r\n\r\n\r\n  <div class=\"spinner-border text-primary\" role=\"status\" *ngIf='!registerState' >\r\n   <span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"fillInformation\" *ngIf=\"fillInformation\" >\r\n\t<h1 class=\"welcomeTitle\">Welcome !!</h1>\r\n\t\r\n    <form class=\"registerForm\" (submit)=\"onSubmit()\" [formGroup]=\"form\">\r\n\t\t  \r\n\t\t<div class=\"infor\">\r\n\t\t  <div class=\"child animation1\">\r\n\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"exampleInputEmail1\">User Email</label>\r\n\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"User email\" formControlName=\"email\" (keyup)=\"onChange($event)\">\r\n\t\t\t\t\t<small  class=\"form-text\" style=\"font-size: 15px;color: red;\" *ngIf=\"invalidEmail\">Please Enter A Valid Email!</small>\r\n\t\t\t\t\t<small  class=\"form-text\" style=\"font-size: 15px;color: red;\" *ngIf=\"repeatUser&&!invalidEmail\">\r\n\t\t\t\t\t This email has benn used!!</small>\r\n\t\t\t  </div>\r\n\r\n\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"exampleInputPassword1\">User Password</label>\r\n\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"User Password\" formControlName=\"password\">\r\n\t\t\t  </div>\r\n\t\t\t  \r\n\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"exampleInputPassword2\">Password Confirm</label>\r\n\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"exampleInputPassword2\" placeholder=\"Password Confirm\" formControlName=\"confirmpassword\">\r\n\t\t\t\t\t<small  class=\"form-text\" style=\"font-size: 15px;color: red;\" *ngIf=\"!match\">!!PassWord Must Be Matched</small>\r\n\t\t\t  </div>\r\n\t\t\t        \r\n\t\t  </div>\r\n\t\t  \r\n\t\t  \r\n\r\n\t\t  <div class=\"child animation2\">\r\n\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"username\">User Name</label>\r\n\t\t\t\t\t<input type=\"text\"  class=\"form-control\" id=\"username\" aria-describedby=\"emailHelp\" formControlName=\"username\" \r\n\t\t\t\t\t(keyup)=\"onuserNameChange($event)\" >\r\n\t\t\t\t\t<small  class=\"form-text\" style=\"font-size: 15px;color: red;\" *ngIf=\"emptyusername\">Invalid Username</small>\r\n\t\t\t  </div>\r\n\t\t\t  \r\n\t\t\t  <div class=\"imageContainer\">\r\n\t\t\t\t \r\n\t\t\t     <div class=\"imagepick\">\r\n\t\t\t\t   <button mat-stroked-button type=\"button\" (click)=\"filePicker.click()\" class=\"btn btn-light\">Profile</button>\r\n\t\t\t\t   <input type=\"file\" #filePicker (change)=\"onImagePicked($event)\" style=\"display: none;\" >\r\n\t\t\t\t </div>\r\n\r\n\r\n\t\t\t\t <!–– display the image, irrelevent with form ––>\r\n\t\t\t\t <div style=\"margin-right:50px;\">\r\n\t\t\t\t\t  <div class=\"imagebox\">\r\n\t\t\t\t\t\t <div class=\"image-preview\" *ngIf=\"imagePreview !== '' && imagePreview && form.get('image').valid\">\r\n\t\t\t\t\t\t\t<img [src]=\"imagePreview\" width=\"175px\" height=\"175px\" >\r\n\t\t\t\t\t\t </div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <small  class=\"form-text\" style=\"font-size: 15px;color: red;\" *ngIf=\"emptyimage\">!!Please Upload a Photp</small>\r\n\t\t\t\t </div>\r\n\t\t\t  </div>\r\n\t\t\t \r\n\t\t  </div>\r\n\t\t</div>\r\n\t\t  \r\n\r\n\t\t  <button type=\"submit\" class=\"btn btn-primary animation3 submit\">Confirm!</button>\r\n\t</form>\r\n\t\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=\"https://kit.fontawesome.com/40fdd624b8.js\"></script>\n\n<script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" crossorigin=\"anonymous\"></script>\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script>\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n\n\n\n\n<MyHeader></MyHeader>\n<!-- Routing -->\n <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/chat.html":
/*!**********************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/chat.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"body\">\r\n\t<div class=\"chatcontent\">\r\n\t\t<div class=\"eachContent\" *ngFor=\"let eachContent of chatcontent\">\r\n\t\t\t<p><span *ngIf=\"currentUserId==eachContent.user\" style=\"color:coral;\">You : </span>\r\n\t\t\t   <span *ngIf=\"currentUserId!=eachContent.user\">{{friend.name}} : </span>\r\n\t\t\t{{eachContent.content}}</p>\r\n\t\t</div>\r\n\t\t\r\n    </div>\r\n    \r\n    <form class=\"chatboard\" (submit)=\"send(sendForm)\" #sendForm=\"ngForm\">\r\n\t\t<textarea rows=\"3\" cols=\"80\" name=\"content\"  ngModel #content=\"ngModel\" value=\"1\" maxlength=\"100\" [(ngModel)]=\"enterValue\"> \r\n\t\t</textarea><br>\r\n\t\t<button type=\"submit\" class=\"btn btn-success send\">Send</button>\r\n    </form>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/fail/fail.html":
/*!**********************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fail/fail.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"margin-top:50px; text-align: center;\">Something Wrong ...</h1>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/founder/founder.html":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/founder/founder.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n\r\n\r\n\r\n\t<div class=\"founder\">\r\n\r\n\t\t<img src=\"https://peaceful-mountain-59628.herokuapp.com/images/founder.jpg\"  class=\"founderpic\" >\r\n\r\n\t\t<div class=\"founderinformation\">\r\n\t\t\t<h4>Hi, I am JunBin, a junior CS student at Queens College and also the creator of this small online social network website</h4>\r\n\t\t\t\r\n\t\t\t<hr>\r\n\t\t\t<h4>This Website is created by using MEAN Stack</h4>\r\n\t\t\t\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n\r\n\r\n\t<div class=\"contact\">\r\n      <h2 >How this Website work?</h2>\r\n      <br><br>\r\n\t  <p>It's same as other regular social website. You can create an account, find and add your friends(Make a connection with them). You can also write your own post and chat with your friends</p>\r\n\t  <hr>\r\n\t  <br>\r\n\t  <h2 >How to reach me?</h2>\r\n\t  <br>\r\n\t\t\r\n\t  <div>\r\n\t\t\t<a type=\"button\" class=\"btn btn-light reach\" href=\"https://www.linkedin.com/in/junbin-liang-482556176/\">Linkedin</a>\r\n\t\t  <a type=\"button\" class=\"btn btn-danger reach\" href=\"https://github.com/JunBinLiang \">Github</a>\t\r\n\t  </div>\r\n\r\n\t</div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/getposts/getposts.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/getposts/getposts.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"author\" *ngIf=\"userId==currentUserId\"> {{user.name}}</h3>\r\n<h3 class=\"author\" *ngIf=\"userId!=currentUserId\">User : {{user.name}}</h3>\r\n\r\n\r\n<div class=\"posts\" >\r\n\t <div class=\"card post\" *ngFor=\"let post of posts\">\r\n\t  <div class=\"card-body\">\r\n\t\t  <button type=\"button\" class=\"close delete\" aria-label=\"Close\" (click)=\"deletepost($event)\"  *ngIf=\"userId==currentUserId\" [value]=\"post._id\">\r\n \t\t\t\t\t\r\n  \t\t\t\t\t&times;\r\n\t\t  </button>\r\n\t\t  <br>\r\n\t\t \r\n\t\t <h5 class=\"card-title\">Title : {{post.title}}</h5>\r\n\t\t <hr>\r\n\t\t <p class=\"card-text\">{{post.content}}</p>\r\n\t  </div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"background\">\r\n\t\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.html":
/*!************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"spinner-border text-primary spinner\" role=\"status\" *ngIf='!start' >\r\n   \t<span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n\r\n\r\n\r\n<div class=\"background\" *ngIf='start' >\r\n\r\n\t<h1 style=\"text-align: center;\">Welcome Login!</h1>\r\n\r\n\r\n\r\n\t<br><br>\r\n\r\n\t<div class=\"cardcontainer\">\r\n\t\t<mat-card>\r\n\t\t\t<form class=\"example-form\" (submit)=\"handleLogin(postForm)\" #postForm=\"ngForm\" >\r\n\t\t\t  <mat-form-field class=\"example-full-width\">\r\n\t\t\t   <label>Email</label>\r\n\t\t\t   <input matInput type=\"email\" name=\"myemail\" ngModel        #myemail=\"ngModel\">\r\n\t\t\t  </mat-form-field>\r\n\r\n\t\t\t  <mat-form-field class=\"example-full-width\">\r\n\t\t\t\t<label>PassWord</label>\r\n\t\t\t\t<input matInput type=\"password\" name=\"mypassword\" ngModel  #mypassword=\"ngModel\">\r\n\t\t\t  </mat-form-field>\r\n\t\t\t  <small  class=\"form-text\" style=\"font-size: 15px;color: red;\" *ngIf=\"loginfail\">Wrong password or Email</small>\r\n\t\t\t   <button  class=\"btn btn-light\" type=\"submit\">Login</button>\r\n\t\t\t</form>\r\n\t\t</mat-card>\r\n\t</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mypage/mypage.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mypage/mypage.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"spinner-border text-primary loader\" role=\"status\" *ngIf='loading' >\r\n   <span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n\r\n\r\n<div class=\"whole\" *ngIf=\"!friendPage\">\r\n\t<div>\r\n\r\n\t\t<div class=\"profile\" *ngIf='!loading&&!userUnfind'>\t\r\n\t\t\t<div>\r\n\t\t\t\t<img src={{user.imagepath}} width=\"175px\" height=\"175px\" style=\"border-radius: 50%;\">\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"information\">\r\n\t\t\t\t<h3><span>Name : </span>{{user.name}} </h3>\r\n\t\t\t\t<hr>\r\n\t\t\t\t<p><span>Email : </span> {{user.email}} </p>\r\n\t\t\t\t<p><span>Additional Information</span> : emm...</p>\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary connection\" [routerLink]=\"['/myposts/', userid]\" >My Posts!</button>\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-outline-primary connection\" (click)=\"loadFriends()\">My Friends!</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<button type=\"button\" class=\"btn btn-outline-danger btn-lg\" (click)=\"showRequest()\">Request  <span class=\"request\" *ngIf=\"requestNumber!==0\"> {{requestNumber}}</span></button>\r\n\t\t<button type=\"button\" class=\"btn btn-outline-dark btn-lg\" [routerLink]=\"['/mypage/post/', userid]\">Post</button>\r\n\t\t<button type=\"button\" class=\"btn btn-outline-warning btn-lg\" (click)=\"loadchat()\">Chat <span class=\"request\" *ngIf=\"chatRequestNum!==0\">{{chatRequestNum}}</span></button>\r\n\t</div>\r\n\r\n\t<div  class=\"allRequest\" *ngIf=\"!chatpage\">\r\n\t\t<div class=\"requestUser\" *ngFor=\"let requestUser of resultUsers\">\r\n\t\t    <div style=\"margin: auto;width: 75%;\">\r\n\t\t\t\t<img [src]=\"requestUser.imagepath\"  class=\"picture\" [routerLink]=\"['/user', requestUser._id]\" >\r\n\t\t\t\t<h5>Name : {{requestUser.name}}\t</h5>\r\n\t\t\t\t<h5>Email :{{requestUser.email}} </h5>\r\n\t\t\t</div>\r\n\t\t\t<button type=\"button\" (click)=\"accept($event)\" class=\"btn btn-outline-primary\" [value]=\"requestUser._id\">Accept</button>\r\n            <button type=\"button\" class=\"btn btn-outline-secondary\" [value]=\"requestUser._id\" (click)=\"reject($event)\">Reject</button>\r\n            \r\n\t\t\t\r\n\t\t</div>\t\r\n\t</div>\r\n\t\r\n\t\r\n\t\r\n\t<div  class=\"allRequest\" *ngIf=\"chatpage\">\r\n\t\t<div class=\"chattUser\" *ngFor=\"let requestUser of chatUsers\">\r\n\t\t    <div style=\"margin: auto;width: 75%;\">\r\n\t\t\t\t<img [src]=\"requestUser.imagepath\"  class=\"picture\" [routerLink]=\"['/user', requestUser._id]\" >\r\n\t\t\t\t<h5>Name : {{requestUser.name}}\t</h5>\r\n\t\t\t\t<h5>Email :{{requestUser.email}} </h5>\r\n\t\t\t</div>\r\n\t\t\t<button type=\"button\"  class=\"btn btn-outline-danger\" [value]=\"requestUser._id\" (click)=\"acceptChat($event)\">Chat</button>\r\n          \t\r\n\t\t</div>\t\r\n\t</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n<h1 class=\"noUser\" *ngIf='!loading&&userUnfind'>No such User</h1>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<button type=\"button\" class=\"btn btn-outline-danger back\" *ngIf=\"friendPage\" (click)=\"back()\">Back</button>\r\n<div class=\"myFriends\" *ngIf=\"friendPage\">\r\n  \r\n  <div *ngFor=\"let friend of pageShowFriends\" class=\"friend\">\r\n      <img [src]=\"friend.imagepath\"  class=\"friendpicture\" [routerLink]=\"['/user', friend._id]\" >\r\n      <div style=\"margin:15px;\">\r\n\t\t  <h4>Name : {{friend.name}}</h4>\r\n\t\t  <br>\r\n\t\t  <h4>Email : {{friend.email}} </h4>\r\n\t  </div>\r\n\t  <button type=\"button\" class=\"btn btn-danger chat\" (click)=\"gotoChat($event)\" [value]=\"friend._id\">Chat</button>\r\n  </div>\r\n\t\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\t<mat-paginator *ngIf=\"friendPage&&pageFriendsNum>0\"\r\n\t              class=\"paginator\"\r\n\t\t          [pageIndex]=\"pageIndex\"\r\n\t\t\t      [length]=\"pageFriendsNum\"  \r\n\t\t\t\t  [pageSize]=\"pageSize\"\r\n\t\t\t\t  [pageSizeOptions]=\"[2]\"\r\n\t\t\t\t  (page)=\"onChangedPage($event)\">\r\n\t</mat-paginator>\r\n\r\n\r\n<h1 *ngIf=\"friendPage&&friends.length==0\">No Friends!! </h1>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/post/post.html":
/*!**********************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/post/post.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"post\" (submit)=\"handlePost(postForm)\" #postForm=\"ngForm\">\r\n\t  <div>\r\n\t\t  <div class=\"form-group title\">\r\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Title\" name=\"title\" ngModel #title=\"ngModel\">\r\n\t\t  </div>\r\n\r\n\t\t   <div class=\"form-group content\">\r\n\t\t\t<textarea rows=\"6\" cols=\"50\" name=\"content\"  ngModel #content=\"ngModel\"> \r\n\t\t\t</textarea>\r\n\t\t  </div>\r\n\t\t  <button type=\"submit\" class=\"btn btn-light\">Confirm</button>\r\n\t  </div>\r\n\t  \r\n\t  \r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/search/search.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search/search.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"active-pink active-pink\">\r\n\t <form (submit)=\"onSubmit()\" class=\"container\" [formGroup]=\"form\">\r\n\t\t  <input class=\"form-control\" type=\"text\" placeholder=\"Search User\" aria-label=\"Search\" formControlName=\"search\"\r\n\t\t   placeholder=\"Search User\">\r\n\t\t  <button type=\"submit\" class=\"btn btn-outline-dark\">Go!</button>\r\n\t </form>\r\n</div>\r\n\r\n\r\n  <div class=\"spinner-border text-primary loader\" role=\"status\" *ngIf='loading' >\r\n   <span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n\r\n\r\n\r\n<div class=\"page\" *ngIf=\"!notFound&&!loading\" >\r\n\t\r\n\t<div class=\"users\" *ngFor=\"let user of usersShow\">\r\n\t\t\t<div class=\"eachUser\">\r\n\t\t\t\t<img [src]=\"user.imagepath\"  style=\"border-radius: 50%;\" class=\"userProperty img\" [routerLink]=\"['/user', user._id]\" >\r\n\t\t\t\t<div class=\"userProperty\">\r\n\t\t\t\t\t<h3 style=\"color:blueviolet;\">User:</h3>\r\n\t\t\t\t\t<h4>{{user.name}}</h4>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"userProperty\">\r\n\t\t\t\t\t<h3 style=\"color:blueviolet;\">Email:</h3>\r\n\t\t\t\t\t<h4>{{user.email}}</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<form   (submit)=\"addFriend(postForm)\" #postForm=\"ngForm\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-danger submitbutton\" *ngIf=\"!currentUser.sendRequest.includes(user._id)&&!currentUser.friends.includes(user._id)&&!currentUser.friendRequest.includes(user._id)\">+</button>\r\n\t\t\t\t\t<input type=\"hidden\" name=\"username\" ngModel  #username=\"ngModel\" [(ngModel)]=\"user.name\">\r\n\t\t\t\t\t<input type=\"hidden\" name=\"userid\" ngModel  #userid=\"ngModel\" [(ngModel)]=\"user._id\">\r\n\t\t\t\t</form>\r\n\t\t\t\t<button class=\"btn btn-dark submitbutton2\" *ngIf=\"currentUser.friends.includes(user._id)\">Your Friend</button>\r\n\t\t\t\t<button class=\"btn btn-dark submitbutton2\" *ngIf=\"currentUser.sendRequest.includes(user._id)&&!currentUser.friends.includes(user._id)\">√</button>\r\n\t\t\t\t<button class=\"btn btn-dark submitbutton2\" *ngIf=\"currentUser.friendRequest.includes(user._id)\">Requesting</button>\r\n\t\t\t</div>\r\n\t</div>\r\n\t\r\n</div>\r\n\t<mat-paginator *ngIf=\"!notFound&&!loading&&paginStart\"\r\n\t              class=\"paginator\"\r\n\t\t          [pageIndex]=\"pageIndex\"\r\n\t\t\t      [length]=\"length\"  \r\n\t\t\t\t  [pageSize]=\"pagesize\"\r\n\t\t\t\t  [pageSizeOptions]=\"[2,3]\"\r\n\t\t\t\t  (page)=\"onChangedPage($event)\">\r\n\t</mat-paginator>\r\n\r\n\r\n\r\n<div class=\"notfound\"  *ngIf=\"notFound&&!loading\">\r\n\t<h1 style=\"margin-top:50px; font-size: 100px;\">Not Found!!</h1>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user.html":
/*!**********************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"spinner-border text-primary loader\" role=\"status\" *ngIf='loading' >\r\n   <span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n\r\n\r\n<div class=\"profile\" *ngIf='!loading&&!userUnfind'>\t\r\n\t<div>\r\n\t\t<img src={{user.imagepath}} width=\"175px\" height=\"175px\" style=\"border-radius: 50%;\">\r\n\t</div>\r\n\t\r\n\t<div class=\"information\">\r\n\t\t<h3><span>Name : </span>{{user.name}} </h3>\r\n\t\t<hr>\r\n\t\t<p><span>Email : </span> {{user.email}} </p>\r\n\t\t<p><span>Additional Information</span> : emm...</p>\r\n\t\t<button type=\"button\" class=\"btn btn-outline-secondary connection\" [routerLink]=\"['/friendposts/', userid]\" >My Posts!</button>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<h1 class=\"noUser\" *ngIf='!loading&&userUnfind'>No such User</h1>\r\n\r\n\r\n<div class=\"background\">\r\n\t\r\n</div>"

/***/ }),

/***/ "./src/app/Header/header.css":
/*!***********************************!*\
  !*** ./src/app/Header/header.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\ta:hover{\r\n\t\t text-decoration:none;\r\n\t\r\n\t}\r\n\r\n\r\n\r\n.navbar{\r\n\t\tbackground-color: burlywood;\r\n\t   }\r\n\r\n\r\n\r\n.navigation{\r\n\tdisplay:none;\r\n}\r\n\r\n\r\n\r\n.smallNavigation .option{\r\n\t\t\t\tmargin:10px;\r\n\t\t        color:red;\r\n\t\t\r\n\t}\r\n\r\n\r\n\r\n.smallNavigation:hover{\r\n\tcursor: pointer;\r\n}\r\n\r\n\r\n\r\n.smalloption{\r\n\t\tposition: absolute;\r\n\t\ttop:55px;\r\n\t\tright:0px;\r\n\t\ttext-align: center;\r\n}\r\n\r\n\r\n\r\n.smalloption .dropdown-item:active{\r\n\t\tbackground-color:aliceblue;\r\n\t\tcolor:black;\r\n\t}\r\n\r\n\r\n\r\n.navbar-brand:hover{\r\n\tcursor:pointer;\r\n}\r\n\r\n\r\n\r\n@media (min-width: 768px){\r\n\r\n\t.navigation{\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t}\r\n\r\n\t.navigation .option{\r\n\t\tmargin:10px;\r\n\t\tcolor:black;\r\n\t}\r\n\r\n\t.smallNavigation{\r\n\t\tdisplay:none;\r\n\t}\r\n\r\n\t.navigation:hover{\r\n\t\tcursor: pointer;\r\n\t}\r\n\r\n\r\n\r\n\t.myMenu{\r\n\r\n\t\tposition: absolute;\r\n\t\ttop:55px;\r\n\t\tright:0;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t.dropdown-item:active{\r\n\t\tbackground-color:aliceblue;\r\n\t\tcolor:black;\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSGVhZGVyL2hlYWRlci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7R0FDRSxvQkFBb0I7O0NBRXRCOzs7O0FBSUQ7RUFDRSwyQkFBMkI7SUFDekI7Ozs7QUFDSjtDQUNDLFlBQVk7QUFDYjs7OztBQUVDO0lBQ0csV0FBVztVQUNMLFNBQVM7O0NBRWxCOzs7O0FBQ0Q7Q0FDQyxlQUFlO0FBQ2hCOzs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7Ozs7QUFFQztFQUNDLDBCQUEwQjtFQUMxQixXQUFXO0NBQ1o7Ozs7QUFFRDtDQUNDLGNBQWM7QUFDZjs7OztBQUdBOztDQUVDO0VBQ0MsYUFBYTtFQUNiLG1CQUFtQjtDQUNwQjs7Q0FFQTtFQUNDLFdBQVc7RUFDWCxXQUFXO0NBQ1o7O0NBRUE7RUFDQyxZQUFZO0NBQ2I7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOzs7O0NBSUE7O0VBRUMsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixPQUFPO0VBQ1Asa0JBQWtCO0NBQ25COztDQUVBO0VBQ0MsMEJBQTBCO0VBQzFCLFdBQVc7Q0FDWjtBQUNEIiwiZmlsZSI6InNyYy9hcHAvSGVhZGVyL2hlYWRlci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcdGE6aG92ZXJ7XHJcblx0XHQgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcblx0XHJcblx0fVxyXG5cclxuXHJcblxyXG4ubmF2YmFye1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xyXG5cdCAgIH1cclxuLm5hdmlnYXRpb257XHJcblx0ZGlzcGxheTpub25lO1xyXG59XHJcblxyXG5cdC5zbWFsbE5hdmlnYXRpb24gLm9wdGlvbntcclxuXHRcdFx0XHRtYXJnaW46MTBweDtcclxuXHRcdCAgICAgICAgY29sb3I6cmVkO1xyXG5cdFx0XHJcblx0fVxyXG4uc21hbGxOYXZpZ2F0aW9uOmhvdmVye1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4gICAgXHJcbi5zbWFsbG9wdGlvbntcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDo1NXB4O1xyXG5cdFx0cmlnaHQ6MHB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cdC5zbWFsbG9wdGlvbiAuZHJvcGRvd24taXRlbTphY3RpdmV7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOmFsaWNlYmx1ZTtcclxuXHRcdGNvbG9yOmJsYWNrO1xyXG5cdH1cclxuXHJcbi5uYXZiYXItYnJhbmQ6aG92ZXJ7XHJcblx0Y3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpe1xyXG5cclxuXHQubmF2aWdhdGlvbntcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdH1cclxuXHJcblx0Lm5hdmlnYXRpb24gLm9wdGlvbntcclxuXHRcdG1hcmdpbjoxMHB4O1xyXG5cdFx0Y29sb3I6YmxhY2s7XHJcblx0fVxyXG5cclxuXHQuc21hbGxOYXZpZ2F0aW9ue1xyXG5cdFx0ZGlzcGxheTpub25lO1xyXG5cdH1cclxuXHJcblx0Lm5hdmlnYXRpb246aG92ZXJ7XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC5teU1lbnV7XHJcblxyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOjU1cHg7XHJcblx0XHRyaWdodDowO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmRyb3Bkb3duLWl0ZW06YWN0aXZle1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjphbGljZWJsdWU7XHJcblx0XHRjb2xvcjpibGFjaztcclxuXHR9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Header/header.ts":
/*!**********************************!*\
  !*** ./src/app/Header/header.ts ***!
  \**********************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _registerservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../registerservice */ "./src/app/registerservice.ts");
/* harmony import */ var _loginservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loginservice */ "./src/app/loginservice.ts");




var Header = /** @class */ (function () {
    function Header(registersService, loginService) {
        this.registersService = registersService;
        this.loginService = loginService;
        this.authenticated = false;
        this.smallenter = false;
        this.enter = false;
        this.myMenu = false;
        this.mysmallMenu = false;
        this.menu1 = false;
        this.menu2 = false;
        this.menu3 = false;
        this.show = false;
        this.smallshow = false;
        this.smallmenu1 = false;
        this.smallmenu2 = false;
        this.smallmenu3 = false;
        this.smallmenu4 = false;
        this.smallmenu5 = false;
        this.path = "/";
        console.log("header constructor");
    }
    Header.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticated = this.loginService.getIsAuth();
        this.userid = this.loginService.getUserId();
        if (this.userid) {
            this.path = this.path + "mypage/" + this.userid;
        }
        this.authenticatedStateSub = this.loginService.getAuthenticatedUpdate().subscribe(function (authenticate) {
            _this.authenticated = authenticate;
            _this.userid = _this.loginService.getUserId();
            if (_this.userid) {
                _this.path = _this.path + "mypage/" + _this.userid;
            }
            else {
                _this.path = "/";
            }
        });
    };
    Header.prototype.register = function () {
        this.registersService.setFillInformation(false);
    };
    Header.prototype.logOut = function () {
        this.loginService.logOut();
    };
    Header.prototype.appear = function () {
        var _this = this;
        //console.log("appear");
        if (!this.show) {
            //this.enter=true;
            this.myMenu = true;
            this.menu1 = true;
            setTimeout(function () {
                _this.menu2 = true;
                setTimeout(function () {
                    _this.menu3 = true;
                    _this.show = true;
                }, 100);
            }, 100);
        }
    };
    Header.prototype.settrue = function () {
        //console.log("settrue");
        this.enter = true;
    };
    Header.prototype.settrue1 = function () {
        console.log("settrue");
        this.smallenter = true;
    };
    Header.prototype.disappear = function () {
        var _this = this;
        if (this.show) {
            this.menu3 = false;
            setTimeout(function () {
                _this.menu2 = false;
                setTimeout(function () {
                    _this.menu1 = false;
                    _this.myMenu = false;
                    _this.show = false;
                    _this.enter = false;
                }, 100);
            }, 100);
        }
    };
    Header.prototype.disappear1 = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.show && !_this.enter) {
                _this.menu3 = false;
                setTimeout(function () {
                    _this.menu2 = false;
                    setTimeout(function () {
                        _this.menu1 = false;
                        _this.myMenu = false;
                        _this.show = false;
                        _this.enter = false;
                    }, 100);
                }, 100);
            }
        }, 200);
    };
    Header.prototype.smalldisappear1 = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.smallshow && !_this.smallenter) {
                _this.smallmenu5 = false;
                setTimeout(function () {
                    _this.smallmenu4 = false;
                    setTimeout(function () {
                        _this.smallmenu3 = false;
                        setTimeout(function () {
                            _this.smallmenu2 = false;
                            setTimeout(function () {
                                _this.smallmenu1 = false;
                                _this.mysmallMenu = false;
                                _this.smallshow = false;
                                _this.smallenter = false;
                            }, 100);
                        }, 100);
                    }, 100);
                }, 100);
            }
        }, 200);
    };
    Header.prototype.smallappear = function () {
        var _this = this;
        if (!this.smallshow) {
            //this.smallenter=true;
            this.mysmallMenu = true;
            this.smallmenu1 = true;
            setTimeout(function () {
                _this.smallmenu2 = true;
                setTimeout(function () {
                    _this.smallmenu3 = true;
                    setTimeout(function () {
                        _this.smallmenu4 = true;
                        setTimeout(function () {
                            _this.smallmenu5 = true;
                            _this.smallshow = true;
                        }, 100);
                    }, 100);
                }, 100);
            }, 100);
        }
    };
    Header.prototype.smalldisappear = function () {
        var _this = this;
        if (this.smallshow) {
            this.smallmenu5 = false;
            setTimeout(function () {
                _this.smallmenu4 = false;
                setTimeout(function () {
                    _this.smallmenu3 = false;
                    setTimeout(function () {
                        _this.smallmenu2 = false;
                        setTimeout(function () {
                            _this.smallmenu1 = false;
                            _this.mysmallMenu = false;
                            _this.smallshow = false;
                            _this.smallenter = false;
                        }, 100);
                    }, 100);
                }, 100);
            }, 100);
        }
    };
    Header.ctorParameters = function () { return [
        { type: _registerservice__WEBPACK_IMPORTED_MODULE_2__["Registerservice"] },
        { type: _loginservice__WEBPACK_IMPORTED_MODULE_3__["Loginservice"] }
    ]; };
    Header = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'MyHeader',
            template: __webpack_require__(/*! raw-loader!./header.html */ "./node_modules/raw-loader/index.js!./src/app/Header/header.html"),
            styles: [__webpack_require__(/*! ./header.css */ "./src/app/Header/header.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_registerservice__WEBPACK_IMPORTED_MODULE_2__["Registerservice"], _loginservice__WEBPACK_IMPORTED_MODULE_3__["Loginservice"]])
    ], Header);
    return Header;
}());



/***/ }),

/***/ "./src/app/Register/register.css":
/*!***************************************!*\
  !*** ./src/app/Register/register.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register{\r\n\ttext-align:center;\r\n\tmargin-top:10%;\r\n\r\n}\r\n\r\n.fillInformation .welcomeTitle{\r\n\ttext-align: center;\r\n\tpadding: 20px;\r\n\t\r\n}\r\n\r\n.fillInformation{\r\n\r\n\t\r\n}\r\n\r\n.imagepick{\r\n\tmargin-top: 50px\r\n}\r\n\r\n.registerForm{\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\n.infor{\r\n\t display: flex;\r\n\tjustify-content: space-around;\r\n\tflex-wrap: wrap;\r\n}\r\n\r\n.registerForm .child{\r\n\tmargin:30px;\r\n\tflex-basis: 45%;\r\n}\r\n\r\n.imageContainer{\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tmargin-top:30px;\r\n}\r\n\r\n.imagebox{\r\n\twidth:180px;\r\n\theight:180px;\r\n\r\n\tborder: 3px dotted black;\r\n}\r\n\r\n.submit{\r\n\t\twidth: 15%;\r\n\t\tmargin: auto;\r\n\t    border-radius: 5%;\r\n\t}\r\n\r\n@media (max-width: 800px){\r\n\r\n\t\r\n\t.registerForm{\r\n\t\t display: flex;\r\n\t\t flex-direction: column;\r\n\t\t width:50%;\r\n\t\t margin: auto;\r\n\t}\r\n\t.submit{\r\n\t\twidth: 50%;\r\n\t\tmargin: auto;\r\n\t}\r\n\r\n\t.fillInformation{\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\r\n\r\n\t}\r\n}\r\n\r\n@-webkit-keyframes showing\r\n\t\t{\r\n\r\n\t\t\t100%{\r\n\t\t\t\topacity:1;\r\n\t\t\t}\r\n\t\t}\r\n\r\n@keyframes showing\r\n\t\t{\r\n\r\n\t\t\t100%{\r\n\t\t\t\topacity:1;\r\n\t\t\t}\r\n\t\t}\r\n\r\n.fillInformation h1{\r\n\t    width: 50%;\r\n\t    margin: auto;\r\n\t\topacity:0;\r\n\t\t-webkit-animation-duration:1s;\r\n\t\t        animation-duration:1s;\r\n\t\t-webkit-animation-delay:0.5s;\r\n\t\t        animation-delay:0.5s;\r\n\t\t-webkit-animation-name:showing;\r\n\t\t        animation-name:showing;\r\n\t\t-webkit-animation-fill-mode:forwards;\r\n\t\t        animation-fill-mode:forwards;\r\n}\r\n\r\n.fillInformation h1{\r\n\t\topacity:0;\r\n\t\t-webkit-animation-duration:1s;\r\n\t\t        animation-duration:1s;\r\n\t\t-webkit-animation-delay:0.5s;\r\n\t\t        animation-delay:0.5s;\r\n\t\t-webkit-animation-name:showing;\r\n\t\t        animation-name:showing;\r\n\t\t-webkit-animation-fill-mode:forwards;\r\n\t\t        animation-fill-mode:forwards;\r\n}\r\n\r\n.fillInformation .animation1{\r\n\t\topacity:0;\r\n\t\t-webkit-animation-duration:1s;\r\n\t\t        animation-duration:1s;\r\n\t\t-webkit-animation-delay:1s;\r\n\t\t        animation-delay:1s;\r\n\t\t-webkit-animation-name:showing;\r\n\t\t        animation-name:showing;\r\n\t\t-webkit-animation-fill-mode:forwards;\r\n\t\t        animation-fill-mode:forwards;\r\n}\r\n\r\n.fillInformation .animation2{\r\n\t\topacity:0;\r\n\t\t-webkit-animation-duration:1s;\r\n\t\t        animation-duration:1s;\r\n\t\t-webkit-animation-delay:1.5s;\r\n\t\t        animation-delay:1.5s;\r\n\t\t-webkit-animation-name:showing;\r\n\t\t        animation-name:showing;\r\n\t\t-webkit-animation-fill-mode:forwards;\r\n\t\t        animation-fill-mode:forwards;\r\n}\r\n\r\n.fillInformation .animation3{\r\n\t\topacity:0;\r\n\t\t-webkit-animation-duration:1s;\r\n\t\t        animation-duration:1s;\r\n\t\t-webkit-animation-delay:2s;\r\n\t\t        animation-delay:2s;\r\n\t\t-webkit-animation-name:showing;\r\n\t\t        animation-name:showing;\r\n\t\t-webkit-animation-fill-mode:forwards;\r\n\t\t        animation-fill-mode:forwards;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUmVnaXN0ZXIvcmVnaXN0ZXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUJBQWlCO0NBQ2pCLGNBQWM7O0FBRWY7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTs7QUFFZDs7QUFFQTs7O0FBR0E7O0FBSUE7Q0FDQztBQUNEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjs7QUFFMUI7O0FBRUE7RUFDRSxhQUFhO0NBQ2QsNkJBQTZCO0NBQzdCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsZUFBZTtBQUNoQjs7QUFHQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsZUFBZTtBQUNoQjs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxZQUFZOztDQUVaLHdCQUF3QjtBQUN6Qjs7QUFHQTtFQUNFLFVBQVU7RUFDVixZQUFZO0tBQ1QsaUJBQWlCO0NBQ3JCOztBQUdEOzs7Q0FHQztHQUNFLGFBQWE7R0FDYixzQkFBc0I7R0FDdEIsU0FBUztHQUNULFlBQVk7Q0FDZDtDQUNBO0VBQ0MsVUFBVTtFQUNWLFlBQVk7Q0FDYjs7Q0FFQTtFQUNDLGFBQWE7RUFDYixzQkFBc0I7OztDQUd2QjtBQUNEOztBQUlDOzs7R0FHRTtJQUNDLFNBQVM7R0FDVjtFQUNEOztBQU5EOzs7R0FHRTtJQUNDLFNBQVM7R0FDVjtFQUNEOztBQUdGO0tBQ0ssVUFBVTtLQUNWLFlBQVk7RUFDZixTQUFTO0VBQ1QsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQiw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsb0NBQTRCO1VBQTVCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCw2QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLDRCQUFvQjtVQUFwQixvQkFBb0I7RUFDcEIsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixvQ0FBNEI7VUFBNUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsU0FBUztFQUNULDZCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsMEJBQWtCO1VBQWxCLGtCQUFrQjtFQUNsQiw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLG9DQUE0QjtVQUE1Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQiw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsb0NBQTRCO1VBQTVCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCw2QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLDBCQUFrQjtVQUFsQixrQkFBa0I7RUFDbEIsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixvQ0FBNEI7VUFBNUIsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvUmVnaXN0ZXIvcmVnaXN0ZXIuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVye1xyXG5cdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdG1hcmdpbi10b3A6MTAlO1xyXG5cclxufVxyXG5cclxuLmZpbGxJbmZvcm1hdGlvbiAud2VsY29tZVRpdGxle1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdFxyXG59XHJcblxyXG4uZmlsbEluZm9ybWF0aW9ue1xyXG5cclxuXHRcclxufVxyXG5cclxuXHJcblxyXG4uaW1hZ2VwaWNre1xyXG5cdG1hcmdpbi10b3A6IDUwcHhcclxufVxyXG5cclxuLnJlZ2lzdGVyRm9ybXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxufVxyXG5cclxuLmluZm9ye1xyXG5cdCBkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnJlZ2lzdGVyRm9ybSAuY2hpbGR7XHJcblx0bWFyZ2luOjMwcHg7XHJcblx0ZmxleC1iYXNpczogNDUlO1xyXG59XHJcblxyXG5cclxuLmltYWdlQ29udGFpbmVye1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdG1hcmdpbi10b3A6MzBweDtcclxufVxyXG4uaW1hZ2Vib3h7XHJcblx0d2lkdGg6MTgwcHg7XHJcblx0aGVpZ2h0OjE4MHB4O1xyXG5cclxuXHRib3JkZXI6IDNweCBkb3R0ZWQgYmxhY2s7XHJcbn1cclxuXHJcblxyXG4uc3VibWl0e1xyXG5cdFx0d2lkdGg6IDE1JTtcclxuXHRcdG1hcmdpbjogYXV0bztcclxuXHQgICAgYm9yZGVyLXJhZGl1czogNSU7XHJcblx0fVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCl7XHJcblxyXG5cdFxyXG5cdC5yZWdpc3RlckZvcm17XHJcblx0XHQgZGlzcGxheTogZmxleDtcclxuXHRcdCBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0IHdpZHRoOjUwJTtcclxuXHRcdCBtYXJnaW46IGF1dG87XHJcblx0fVxyXG5cdC5zdWJtaXR7XHJcblx0XHR3aWR0aDogNTAlO1xyXG5cdFx0bWFyZ2luOiBhdXRvO1xyXG5cdH1cclxuXHJcblx0LmZpbGxJbmZvcm1hdGlvbntcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFxyXG5cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuXHRAa2V5ZnJhbWVzIHNob3dpbmdcclxuXHRcdHtcclxuXHJcblx0XHRcdDEwMCV7XHJcblx0XHRcdFx0b3BhY2l0eToxO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cclxuLmZpbGxJbmZvcm1hdGlvbiBoMXtcclxuXHQgICAgd2lkdGg6IDUwJTtcclxuXHQgICAgbWFyZ2luOiBhdXRvO1xyXG5cdFx0b3BhY2l0eTowO1xyXG5cdFx0YW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG5cdFx0YW5pbWF0aW9uLWRlbGF5OjAuNXM7XHJcblx0XHRhbmltYXRpb24tbmFtZTpzaG93aW5nO1xyXG5cdFx0YW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxufVxyXG5cclxuLmZpbGxJbmZvcm1hdGlvbiBoMXtcclxuXHRcdG9wYWNpdHk6MDtcclxuXHRcdGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuXHRcdGFuaW1hdGlvbi1kZWxheTowLjVzO1xyXG5cdFx0YW5pbWF0aW9uLW5hbWU6c2hvd2luZztcclxuXHRcdGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbn1cclxuXHJcbi5maWxsSW5mb3JtYXRpb24gLmFuaW1hdGlvbjF7XHJcblx0XHRvcGFjaXR5OjA7XHJcblx0XHRhbmltYXRpb24tZHVyYXRpb246MXM7XHJcblx0XHRhbmltYXRpb24tZGVsYXk6MXM7XHJcblx0XHRhbmltYXRpb24tbmFtZTpzaG93aW5nO1xyXG5cdFx0YW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxufVxyXG5cclxuLmZpbGxJbmZvcm1hdGlvbiAuYW5pbWF0aW9uMntcclxuXHRcdG9wYWNpdHk6MDtcclxuXHRcdGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuXHRcdGFuaW1hdGlvbi1kZWxheToxLjVzO1xyXG5cdFx0YW5pbWF0aW9uLW5hbWU6c2hvd2luZztcclxuXHRcdGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbn1cclxuXHJcbi5maWxsSW5mb3JtYXRpb24gLmFuaW1hdGlvbjN7XHJcblx0XHRvcGFjaXR5OjA7XHJcblx0XHRhbmltYXRpb24tZHVyYXRpb246MXM7XHJcblx0XHRhbmltYXRpb24tZGVsYXk6MnM7XHJcblx0XHRhbmltYXRpb24tbmFtZTpzaG93aW5nO1xyXG5cdFx0YW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/Register/register.ts":
/*!**************************************!*\
  !*** ./src/app/Register/register.ts ***!
  \**************************************/
/*! exports provided: Register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validator */ "./src/app/Register/validator.ts");
/* harmony import */ var _registerservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../registerservice */ "./src/app/registerservice.ts");





var Register = /** @class */ (function () {
    function Register(registersService) {
        this.registersService = registersService;
        this.match = true;
        this.registerState = true;
        this.fillInformation = false;
        this.imagePreview = "";
        this.emptyimage = false;
        this.emptyusername = false;
        this.invalidEmail = false;
        this.repeatUser = false;
        registersService.set("not dummy");
        //console.log(registersService.get());
    }
    Register.prototype.loadRegister = function () {
        var _this = this;
        this.registerState = false;
        setTimeout(function () {
            _this.registersService.setFillInformation(true);
            _this.fillInformation = true;
        }, 500);
    };
    Register.prototype.ngOnInit = function () {
        // console.log("Register Init");
        var _this = this;
        this.registerStateSub = this.registersService.getRegisterUpdateListener().subscribe(function (state) {
            _this.fillInformation = state;
            _this.registerState = true;
            //console.log("update",this.fillInformation);
        });
        this.repeatUserSub = this.registersService.getrepeatUserStateUpdate().subscribe(function (repeat) {
            console.log("repeat user");
            _this.repeatUser = repeat;
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            confirmpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                asyncValidators: [_validator__WEBPACK_IMPORTED_MODULE_3__["mimeType"]]
            })
        });
    };
    //copy
    Register.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get("image").updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
            //console.log(this.imagePreview);
        };
        reader.readAsDataURL(file);
    };
    //update [src] imagePreview
    //  this.form.patchValue({ image: file });
    Register.prototype.onSubmit = function () {
        if (this.form.invalid) //check for photo -> require field
         {
            console.log("invalid");
            this.emptyimage = true;
        }
        else {
            console.log("valid photo");
            this.emptyimage = false;
        }
        // console.log(this.form.value.email);
        console.log(this.form.value);
        if (this.form.value.password !== this.form.value.confirmpassword) {
            this.match = false;
        }
        else {
            this.match = true;
            //redirect 
        }
        if (this.form.value.username) {
            this.emptyusername = false;
        }
        else {
            this.emptyusername = true;
        }
        if (this.emptyimage || !this.match || this.emptyusername || this.invalidEmail || this.repeatUser) {
            console.log("something wrong");
            return;
        }
        this.registersService.addUser(this.form.value);
        //this.registersService.addUser(this.form.value.image);
    };
    Register.prototype.onChange = function (event) {
        //console.log(event.target.value);
        var enterValue = event.target.value;
        this.repeatUser = false;
        if (!enterValue.includes("@") || (enterValue.split("@").length - 1) > 1) {
            this.invalidEmail = true;
        }
        else {
            this.invalidEmail = false;
        }
    };
    Register.prototype.onuserNameChange = function (event) {
        var enterValue = event.target.value;
        if (enterValue) {
            this.emptyusername = false;
        }
        else {
            this.emptyusername = true;
        }
    };
    Register.prototype.ngOnDestroy = function () {
        this.registerStateSub.unsubscribe();
        this.repeatUserSub.unsubscribe();
    };
    Register.ctorParameters = function () { return [
        { type: _registerservice__WEBPACK_IMPORTED_MODULE_4__["Registerservice"] }
    ]; };
    Register = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'Register',
            template: __webpack_require__(/*! raw-loader!./register.html */ "./node_modules/raw-loader/index.js!./src/app/Register/register.html"),
            styles: [__webpack_require__(/*! ./register.css */ "./src/app/Register/register.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_registerservice__WEBPACK_IMPORTED_MODULE_4__["Registerservice"]])
    ], Register);
    return Register;
}());



/***/ }),

/***/ "./src/app/Register/validator.ts":
/*!***************************************!*\
  !*** ./src/app/Register/validator.ts ***!
  \***************************************/
/*! exports provided: mimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeType", function() { return mimeType; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var mimeType = function (control) {
    if (typeof (control.value) === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    var file = control.value;
    var fileReader = new FileReader();
    var frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
        fileReader.addEventListener("loadend", function () {
            var arr = new Uint8Array(fileReader.result).subarray(0, 4);
            var header = "";
            var isValid = false;
            for (var i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case "89504e47":
                    isValid = true;
                    break;
                case "ffd8ffe0":
                case "ffd8ffe1":
                case "ffd8ffe2":
                case "ffd8ffe3":
                case "ffd8ffe8":
                    isValid = true;
                    break;
                default:
                    isValid = false; // Or you can use the blob.type as fallback
                    break;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeType: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return frObs;
};


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loginservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginservice */ "./src/app/loginservice.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(loginservice) {
        this.loginservice = loginservice;
        this.title = 'capstone';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loginservice.autoAuthUser();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _loginservice__WEBPACK_IMPORTED_MODULE_2__["Loginservice"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loginservice__WEBPACK_IMPORTED_MODULE_2__["Loginservice"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Header_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header/header */ "./src/app/Header/header.ts");
/* harmony import */ var _Register_register__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Register/register */ "./src/app/Register/register.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login */ "./src/app/login/login.ts");
/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user */ "./src/app/user/user.ts");
/* harmony import */ var _mypage_mypage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mypage/mypage */ "./src/app/mypage/mypage.ts");
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./route */ "./src/app/route.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search/search */ "./src/app/search/search.ts");
/* harmony import */ var _loginInterceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./loginInterceptor */ "./src/app/loginInterceptor.ts");
/* harmony import */ var _founder_founder__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./founder/founder */ "./src/app/founder/founder.ts");
/* harmony import */ var _post_post__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./post/post */ "./src/app/post/post.ts");
/* harmony import */ var _getposts_getposts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./getposts/getposts */ "./src/app/getposts/getposts.ts");
/* harmony import */ var _chat_chat__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./chat/chat */ "./src/app/chat/chat.ts");
/* harmony import */ var _fail_fail__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./fail/fail */ "./src/app/fail/fail.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _Header_header__WEBPACK_IMPORTED_MODULE_5__["Header"],
                _Register_register__WEBPACK_IMPORTED_MODULE_6__["Register"],
                _login_login__WEBPACK_IMPORTED_MODULE_8__["Login"],
                _user_user__WEBPACK_IMPORTED_MODULE_9__["User"],
                _search_search__WEBPACK_IMPORTED_MODULE_13__["Search"],
                _mypage_mypage__WEBPACK_IMPORTED_MODULE_10__["MyPage"],
                _founder_founder__WEBPACK_IMPORTED_MODULE_15__["Founder"],
                _post_post__WEBPACK_IMPORTED_MODULE_16__["Post"],
                _getposts_getposts__WEBPACK_IMPORTED_MODULE_17__["GetPosts"], _chat_chat__WEBPACK_IMPORTED_MODULE_18__["Chat"], _fail_fail__WEBPACK_IMPORTED_MODULE_19__["Fail"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _route__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"]
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _loginInterceptor__WEBPACK_IMPORTED_MODULE_14__["LoginInterceptor"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.css":
/*!*******************************!*\
  !*** ./src/app/chat/chat.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tflex-wrap: wrap;\r\n}\r\n\r\n\r\n.chatboard{\r\n\tmargin-left:15px;\r\n\tmargin-top: 20px;\r\n\tflex-basis: 50%;\r\n\t\r\n}\r\n\r\n\r\n.chatcontent{\r\n\tbackground-color: snow;\r\n\toverflow: scroll;\r\n\tmargin-top:20px;\r\n\tmargin-left:20px;\r\n\tmargin-right:20px;\r\n\twidth:80%;\r\n\theight:300px;\r\n\tborder: 1px solid #ccc;\r\n\t\r\n\t\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsZUFBZTtBQUNoQjs7O0FBR0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGVBQWU7O0FBRWhCOzs7QUFJQTtDQUNDLHNCQUFzQjtDQUN0QixnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsU0FBUztDQUNULFlBQVk7Q0FDWixzQkFBc0I7OztBQUd2QiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG5cclxuLmNoYXRib2FyZHtcclxuXHRtYXJnaW4tbGVmdDoxNXB4O1xyXG5cdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0ZmxleC1iYXNpczogNTAlO1xyXG5cdFxyXG59XHJcblxyXG5cclxuXHJcbi5jaGF0Y29udGVudHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBzbm93O1xyXG5cdG92ZXJmbG93OiBzY3JvbGw7XHJcblx0bWFyZ2luLXRvcDoyMHB4O1xyXG5cdG1hcmdpbi1sZWZ0OjIwcHg7XHJcblx0bWFyZ2luLXJpZ2h0OjIwcHg7XHJcblx0d2lkdGg6ODAlO1xyXG5cdGhlaWdodDozMDBweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG5cdFxyXG5cdFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/chat/chat.ts":
/*!******************************!*\
  !*** ./src/app/chat/chat.ts ***!
  \******************************/
/*! exports provided: Chat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat", function() { return Chat; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _loginservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loginservice */ "./src/app/loginservice.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var Chat = /** @class */ (function () {
    function Chat(loginService, http, route) {
        this.loginService = loginService;
        this.http = http;
        this.route = route;
        this.enterValue = "";
    }
    Chat.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.currentUserId = paramMap.get("currentUserid");
            _this.friendid = paramMap.get("friendid");
            console.log(_this.currentUserId, _this.friendid);
        });
        this.http.post("https://peaceful-mountain-59628.herokuapp.com/singleUser", { userid: this.currentUserId }).subscribe(function (response) {
            _this.currentUser = response.user;
            _this.http.post("https://peaceful-mountain-59628.herokuapp.com/singleUser", { userid: _this.friendid }).subscribe(function (response) {
                _this.friend = response.user;
            });
        });
        this.interval = setInterval(function () {
            _this.http.post("https://peaceful-mountain-59628.herokuapp.com/getchat", { friendid: _this.friendid }).subscribe(function (response) {
                _this.chat = response.chat;
                _this.chatcontent = response.chat.content;
                //console.log(this.chatcontent);
            });
        }, 200);
    };
    Chat.prototype.send = function (form) {
        console.log(form.value.content);
        this.http.post("https://peaceful-mountain-59628.herokuapp.com/chat", { currentuserid: this.currentUserId, friendid: this.friendid, content: form.value.content }).subscribe(function (response) {
        });
        this.enterValue = "";
    };
    Chat.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
        this.http.post("https://peaceful-mountain-59628.herokuapp.com/deletechatrequest", { friendid: this.friendid }).subscribe(function (response) {
        });
    };
    Chat.ctorParameters = function () { return [
        { type: _loginservice__WEBPACK_IMPORTED_MODULE_3__["Loginservice"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    Chat = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'Chat',
            template: __webpack_require__(/*! raw-loader!./chat.html */ "./node_modules/raw-loader/index.js!./src/app/chat/chat.html"),
            styles: [__webpack_require__(/*! ./chat.css */ "./src/app/chat/chat.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loginservice__WEBPACK_IMPORTED_MODULE_3__["Loginservice"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], Chat);
    return Chat;
}());



/***/ }),

/***/ "./src/app/fail/fail.ts":
/*!******************************!*\
  !*** ./src/app/fail/fail.ts ***!
  \******************************/
/*! exports provided: Fail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fail", function() { return Fail; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Fail = /** @class */ (function () {
    function Fail() {
    }
    Fail = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'Fail',
            template: __webpack_require__(/*! raw-loader!./fail.html */ "./node_modules/raw-loader/index.js!./src/app/fail/fail.html")
        })
    ], Fail);
    return Fail;
}());



/***/ }),

/***/ "./src/app/founder/founder.css":
/*!*************************************!*\
  !*** ./src/app/founder/founder.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".founderpic{\r\n\twidth:200px;\r\n\theight:200px;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.founder{\r\n\tmargin-top:20px;\r\n\tdisplay: flex;\r\n\tflex-basis: 40%;\r\n\r\n}\r\n\r\n.founderinformation{\r\n\tmargin:20px;\r\n}\r\n\r\n.contact{\r\n\tflex-basis: 40%;\r\n\ttext-align: center;\r\n\tmargin:20px;\r\n}\r\n\r\n.body{\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: space-around;\r\n}\r\n\r\n.reach{\r\n\twidth:200px;\r\n\tmargin:20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmRlci9mb3VuZGVyLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZUFBZTtDQUNmLGFBQWE7Q0FDYixlQUFlOztBQUVoQjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFHQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsV0FBVztBQUNaOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGVBQWU7Q0FDZiw2QkFBNkI7QUFDOUI7O0FBR0E7Q0FDQyxXQUFXO0NBQ1gsV0FBVztBQUNaIiwiZmlsZSI6InNyYy9hcHAvZm91bmRlci9mb3VuZGVyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3VuZGVycGlje1xyXG5cdHdpZHRoOjIwMHB4O1xyXG5cdGhlaWdodDoyMDBweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5mb3VuZGVye1xyXG5cdG1hcmdpbi10b3A6MjBweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtYmFzaXM6IDQwJTtcclxuXHJcbn1cclxuXHJcbi5mb3VuZGVyaW5mb3JtYXRpb257XHJcblx0bWFyZ2luOjIwcHg7XHJcbn1cclxuXHJcblxyXG4uY29udGFjdHtcclxuXHRmbGV4LWJhc2lzOiA0MCU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdG1hcmdpbjoyMHB4O1xyXG59XHJcblxyXG4uYm9keXtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuXHJcbi5yZWFjaHtcclxuXHR3aWR0aDoyMDBweDtcclxuXHRtYXJnaW46MjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/founder/founder.ts":
/*!************************************!*\
  !*** ./src/app/founder/founder.ts ***!
  \************************************/
/*! exports provided: Founder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Founder", function() { return Founder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Founder = /** @class */ (function () {
    function Founder() {
    }
    Founder = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'Founder',
            template: __webpack_require__(/*! raw-loader!./founder.html */ "./node_modules/raw-loader/index.js!./src/app/founder/founder.html"),
            styles: [__webpack_require__(/*! ./founder.css */ "./src/app/founder/founder.css")]
        })
    ], Founder);
    return Founder;
}());



/***/ }),

/***/ "./src/app/getposts/getposts.css":
/*!***************************************!*\
  !*** ./src/app/getposts/getposts.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".author{\r\n\twidth:50%;\r\n\tmargin: auto;\r\n\ttext-align: center;\r\n\tmargin-top: 20px;\r\n}\r\n\r\n.posts{\r\n\tmargin-top:40px;\r\n\r\n\t\r\n}\r\n\r\n.post{\r\n\twidth: 50%;\r\n\t\r\n\tmargin: auto;\r\n\tmargin-top:20px;\r\n\t\r\n}\r\n\r\n.background1{\r\n\ttop:0px;\r\n\tright: 0px;\r\n\tz-index: -10;\r\n\tposition: absolute;\r\n\twidth:100%;\r\n\theight:10000%;\r\n\tbackground-color: black;\r\n}\r\n\r\n.delete{\r\n\t    margin-left: 95%;\r\n}\r\n\r\n.delete:hover{\r\n\tcursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0cG9zdHMvZ2V0cG9zdHMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsU0FBUztDQUNULFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZUFBZTs7O0FBR2hCOztBQUVBO0NBQ0MsVUFBVTs7Q0FFVixZQUFZO0NBQ1osZUFBZTs7QUFFaEI7O0FBRUE7Q0FDQyxPQUFPO0NBQ1AsVUFBVTtDQUNWLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLGFBQWE7Q0FDYix1QkFBdUI7QUFDeEI7O0FBRUE7S0FDSyxnQkFBZ0I7QUFDckI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZ2V0cG9zdHMvZ2V0cG9zdHMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGhvcntcclxuXHR3aWR0aDo1MCU7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ucG9zdHN7XHJcblx0bWFyZ2luLXRvcDo0MHB4O1xyXG5cclxuXHRcclxufVxyXG5cclxuLnBvc3R7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRcclxuXHRtYXJnaW46IGF1dG87XHJcblx0bWFyZ2luLXRvcDoyMHB4O1xyXG5cdFxyXG59XHJcblxyXG4uYmFja2dyb3VuZDF7XHJcblx0dG9wOjBweDtcclxuXHRyaWdodDogMHB4O1xyXG5cdHotaW5kZXg6IC0xMDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6MTAwJTtcclxuXHRoZWlnaHQ6MTAwMDAlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZGVsZXRle1xyXG5cdCAgICBtYXJnaW4tbGVmdDogOTUlO1xyXG59XHJcblxyXG4uZGVsZXRlOmhvdmVye1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/getposts/getposts.ts":
/*!**************************************!*\
  !*** ./src/app/getposts/getposts.ts ***!
  \**************************************/
/*! exports provided: GetPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPosts", function() { return GetPosts; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _loginservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loginservice */ "./src/app/loginservice.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var GetPosts = /** @class */ (function () {
    function GetPosts(loginService, http, route) {
        this.loginService = loginService;
        this.http = http;
        this.route = route;
        this.posts = [];
        this.user = { name: "a" };
    }
    GetPosts.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUserId = this.loginService.getUserId();
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has("userid")) {
                _this.userId = paramMap.get("userid");
                _this.http.post("https://peaceful-mountain-59628.herokuapp.com/getposts", { userId: _this.userId }).subscribe(function (response) {
                    //console.log(response.posts);
                    _this.posts = response.posts;
                    _this.http.post("https://peaceful-mountain-59628.herokuapp.com/singleUser", { userid: _this.userId }).subscribe(function (response) {
                        _this.user = response.user;
                    });
                });
            }
        });
    };
    GetPosts.prototype.deletepost = function (event) {
        var _this = this;
        //console.log("delete post",event.target.value);
        var deletepostid = event.target.value;
        this.http.post("https://peaceful-mountain-59628.herokuapp.com/deletepost", { deleteid: deletepostid }).subscribe(function (response) {
            _this.http.post("https://peaceful-mountain-59628.herokuapp.com/getposts", { userId: _this.userId }).subscribe(function (response) {
                //console.log(response.posts);
                _this.posts = response.posts;
            });
        });
    };
    GetPosts.ctorParameters = function () { return [
        { type: _loginservice__WEBPACK_IMPORTED_MODULE_3__["Loginservice"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    GetPosts = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'GetPost',
            template: __webpack_require__(/*! raw-loader!./getposts.html */ "./node_modules/raw-loader/index.js!./src/app/getposts/getposts.html"),
            styles: [__webpack_require__(/*! ./getposts.css */ "./src/app/getposts/getposts.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loginservice__WEBPACK_IMPORTED_MODULE_3__["Loginservice"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], GetPosts);
    return GetPosts;
}());



/***/ }),

/***/ "./src/app/login/login.css":
/*!*********************************!*\
  !*** ./src/app/login/login.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\nmat-card{\r\n\twidth:75%;\r\n\ttext-align: center;\r\n\tmargin:auto;\r\n}\r\n\r\nmat-form-field{\r\n\tmargin-left:25%;\r\n\tmargin-right:25%;\r\n}\r\n\r\n.cardcontainer{\r\n\ttext-align: center;\r\n\topacity:0;\r\n\t-webkit-animation-duration:1s;\r\n\t        animation-duration:1s;\r\n\t-webkit-animation-delay:1s;\r\n\t        animation-delay:1s;\r\n\t-webkit-animation-name:showing;\r\n\t        animation-name:showing;\r\n\t-webkit-animation-fill-mode:forwards;\r\n\t        animation-fill-mode:forwards;\r\n\t\r\n}\r\n\r\nbutton{\r\n\tmargin-left:0%;\r\n}\r\n\r\n.background{\r\n\theight:100%;\r\n\twidth: 100%;\r\n\tz-index: -10;\r\n\tbackground-image: url(\"https://peaceful-mountain-59628.herokuapp.com/images/registerBackground.jpg\");\r\n\tbackground-repeat:no-repeat;\r\n}\r\n\r\n.spinner{\r\n\twidth:100px;\r\n\theight:100px;\r\n\tmargin-left: 45%;\r\n\tmargin-top: 10%;\r\n}\r\n\r\n@-webkit-keyframes showing\r\n\t\t{\r\n\r\n\t\t\t100%{\r\n\t\t\t\topacity:1;\r\n\t\t\t}\r\n\t\t}\r\n\r\n@keyframes showing\r\n\t\t{\r\n\r\n\t\t\t100%{\r\n\t\t\t\topacity:1;\r\n\t\t\t}\r\n\t\t}\r\n\r\n.background h1{\r\n\t    width:50%;\r\n\t\ttext-align: center;\r\n\t\tmargin: auto;\r\n\t\topacity:0;\r\n\t\t-webkit-animation-duration:1s;\r\n\t\t        animation-duration:1s;\r\n\t\t-webkit-animation-delay:0.5s;\r\n\t\t        animation-delay:0.5s;\r\n\t\t-webkit-animation-name:showing;\r\n\t\t        animation-name:showing;\r\n\t\t-webkit-animation-fill-mode:forwards;\r\n\t\t        animation-fill-mode:forwards;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7Q0FDQyxTQUFTO0NBQ1Qsa0JBQWtCO0NBQ2xCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULDZCQUFxQjtTQUFyQixxQkFBcUI7Q0FDckIsMEJBQWtCO1NBQWxCLGtCQUFrQjtDQUNsQiw4QkFBc0I7U0FBdEIsc0JBQXNCO0NBQ3RCLG9DQUE0QjtTQUE1Qiw0QkFBNEI7O0FBRTdCOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCxZQUFZO0NBQ1osb0dBQW9HO0NBQ3BHLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7O0FBRUM7OztHQUdFO0lBQ0MsU0FBUztHQUNWO0VBQ0Q7O0FBTkQ7OztHQUdFO0lBQ0MsU0FBUztHQUNWO0VBQ0Q7O0FBRUY7S0FDSyxTQUFTO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBQ1QsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQiw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsb0NBQTRCO1VBQTVCLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1jYXJke1xyXG5cdHdpZHRoOjc1JTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luOmF1dG87XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxke1xyXG5cdG1hcmdpbi1sZWZ0OjI1JTtcclxuXHRtYXJnaW4tcmlnaHQ6MjUlO1xyXG59XHJcblxyXG4uY2FyZGNvbnRhaW5lcntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0b3BhY2l0eTowO1xyXG5cdGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuXHRhbmltYXRpb24tZGVsYXk6MXM7XHJcblx0YW5pbWF0aW9uLW5hbWU6c2hvd2luZztcclxuXHRhbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG5cdFxyXG59XHJcblxyXG5idXR0b257XHJcblx0bWFyZ2luLWxlZnQ6MCU7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5ke1xyXG5cdGhlaWdodDoxMDAlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHotaW5kZXg6IC0xMDtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3BlYWNlZnVsLW1vdW50YWluLTU5NjI4Lmhlcm9rdWFwcC5jb20vaW1hZ2VzL3JlZ2lzdGVyQmFja2dyb3VuZC5qcGdcIik7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG59XHJcblxyXG4uc3Bpbm5lcntcclxuXHR3aWR0aDoxMDBweDtcclxuXHRoZWlnaHQ6MTAwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IDQ1JTtcclxuXHRtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcblx0QGtleWZyYW1lcyBzaG93aW5nXHJcblx0XHR7XHJcblxyXG5cdFx0XHQxMDAle1xyXG5cdFx0XHRcdG9wYWNpdHk6MTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuLmJhY2tncm91bmQgaDF7XHJcblx0ICAgIHdpZHRoOjUwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdG1hcmdpbjogYXV0bztcclxuXHRcdG9wYWNpdHk6MDtcclxuXHRcdGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuXHRcdGFuaW1hdGlvbi1kZWxheTowLjVzO1xyXG5cdFx0YW5pbWF0aW9uLW5hbWU6c2hvd2luZztcclxuXHRcdGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.ts":
/*!********************************!*\
  !*** ./src/app/login/login.ts ***!
  \********************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loginservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loginservice */ "./src/app/loginservice.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Login = /** @class */ (function () {
    function Login(loginservice, router) {
        //console.log(registersService.get());
        this.loginservice = loginservice;
        this.router = router;
        this.loginfail = false;
        this.start = false;
    }
    Login.prototype.ngOnInit = function () {
        var _this = this;
        if (this.loginservice.getIsAuth()) {
            console.log("navigate");
            this.router.navigate(["/"]);
            return;
        }
        setTimeout(function () {
            _this.start = true;
        }, 500);
    };
    Login.prototype.handleLogin = function (form) {
        console.log(form.value.myemail);
        this.loginservice.login(form.value);
        //login(form.value);
        //console.log(loginstate);
    };
    Login.ctorParameters = function () { return [
        { type: _loginservice__WEBPACK_IMPORTED_MODULE_2__["Loginservice"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    Login = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'Login',
            template: __webpack_require__(/*! raw-loader!./login.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.html"),
            styles: [__webpack_require__(/*! ./login.css */ "./src/app/login/login.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loginservice__WEBPACK_IMPORTED_MODULE_2__["Loginservice"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Login);
    return Login;
}());



/***/ }),

/***/ "./src/app/loginInterceptor.ts":
/*!*************************************!*\
  !*** ./src/app/loginInterceptor.ts ***!
  \*************************************/
/*! exports provided: LoginInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginInterceptor", function() { return LoginInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loginservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginservice */ "./src/app/loginservice.ts");



var LoginInterceptor = /** @class */ (function () {
    function LoginInterceptor(loginservice) {
        this.loginservice = loginservice;
    }
    LoginInterceptor.prototype.intercept = function (req, next) {
        var token = this.loginservice.getToken();
        var authRequest = req.clone({
            headers: req.headers.set("Authorization", "Bearer " + token)
        });
        return next.handle(authRequest);
    };
    LoginInterceptor.ctorParameters = function () { return [
        { type: _loginservice__WEBPACK_IMPORTED_MODULE_2__["Loginservice"] }
    ]; };
    LoginInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loginservice__WEBPACK_IMPORTED_MODULE_2__["Loginservice"]])
    ], LoginInterceptor);
    return LoginInterceptor;
}());

//sent the 		token	 together when making http request


/***/ }),

/***/ "./src/app/loginservice.ts":
/*!*********************************!*\
  !*** ./src/app/loginservice.ts ***!
  \*********************************/
/*! exports provided: Loginservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loginservice", function() { return Loginservice; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var Loginservice = /** @class */ (function () {
    function Loginservice(http, router) {
        this.http = http;
        this.router = router;
        this.authenticatedUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isAuthenticated = false;
    }
    Loginservice.prototype.getUserId = function () {
        return this.userid;
    };
    Loginservice.prototype.getIsAuth = function () {
        return this.isAuthenticated;
    };
    Loginservice.prototype.getToken = function () {
        return this.token;
    };
    Loginservice.prototype.getAuthenticatedUpdate = function () {
        return this.authenticatedUpdate.asObservable();
    };
    Loginservice.prototype.logOut = function () {
        //console.log("logout");
        this.http.post("https://peaceful-mountain-59628.herokuapp.com/logout", { userid: this.userid }).subscribe(function (response) {
        });
        this.clearAuthData();
        clearTimeout(this.tokenTimer); // clear the autoLogout timer
        this.userid = null;
        this.isAuthenticated = false;
        this.token = null;
        this.authenticatedUpdate.next(this.isAuthenticated);
        this.router.navigate(["/"]);
    };
    Loginservice.prototype.login = function (formValue) {
        var _this = this;
        var email = formValue.myemail;
        var password = formValue.mypassword;
        this.http
            .post("https://peaceful-mountain-59628.herokuapp.com/login", { email: email, password: password }).subscribe(function (response) {
            //get back the token if login is succed
            _this.token = response.token;
            if (_this.token) {
                var expiresInDuration = response.expiresIn;
                _this.logoutAutomatically(expiresInDuration); //a timer
                _this.userid = response.userid;
                _this.isAuthenticated = true;
                _this.authenticatedUpdate.next(_this.isAuthenticated);
                var now = new Date();
                var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                console.log("expire date ", expirationDate);
                _this.saveAuthData(_this.token, expirationDate, _this.userid);
                //path
                var path = "/mypage/" + _this.userid;
                _this.router.navigate([path]);
            }
        }, function (err) {
            _this.router.navigate(["/fail"]);
        });
    };
    Loginservice.prototype.saveAuthData = function (token, expirationDate, userId) {
        localStorage.setItem("token", token);
        localStorage.setItem("expiration", expirationDate.toISOString());
        localStorage.setItem("userId", userId);
    };
    Loginservice.prototype.clearAuthData = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
        localStorage.removeItem("userId");
    };
    Loginservice.prototype.logoutAutomatically = function (duration) {
        var _this = this;
        //console.log("Setting timer: " + duration);
        this.tokenTimer = setTimeout(function () {
            _this.logOut();
            alert("Session Expire! Loging Out");
        }, duration * 1000);
    };
    Loginservice.prototype.autoAuthUser = function () {
        var authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        var now = new Date();
        var expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.userid = authInformation.userId;
            this.logoutAutomatically(expiresIn / 1000);
            this.authenticatedUpdate.next(true);
        }
    };
    Loginservice.prototype.getAuthData = function () {
        var token = localStorage.getItem("token");
        var expirationDate = localStorage.getItem("expiration");
        var userId = localStorage.getItem("userId");
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId
        };
    };
    Loginservice.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    Loginservice = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], Loginservice);
    return Loginservice;
}());



/***/ }),

/***/ "./src/app/mypage/mypage.css":
/*!***********************************!*\
  !*** ./src/app/mypage/mypage.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile{\r\n\tmargin:20px;\r\n\tdisplay: flex;\r\n\r\n}\r\n\r\n.profile .information{\r\n\tmargin:10px;\r\n\r\n}\r\n\r\n.myconnection{\r\n\tcolor:blue;\r\n}\r\n\r\n.loader{\r\n\theight:200px;\r\n\twidth:200px;\r\n\tmargin-top:100px;\r\n\tmargin-left:50%;\r\n}\r\n\r\n.noUser{\r\n\ttext-align: center;\r\n\twidth:50%;\r\n\tmargin:auto;\r\n\tmargin-top:20%;\r\n}\r\n\r\nbutton{\r\n\tmargin:40px;\r\n\twidth:150px;\r\n}\r\n\r\n.request{\r\n\tfont-size:20px;\r\n\tcolor: black;\r\n}\r\n\r\n.whole{\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n}\r\n\r\n.allRequest{\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n.picture{\r\n\theight:85px;\r\n\twidth:85px;\r\n}\r\n\r\n.picture:hover{\r\n\tcursor: pointer;\r\n}\r\n\r\n.requestUser{\r\n\tborder: 3px solid yellow;\r\n\twidth:500px;\r\n\tmargin-top:10px;\r\n\tpadding: 10px;\r\n}\r\n\r\n.allRequest{\r\n\t\r\n\tmargin-left:20px;\r\n\t\r\n}\r\n\r\n.connection{\r\n\tmargin-left:0px;\r\n\tmargin-top:10px;\r\n}\r\n\r\n.myFriends{\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\tflex-wrap: wrap;\r\n}\r\n\r\n.friend{\r\n\tdisplay: flex;\r\n\tmargin:20px;\r\n\tflex-basis: 40%;\r\n\tborder: 3px dotted red;\r\n\tpadding: 5px;\r\n\t\r\n}\r\n\r\n.friendpicture{\r\n\twidth:150px;\r\n\theight:150px;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.friendpicture:hover{\r\n\tcursor: pointer;\r\n}\r\n\r\n.back{\r\n\tmargin:10px;\r\n}\r\n\r\n.chat{\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.mypost:hover{\r\n\tcursor:pointer;\r\n}\r\n\r\n.mypost{\r\n\tcolor:red;\r\n\tpadding:7px;\r\n\twidth:120px;\r\n\tborder: 3px dotted yellow;\r\n\t\r\n}\r\n\r\n.chattUser{\r\n\tborder: 3px solid crimson;\r\n\twidth:400px;\r\n\tmargin-top:10px;\r\n\tpadding: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlwYWdlL215cGFnZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxXQUFXO0NBQ1gsYUFBYTs7QUFFZDs7QUFFQTtDQUNDLFdBQVc7O0FBRVo7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYLGdCQUFnQjtDQUNoQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsY0FBYztBQUNmOztBQUVBO0NBQ0MsV0FBVztDQUNYLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsVUFBVTtBQUNYOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHdCQUF3QjtDQUN4QixXQUFXO0NBQ1gsZUFBZTtDQUNmLGFBQWE7QUFDZDs7QUFFQTs7Q0FFQyxnQkFBZ0I7O0FBRWpCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsNkJBQTZCO0NBQzdCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsV0FBVztDQUNYLGVBQWU7Q0FDZixzQkFBc0I7Q0FDdEIsWUFBWTs7QUFFYjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFHQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsV0FBVztDQUNYLHlCQUF5Qjs7QUFFMUI7O0FBR0E7Q0FDQyx5QkFBeUI7Q0FDekIsV0FBVztDQUNYLGVBQWU7Q0FDZixhQUFhO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9teXBhZ2UvbXlwYWdlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxle1xyXG5cdG1hcmdpbjoyMHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblxyXG59XHJcblxyXG4ucHJvZmlsZSAuaW5mb3JtYXRpb257XHJcblx0bWFyZ2luOjEwcHg7XHJcblxyXG59XHJcblxyXG4ubXljb25uZWN0aW9ue1xyXG5cdGNvbG9yOmJsdWU7XHJcbn1cclxuXHJcbi5sb2FkZXJ7XHJcblx0aGVpZ2h0OjIwMHB4O1xyXG5cdHdpZHRoOjIwMHB4O1xyXG5cdG1hcmdpbi10b3A6MTAwcHg7XHJcblx0bWFyZ2luLWxlZnQ6NTAlO1xyXG59XHJcblxyXG4ubm9Vc2Vye1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDo1MCU7XHJcblx0bWFyZ2luOmF1dG87XHJcblx0bWFyZ2luLXRvcDoyMCU7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuXHRtYXJnaW46NDBweDtcclxuXHR3aWR0aDoxNTBweDtcclxufVxyXG5cclxuLnJlcXVlc3R7XHJcblx0Zm9udC1zaXplOjIwcHg7XHJcblx0Y29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ud2hvbGV7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5hbGxSZXF1ZXN0e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnBpY3R1cmV7XHJcblx0aGVpZ2h0Ojg1cHg7XHJcblx0d2lkdGg6ODVweDtcclxufVxyXG5cclxuLnBpY3R1cmU6aG92ZXJ7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucmVxdWVzdFVzZXJ7XHJcblx0Ym9yZGVyOiAzcHggc29saWQgeWVsbG93O1xyXG5cdHdpZHRoOjUwMHB4O1xyXG5cdG1hcmdpbi10b3A6MTBweDtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uYWxsUmVxdWVzdHtcclxuXHRcclxuXHRtYXJnaW4tbGVmdDoyMHB4O1xyXG5cdFxyXG59XHJcblxyXG4uY29ubmVjdGlvbntcclxuXHRtYXJnaW4tbGVmdDowcHg7XHJcblx0bWFyZ2luLXRvcDoxMHB4O1xyXG59XHJcblxyXG4ubXlGcmllbmRze1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZnJpZW5ke1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0bWFyZ2luOjIwcHg7XHJcblx0ZmxleC1iYXNpczogNDAlO1xyXG5cdGJvcmRlcjogM3B4IGRvdHRlZCByZWQ7XHJcblx0cGFkZGluZzogNXB4O1xyXG5cdFxyXG59XHJcblxyXG4uZnJpZW5kcGljdHVyZXtcclxuXHR3aWR0aDoxNTBweDtcclxuXHRoZWlnaHQ6MTUwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uZnJpZW5kcGljdHVyZTpob3ZlcntcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4uYmFja3tcclxuXHRtYXJnaW46MTBweDtcclxufVxyXG5cclxuLmNoYXR7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ubXlwb3N0OmhvdmVye1xyXG5cdGN1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG4ubXlwb3N0e1xyXG5cdGNvbG9yOnJlZDtcclxuXHRwYWRkaW5nOjdweDtcclxuXHR3aWR0aDoxMjBweDtcclxuXHRib3JkZXI6IDNweCBkb3R0ZWQgeWVsbG93O1xyXG5cdFxyXG59XHJcblxyXG5cclxuLmNoYXR0VXNlcntcclxuXHRib3JkZXI6IDNweCBzb2xpZCBjcmltc29uO1xyXG5cdHdpZHRoOjQwMHB4O1xyXG5cdG1hcmdpbi10b3A6MTBweDtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/mypage/mypage.ts":
/*!**********************************!*\
  !*** ./src/app/mypage/mypage.ts ***!
  \**********************************/
/*! exports provided: MyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPage", function() { return MyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var MyPage = /** @class */ (function () {
    function MyPage(route, http, router) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.friendPage = false;
        this.friends = [];
        this.user = {};
        this.loading = true;
        this.userUnfind = false;
        this.friendRequestId = [];
        this.resultUsers = [];
        this.chatRequest = [];
        this.chatRequestNum = 0;
        this.chatUsers = [];
        this.chatpage = false;
        this.pageShowFriends = [];
    }
    MyPage.prototype.ngOnInit = function () {
        var _this = this;
        this.chatUsers = [];
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has("userid")) {
                _this.userid = paramMap.get("userid");
                _this.http
                    .post("https://peaceful-mountain-59628.herokuapp.com/singleUser", { userid: _this.userid }).subscribe(function (user) {
                    _this.user = user.user;
                    _this.requestNumber = _this.user['friendRequest'].length;
                    _this.chatRequestNum = _this.user['chatRequest'].length;
                    _this.friendRequestId = _this.user['friendRequest'].slice();
                    //console.log(this.friendRequestId);
                    //console.log("request num",this.requestNumber);
                    //console.log(this.user);
                    setTimeout(function () { _this.loading = false; }, 300);
                }, function (err) {
                    //console.log("err",err); 
                    setTimeout(function () { _this.loading = false; _this.userUnfind = true; }, 300);
                });
            }
        });
        this.interval = setInterval(function () {
            _this.http
                .post("https://peaceful-mountain-59628.herokuapp.com/singleUser", { userid: _this.userid }).subscribe(function (user) {
                _this.user = user.user;
                _this.requestNumber = _this.user['friendRequest'].length;
                _this.chatRequestNum = _this.user['chatRequest'].length;
                _this.friendRequestId = _this.user['friendRequest'].slice();
            });
        }, 200);
    };
    MyPage.prototype.accept = function (e) {
        var _this = this;
        //console.log(e.target.value);
        var acceptId = e.target.value;
        this.http.post("https://peaceful-mountain-59628.herokuapp.com/acceptOrReject", { acceptOrReject: "accept", who: acceptId }).subscribe(function (response) {
            _this.user = response.user;
            //console.log("user",this.user);
            _this.friendRequestId = _this.user['friendRequest'].slice();
            _this.http.post("https://peaceful-mountain-59628.herokuapp.com/getFriendRequest", { friendRequest: _this.friendRequestId }).subscribe(function (response1) {
                _this.resultUsers = response1.users.slice();
                _this.requestNumber = _this.user['friendRequest'].length;
            });
        });
    };
    MyPage.prototype.reject = function (e) {
        var _this = this;
        var rejectId = e.target.value;
        this.http.post("https://peaceful-mountain-59628.herokuapp.com/acceptOrReject", { acceptOrReject: "reject", who: rejectId }).subscribe(function (response) {
            _this.user = response.user;
            _this.friendRequestId = _this.user['friendRequest'].slice();
            _this.http.post("https://peaceful-mountain-59628.herokuapp.com/getFriendRequest", { friendRequest: _this.friendRequestId }).subscribe(function (response1) {
                _this.resultUsers = response1.users.slice();
                _this.requestNumber = _this.user['friendRequest'].length;
            });
        });
    };
    MyPage.prototype.showRequest = function () {
        var _this = this;
        if (this.requestNumber === 0) {
            return;
        }
        this.chatpage = false;
        this.http.post("https://peaceful-mountain-59628.herokuapp.com/getFriendRequest", { friendRequest: this.friendRequestId }).subscribe(function (response) {
            _this.resultUsers = response.users.slice();
            //console.log(this.resultUsers);
        });
    };
    MyPage.prototype.loadFriends = function () {
        var _this = this;
        this.friendPage = true;
        this.pageIndex = 0;
        this.pageSize = 2;
        this.http.post("https://peaceful-mountain-59628.herokuapp.com/getFriendRequest", { friendRequest: this.user['friends'] }).subscribe(function (response) {
            //getback the friends
            _this.pageShowFriends = [];
            _this.friends = [];
            _this.friends = response.users.slice();
            //console.log(this.friends);
            _this.pageFriendsNum = _this.friends.length;
            for (var i = 0; i < _this.pageSize; i++) {
                if (_this.friends[_this.pageIndex * _this.pageSize + i]) {
                    _this.pageShowFriends.push(_this.friends[_this.pageIndex * _this.pageSize + i]);
                }
                //this.pageShowFriends.push(this.friends[this.pageIndex*this.pageSize+i])
            }
        });
    };
    MyPage.prototype.back = function () {
        this.friendPage = false;
        this.pageShowFriends = [];
    };
    MyPage.prototype.onChangedPage = function (event) {
        this.pageShowFriends = [];
        this.pageSize = event.pageSize;
        this.pageIndex = event.pageIndex;
        for (var i = 0; i < this.pageSize; i++) {
            if (this.friends[this.pageIndex * this.pageSize + i]) {
                this.pageShowFriends.push(this.friends[this.pageIndex * this.pageSize + i]);
            }
        }
    };
    MyPage.prototype.ngOnDestroy = function () {
        clearTimeout(this.interval);
    };
    MyPage.prototype.loadchat = function () {
        var _this = this;
        if (this.chatRequestNum === 0) {
            return;
        }
        this.chatpage = true;
        this.http.post("https://peaceful-mountain-59628.herokuapp.com/getFriendRequest", { friendRequest: this.user['chatRequest'] }).subscribe(function (response) {
            //console.log("chat",response.users);
            _this.chatUsers = response.users.slice();
        });
    };
    MyPage.prototype.acceptChat = function (e) {
        //accept a chat request => decrease the  chatRequest for the current user
        var _this = this;
        var friendid = e.target.value;
        //console.log(friendid);
        var path = "/chat/" + this.userid + "/" + friendid;
        this.http.post("https://peaceful-mountain-59628.herokuapp.com/deletechatrequest", { friendid: friendid }).subscribe(function (response) {
            _this.router.navigate([path]);
        });
    };
    MyPage.prototype.gotoChat = function (e) {
        //just go to the chat
        //console.log(e.target.value);
        var friendid = e.target.value;
        var path = "/chat/" + this.userid + "/" + friendid;
        this.router.navigate([path]);
    };
    MyPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    MyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'MyPage',
            template: __webpack_require__(/*! raw-loader!./mypage.html */ "./node_modules/raw-loader/index.js!./src/app/mypage/mypage.html"),
            styles: [__webpack_require__(/*! ./mypage.css */ "./src/app/mypage/mypage.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MyPage);
    return MyPage;
}());



/***/ }),

/***/ "./src/app/post/post.css":
/*!*******************************!*\
  !*** ./src/app/post/post.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post{\r\n\twidth:50%;\r\n\tmargin:auto;\r\n\tmargin-top:50px;\r\n\t\r\n}\r\n\r\n.content{\r\n\t\r\n\twidth:200px;\r\n}\r\n\r\n.title{\r\n\twidth:50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9wb3N0LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsZUFBZTs7QUFFaEI7O0FBRUE7O0NBRUMsV0FBVztBQUNaOztBQUVBO0NBQ0MsU0FBUztBQUNWIiwiZmlsZSI6InNyYy9hcHAvcG9zdC9wb3N0LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0e1xyXG5cdHdpZHRoOjUwJTtcclxuXHRtYXJnaW46YXV0bztcclxuXHRtYXJnaW4tdG9wOjUwcHg7XHJcblx0XHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG5cdFxyXG5cdHdpZHRoOjIwMHB4O1xyXG59XHJcblxyXG4udGl0bGV7XHJcblx0d2lkdGg6NTAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/post/post.ts":
/*!******************************!*\
  !*** ./src/app/post/post.ts ***!
  \******************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _loginservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loginservice */ "./src/app/loginservice.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var Post = /** @class */ (function () {
    function Post(http, loginservice, router) {
        this.http = http;
        this.loginservice = loginservice;
        this.router = router;
    }
    Post.prototype.ngOnInit = function () {
        this.currentUserId = this.loginservice.getUserId();
        //console.log("post",this.currentUserId);
    };
    Post.prototype.handlePost = function (form) {
        var _this = this;
        //console.log("content",form.value.content);
        var title = form.value.title;
        var content = form.value.content;
        this.http.post("https://peaceful-mountain-59628.herokuapp.com/savePost", { title: title, content: content }).subscribe(function (response) {
            var path = "./mypage/" + _this.currentUserId;
            _this.router.navigate([path]);
        });
    };
    Post.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _loginservice__WEBPACK_IMPORTED_MODULE_3__["Loginservice"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    Post = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'Post',
            template: __webpack_require__(/*! raw-loader!./post.html */ "./node_modules/raw-loader/index.js!./src/app/post/post.html"),
            styles: [__webpack_require__(/*! ./post.css */ "./src/app/post/post.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _loginservice__WEBPACK_IMPORTED_MODULE_3__["Loginservice"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], Post);
    return Post;
}());



/***/ }),

/***/ "./src/app/registerservice.ts":
/*!************************************!*\
  !*** ./src/app/registerservice.ts ***!
  \************************************/
/*! exports provided: Registerservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Registerservice", function() { return Registerservice; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var Registerservice = /** @class */ (function () {
    function Registerservice(http, router) {
        this.http = http;
        this.router = router;
        this.dummy = "dummy";
        this.fillInformation = false;
        this.registerStateUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.repeatUserStateUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        //console.log("construcotr",this.dummy);
    }
    Registerservice.prototype.get = function () { return this.dummy; };
    Registerservice.prototype.set = function (a) { this.dummy = a; };
    Registerservice.prototype.getrepeatUserStateUpdate = function () {
        return this.repeatUserStateUpdate.asObservable();
    };
    Registerservice.prototype.getRegisterUpdateListener = function () {
        return this.registerStateUpdate.asObservable();
    };
    Registerservice.prototype.setFillInformation = function (state) {
        this.fillInformation = state;
        this.registerStateUpdate.next(this.fillInformation);
    };
    Registerservice.prototype.addUser = function (formValue) {
        var _this = this;
        var userData = new FormData();
        userData.append("userName", formValue.username);
        userData.append("email", formValue.email);
        userData.append("password", formValue.password);
        userData.append("image", formValue.image, "myimage");
        this.http
            .post("https://peaceful-mountain-59628.herokuapp.com/addUser", userData).subscribe(function (result) {
            console.log(result.message);
            _this.router.navigate(["/login"]);
        }, function (err) {
            console.log("some error happen", err);
            _this.repeatUserStateUpdate.next(true);
        });
    };
    Registerservice.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    Registerservice = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], Registerservice);
    return Registerservice;
}());



/***/ }),

/***/ "./src/app/route.ts":
/*!**************************!*\
  !*** ./src/app/route.ts ***!
  \**************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Register_register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Register/register */ "./src/app/Register/register.ts");
/* harmony import */ var _login_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login */ "./src/app/login/login.ts");
/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user */ "./src/app/user/user.ts");
/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search/search */ "./src/app/search/search.ts");
/* harmony import */ var _routeGuard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routeGuard */ "./src/app/routeGuard.ts");
/* harmony import */ var _mypage_mypage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mypage/mypage */ "./src/app/mypage/mypage.ts");
/* harmony import */ var _founder_founder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./founder/founder */ "./src/app/founder/founder.ts");
/* harmony import */ var _post_post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./post/post */ "./src/app/post/post.ts");
/* harmony import */ var _getposts_getposts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./getposts/getposts */ "./src/app/getposts/getposts.ts");
/* harmony import */ var _chat_chat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chat/chat */ "./src/app/chat/chat.ts");
/* harmony import */ var _fail_fail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fail/fail */ "./src/app/fail/fail.ts");














var routes = [
    { path: '', component: _founder_founder__WEBPACK_IMPORTED_MODULE_9__["Founder"] },
    { path: 'register', component: _Register_register__WEBPACK_IMPORTED_MODULE_3__["Register"] },
    { path: 'login', component: _login_login__WEBPACK_IMPORTED_MODULE_4__["Login"] },
    { path: 'user/:userid', component: _user_user__WEBPACK_IMPORTED_MODULE_5__["User"] },
    { path: 'search', component: _search_search__WEBPACK_IMPORTED_MODULE_6__["Search"], canActivate: [_routeGuard__WEBPACK_IMPORTED_MODULE_7__["RouteGuard"]] },
    { path: 'mypage/:userid', component: _mypage_mypage__WEBPACK_IMPORTED_MODULE_8__["MyPage"], canActivate: [_routeGuard__WEBPACK_IMPORTED_MODULE_7__["RouteGuard"]] },
    { path: 'founder', component: _founder_founder__WEBPACK_IMPORTED_MODULE_9__["Founder"] },
    { path: 'mypage/post/:userid', component: _post_post__WEBPACK_IMPORTED_MODULE_10__["Post"], canActivate: [_routeGuard__WEBPACK_IMPORTED_MODULE_7__["RouteGuard"]] },
    { path: 'myposts/:userid', component: _getposts_getposts__WEBPACK_IMPORTED_MODULE_11__["GetPosts"], canActivate: [_routeGuard__WEBPACK_IMPORTED_MODULE_7__["RouteGuard"]] },
    { path: 'friendposts/:userid', component: _getposts_getposts__WEBPACK_IMPORTED_MODULE_11__["GetPosts"], canActivate: [_routeGuard__WEBPACK_IMPORTED_MODULE_7__["RouteGuard"]] },
    { path: 'chat/:currentUserid/:friendid', component: _chat_chat__WEBPACK_IMPORTED_MODULE_12__["Chat"], canActivate: [_routeGuard__WEBPACK_IMPORTED_MODULE_7__["RouteGuard"]] },
    { path: 'fail', component: _fail_fail__WEBPACK_IMPORTED_MODULE_13__["Fail"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_routeGuard__WEBPACK_IMPORTED_MODULE_7__["RouteGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/routeGuard.ts":
/*!*******************************!*\
  !*** ./src/app/routeGuard.ts ***!
  \*******************************/
/*! exports provided: RouteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuard", function() { return RouteGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loginservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loginservice */ "./src/app/loginservice.ts");




var RouteGuard = /** @class */ (function () {
    function RouteGuard(loginservice, router) {
        this.loginservice = loginservice;
        this.router = router;
    }
    RouteGuard.prototype.canActivate = function (route, state) {
        var isAuth = this.loginservice.getIsAuth();
        if (!isAuth) {
            console.log("not auth");
            this.router.navigate(['/login']);
        }
        return isAuth;
    };
    RouteGuard.ctorParameters = function () { return [
        { type: _loginservice__WEBPACK_IMPORTED_MODULE_3__["Loginservice"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    RouteGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loginservice__WEBPACK_IMPORTED_MODULE_3__["Loginservice"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RouteGuard);
    return RouteGuard;
}());



/***/ }),

/***/ "./src/app/search/search.css":
/*!***********************************!*\
  !*** ./src/app/search/search.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-pink-4 input[type=text]:focus:not([readonly]) {\r\n\tborder: 1px solid #f48fb1;\r\n\tbox-shadow: 0 0 0 1px #f48fb1;\r\n\t\r\n}\r\n\r\n.container{\r\n\twidth:50%;\r\n\tmargin:25px;\r\n\tdisplay: flex;\r\n}\r\n\r\n.eachUser{\r\n\t display: flex;\r\n\t border: 3px dotted coral;\r\n\t margin:5px;\r\n\t width:90%;\r\n\t\r\n\t\r\n}\r\n\r\n.eachUser img{\r\n\theight:90px;\r\n\twidth: 90px;\r\n\t\r\n}\r\n\r\n.userProperty{\r\n\tmargin-left:70px;\r\n\twidth:300px;\r\n}\r\n\r\n.submitbutton{\r\n\tborder-radius: 50%;\r\n\tmargin-left: 100px;\r\n\tmargin-top:25px;\r\n\tcolor: black;\r\n\tfont-size: 25px;\r\n\r\n}\r\n\r\n.submitbutton2{\r\n\tborder-radius: 50%;\r\n\tmargin-left: 100px;\r\n\tmargin-bottom: 5px;\r\n\tcolor: white;\r\n\tfont-size: 25px;\r\n\r\n}\r\n\r\n.loader{\r\n\twidth:120px;\r\n\theight:120px;\r\n\tmargin-left:180px;\r\n\tmargin-top:100px;\r\n}\r\n\r\n.paginator{\r\n\tposition: absolute;\r\n}\r\n\r\n.img:hover{\r\n\tcursor: pointer;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx5QkFBeUI7Q0FDekIsNkJBQTZCOztBQUU5Qjs7QUFFQTtDQUNDLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsYUFBYTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsU0FBUzs7O0FBR1g7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsV0FBVzs7QUFFWjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixZQUFZO0NBQ1osZUFBZTs7QUFFaEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osZUFBZTs7QUFFaEI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7O0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlLXBpbmstNCBpbnB1dFt0eXBlPXRleHRdOmZvY3VzOm5vdChbcmVhZG9ubHldKSB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2Y0OGZiMTtcclxuXHRib3gtc2hhZG93OiAwIDAgMCAxcHggI2Y0OGZiMTtcclxuXHRcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuXHR3aWR0aDo1MCU7XHJcblx0bWFyZ2luOjI1cHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmVhY2hVc2Vye1xyXG5cdCBkaXNwbGF5OiBmbGV4O1xyXG5cdCBib3JkZXI6IDNweCBkb3R0ZWQgY29yYWw7XHJcblx0IG1hcmdpbjo1cHg7XHJcblx0IHdpZHRoOjkwJTtcclxuXHRcclxuXHRcclxufVxyXG5cclxuLmVhY2hVc2VyIGltZ3tcclxuXHRoZWlnaHQ6OTBweDtcclxuXHR3aWR0aDogOTBweDtcclxuXHRcclxufVxyXG5cclxuLnVzZXJQcm9wZXJ0eXtcclxuXHRtYXJnaW4tbGVmdDo3MHB4O1xyXG5cdHdpZHRoOjMwMHB4O1xyXG59XHJcblxyXG4uc3VibWl0YnV0dG9ue1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRtYXJnaW4tbGVmdDogMTAwcHg7XHJcblx0bWFyZ2luLXRvcDoyNXB4O1xyXG5cdGNvbG9yOiBibGFjaztcclxuXHRmb250LXNpemU6IDI1cHg7XHJcblxyXG59XHJcblxyXG4uc3VibWl0YnV0dG9uMntcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0bWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDVweDtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Zm9udC1zaXplOiAyNXB4O1xyXG5cclxufVxyXG5cclxuLmxvYWRlcntcclxuXHR3aWR0aDoxMjBweDtcclxuXHRoZWlnaHQ6MTIwcHg7XHJcblx0bWFyZ2luLWxlZnQ6MTgwcHg7XHJcblx0bWFyZ2luLXRvcDoxMDBweDtcclxufVxyXG4ucGFnaW5hdG9ye1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmltZzpob3ZlcntcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/search/search.ts":
/*!**********************************!*\
  !*** ./src/app/search/search.ts ***!
  \**********************************/
/*! exports provided: Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _searchService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../searchService */ "./src/app/searchService.ts");
/* harmony import */ var _loginservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loginservice */ "./src/app/loginservice.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






//use two types of Form handling
var Search = /** @class */ (function () {
    function Search(searchService, loginService, http) {
        this.searchService = searchService;
        this.loginService = loginService;
        this.http = http;
        this.notFound = false;
        this.MAX = 1000;
        this.show = false;
        this.pagesize = 2;
        this.pageIndex = 0;
        this.loading = false;
        this.paginStart = false;
        this.users = []; //all the fetch users
        this.resultUsers = []; //what to display(based on the search value)
        this.usersShow = [];
    }
    Search.prototype.ngOnInit = function () {
        var _this = this;
        this.currentuserid = this.loginService.getUserId();
        // get the current user
        this.http.post("https://peaceful-mountain-59628.herokuapp.com/singleUser", { userid: this.currentuserid }).subscribe(function (response) {
            _this.currentUser = response['user']; //get the current user
            //console.log("currentUser",response.user);
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
        this.usersSubscription = this.searchService.gerUsersUpdateListener()
            .subscribe(function (users) {
            console.log("search update", users);
            _this.loading = true;
            setTimeout(function () { _this.loading = false; _this.paginStart = true; }, 500);
            _this.usersShow = [];
            _this.notFound = false;
            _this.resultUsers = users.users;
            //console.log("init",this.resultUsers);
            _this.length = users.users.length;
            if (_this.length > _this.MAX) {
                _this.length = _this.MAX;
            } //100
            if (_this.length === 0) {
                _this.notFound = true;
            }
            for (var i = 0; i < _this.pagesize; i++) {
                if (_this.resultUsers[(_this.pageIndex) * _this.pagesize + i]) {
                    _this.usersShow.push(_this.resultUsers[(_this.pageIndex) * _this.pagesize + i]);
                }
            }
            //console.log("user show",this.usersShow[0].friends);
        });
    };
    Search.prototype.onChangedPage = function (event) {
        //console.log("event",event);
        this.usersShow = [];
        this.pagesize = event.pageSize;
        this.pageIndex = event.pageIndex;
        for (var i = 0; i < this.pagesize; i++) {
            if (this.resultUsers[(this.pageIndex) * this.pagesize + i]) {
                this.usersShow.push(this.resultUsers[(this.pageIndex) * this.pagesize + i]);
            }
        }
    };
    Search.prototype.addFriend = function (form) {
        var _this = this;
        var target = form.value.userid;
        this.http.post("https://peaceful-mountain-59628.herokuapp.com/addFriend", { currentUser: this.currentuserid, target: target }).subscribe(function (response) {
            console.log("okoko");
            _this.http.post("https://peaceful-mountain-59628.herokuapp.com/getUsers", { searchValue: _this.searchValue }).subscribe(function (users) {
                _this.loading = true;
                setTimeout(function () { _this.loading = false; _this.paginStart = true; }, 100);
                _this.usersShow = [];
                _this.notFound = false;
                _this.resultUsers = users.users;
                _this.length = users.users.length;
                if (_this.length > _this.MAX) {
                    _this.length = _this.MAX;
                } //100
                if (_this.length === 0) {
                    _this.notFound = true;
                }
                for (var i = 0; i < _this.pagesize; i++) {
                    if (_this.resultUsers[(_this.pageIndex) * _this.pagesize + i]) {
                        _this.usersShow.push(_this.resultUsers[(_this.pageIndex) * _this.pagesize + i]);
                    }
                }
                _this.http.post("https://peaceful-mountain-59628.herokuapp.com/singleUser", { userid: _this.currentuserid }).subscribe(function (response) {
                    _this.currentUser = response['user']; //update the current user after add friends
                });
            });
        });
    };
    Search.prototype.onSubmit = function () {
        var _this = this;
        this.pagesize = 2;
        this.pageIndex = 0;
        this.searchValue = this.form.value.search;
        //console.log(this.form.value.search);
        var searchValue = this.form.value.search;
        this.http.post("https://peaceful-mountain-59628.herokuapp.com/singleUser", { userid: this.currentuserid }).subscribe(function (response) {
            _this.currentUser = response['user']; //update the current user after add friends
            _this.searchService.search(searchValue); //search
        });
    };
    Search.prototype.ngOnDestroy = function () {
        this.usersSubscription.unsubscribe();
    };
    Search.ctorParameters = function () { return [
        { type: _searchService__WEBPACK_IMPORTED_MODULE_3__["SearchService"] },
        { type: _loginservice__WEBPACK_IMPORTED_MODULE_4__["Loginservice"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
    ]; };
    Search = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'Search',
            template: __webpack_require__(/*! raw-loader!./search.html */ "./node_modules/raw-loader/index.js!./src/app/search/search.html"),
            styles: [__webpack_require__(/*! ./search.css */ "./src/app/search/search.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_searchService__WEBPACK_IMPORTED_MODULE_3__["SearchService"], _loginservice__WEBPACK_IMPORTED_MODULE_4__["Loginservice"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], Search);
    return Search;
}());



/***/ }),

/***/ "./src/app/searchService.ts":
/*!**********************************!*\
  !*** ./src/app/searchService.ts ***!
  \**********************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.usersUpdateListener = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    SearchService.prototype.gerUsersUpdateListener = function () {
        return this.usersUpdateListener;
    };
    SearchService.prototype.search = function (searchValue) {
        var _this = this;
        this.http
            .post("https://peaceful-mountain-59628.herokuapp.com/getUsers", { searchValue: searchValue }).subscribe(function (users) {
            //console.log("users",users);
            //this.users=users;
            //fetching all the user.
            console.log("search service", users);
            _this.usersUpdateListener.next(users);
        }, function (err) {
            console.log(err);
        });
    };
    SearchService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/user/user.css":
/*!*******************************!*\
  !*** ./src/app/user/user.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile{\r\n\tmargin:20px;\r\n\tdisplay: flex;\r\n\r\n}\r\n\r\n.profile .information{\r\n\tmargin:10px;\r\n\r\n}\r\n\r\n.myconnection{\r\n\tcolor:blue;\r\n}\r\n\r\n.loader{\r\n\theight:200px;\r\n\twidth:200px;\r\n\tmargin-top:100px;\r\n\tmargin-left:50%;\r\n}\r\n\r\n.noUser{\r\n\ttext-align: center;\r\n\twidth:50%;\r\n\tmargin:auto;\r\n\tmargin-top:20%;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFdBQVc7Q0FDWCxhQUFhOztBQUVkOztBQUVBO0NBQ0MsV0FBVzs7QUFFWjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFdBQVc7Q0FDWCxjQUFjO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGV7XHJcblx0bWFyZ2luOjIwcHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHJcbn1cclxuXHJcbi5wcm9maWxlIC5pbmZvcm1hdGlvbntcclxuXHRtYXJnaW46MTBweDtcclxuXHJcbn1cclxuXHJcbi5teWNvbm5lY3Rpb257XHJcblx0Y29sb3I6Ymx1ZTtcclxufVxyXG5cclxuLmxvYWRlcntcclxuXHRoZWlnaHQ6MjAwcHg7XHJcblx0d2lkdGg6MjAwcHg7XHJcblx0bWFyZ2luLXRvcDoxMDBweDtcclxuXHRtYXJnaW4tbGVmdDo1MCU7XHJcbn1cclxuXHJcbi5ub1VzZXJ7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHdpZHRoOjUwJTtcclxuXHRtYXJnaW46YXV0bztcclxuXHRtYXJnaW4tdG9wOjIwJTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/user.ts":
/*!******************************!*\
  !*** ./src/app/user/user.ts ***!
  \******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var User = /** @class */ (function () {
    function User(route, http) {
        this.route = route;
        this.http = http;
        this.user = {};
        this.loading = true;
        this.userUnfind = false;
    }
    User.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has("userid")) {
                _this.userid = paramMap.get("userid");
                _this.http
                    .post("https://peaceful-mountain-59628.herokuapp.com/singleUser", { userid: _this.userid }).subscribe(function (user) {
                    _this.user = user.user;
                    console.log(_this.user);
                    setTimeout(function () { _this.loading = false; }, 300);
                }, function (err) {
                    //console.log("err",err); 
                    setTimeout(function () { _this.loading = false; _this.userUnfind = true; }, 300);
                });
            }
        });
    };
    User.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    User = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'User',
            template: __webpack_require__(/*! raw-loader!./user.html */ "./node_modules/raw-loader/index.js!./src/app/user/user.html"),
            styles: [__webpack_require__(/*! ./user.css */ "./src/app/user/user.css")]
        })
        // this should be dynamic instead of static
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], User);
    return User;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\leyal\OneDrive\桌面\MEAN-Stack\caps\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map