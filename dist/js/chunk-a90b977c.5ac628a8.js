(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a90b977c"],{"0ca1":function(e,a,s){e.exports=s.p+"img/1.58dbca53.png"},"79b0":function(e,a,s){},a5e2:function(e,a,s){"use strict";s("79b0")},f4a5:function(e,a,s){"use strict";s.r(a);var t=s("7a23"),r=s("0ca1"),c=s.n(r),n={class:"section"},o={class:"container"},i={class:"box"},l={class:"profile-container"},d=Object(t["h"])("div",{class:"image-container"},[Object(t["h"])("figure",null,[Object(t["h"])("img",{class:"profile-image",src:c.a,alt:"Profile picture"})])],-1),p={class:"profile-info-container"},h=Object(t["h"])("div",{class:"profile-info-element"},"Username:",-1),u={class:"profile-info-element"},b=Object(t["h"])("div",{class:"profile-info-element"},"Full name:",-1),f={class:"profile-info-element"},g=Object(t["h"])("div",{class:"profile-info-element"},"Email:",-1),j={class:"profile-info-element"},O=Object(t["h"])("div",{class:"profile-info-element"},"Change Password:",-1),m={class:"profile-info-element"},w={class:"field"},v={class:"control"},P={key:0,class:"help is-danger"},D={key:1,class:"help is-danger"},C={key:2,class:"help is-danger"},k={key:3,class:"help is-danger"},U=Object(t["h"])("div",{class:"profile-info-element"},"Repeat Password:",-1),N={class:"profile-info-element"},$={class:"field"},y={class:"control"},q={key:0,class:"help is-danger"},I={key:1,class:"help is-danger"},L={class:"field is-grouped is-grouped-right"};function x(e,a,s,r,c,x){return Object(t["v"])(),Object(t["d"])("div",n,[Object(t["h"])("div",o,[Object(t["h"])("div",i,[Object(t["h"])("div",l,[d,Object(t["h"])("div",p,[h,Object(t["h"])("div",u,Object(t["E"])(x.getCurrentUser.handle),1),b,Object(t["h"])("div",f,Object(t["E"])(x.getCurrentUserFullName||""),1),g,Object(t["h"])("div",j,Object(t["E"])(x.getCurrentUser.email||""),1),O,Object(t["h"])("div",m,[Object(t["h"])("div",w,[Object(t["h"])("div",v,[Object(t["L"])(Object(t["h"])("input",{class:"input",type:"password",placeholder:"Change password","onUpdate:modelValue":a[1]||(a[1]=function(e){return c.changePasswordData.password=e})},null,512),[[t["I"],c.changePasswordData.password]]),r.v$.changePasswordData.password.required?Object(t["e"])("",!0):(Object(t["v"])(),Object(t["d"])("p",P," Required ")),r.v$.changePasswordData.password.minLength?Object(t["e"])("",!0):(Object(t["v"])(),Object(t["d"])("p",D," Needs to be 8 or more charachters ")),r.v$.changePasswordData.password.maxLength?Object(t["e"])("",!0):(Object(t["v"])(),Object(t["d"])("p",C," Cant be more than 64 chars ")),r.v$.changePasswordData.password.alphaNum?Object(t["e"])("",!0):(Object(t["v"])(),Object(t["d"])("p",k," Needs to be alphanumeric "))])])]),U,Object(t["h"])("div",N,[Object(t["h"])("div",$,[Object(t["h"])("div",y,[Object(t["L"])(Object(t["h"])("input",{class:"input",type:"password",placeholder:"Repeat password","onUpdate:modelValue":a[2]||(a[2]=function(e){return c.changePasswordData.repeatPassword=e})},null,512),[[t["I"],c.changePasswordData.repeatPassword]]),r.v$.changePasswordData.repeatPassword.required?Object(t["e"])("",!0):(Object(t["v"])(),Object(t["d"])("p",q," Required ")),r.v$.changePasswordData.repeatPassword.sameAs?Object(t["e"])("",!0):(Object(t["v"])(),Object(t["d"])("p",I," Not same as password "))])]),Object(t["h"])("div",L,[Object(t["h"])("button",{class:"button is-danger",onClick:a[3]||(a[3]=function(e){return x.changePasswordBtnClicked()})}," Change the password ")])])])])])])])}var E=s("25a0"),R=s("f246"),F=s("e3e1"),A={name:"v$ettings",computed:{getCurrentUser:function(){return console.log(R["d"].user),R["d"].user},getCurrentUserFullName:function(){return this.getCurrentUser.firstName+" "+this.getCurrentUser.lastName}},setup:function(){return{v$:Object(E["a"])()}},mounted:function(){R["d"].user||this.$router.push("/Login")},data:function(){return{changePasswordData:{password:"",repeatPassword:""},changeProfileImageData:{file:null,uploadInProgress:!1,uploadPercent:0}}},validations:{changePasswordData:{password:{required:F["e"],minLength:Object(F["c"])(8),alphaNum:F["a"],maxLength:Object(F["b"])(64)},repeatPassword:{required:F["e"],sameAs:Object(F["f"])("password",void 0)}},changeProfileImageData:{file:{required:F["e"]}}},methods:{changePasswordBtnClicked:function(){},pictureSelected:function(e){this.changeProfileImageData.file=e.target.files[0]},setUploadProgress:function(e){this.changeProfileImageData.uploadPercent=Math.round(e.loaded/e.total*100)}}};s("a5e2");A.render=x;a["default"]=A}}]);
//# sourceMappingURL=chunk-a90b977c.5ac628a8.js.map