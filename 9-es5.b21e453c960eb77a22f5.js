!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+ixp":function(t,n,o){"use strict";o.d(n,"a",function(){return S});var i,a=o("tyNb"),s=o("uU6J"),c=o("fXoL"),u=o("j1en"),l=o("tk/3"),b=((i=function(){function t(r){e(this,t),this.http=r}return r(t,[{key:"getUsers",value:function(e,t){this.token=localStorage.getItem("token");var r=new l.c({Authorization:this.token,"Content-Type":"application/json",CustomHeader:"CustomSomething2"});return this.http.get("https://reqres.in/api/users?page="+e+"&per_page="+t,{headers:r})}},{key:"createUser",value:function(e){this.token=localStorage.getItem("token");var t=new l.c({Authorization:this.token,"Content-Type":"application/json",CustomHeader:"CustomSomething1"});return this.http.post("https://reqres.in/api/users",e,{headers:t})}},{key:"deleteUserForIndex",value:function(e){this.token=localStorage.getItem("token");var t=new l.c({Authorization:this.token,"Content-Type":"application/json",CustomHeader:"CustomSomething3"});return this.http.delete("https://reqres.in/api/users/"+e,{headers:t})}}]),t}()).\u0275fac=function(e){return new(e||i)(c.Pb(l.a))},i.\u0275prov=c.Eb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),d=o("1tVw"),f=o("3Pt+"),m=o("ofXK");function g(e,t){1&e&&(c.Lb(0,"span"),c.ec(1," * Name is required "),c.Kb())}function p(e,t){1&e&&(c.Lb(0,"span"),c.ec(1," * Job is required "),c.Kb())}var v,h=((v=function(){function t(r,n,o){e(this,t),this.router=r,this.createUsersFormsService=n,this.usersService=o}return r(t,[{key:"ngOnInit",value:function(){this.createForm=this.createUsersFormsService.createUsersForm()}},{key:"redirectToListUsers",value:function(){this.router.navigateByUrl("/users/list")}},{key:"onCreate",value:function(){var e=this,t=this.createForm.get("name").value,r=this.createForm.get("job").value;this.usersService.createUser({name:t,job:r}).subscribe(function(t){null!==t.name?(alert("Created user: "+t.name+"\r\n User id: "+t.id+"\r\n Created At: "+t.createdAt),e.redirectToListUsers()):alert("An error ocurred during the user creation, please try again")})}}]),t}()).\u0275fac=function(e){return new(e||v)(c.Ib(a.a),c.Ib(u.a),c.Ib(b))},v.\u0275cmp=c.Cb({type:v,selectors:[["app-create-user"]],decls:20,vars:4,consts:[["rel","stylesheet","href","https://cdn.jsdelivr.net/npm/h8k-design@latest/dist/index.css"],[1,"card","mt-20","ml-20","mr-20"],[1,"card-text"],[1,"layout-row","justify-content-around","align-items-center"],[1,"mt-0","mb-0"],["id","inputs-section",1,"layout-row","align-items-center","justify-content-center"],["id","createForm",3,"formGroup"],["type","text","placeholder","Name","formControlName","name","id","user-create__name",1,"white","large","outlined"],["id","user-create__name-error",2,"color","red"],[4,"ngIf"],[1,"mt-10"],["type","text","required","","placeholder","Job","id","user-create__job","formControlName","job","name","Job",1,"white","large","outlined"],["id","user-create__job-error",2,"color","red"],[1,"layout-row","align-items-center","justify-content-center","card-actions"],["id","user-create__btn-create",1,"secondary","flat",3,"disabled","click"]],template:function(e,t){1&e&&(c.Jb(0,"app-nav-bar"),c.Jb(1,"link",0),c.Lb(2,"div",1),c.Lb(3,"section",2),c.Lb(4,"div",3),c.Lb(5,"h3",4),c.ec(6,"Create User"),c.Kb(),c.Kb(),c.Kb(),c.Lb(7,"section",5),c.Lb(8,"form",6),c.Lb(9,"div"),c.Jb(10,"input",7),c.Lb(11,"div",8),c.dc(12,g,2,0,"span",9),c.Kb(),c.Kb(),c.Lb(13,"div",10),c.Jb(14,"input",11),c.Lb(15,"div",12),c.dc(16,p,2,0,"span",9),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Lb(17,"section",13),c.Lb(18,"button",14),c.Sb("click",function(){return t.onCreate()}),c.ec(19," Create "),c.Kb(),c.Kb(),c.Kb()),2&e&&(c.yb(8),c.Xb("formGroup",t.createForm),c.yb(4),c.Xb("ngIf",null!==t.createForm.controls.name.errors&&t.createForm.controls.name.errors.required&&t.createForm.controls.name.errors&&(t.createForm.controls.name.dirty||t.createForm.controls.name.touched)),c.yb(4),c.Xb("ngIf",null!==t.createForm.controls.job.errors&&t.createForm.controls.job.errors.required&&t.createForm.controls.job.errors&&(t.createForm.controls.job.dirty||t.createForm.controls.job.touched)),c.yb(2),c.Xb("disabled",t.createForm.invalid))},directives:[d.a,f.m,f.h,f.d,f.a,f.g,f.c,m.i,f.k],styles:[""]}),v),y=o("iJQI"),L=o("2LQx");function k(e,t){if(1&e){var r=c.Mb();c.Lb(0,"button",12),c.Sb("click",function(){c.ac(r);var e=t.index;return c.Ub(2).GoPage(e+1)}),c.ec(1),c.Kb()}if(2&e){var n=t.index;c.yb(1),c.gc(" ",n+1," ")}}function w(e,t){if(1&e){var r=c.Mb();c.Lb(0,"div"),c.Lb(1,"button",12),c.Sb("click",function(){return c.ac(r),c.Ub().GoPage(1)}),c.ec(2," << "),c.Kb(),c.dc(3,k,2,1,"button",13),c.Lb(4,"button",12),c.Sb("click",function(){c.ac(r);var e=c.Ub();return e.GoPage(e.totalPages)}),c.ec(5," >> "),c.Kb(),c.Kb()}if(2&e){var n=c.Ub();c.yb(3),c.Xb("ngForOf",n.totalPagesArray)}}function F(e,t){if(1&e){var r=c.Mb();c.Lb(0,"tr",14),c.Lb(1,"td",14),c.ec(2),c.Kb(),c.Lb(3,"td",14),c.ec(4),c.Kb(),c.Lb(5,"td",14),c.ec(6),c.Kb(),c.Lb(7,"td",14),c.Jb(8,"img",15),c.Kb(),c.Lb(9,"td"),c.Lb(10,"button",16),c.Sb("click",function(){c.ac(r);var e=t.$implicit,n=c.Ub();return n.onDelete(e.first_name,e.last_name,n.i)}),c.ec(11,"Delete"),c.Kb(),c.Kb(),c.Kb()}if(2&e){var n=t.$implicit,o=c.Ub();c.Yb("id","user-list__table-item"+o.i),c.yb(1),c.Yb("id","user-list__table-item-"+o.i+"-first_name"),c.yb(1),c.gc("",n.first_name," "),c.yb(1),c.Yb("id","user-list__table-item-"+o.i+"-last_name"),c.yb(1),c.fc(n.last_name),c.yb(1),c.Yb("id","user-list__table-item-"+o.i+"-email"),c.yb(1),c.fc(n.email),c.yb(1),c.Yb("id","user-list__table-item-"+o.i+"-avatar"),c.yb(1),c.Yb("src",n.avatar,c.bc),c.yb(2),c.Yb("id","user-list__table-item-"+o.i+"-btn-delete")}}function K(e,t){if(1&e){var r=c.Mb();c.Lb(0,"button",12),c.Sb("click",function(){c.ac(r);var e=t.index;return c.Ub(2).GoPage(e+1)}),c.ec(1),c.Kb()}if(2&e){var n=t.index;c.yb(1),c.gc(" ",n+1," ")}}function _(e,t){if(1&e){var r=c.Mb();c.Lb(0,"div",1),c.Lb(1,"button",12),c.Sb("click",function(){return c.ac(r),c.Ub().GoPage(1)}),c.ec(2," << "),c.Kb(),c.dc(3,K,2,1,"button",13),c.Lb(4,"button",12),c.Sb("click",function(){c.ac(r);var e=c.Ub();return e.GoPage(e.totalPages)}),c.ec(5," >> "),c.Kb(),c.Kb()}if(2&e){var n=c.Ub();c.yb(3),c.Xb("ngForOf",n.totalPagesArray)}}var P,I,U=((P=function(){function t(r,n){e(this,t),this.usersService=r,this.listUsersFormsService=n,this.userList=[],this.user_list_filter="",this.totalPagesArray=[],this.totalPages=0,this.perPage=3}return r(t,[{key:"ngOnInit",value:function(){this.getUsers(),this.pagerForm=this.listUsersFormsService.itemPerPageForm()}},{key:"getUsers",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.perPage;this.usersService.getUsers(t,r).subscribe(function(t){e.userList=t.data,e.totalPages=t.total_pages,e.totalPagesArray=new Array(e.totalPages)})}},{key:"onDelete",value:function(e,t,r){this.usersService.deleteUserForIndex(r).subscribe(function(){alert("Deleted user: "+e+" "+t)})}},{key:"GoPage",value:function(e){this.getUsers(e,this.perPage)}},{key:"setItemsPerPage",value:function(){this.perPage=this.pagerForm.get("perPage").value,this.getUsers(1,this.perPage)}},{key:"numberOnly",value:function(e){var t=e.which?e.which:e.keyCode;return t>31&&(t<48||t>57)}}]),t}()).\u0275fac=function(e){return new(e||P)(c.Ib(b),c.Ib(y.a))},P.\u0275cmp=c.Cb({type:P,selectors:[["list-users"]],decls:28,vars:8,consts:[[1,"pl-10","pr-10"],[1,"layout-row","align-items-center","justify-content-center","mt-20"],["type","text","placeholder","Search user by name","name","user_list_filter","id","user-list__filter",1,"white","large","outlined","mr-30",3,"ngModel","ngModelChange","keypress"],[4,"ngIf"],[1,"card","w-auto","mx-auto","pb-30","mt-20"],["id","user-list__table"],[3,"id",4,"ngFor","ngForOf"],["class","layout-row align-items-center justify-content-center mt-20",4,"ngIf"],["id","pagerForm",1,"layout-row","align-items-center","justify-content-center","mt-20",3,"formGroup"],["for","items per page"],["type","text","placeholder","#","name","perPage","id","perPage","formControlName","perPage",1,"white","large","outlined","w-3","ml-10"],[3,"click"],[1,"pagerButton",3,"click"],["class","pagerButton",3,"click",4,"ngFor","ngForOf"],[3,"id"],["alt","",3,"src"],[1,"danger",3,"id","click"]],template:function(e,t){1&e&&(c.Jb(0,"app-nav-bar"),c.Lb(1,"div",0),c.Lb(2,"div",1),c.Lb(3,"input",2),c.Sb("ngModelChange",function(e){return t.user_list_filter=e})("keypress",function(e){return t.numberOnly(e)}),c.Kb(),c.dc(4,w,6,1,"div",3),c.Kb(),c.Lb(5,"div",4),c.Lb(6,"table",5),c.Lb(7,"thead"),c.Lb(8,"tr"),c.Lb(9,"th"),c.ec(10,"Name"),c.Kb(),c.Lb(11,"th"),c.ec(12,"Last name"),c.Kb(),c.Lb(13,"th"),c.ec(14,"Email"),c.Kb(),c.Lb(15,"th"),c.ec(16,"Avatar"),c.Kb(),c.Jb(17,"th"),c.Kb(),c.Kb(),c.Lb(18,"tbody"),c.dc(19,F,12,10,"tr",6),c.Vb(20,"filterUserByName"),c.Kb(),c.Kb(),c.Kb(),c.dc(21,_,6,1,"div",7),c.Lb(22,"form",8),c.Lb(23,"label",9),c.ec(24,"Items per page "),c.Kb(),c.Jb(25,"input",10),c.Lb(26,"button",11),c.Sb("click",function(){return t.setItemsPerPage()}),c.ec(27," GO"),c.Kb(),c.Kb(),c.Kb()),2&e&&(c.yb(3),c.Xb("ngModel",t.user_list_filter),c.yb(1),c.Xb("ngIf",t.totalPages>1),c.yb(15),c.Xb("ngForOf",c.Wb(20,5,t.userList,t.user_list_filter)),c.yb(2),c.Xb("ngIf",t.totalPages>1),c.yb(1),c.Xb("formGroup",t.pagerForm))},directives:[d.a,f.a,f.g,f.i,m.i,m.h,f.m,f.h,f.d,f.c],pipes:[L.a],styles:[".pagerButton[_ngcontent-%COMP%]{background-color:#20b2aa;color:#000;margin-left:0;margin-right:0}"]}),P),C=[{path:"",canActivate:[s.a],component:U},{path:"list",canActivate:[s.a],component:U},{path:"create",canActivate:[s.a],component:h},{path:"**",canActivate:[s.a],pathMatch:"**",redirectTo:"/users/list"}],S=((I=function t(){e(this,t)}).\u0275fac=function(e){return new(e||I)},I.\u0275mod=c.Gb({type:I}),I.\u0275inj=c.Fb({imports:[[a.b.forChild(C)],a.b]}),I)},"1tVw":function(t,n,o){"use strict";o.d(n,"a",function(){return s});var i=o("fXoL"),a=o("tyNb"),s=function(){var t=function(){function t(r){e(this,t),this.router=r}return r(t,[{key:"ngOnInit",value:function(){}},{key:"logout",value:function(){this.router.navigateByUrl("/login"),localStorage.removeItem("token")}},{key:"onCreate",value:function(){this.router.navigate(["create"])}},{key:"onList",value:function(){this.router.navigateByUrl("/list")}}]),t}();return t.\u0275fac=function(e){return new(e||t)(i.Ib(a.a))},t.\u0275cmp=i.Cb({type:t,selectors:[["app-nav-bar"]],decls:10,vars:0,consts:[[1,"layout-row","justify-content-center","align-items-center","mt-30"],[1,"card","w-25"],["id","nav-bar__btn-create-user",1,"card-text","text-center",3,"click"],["id","nav-bar__btn-list-user",1,"card-text","text-center",3,"click"],["id","nav-bar__btn-logout",1,"card-text","text-center",3,"click"]],template:function(e,t){1&e&&(i.Lb(0,"div",0),i.Lb(1,"div",1),i.Lb(2,"div",2),i.Sb("click",function(){return t.onCreate()}),i.ec(3,"Create user"),i.Kb(),i.Kb(),i.Lb(4,"div",1),i.Lb(5,"div",3),i.Sb("click",function(){return t.onList()}),i.ec(6,"List user"),i.Kb(),i.Kb(),i.Lb(7,"div",1),i.Lb(8,"div",4),i.Sb("click",function(){return t.logout()}),i.ec(9,"LogOut"),i.Kb(),i.Kb(),i.Kb())},styles:["#nav-bar__btn-create-user[_ngcontent-%COMP%]:hover{background-color:#7fffd4}#nav-bar__btn-list-user[_ngcontent-%COMP%]:hover{background-color:#0ff}#nav-bar__btn-logout[_ngcontent-%COMP%]:hover{background-color:#f08080}"]}),t}()},"2LQx":function(t,n,o){"use strict";o.d(n,"a",function(){return a});var i=o("fXoL"),a=function(){var t=function(){function t(){e(this,t)}return r(t,[{key:"transform",value:function(e,t){var r=this;return t?e.filter(function(e){return r.filterBy(e,t)}):e}},{key:"filterBy",value:function(e,t){var r=this;return Object.keys(e).reduce(function(t,n){return r.reduceKeys(t,n,e)},"").toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},{key:"reduceKeys",value:function(e,t,r){return this.isProp(t)&&(e="".concat(e,"$").concat(r[t])),e}},{key:"isProp",value:function(e){return e.includes("last_name")||e.includes("first_name")}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=i.Hb({name:"filterUserByName",type:t,pure:!0}),t}()},DT2Y:function(t,n,o){"use strict";o.r(n),o.d(n,"LoginModule",function(){return P});var i,a,s=o("ofXK"),c=o("3Pt+"),u=o("tyNb"),l=function t(){e(this,t)},b=o("fXoL"),d=((i=function(){function t(r){e(this,t),this.formBuilder=r}return r(t,[{key:"getLoginForm",value:function(){return this.formBuilder.group({email:[{value:void 0,disabled:!1},[c.l.required,c.l.nullValidator,this.emailFormat]],password:[{value:void 0,disabled:!1},[c.l.required,c.l.nullValidator,c.l.minLength(8)]]})}},{key:"emailFormat",value:function(e){return null==e.value||""===e.value?null:(/[^a-zA-Z0-9@._-]/.test(e.value)&&e.setValue(e.value.toString().replace(/[^a-zA-Z0-9@._-]*/g,"")),/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(e.value)?void 0:{requiredEmailFormat:!0})}}]),t}()).\u0275fac=function(e){return new(e||i)(b.Pb(c.b))},i.\u0275prov=b.Eb({token:i,factory:i.\u0275fac}),i),f=o("tk/3"),m=((a=function(){function t(r){e(this,t),this.http=r}return r(t,[{key:"login",value:function(e){return this.http.post("https://reqres.in/api/login",e)}}]),t}()).\u0275fac=function(e){return new(e||a)(b.Pb(f.a))},a.\u0275prov=b.Eb({token:a,factory:a.\u0275fac,providedIn:"root"}),a);function g(e,t){1&e&&(b.Lb(0,"span"),b.ec(1," Must be a valid email format "),b.Kb())}function p(e,t){1&e&&(b.Lb(0,"span"),b.ec(1," * Email is required "),b.Kb())}function v(e,t){1&e&&(b.Lb(0,"span"),b.ec(1," * Password is required "),b.Kb())}function h(e,t){if(1&e&&(b.Lb(0,"span"),b.ec(1),b.Kb()),2&e){var r=b.Ub();b.yb(1),b.gc(" * The minimun of characters are ",r.loginForm.controls.password.errors.minlength.requiredLength," ")}}function y(e,t){if(1&e&&(b.Lb(0,"span"),b.ec(1),b.Kb()),2&e){var r=b.Ub();b.yb(1),b.gc(" current number of characters: ",r.loginForm.controls.password.errors.minlength.actualLength," ")}}function L(e,t){if(1&e&&(b.Lb(0,"span",16),b.ec(1),b.Kb()),2&e){var r=b.Ub();b.yb(1),b.gc(" ",r.loginErrorMessage," ")}}var k,w,F,K=[{path:"",component:(k=function(){function t(r,n,o){e(this,t),this.router=r,this.loginFormsService=n,this.loginService=o,this.loginError=!1}return r(t,[{key:"ngOnInit",value:function(){this.loginForm=this.loginFormsService.getLoginForm()}},{key:"redirectUsers",value:function(){this.router.navigateByUrl("/users/list")}},{key:"LogIn",value:function(){var e=this;if(this.loginError=!1,this.loginForm.valid){var t=new l;t.email=this.loginForm.get("email").value,t.password=this.loginForm.get("password").value,this.loginService.login(t).subscribe(function(t){localStorage.setItem("token",t.token),e.redirectUsers()},function(t){e.loginError=!0,e.loginErrorMessage=t.error.error})}}}]),t}(),k.\u0275fac=function(e){return new(e||k)(b.Ib(u.a),b.Ib(d),b.Ib(m))},k.\u0275cmp=b.Cb({type:k,selectors:[["app-login"]],decls:25,vars:7,consts:[["rel","stylesheet","href","https://cdn.jsdelivr.net/npm/h8k-design@latest/dist/index.css"],[1,"card","mt-20","ml-20","mr-20"],[1,"card-text"],[1,"layout-row","justify-content-around","align-items-center"],[1,"mt-0","mb-0"],["id","inputs-section",1,"layout-row","align-items-center","justify-content-center"],["id","loginform",3,"formGroup"],["type","text","placeholder","Email","formControlName","email","id","login__email",1,"white","large","outlined"],["id","login__email-error",2,"color","red"],[4,"ngIf"],[1,"mt-10"],["type","password","required","","placeholder","Password","id","login__password","formControlName","password","name","password","minlength","8",1,"white","large","outlined"],["id","login__password-error",2,"color","red"],["style","color: red; font-weight: bold;",4,"ngIf"],[1,"layout-row","align-items-center","justify-content-center","card-actions"],["id","login__btn",1,"secondary","flat",3,"click"],[2,"color","red","font-weight","bold"]],template:function(e,t){1&e&&(b.Jb(0,"link",0),b.Lb(1,"div",1),b.Lb(2,"section",2),b.Lb(3,"div",3),b.Lb(4,"h3",4),b.ec(5,"Login"),b.Kb(),b.Kb(),b.Kb(),b.Lb(6,"section",5),b.Lb(7,"form",6),b.Lb(8,"div"),b.Jb(9,"input",7),b.Lb(10,"div",8),b.dc(11,g,2,0,"span",9),b.dc(12,p,2,0,"span",9),b.Kb(),b.Kb(),b.Lb(13,"div",10),b.Jb(14,"input",11),b.Lb(15,"div",12),b.dc(16,v,2,0,"span",9),b.dc(17,h,2,1,"span",9),b.Jb(18,"br"),b.dc(19,y,2,1,"span",9),b.Kb(),b.Kb(),b.Lb(20,"div"),b.dc(21,L,2,1,"span",13),b.Kb(),b.Kb(),b.Kb(),b.Lb(22,"section",14),b.Lb(23,"button",15),b.Sb("click",function(){return t.LogIn()}),b.ec(24," LogIn "),b.Kb(),b.Kb(),b.Kb()),2&e&&(b.yb(7),b.Xb("formGroup",t.loginForm),b.yb(4),b.Xb("ngIf",null!==t.loginForm.controls.email.errors&&t.loginForm.controls.email.errors.requiredEmailFormat),b.yb(1),b.Xb("ngIf",null!==t.loginForm.controls.email.errors&&t.loginForm.controls.email.errors.required&&t.loginForm.controls.email.errors&&(t.loginForm.controls.email.dirty||t.loginForm.controls.email.touched)),b.yb(4),b.Xb("ngIf",null!==t.loginForm.controls.password.errors&&t.loginForm.controls.password.errors.required&&t.loginForm.controls.password.errors&&(t.loginForm.controls.password.dirty||t.loginForm.controls.password.touched)),b.yb(1),b.Xb("ngIf",null!==t.loginForm.controls.password.errors&&t.loginForm.controls.password.errors.minlength&&t.loginForm.controls.password.errors&&(t.loginForm.controls.password.dirty||t.loginForm.controls.password.touched)),b.yb(2),b.Xb("ngIf",null!==t.loginForm.controls.password.errors&&t.loginForm.controls.password.errors.minlength&&t.loginForm.controls.password.errors&&(t.loginForm.controls.password.dirty||t.loginForm.controls.password.touched)),b.yb(2),b.Xb("ngIf",t.loginError))},directives:[c.m,c.h,c.d,c.a,c.g,c.c,s.i,c.k,c.f],styles:[""]}),k)}],_=((F=function t(){e(this,t)}).\u0275fac=function(e){return new(e||F)},F.\u0275mod=b.Gb({type:F}),F.\u0275inj=b.Fb({imports:[[u.b.forChild(K)],u.b]}),F),P=((w=function t(){e(this,t)}).\u0275fac=function(e){return new(e||w)},w.\u0275mod=b.Gb({type:w}),w.\u0275inj=b.Fb({providers:[m,d,c.b],imports:[[_,c.j,s.b]]}),w)},IErx:function(t,r,n){"use strict";n.r(r),n.d(r,"UsersModule",function(){return d});var o=n("ofXK"),i=n("3Pt+"),a=n("2LQx"),s=n("PCNd"),c=n("j1en"),u=n("iJQI"),l=n("+ixp"),b=n("fXoL"),d=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=b.Gb({type:t}),t.\u0275inj=b.Fb({providers:[a.a,c.a,u.a],imports:[[l.a,o.b,s.a,i.e,i.j]]}),t}()},Y0bC:function(t,n,o){"use strict";o.r(n),o.d(n,"FeatureModule",function(){return y});var i,a,s,c=o("ofXK"),u=o("DT2Y"),l=o("tyNb"),b=o("fXoL"),d=o("1tVw"),f=[{path:"users",component:(i=function(){function t(r){e(this,t),this.router=r}return r(t,[{key:"ngOnInit",value:function(){var e=localStorage.getItem("token");this.router.navigateByUrl(null==e||""===e?"/login":"/list")}}]),t}(),i.\u0275fac=function(e){return new(e||i)(b.Ib(l.a))},i.\u0275cmp=b.Cb({type:i,selectors:[["app-home-user"]],decls:2,vars:0,template:function(e,t){1&e&&(b.Jb(0,"app-nav-bar"),b.ec(1,"\nHome\n"))},directives:[d.a],styles:[""]}),i),canActivate:[o("uU6J").a],loadChildren:function(){return Promise.resolve().then(o.bind(null,"IErx")).then(function(e){return e.UsersModule})}},{path:"login",loadChildren:function(){return Promise.resolve().then(o.bind(null,"DT2Y")).then(function(e){return e.LoginModule})}}],m=((a=function t(){e(this,t)}).\u0275fac=function(e){return new(e||a)},a.\u0275mod=b.Gb({type:a}),a.\u0275inj=b.Fb({imports:[[l.b.forChild(f)],l.b]}),a),g=o("3Pt+"),p=o("+ixp"),v=o("IErx"),h=o("PCNd"),y=((s=function t(){e(this,t)}).\u0275fac=function(e){return new(e||s)},s.\u0275mod=b.Gb({type:s}),s.\u0275inj=b.Fb({imports:[[m,p.a,u.LoginModule,g.j,c.b,v.UsersModule,h.a]]}),s)},iJQI:function(t,n,o){"use strict";o.d(n,"a",function(){return s});var i=o("fXoL"),a=o("3Pt+"),s=function(){var t=function(){function t(r){e(this,t),this.formBuilder=r}return r(t,[{key:"itemPerPageForm",value:function(){return this.formBuilder.group({perPage:[{value:void 0,disabled:!1},this.numeric]})}},{key:"numeric",value:function(e){return null==e.value||""===e.value?null:/[^0-9]/.test(e.value)?(e.setValue(e.value.toString().replace(/[^0-9]*/g,"")),null):void 0}}]),t}();return t.\u0275fac=function(e){return new(e||t)(i.Pb(a.b))},t.\u0275prov=i.Eb({token:t,factory:t.\u0275fac}),t}()},j1en:function(t,n,o){"use strict";o.d(n,"a",function(){return s});var i=o("3Pt+"),a=o("fXoL"),s=function(){var t=function(){function t(r){e(this,t),this.formBuilder=r}return r(t,[{key:"createUsersForm",value:function(){return this.formBuilder.group({name:[{value:void 0,disabled:!1},[i.l.required,i.l.nullValidator,this.AlphaWithOutWhiteSpaceName]],job:[{value:void 0,disabled:!1},[i.l.required,i.l.nullValidator]]})}},{key:"AlphaWithOutWhiteSpaceName",value:function(e){if(/[^a-zA-Z\xf1\xd1]/.test(e.value))return e.setValue(e.value.replace(/[^a-zA-Z\xf1\xd1]*/g,"")),null}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Pb(i.b))},t.\u0275prov=a.Eb({token:t,factory:t.\u0275fac}),t}()},uU6J:function(t,n,o){"use strict";o.d(n,"a",function(){return s});var i=o("fXoL"),a=o("tyNb"),s=function(){var t=function(){function t(r){e(this,t),this.router=r}return r(t,[{key:"canActivate",value:function(e,t){var r=localStorage.getItem("token");if(null!=r&&""!==r)return!0;this.router.navigateByUrl("/login")}}]),t}();return t.\u0275fac=function(e){return new(e||t)(i.Pb(a.a))},t.\u0275prov=i.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();